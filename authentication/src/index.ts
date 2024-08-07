import express, { Express, Request, Response, Application } from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import cors from 'cors'
import { usersRouter } from '../src/api/routes'

dotenv.config()

const app: Application = express()
app.use(cors({ credentials: true }))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.send(`Welcome to Rankins! Randomly rate people on LinkedIn`)
})

app.use('/users', usersRouter)

const port = (process.env.PORT || 5000) as Number

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
})
    .on('error', (err: Error) => {
        console.log(err);
        process.exit(1);
    })

