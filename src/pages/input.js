 import React from "react";
 import "./input.css"

export default function Input({ value, type, placeholder, onChange,style }) {
  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        className='input'
        placeholder={placeholder}
        type={type}
        style={style}
        placeholderTextColor={"#666"}

      />
    </>
  );
}
