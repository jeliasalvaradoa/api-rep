import express, { json } from 'express';
import cors from 'cors';
import { config } from './config/config.js'
import { checkApiKey } from './middlewares/auth.handler.js';
import consultar from './index.mjs';

const app = express()
const PORT = process.env.PORT ?? 31015
app.use(cors());
app.disable('x-powered-by')

app.use(express.json())

app.get('/:cedId',
  checkApiKey,
  async (req, res) => {
 
    const ced = req.params.cedId
    const data = await consultar(ced,config) ?? 'error'
    console.log(data)
    res.json(data)
})

app.use((req, res) => {
  res.status(404).send('<h1>Bienvenido</h1>')
})
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
