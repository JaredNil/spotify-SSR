'use client'

import Image from "next/image"

import useLoadImage from "@/hooks/useLoadImage"

import PlayButton from "@/components/PlayButton"

import { Song } from "@/types"

interface SongItemProps {
	key: string
	onClick: (id: string) => void
	data: Song
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {

	const imagePath = useLoadImage(data)

	return (
		<div
			onClick={() => onClick}
			className='
				relative group
				flex flex-col items-center	justify-center
				rounded-md overflow-hidden gap-x-4
				bg-neutral-400/5 cursor-pointer
				hover: bg-neutral-400/10 p-3
				transition
			'
		>

			<div
				className="
					relative aspect-square
					w-full h-full
					rounded-md overflow-hidden
				"
			>
				<Image
					src={imagePath || '/public/res/img/like.png'}
					alt="Image"
					fill
					className="
						object-cover
					"
				/>

			</div>
			<div
				className="
				flex flex-col items-start
				w-full p-4 gap-y-1
				"
			>
				<p className="font-semibold truncate w-full">
					{data.title}
				</p>
				<p
					className="
					text-neutral-400 text-sm 
						w-full pb-4 truncate
					"
				>
					By {data.author}
				</p>
			</div>
			<div
				className='absolute bottom-24 right-5'
			>
				<PlayButton />
			</div>

		</div>
	)
}


export default SongItem