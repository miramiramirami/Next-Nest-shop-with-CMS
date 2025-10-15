import { Metadata } from 'next'
import { IProduct } from '@/shared/types/product.interface'
import { productService } from '@/services/product.service'
import { Explorer } from '@/app/(root)/explorer/Explorer'

export const metadata: Metadata = {
	title: 'Каталог',
}

export const revalidate = 60

async function getProducts() {
	const data: IProduct[] = await productService.getAll()

	return data
}


export default async function ExplorerPage(){
	const data = await getProducts()

	return <Explorer products={data}/>
}