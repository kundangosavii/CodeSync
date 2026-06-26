import dotenv from 'dotenv'
dotenv.config()

import express from 'express'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


import { analyzeController, getInsightsController } from './controller.js'
import approuter from './routes.js'

app.use('/api', approuter)

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})