import { Hero } from '@/app/(root)/hero/Hero'
import { IProduct } from '@/shared/types/product.interface'
import { Catalog } from '@/components/ui/catalog/Catalog'
import { PUBLIC_URL } from '@/config/url.config'

interface HomeProps {
	products: IProduct[]
}

export function Home({products}:HomeProps) {
	return <div>
		<Hero />
		<Catalog
			title='Хиты продаж'
			description='Самые популярные товары нашего магазина.'
			linkTitle='Узнать больше'
			link={PUBLIC_URL.explorer()}
			products={products}
		/>
	</div>
}
