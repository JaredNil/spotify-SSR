import type { Metadata } from 'next'

import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'

import Sidebar from '@/components/Sidebar'

import getSongsByUserID from '@/actions/getSongsByUserID'

import './globals.css'
import { Figtree } from 'next/font/google'

const font = Figtree({ subsets: ['latin'] })



export const metadata: Metadata = {
	title: 'Spoty',
	description: 'Spotify SSR application',
}

export const revalidate = 0

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {

	const userSongs = await getSongsByUserID()

	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider />
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<Sidebar songs={userSongs}>
							{children}
						</Sidebar >
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	)
}
