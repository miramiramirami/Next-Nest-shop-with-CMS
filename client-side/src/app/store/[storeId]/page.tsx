import type { Metadata } from 'next'

import { Store } from './Store'
import { NO_INDEX_PAGE } from '@/constans/seo.constants'

export const metadata: Metadata = {
	title: 'Управление магазином',
	...NO_INDEX_PAGE
}

export default function StorePage() {
	return <Store />
}
