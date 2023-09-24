
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'

import { Song } from "@/types";


const getSongsByUserID = async (): Promise<Song[]> => {

	const supabase = createServerComponentClient({
		cookies: cookies
	})

	const {
		data: sessionData,
		error: sessionError
	} = await supabase.auth.getSession()

	if (sessionError) {
		console.warn(sessionError.message)
		return []
	}

	const { data, error } = await supabase
		.from('songs')
		.select('*')
		.eq('user_id', sessionData.session?.user.id)
		.order('created_at', { ascending: false })

	if (error) {
		console.warn(error.message)
		return []
	}

	return (data as any) || []
}


export default getSongsByUserID