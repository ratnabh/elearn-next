import { ISignupData } from "@/app/auth/signup/page";
import { useFormikContext } from "formik";
import React from "react";
import { Inputwrapper } from "./Inputwrapper";

interface TextInputProps {
  text: string;
  name: string;
}

export const TextInput = (props: TextInputProps) => {
  const context = useFormikContext<ISignupData>(); // Corrected here
  const { text,name } = props;
  console.log(context,'context')
  return (
    <Inputwrapper {...props} {...context}>
      <div className="mb-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {text}
        </label>
        {/* <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={text}
          required
          value={context.values.name}
          onChange={context.handleChange}
          onBlur={context.handleBlur}
        /> */}
      </div>
    </Inputwrapper>
  );
};
