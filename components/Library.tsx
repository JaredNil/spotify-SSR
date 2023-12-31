'use client';

import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import useUploadModal from '@/hooks/useUploadModal';

import MediaItem from '@/components/MediaItem';

import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'

import { Song } from '@/types';

interface LibraryProps {
	songs: Song[]
}

const Library: React.FC<LibraryProps> = ({ songs }) => {

	const authModal = useAuthModal()
	const { user, subscription } = useUser()
	const uploadModal = useUploadModal()

	const onClick = (() => {
		if (!user) authModal.onOpen()
		else uploadModal.onOpen()
	})

	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between px-5 pt-4">
				<div className="flex items-center gap-x-2">
					<TbPlaylist className='text-neutral-400' size={26} />
					<p className='text-neutral-400 font-medium text-md'>
						Your Library
					</p>
				</div>
				<AiOutlinePlus onClick={onClick} size={20}
					className='text-neutral-400 cursor-pointer hover:text-white transition'
				/>
			</div>
			<div className='flex flex-col gap-y-2 mt-4 px-3'>

				{songs.map((song) => {
					return (
						<MediaItem
							key={song.id}
							data={song}
							onClick={() => { }}
						/>
					)
				})}

			</div>
		</div>
	)
}

export default Library