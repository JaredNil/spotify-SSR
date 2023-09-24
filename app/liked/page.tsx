import Image from "next/image"

import Header from "@/components/header/Header"
import LikedContent from "./components/LikedContent"

import getLikedSongs from "@/actions/getLikedSongs"

export const revalidate = 0

interface LikedProps {

}

const Liked: React.FC<LikedProps> = async () => {

	const songs = await getLikedSongs()

	return (
		<div
			className="
				bg-neutral-900
				rounded-lg
				h-full
				w-full
				overflow-hidden
				overflow-y-auto

			"
		>
			<Header className="bg-neutral-900">
				<div className="mt-20">
					<div
						className="
							flex flex-col items-center
							md:flex-row
							gap-x-5
						"
					>

						<div
							className="
								relative h-32 w-32
								lg:h-44 lg:w-44
							"
						>
							<Image
								fill
								src={'/res/img/like.png'}
								alt={'Playlist'}
								className='object-cover'
							/>
						</div>
						<div
							className='flex flex-col
							gap-y-2 mt-4 
							md:mt-0
							'
						>
							<p
								className="
								hidden md:block
								font-semibold
								text-sm
							"
							>
								Playlist
							</p>
							<h1
								className="
							text-white text-4xl font-bold
							sm:text-5xl lg:text-7xl
							"
							>
								Liked songs
							</h1>
						</div>

					</div>
				</div>
			</Header>

			<LikedContent songs={songs} />

		</div>
	)
}

export default Liked