'use client'

import { Heading } from '@/components/ui/Heading'


import styles from '../Store.module.scss'

import { IReviewColumn, reviewColumns } from './ReviewColumns'
import DataTableLoading from '@/components/ui/data-loading/DataTableLoading'
import { formatDate } from '@/lib/date/format-date'
import { useGetReviews } from '@/hooks/queries/reviews/useGetReviews'
import { DataTable } from '@/components/ui/data-loading/DataTable'

export function Reviews() {
	const { reviews, isLoading } = useGetReviews()

	const formattedReviews: IReviewColumn[] = reviews
		? reviews.map(review => ({
				id: review.id,
				createdAt: formatDate(review.createdAt),
				rating: Array.from({ length: review.rating })
					.map(() => '⭐️')
					.join(' '),
				username: review.user.name
			}))
		: []

	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				<DataTableLoading />
			) : (
				<>
					<div className={styles.header}>
						<Heading
							title={`Отзывы (${reviews?.length})`}
							description='Все отзывы в вашем магазине'
						/>
					</div>
					<div className={styles.table}>
						<DataTable
							columns={reviewColumns}
							data={formattedReviews}
						/>
					</div>
				</>
			)}
		</div>
	)
}
