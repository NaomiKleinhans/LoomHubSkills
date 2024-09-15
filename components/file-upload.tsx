'use client'

import toast from 'react-hot-toast'
import { UploadDropzone } from '@/lib/uploadthing'
import { ourFileRouter } from '@/app/api/core'

interface FileUploadProps {
	onChange: (url?: string, originalFilename?: string) => void
	endpoint: keyof typeof ourFileRouter
}
type UploadResult = {
	url: string
	name: string
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
	return (
		<UploadDropzone
			endpoint={endpoint}
			onClientUploadComplete={(res: UploadResult[] | undefined) => {
				console.log('onClientUploadComplete res:', res)
				if (res && res.length > 0) {
					onChange(res[0].url, res[0].name)
				} else {
					onChange()
				}
			}}
			onUploadError={(error: Error) => {
				toast.error(`${error.message}`)
			}}
		/>
	)
}
