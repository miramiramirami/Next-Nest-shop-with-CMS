import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'

export function HeaderCart() {
	return <Sheet>
		<SheetTrigger asChild>
			<Button variant='ghost'>Корзина</Button>
		</SheetTrigger>
		<SheetContent>
			<Heading title='Корзина' className='text-xl' />
		</SheetContent>
	</Sheet>
}