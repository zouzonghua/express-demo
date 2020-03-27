import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'

const app: Express = express()

app.get('/', (_req: Request, res: Response) => {
  res.send('hello world')
})

const port: unknown = process.env.PORT || 3100

const main = async (): Promise<void> => {
  await mongoose.connect(
    'mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
  })
}

main()
