"use client"

import { useRouter } from "next/navigation"
import Image from 'next/image';

import { FaPlay } from 'react-icons/fa'

interface ListItemProps {
	image: string,
	name: string,
	href: string,
}


const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {

	const router = useRouter()

	const onClick = () => { router.push(href) }

	return (
		<button
			onClick={() => { onClick }}
			className="
				relative group
				flex items-center
				rounded-md overflow-hidden
				gap-x-4 pr-4
				bg-neutral-100/10 hover:bg-neutral-100/20
				transition
			"
		>
			<div className="relative min-h-[64px] min-w-[64px]">
				<Image
					src={image} alt="Image"
					fill
					className="object-cover"
				/>
				<p className="font-medium truncate py-5">
					{name}
				</p>
				<div className="
					absolute
					p-4 drop-shadow-md right-5 
					opacity-0 rounded-full bg-green
					flex items-center justify-center
					group-hover:opacity-100 hover:scale-110
					transition
				">
					<FaPlay className='text-black' />
				</div>
			</div>
		</button>
	)
}

export default ListItem