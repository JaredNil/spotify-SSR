import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	id?: string
	disabled?: boolean
	placeholder?: string
}



const Input = forwardRef<HTMLInputElement, InputProps>(({
	className, type, disabled, ...props
}, ref) => {
	return (
		<input
			type={type}
			disabled={disabled}
			ref={ref}
			className={
				twMerge(
					`
						flex w-full rounded-md text-sm
						border border-transparent
						px-3 py-3 
						file:border-0	file: bg-transparent
						file:text-sm file: font-medium
						disabled:cursor-not-allowed	disabled:opacity-50
						placeholder:text-neutral-400
						bg-neutral-700
						focus:outline-none 
					`,
					className
				)}
			{...props}
		/>
	)
})

Input.displayName = 'Input'

export default Input