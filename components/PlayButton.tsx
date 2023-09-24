
import { FaPlay } from 'react-icons/fa'


const PlayButton = () => {
	return (
		<button
			className='
				flex items-center
				bg-green-500 p-4
				opacity-0 rounded-full
				drop-shadow-md
				translate translate-y-1/4
				transition

				group-hover:opacity-100	group-hover:translate-y-0
				hover:scale-110
			'
		>
			<FaPlay className={'text-black'} />
		</button>
	)
}

export default PlayButton