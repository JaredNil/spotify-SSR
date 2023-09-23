import type { Metadata } from 'next'

import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'

import Sidebar from '@/components/Sidebar'


import './globals.css'
import { Figtree } from 'next/font/google'

const font = Figtree({ subsets: ['latin'] })



export const metadata: Metadata = {
	title: 'Spoty',
	description: 'Spotify SSR application',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider />
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<Sidebar>
							{children}
						</Sidebar >
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	)
}
