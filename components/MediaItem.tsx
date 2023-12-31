'use client'

import Image from "next/image"

import useLoadImage from "@/hooks/useLoadImage"

import { Song } from "@/types"

interface MediaItemProps {
	data: Song
	onClick: (id: string) => void
}


const MediaItem: React.FC<MediaItemProps> = ({
	data,
	onClick
}) => {

	const imageURL = useLoadImage(data)

	const handleClick = () => {
		if (onClick) {
			return onClick(data.id)
		}
	}

	return (
		<div
			onClick={handleClick}
			className="
				flex items-center
				gap-x-3 cursor-pointer
				w-full p-2 rounded-md
				hover:bg-neutral-800/50
			"
		>

			<div
				className="
					relative rounded-md
					min-h-[48px] min-w-[48px]
					overflow-hidden
				"
			>
				<Image
					src={imageURL || '/public/res/img/like.png'}
					alt="Media Item"
					fill
					className="object-cover"
				/>
			</div>
			<div className="
				flex flex-col 
				gap-y-1 overflow-hidden
			">
				<p className="text-white truncate">
					{data.title}
				</p>
				<p className="text-neutral-400 text-sm truncate">
					{data.author}
				</p>
			</div>

		</div>
	)
}


export default MediaItem