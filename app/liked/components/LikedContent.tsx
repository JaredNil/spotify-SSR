'use client'

import { useEffect } from 'react';
import { useRouter } from "next/navigation"

import MediaItem from '@/components/MediaItem';
import LikeButton from '@/components/LikeButton';

import { useUser } from "@/hooks/useUser"

import { Song } from "@/types"

interface LikedContentProps {
	songs: Song[]
}


const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {

	const router = useRouter()
	const { isLoading, user } = useUser()

	useEffect(() => {
		if (!isLoading && !user) {
			router.replace('/')
		}
	}, [isLoading, user, router])

	if (songs.length === 0) {
		return (
			<div className="
				flex flex-col gap-y-2 w-full px-6 text-neutral-400
			">
				No liked songs...
			</div>
		)
	}
	else {
		return (
			<div className="
				flex flex-col gap-y-2 w-full px-6 text-neutral-400
			">
				{songs.map((song) => {
					return (
						<div key={song.id} className='flex items-center gap-x-4 w-full'>
							<div className="flex-1">
								<MediaItem
									onClick={() => { }}
									data={song}
								/>
							</div>
							<LikeButton songID={song.id} />
						</div>
					)
				})}
			</div>
		)
	}

}


export default LikedContent