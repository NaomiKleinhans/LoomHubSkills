// types.ts
export interface ImageAttributes {
	url: string
}

export interface ImageData {
	attributes: ImageAttributes
}

export interface CategoryAttributes {
	Name: string
	Slug: string
	Description: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	image?: {
		data?: ImageData
	}
}

export interface Category {
	id: number
	attributes: CategoryAttributes
	Name: string
	Slug: string
	image?: {
		data?: ImageData
	}
}

export interface CourseAttributes {
	name: string
	image?: {
		data?: ImageData
	}
}

export interface Course {
	id: number
	attributes: CourseAttributes
}
