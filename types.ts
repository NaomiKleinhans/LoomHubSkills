// types.ts
export interface ImageAttributes {
	url: string
}

export interface ImageData {
	attributes: ImageAttributes
}

export type CategoryAttributes = {
	Name: string
	Slug: string
	Image: string
}

export type Category = {
	id: number
	attributes: CategoryAttributes
}

export type CategoryResponse = {
	data: Category[]
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
