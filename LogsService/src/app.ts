import * as express from 'express'
import {Request, Response} from 'express'
import * as cors from 'cors'

const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json)

app.post("/api/v1/logs/new", async (req: Request, res: Response) => {

})

app.get("/api/v1/logs/find", async (req: Request, res: Response) => {
    
})

console.log("Listening on port 8003")

app.listen(8003)