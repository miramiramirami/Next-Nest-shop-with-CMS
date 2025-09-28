'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/Card'
import { Form } from '@/components/ui/form-elements/Form'

import styles from './Auth.module.scss'
import { useAuthForm } from './useAuthForm'

export function Auth() {
	const [isReg, setIsReg] = useState(false)

	const { onSubmit, form, isPending } = useAuthForm(isReg)

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Image
					src='/images/auth.svg'
					alt='auth'
					width={100}
					height={100}
				/>
			</div>
			<div className={styles.right}>
				<Card className={styles.card}>
					<CardHeader className={styles.header}>
						<CardTitle>
							{isReg ? 'Регистрация' : 'Авторизация'}
						</CardTitle>
						<CardDescription>
							Войдите или создайте аккаунт для покупок
						</CardDescription>
						<CardContent className={styles.content}>
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)}>
									<Button disabled={isPending}>
										Продолжить
									</Button>
								</form>
							</Form>
						</CardContent>
						<CardFooter className={styles.footer}>
							{isReg ? 'Уже есть аккаунт ?' : 'Еще нет аккаунта'}
							<button onClick={() => setIsReg(!isReg)}>
								{isReg ? 'Войти' : 'Создать'}
							</button>
						</CardFooter>
					</CardHeader>
				</Card>
			</div>
		</div>
	)
}
