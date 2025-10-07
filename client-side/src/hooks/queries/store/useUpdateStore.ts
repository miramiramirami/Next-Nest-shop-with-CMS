import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation'
import toast from 'react-hot-toast'


import { storeService } from '@/services/store.service'

import { IStoreEdit } from '@/shared/types/store.interface';
import { useMemo } from 'react'


export function useUpdateStore(){
	const queryClient = useQueryClient();
	const params = useParams<{storeId: string}>();


	const {data: store} = useQuery({
		queryKey: ['store', 'storeId'],
		queryFn: () => storeService.getById(params.storeId),
	})

	const { mutate: updateStore, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update store'],
		mutationFn: (data: IStoreEdit) => storeService.update(params.storeId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
			toast.success('Магазин был изменен')

		},
		onError(error: Error) {
			toast.error('Ошибка при обновлении магазина')
		}
	})

	return useMemo(() => ({store, updateStore, isLoadingUpdate}), [store, updateStore, isLoadingUpdate])
}