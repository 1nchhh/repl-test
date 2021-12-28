const url = 'https://discord.com/api/webhooks/925503135974301757/8iiBNht6zcBFESHBlcM47wAoNPVRhKwNjJQRgN7z-TFG0tnU3zxcX4he9BQYMW5h-hTt'
const axios = require('axios')

axios.post(url, { content: 'hi'})
