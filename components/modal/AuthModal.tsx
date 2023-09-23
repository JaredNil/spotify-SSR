'use client'

import { useEffect } from 'react'

import { useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

import { useRouter } from 'next/navigation'

import useAuthModal from '@/hooks/useAuthModal'

import Modal from "./Modal"

const AuthModal = () => {

	const supabaseClient = useSupabaseClient()
	const router = useRouter()

	const { session } = useSessionContext()

	const { onClose, isOpen } = useAuthModal()

	useEffect(() => {
		if (session) {
			router.refresh()
			onClose()
		}
	}, [session, router, onClose])


	const onChange = (open: boolean) => {
		if (!open) onClose()
	}

	return (
		<Modal
			title="Welcome back"
			descrition="Спотифай заблокирован xD на т-рии РФ. Nice joke, вбивай любые данные."
			isOpen={isOpen}
			onChange={onChange}
		>

			<Auth
				providers={['github']}
				theme='dark'
				supabaseClient={supabaseClient}
				appearance={{
					theme: ThemeSupa,
					variables: {
						default: {
							colors: {
								brand: '#305022',
								brandAccent: 'green'
							}
						}
					}
				}}
				magicLink
			/>

		</Modal>
	)
}

export default AuthModal