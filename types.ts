// Assuming Strapi's API response shape for a course, category, and profile

export type Category = {
	id: string
	name: string
}

export type Chapter = {
	id: string
	title: string
	// add other fields as per your schema
}

export type Course = {
	id: string
	title: string
	description: string
	// add other fields based on your Strapi schema
	category: Category | null
	chapters: Chapter[]
	progress: number | null
}

export type Profile = {
	id: string
	username: string
	email: string
	// add any additional fields
	createdAt: string
	updatedAt: string
}

// Define the SafeProfile type without "createdAt" and "updatedAt"
export type SafeProfile = Omit<Profile, 'createdAt' | 'updatedAt'> & {
	createdAt: string
	updatedAt: string
	role: 'ADMIN' | 'TEACHER' | 'STUDENT'
}



// In '@/types' or 'types.ts'
