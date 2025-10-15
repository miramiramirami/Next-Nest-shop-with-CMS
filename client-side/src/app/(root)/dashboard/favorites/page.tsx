import { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constans/seo.constants'
import { Favorites } from '@/app/(root)/dashboard/favorites/Favorites'

export const metadata: Metadata = {
	title: 'Избранное',
	...NO_INDEX_PAGE
}

export default function FavoritesPage() {
	return <Favorites />
}