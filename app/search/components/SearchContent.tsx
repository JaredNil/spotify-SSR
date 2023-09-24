'use client'

import MediaItem from "@/components/MediaItem"
import LikeButton from "@/components/LikeButton"

import { Song } from "@/types"

interface SearchContentProps {
	songs: Song[]
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {

	if (songs.length === 0) {
		return (
			<div className="
					flex flex-col
					w-full gap-y-2 px-1
					text-neutral-400
				"
			>
				No songs found.
			</div>
		)
	}
	else return (
		<div className="
				flex flex-col gap-y-2 w-full px-1
			"
		>
			{songs.map((song) => {
				return (
					<div
						key={song.id}
						className="flex items-center gap-x-4 w-full"
					>

						<div className='flex-1'>
							<MediaItem
								onClick={() => { }}
								data={song}
							/>
						</div>
						<LikeButton
							songID={song.id}
						/>

					</div>
				)
			})}
		</div>
	)
}

export default SearchContent