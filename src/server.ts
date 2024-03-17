import express, { json } from 'express'

const app = express()
app.use(json())

app.listen(3000, () => console.log('🚀 server is running at port 3000'))