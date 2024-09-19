// next.config.js
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'supportive-melody-bc72f8134e.strapiapp.com',
				port: '',
				pathname: '/api/uploads/**'
			}
		]
	}
}
