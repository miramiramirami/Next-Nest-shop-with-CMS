import { UseFormReturn } from 'react-hook-form'

import {
	FormControl,
	FormField,
	FormItem,
	FormMessage
} from '@/components/ui/form-elements/Form'
import { Input } from '@/components/ui/form-elements/Input'

import { validEmail } from '@/shared/regex'
import { IAuthForm } from '@/shared/types/auth.interface'

interface AuthFieldsProps {
	form: UseFormReturn<IAuthForm>
	isPending: boolean
	isReg?: boolean
}

export function AuthFields({
	form,
	isPending,
	isReg = false
}: AuthFieldsProps) {
	return (
		<>
			{isReg && (
				<FormField
					control={form.control as any}
					name='name'
					rules={{ required: 'Имя обязательно' }}
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Имя Фамилия'
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			)}

			<FormField
				control={form.control as any}
				name='email'
				rules={{
					required: 'Email обязательно',
					pattern: {
						value: validEmail,
						message: 'Почта не валидна'
					}
				}}
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input
								placeholder='example@exmaple.com'
								type='email'
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control as any}
				name='password'
				rules={{
					required: 'Пароль обязателен',
					minLength: {
						value: 6,
						message: 'Пароль должен содержать минимум 6 символов'
					}
				}}
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input
								placeholder='******'
								type='password'
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}
