import React, { useState, useRef } from "react";
import "./App.css";
import "./airfryerform.css";

function AirFryerForm() {
  type FormType = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    cost: string;
    pin: string[];
  };
  type ErrorsType = {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    cost?: string;
    pin?: string;
  };
  const [form, setForm] = useState<FormType>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    cost: "",
    pin: ["", "", "", ""],
  });
  const [errors, setErrors] = useState<ErrorsType>({});

  // Validation helpers
  const validateEmail = (email: string) => /^[^@]+@[^@]+\.[^@]+$/.test(email);
  const validatePhone = (phone: string) => /^\d{10}$/.test(phone.trim());
  const validateCost = (cost: string) =>
    /^\d{1,6}(\.\d{2})?$/.test(cost.trim());
  const validatePin = (pinArr: string[]) =>
    pinArr.every((p) => /^\d{4}$/.test(p));

  const pinRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx?: number
  ) => {
    const { name, value } = e.target;
    if (name === "pin" && typeof idx === "number") {
      let val = value.replace(/[^\d]/g, "").slice(0, 4);
      const newPin = [...form.pin];
      newPin[idx] = val;
      setForm((f) => ({ ...f, pin: newPin }));

      // Move to next box if 4 digits entered
      if (val.length === 4 && idx < 3) {
        pinRefs[idx + 1].current?.focus();
      }
      // Move to previous box if deleting and box is empty
      if (val.length === 0 && idx > 0) {
        pinRefs[idx - 1].current?.focus();
      }
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: ErrorsType = {};
    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim()) newErrors.lastName = "Required";
    if (!validatePhone(form.phone)) newErrors.phone = "Enter valid US phone";
    if (!validateEmail(form.email)) newErrors.email = "Enter valid email";
    if (!validateCost(form.cost)) newErrors.cost = "Enter valid dollar amount";
    if (!validatePin(form.pin)) newErrors.pin = "Enter all 16 digits";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const pinStr = form.pin.join("-");
      console.log({
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        email: form.email,
        cost: form.cost,
        pin: pinStr,
      });
      alert("Form submitted! Check console for output.");
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        cost: "",
        pin: ["", "", "", ""],
      });
    }
  };

  return (
    <div className="airfryer-container">
      <div className="airfryer-info-panel">
        <h2 className="airfryer-title">Air Fryer Interest Form</h2>
        <div className="airfryer-divider" />
        <p className="airfryer-desc">
          Are you interested in our new Air Fryer? Enter your information and a
          representative will get in touch in how you can purchase Spidr’s new
          air fryer and where to ship your newest addition to your culinary
          needs.
        </p>
        <button className="airfryer-details-btn">Details</button>
      </div>
      <form className="airfryer-form" onSubmit={handleSubmit}>
        <div className="airfryer-form-group">
          <label>
            First Name <span className="airfryer-asterisk">*</span>
          </label>
          <input
            name="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={handleChange}
            className="airfryer-input"
            placeholder="John"
          />
          {errors.firstName && (
            <p className="airfryer-error">{errors.firstName}</p>
          )}
        </div>
        <div className="airfryer-form-group">
          <label>
            Last Name <span className="airfryer-asterisk">*</span>
          </label>
          <input
            name="lastName"
            type="text"
            required
            value={form.lastName}
            onChange={handleChange}
            className="airfryer-input"
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="airfryer-error">{errors.lastName}</p>
          )}
        </div>
        <div className="airfryer-form-group">
          <label>
            Phone Number <span className="airfryer-asterisk">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="airfryer-input"
            placeholder="(555) 555-5555 or 555-555-5555"
            pattern="^\d{10}$"
            maxLength={10}
          />
          {errors.phone && <p className="airfryer-error">{errors.phone}</p>}
        </div>
        <div className="airfryer-form-group">
          <label>
            Email Address <span className="airfryer-asterisk">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="airfryer-input"
            placeholder="you@email.com"
          />
          {errors.email && <p className="airfryer-error">{errors.email}</p>}
        </div>
        <div className="airfryer-form-group">
          <label>
            Guess the air fryer’s cost ($ amount){" "}
            <span className="airfryer-asterisk">*</span>
          </label>
          <input
            name="cost"
            type="text"
            required
            value={form.cost}
            onChange={handleChange}
            className="airfryer-input"
            placeholder="199.99"
            pattern="^\d{1,6}(\.\d{2})?$"
          />
          {errors.cost && <p className="airfryer-error">{errors.cost}</p>}
        </div>
        <div className="airfryer-form-group">
          <label>
            Very Secret 16-digit pin{" "}
            <span className="airfryer-asterisk">*</span>
          </label>
          <div className="airfryer-pin-row">
            {form.pin.map((val, idx) => (
              <React.Fragment key={idx}>
                <input
                  ref={pinRefs[idx]}
                  name="pin"
                  type="text"
                  inputMode="numeric"
                  required
                  value={val}
                  onChange={(e) => handleChange(e, idx)}
                  className="airfryer-pin-input"
                  placeholder="####"
                  maxLength={4}
                />
                {idx < 3 && <span className="airfryer-pin-dash">-</span>}
              </React.Fragment>
            ))}
          </div>
          {errors.pin && <p className="airfryer-error">{errors.pin}</p>}
        </div>
        <button type="submit" className="airfryer-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AirFryerForm;
