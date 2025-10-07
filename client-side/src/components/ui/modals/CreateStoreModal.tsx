import { PropsWithChildren, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';



import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/Dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form-elements/Form';
import { Input } from '@/components/ui/form-elements/Input'

import { useCreateStore } from '@/hooks/queries/store/useCreateStore'

import { IStoreCreate } from '@/shared/types/store.interface'
import { Button } from '@/components/ui/Button'





export function CreateStoreModal({children}: PropsWithChildren<unknown>) {
	const [isOpen, setIsOpen] = useState(false)

	const {createStore, isLoadingCreate} = useCreateStore()

	const form = useForm<IStoreCreate>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IStoreCreate> = data => {
		createStore(data)
		setIsOpen(false)
	}

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger className='w-full'>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Создание магазина</DialogTitle>
					<DialogDescription>Для создания нужно название</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<FormField
							control={form.control as any}
							name='title'
							rules={{
								required: 'Название обязательно'
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Название</FormLabel>
									<FormControl>
										<Input
											placeholder='Название'
											disabled={isLoadingCreate}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='flex justify-end'>
							<Button variant='primary' disabled={isLoadingCreate}>
								Создать
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>)
}