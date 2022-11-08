import * as express from 'express'
import {Request, Response} from 'express'
import * as cors from 'cors'

const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json)

app.post("/api/v1/createUser", async (req: Request, res: Response) => {

})

app.get("/api/v1/getUser", async (req: Request, res: Response) => {
    
})

app.put("/api/v1/updateUser", async (req: Request, res: Response) => {
    
})

app.delete("/api/v1/deleteUser", async (req: Request, res: Response) => {
    
})

console.log("Listening on port 8002")

app.listen(8002)