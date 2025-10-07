

import { LastUsers } from './LastUsers'
import styles from './MiddleSatistics.module.scss'
import { Overview } from './Overview'
import { useGetStatistics } from '@/hooks/queries/statistics/useGetStatistic'

export function MiddleStatistics() {
	const { middle } = useGetStatistics()

	return (
		<div className={styles.middle}>
			{middle?.monthlySales.length || middle?.lastUsers.length ? (
				<>
					<div className={styles.overview}>
						<Overview data={middle.monthlySales} />
					</div>
					<div className={styles.last_users}>
						<LastUsers data={middle.lastUsers} />
					</div>
				</>
			) : (
				<div>Нету данных для статистики</div>
			)}
		</div>
	)
}
