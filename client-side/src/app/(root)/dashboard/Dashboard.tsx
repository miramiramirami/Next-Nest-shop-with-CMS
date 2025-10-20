'use client';

import { useMutation } from '@tanstack/react-query';
import { router } from 'next/client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { IOrderColumn, orderColumns } from '@/app/(root)/dashboard/OrderColumns';
import { Button } from '@/components/ui/Button'
import { useProfile } from '@/hooks/useProfile'
import { authService } from '@/services/auth/auth.service'
import { saveTokenStorage } from '@/services/auth/auth.token.service';
import { EnumOrderStatus } from '@/shared/types/order.interface';
import styles from './Dashboard.module.scss';
import { formatDate } from '@/lib/date/format-date';
import { formatPrice } from '@/lib/string/format-price';
import { DataTable } from '@/components/ui/data-loading/DataTable'
import { LogOut } from 'lucide-react'



export default function Dashboard() {
	const searchParams = useSearchParams()

	useEffect(() => {
		const accessToken = searchParams.get('accessToken')

		if (accessToken) saveTokenStorage(accessToken)
	}, [searchParams])

	const { user } = useProfile()

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})

	if (!user) return null

	const formattedOrders: IOrderColumn[] = user.orders.map(order => ({
		createdAt: formatDate(order.createdAt),
		status:
			order.status === EnumOrderStatus.PENDING ? 'В ожидании' : 'Оплачен',
		total: formatPrice(order.total)
	}))

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h1>Ваши заказы</h1>
				<Button variant='ghost' onClick={() => logout()}>
					<LogOut />
					Выйти
				</Button>
			</div>
			<DataTable columns={orderColumns} data={formattedOrders} />
		</div>
	)
}
