import { Course } from '../types'

interface Props {
	course: Course
}

const CourseCard: React.FC<Props> = ({ course }) => (
	<div className='border rounded-lg shadow-md'>
		<img
			src={course.image}
			alt={course.title}
			className='w-full h-48 object-cover'
		/>
		<h2 className='text-lg font-bold p-2'>{course.title}</h2>
	</div>
)

export default CourseCard
