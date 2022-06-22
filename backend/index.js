const express = require('express')
const cors = require('cors')

const app = express ()

// config JSON response

app.use(express.json())

//Solve CORS

app.use(cors({ credentials: true, origin: 'http://localhost:3000s'}))

// Public Folder for Images

app.use(express.static('public'))

// Routes

app.listen(5000)