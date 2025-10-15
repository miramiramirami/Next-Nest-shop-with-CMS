import Image from 'next/image'
import Link from 'next/link'
import { PUBLIC_URL } from '@/config/url.config'
import { IProduct } from '@/shared/types/product.interface'
import styles from './ProductCard.module.scss'
import { formatPrice } from '@/lib/string/format-price'

interface ProductCardProps {
	product: IProduct
}

export function ProductCard({ product }: ProductCardProps) {
	const imageSrc = product.images?.[0] || null
	const categoryId = product.category?.id
	const categoryTitle = product.category?.title
	const productTitle = product.title || 'Без названия'
	const productPrice = product.price || 0

	return (
		<div className={styles.card}>
			<Link href={PUBLIC_URL.product(product.id)}>
				{imageSrc ? (
					<Image
						src={imageSrc}
						alt={productTitle}
						width={300}
						height={300}
					/>
				) : (
					<div className={styles.placeholder}>
						Нет изображения
					</div>
				)}
			</Link>

			<h3 className={styles.title}>{productTitle}</h3>

			{categoryId && categoryTitle ? (
				<Link
					href={PUBLIC_URL.category(categoryId)}
					className={styles.category}
				>
					{categoryTitle}
				</Link>
			) : (
				<span className={styles.category}>Без категории</span>
			)}

			<p className={styles.price}>{formatPrice(productPrice)}</p>
		</div>
	)
}