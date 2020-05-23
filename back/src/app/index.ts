import express, { application } from 'express'
import router from './routes'
import cors from 'cors'

const app = express()

app.listen(3333)
app.disable('x-powered-by')
app.use(express.json())

app.use(cors())
app.use(router)
