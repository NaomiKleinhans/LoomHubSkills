import { Category } from '../types'

interface Props {
	category: Category
}

const CategoryCard: React.FC<Props> = ({ category }) => (
	<div className='border rounded-lg shadow-md'>
		<img
			src={category.image}
			alt={category.name}
			className='w-full h-48 object-cover'
		/>
		<h2 className='text-lg font-bold p-2'>{category.name}</h2>
	</div>
)

export default CategoryCard
