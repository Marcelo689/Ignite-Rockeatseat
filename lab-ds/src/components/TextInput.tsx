import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{}

export interface TextInputRootProps{
    children: ReactNode;
}
function TextInputRoot(props: TextInputRootProps){
    return (
        <div
            className="flex items-center py-4 h-12 px-3 gap-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300"
        >
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = "TextInput.Root";
export interface TextInputIconProps{
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps){
    return (<Slot className='w-6 h-6 text-gray-400' >
        {props.children}
    </Slot>)
}

TextInputIcon.displayName = "TextInput.Icon";
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props  : TextInputProps){
    return (
        <div className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400">

        <input
            {...props}
        />
        </div>
    )
}

TextInputInput.displayName = "TextInput.Input";
export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon:TextInputIcon,
}