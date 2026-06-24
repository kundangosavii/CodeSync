import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json())
import { analyzeController, getInsightsController } from './controller.js'
import approuter from './routes.js'

app.use('/api', approuter)

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})