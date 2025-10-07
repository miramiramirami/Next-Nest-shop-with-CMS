import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { storeService } from '@/services/store.service';

import { IStoreEdit } from '@/shared/types/store.interface';
import { PUBLIC_URL } from '@/config/url.config'

export function useDeleteStore(){
	const router = useRouter()
	const params = useParams<{storeId: string}>();

	const { mutate: deleteStore, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete store'],
		mutationFn: (data: IStoreEdit) => storeService.delete(params.storeId),
		onSuccess(store) {
			toast.success('Магазин был удален')
			router.push(PUBLIC_URL.home())
		},
		onError(error: Error) {
			toast.error('Ошибка при обновлении магазина')
		}
	})

	return useMemo(() => ({deleteStore, isLoadingDelete}), [deleteStore, isLoadingDelete])
}