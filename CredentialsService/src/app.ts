import * as express from 'express'
import {Request, Response} from 'express'
import * as cors from 'cors'

const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json)

app.post("/api/v1/checkCreds", async (Req: Request, res: Response) => {
    
})

app.get("/api/v1/newToken", async (req: Request, res: Response) => {

})

app.delete("/api/v1/destroyToken", async (req: Request, res: Response) => {

})

app.patch("/api/v1/updatePassword", async (req: Request, res: Response) => {

})

app.get("/api/v1/renewToken", async (req: Request, res: Response) => {

})

app.delete("/api/v1/deleteCreds", async (req: Request, res: Response) => {

})

app.listen(8001)