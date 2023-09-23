'use client'

import { useState } from 'react'
import useUploadModal from "@/hooks/useUploadModal"
import { useForm, FieldValues } from "react-hook-form"


import Modal from "@/components/modal/Modal"
import Input from '@/components/Input'



const UploadModal: React.FC = (() => {

	const [isLoading, setIsLoading] = useState(false)

	const uploadModal = useUploadModal()
	const { register, handleSubmit, reset } = useForm<FieldValues>({
		defaultValues: {
			author: '',
			title: '',
			song: null,
			image: null
		}
	})


	const onChange = (open: boolean) => {
		if (!open) {
			reset()
			uploadModal.onClose()
		}
	}
	const onSubmit: SubmitHandler<FieldValues> = async (values) => {

	}

	return (
		<Modal
			title="Upload songs in your library"
			descrition="Upload songs in here"
			isOpen={uploadModal.isOpen}
			onChange={onChange}
		>

			<form
				onSubmit={handleSubmit(onSubmit)}
			>
				<Input
					id='title'
					disabled={isLoading}
					{...register('title', { required: true })}
					placeholder='Song Title'
				/>
			</form>

		</Modal>
	)
}
)

export default UploadModal