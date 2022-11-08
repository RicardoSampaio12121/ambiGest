import * as express from 'express'
import {Request, Response} from 'express'
import * as cors from 'cors'

const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json)

app.post('/api/v1/login', async (req: Request, res: Response) => {

})

app.post('/api/v1/logout', async (req: Request, res: Response) => {

})

app.post('/api/v1/signup', async (req: Request, res: Response) => {

})

app.get('/api/v1/refreshToken', async (req: Request, res: Response) => {

})

app.post('/api/v1/recover', async (req: Request, res: Response) => {
    
})

console.log('listening to port 8000')

app.listen(8000)