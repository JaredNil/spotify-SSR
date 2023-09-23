import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	id: string
	disabled: boolean
	placeholder: string
}



const Input = forwardRef<HTMLInputElement, InputProps>(({
	className, type, disabled, ...props
}, ref) => {
	return (
		<input
			type={type}
			className={twMerge(`
				flex w-full rounded-md text-sm
				border border-transparent
				bg-neutral-700 px-3 py-3 
				file:border-0	file: bg-transparent
				file:text-sm file: font-medium
				placeholder:text-neutral-400
				disabled:cursor-not-allowed
				disabled:opacity-50
				focus:outline-none
			`,
				className)}

		/>
	)
})


export default Input