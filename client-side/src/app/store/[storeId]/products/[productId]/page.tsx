import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constans/seo.constants'

import { ProductEdit } from './ProductEdit'

export const metadata: Metadata = {
	title: 'Настройки товара',
	...NO_INDEX_PAGE
}

export default function ProductEditPage() {
	return <ProductEdit />
}

