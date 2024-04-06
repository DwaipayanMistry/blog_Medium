import { ChangeEvent } from "react";

const InputBox = ({label: label, placeholder, onChange, type}:inputBox) => {
    return (

        <div>
            <label  className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">{label}</label>
            <input type={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-2.5 " 
             placeholder={placeholder}
             onChange={onChange} required />
        </div>

    )
}
export default InputBox
interface inputBox
    {
        label:string;
        placeholder:string;
        onChange:(e: ChangeEvent<HTMLInputElement>)=>void;
        type?: string
    }
