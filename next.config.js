const withOffline = require('next-offline')

const nextConfig = {
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/app/index.html': { page: '/app' }
    }
  },
}

module.exports = withOffline(nextConfig)
