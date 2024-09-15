// next.config.js
module.exports = {
	async rewrites() {
		return [
			{
				source: '/old-route/:path*',
				destination: '/new-route/:path*'
			}
		]
	}
}
