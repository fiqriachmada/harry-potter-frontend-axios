import React from "react";
import { Button, Form } from "react-bootstrap";

export const CustomImage = ({ src, width, height, style }) => {
  return (
    <img
      className="shadow-lg mt-5 mb-3"
      src={src || ""}
      style={{
        width: width || 250,
        height: height || 250,
        background: `lightgrey`,
        borderRadius: 5,
        ...style,
      }}
    />
  );
};

export const CustomFormInput = ({ items }) => {
  return (
    <Form.Group className="mb-3">
      {items != null &&
        items.map(
          ({
            label,
            type,
            options,
            value,
            setValue,
            onChange,
            placeholder,
          }) => (
            <>
              <Form.Label className="text-capitalize mt-2 mb-2">
                {label}
              </Form.Label>
              {options ? (
                <Form.Select
                  aria-label="Default select example"
                  value={value}
                  onChange={onChange}
                  className="text-capitalize"
                  placeholder={placeholder}
                >
                  {options.map((option) => (
                    <option value={option.value} className="text-capitalize">
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              ) : (
                <Form.Control
                  type={type}
                  value={value}
                  onChange={onChange}
                  placeholder={placeholder}
                />
              )}
            </>
          )
        )}
    </Form.Group>
  );
};

export const DynamicButtonGroup = ({ buttons }) => {
  return (
    <div className="d-flex justify-content-between mt-4">
      {buttons != null &&
        buttons.map(({ text, variant, color, onClick, className }) => (
          <Button
            key={text}
            variant={variant}
            color={color}
            className={className}
            onClick={onClick}
          >
            {text}
          </Button>
        ))}
    </div>
  );
};
