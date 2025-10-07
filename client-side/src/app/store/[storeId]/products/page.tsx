import type {Metadata} from 'next'

import {NO_INDEX_PAGE} from '@/constans/seo.constants'
import { Products } from '@/app/store/[storeId]/products/Products'

export const metadata: Metadata = {
	title: 'Продукты',
	...NO_INDEX_PAGE
}

export default function ProductPage(){
	return <div><Products/></div>
}