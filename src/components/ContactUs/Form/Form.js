import React from "react";

import { useForm } from "../../../hooks/useForm";

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submit);

  function submit() {
    console.log(values);
  }

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Schreiben Sie uns!</h2>

      <form className="form" id="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          name="organization"
          placeholder="Firma / Organisation"
          onChange={handleChange}
        />
        <span className="form__error">
          {errors.organization && (
            <span className="form__error__message">{errors.organization}</span>
          )}
        </span>

        <div className="form__divider">
          <div className="form__divider__input">
            <input
              className="form__input"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
            />
            <span className="form__error">
              {errors.email && (
                <span className="form__error__message">{errors.email}</span>
              )}
            </span>
          </div>

          <div className="form__divider__input">
            <input
              className="form__input"
              name="phone"
              placeholder="Telefon"
              onChange={handleChange}
            />
            <span className="form__error">
              {errors.phone && (
                <span className="form__error__message">{errors.phone}</span>
              )}
            </span>
          </div>
        </div>

        <textarea
          className="form__input textarea"
          name="messageText"
          placeholder="Was ist Ihr Anliegen?"
          rows="6"
          onChange={handleChange}
          required
        ></textarea>
        <span className="form__error">
          {errors.messageText && (
            <span className="form__error__message">{errors.messageText}</span>
          )}
        </span>

        <input className="form__button" type="submit" value="SENDEN" />
      </form>
    </div>
  );
};

export default Form;
