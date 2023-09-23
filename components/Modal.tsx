import * as Dialog from '@radix-ui/react-dialog'

import { IoMdClose } from 'react-icons/io'

interface ModalProps {
	isOpen: boolean
	onChange: (open: boolean) => void
	title: string
	descrition: string
	children: React.ReactNode
}


const Modal: React.FC<ModalProps> = ({
	isOpen, title, descrition, children, onChange
}) => {
	return (
		<Dialog.Root
			open={isOpen}
			defaultOpen={isOpen}
			onOpenChange={onChange}
		>
			<Dialog.Portal>
				<Dialog.Overlay
					className='
						bg-neutral-900/90
						backdrop-blur-sm
						fixed
						inset-0

					'
				/>
				<Dialog.Content
					className='
					fixed top-[50%] left-[50%] 
					max-h-full drop-shadow-md h-full w-full
					border border-neutral-700
					p-[25px] rounded-md	bg-neutral-800
					translate-x-[-50%] translate-y-[-50%]

					focus:outline-none
					md:h-auto md:max-h-[85vh]
					md:w-[90vw] md:max-w-[450px]
					'
				>

					<Dialog.Title
						className='text-xl text-center font-bold mb-4'
					>
						{title}
					</Dialog.Title>
					<Dialog.Description
						className='mb-5 text-sm leading-normal text-center'
					>
						{descrition}
					</Dialog.Description>
					<div>
						{children}
					</div>
					<Dialog.Close asChild>
						<button
							className='
								text-neutral-400 hover:text-white
								absolute top-[10px] right-[10px]
								h-[25px] w-[25px] appearance-none
								inline-flex items-center justify-center
								rounded-full focus:outline-none
							'
						>
							<IoMdClose />
						</button>
					</Dialog.Close>

				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default Modal