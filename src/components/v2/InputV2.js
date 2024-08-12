import React, { useEffect, useState } from "react";

const InputV2 = ({
  colorModeColors,
  id,
  label,
  placeholder,
  onChange,
  errorFields,
  acceptReplacement,
}) => {
  const RED_HEX = "#F44336";
  const [backgroundColor, setBackgroundColor] = useState(
    errorFields[id].error ? "#F44336" : colorModeColors.buttonBackGround
  );
  const [inputColor, setInputColor] = useState(
    errorFields[id].error ? "white" : colorModeColors.inputText
  );
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className="text-base font-normal text-tableTextColor"
        >
          {label}
        </label>
        {errorFields[id].error && (
          <div className="flex gap-3 items-center mb-1">
            <div
              className={`${id} hover:cursor-pointer underline`}
              onClick={acceptReplacement}
              style={{ color: colorModeColors.inputText }}
            >
              Accept
            </div>
            <div className="bg-creme pt-1 pb-1 pl-2 pr-2 rounded-lg font-semibold text-black">
              {errorFields[id].replacement}
            </div>
          </div>
        )}
      </div>

      <input
        type="text"
        id={id}
        className="block p-3 pl-6 text-sm font-inter font-semibold text-gray-900 border-2 border-gray rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-creme"
        style={{
          borderColor: colorModeColors.buttonBorder,
          backgroundColor: backgroundColor,
          color: inputColor,
        }}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputV2;
