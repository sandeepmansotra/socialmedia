import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaField = ({ name, placeholder, value, error, info, onChange }) => {
  return (
    <div className="form-group">
      <textarea
        rows="5"
        className={classnames("form-control", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaField;
