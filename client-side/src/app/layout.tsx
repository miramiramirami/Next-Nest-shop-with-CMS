import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import './globals.scss'
import { Providers } from './providers'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constans/seo.constants'

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={GeistSans.variable}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
