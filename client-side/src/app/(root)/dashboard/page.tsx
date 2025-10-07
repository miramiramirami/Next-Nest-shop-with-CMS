import type { Metadata } from 'next'

import Dashboard from './Dashboard'
import { NO_INDEX_PAGE } from '@/constans/seo.constants'

export const metadata: Metadata = {
	title: 'Личный кабинет',
	...NO_INDEX_PAGE
}

export default async function DashboardPage() {
	return <Dashboard />
}
