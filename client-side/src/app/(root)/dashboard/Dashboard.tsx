'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { saveTokenStorage } from '@/services/auth/auth.token.service'

export default function Dashboard() {
	const searchParams = useSearchParams()

	useEffect(() => {
		const accessToken = searchParams.get('accessToken')

		if (accessToken) saveTokenStorage(accessToken)
	}, [searchParams])

	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	)
}
