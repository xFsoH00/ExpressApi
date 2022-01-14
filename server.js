const app = require('./src/app');
const functions = require('./config/functions')

var PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
    res.send("Blank page - Routes needed")
})

app.listen(PORT, () => {
  // functions.start()
  console.log(
    '\n',
    'Server rodando em',
    '\x1b[36m',
    process.env.NODE_ENV,
    '\x1b[0m',
    'na porta',
    PORT,
    '...',
    '\n',
    '\x1b[36m',
    'http://localhost:8080/',
    '\x1b[0m',
    '\n\n\n'
  )
})