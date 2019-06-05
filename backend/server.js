const express = require('express')
const app = express()
const multer = require('multer')
var cors = require('cors')

const port = 3001
app.use(cors());

var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, 'public/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
})

var upload = multer({
	storage: storage
})

app.post('/upload', upload.single('file'), (req, res) => {

	
});

app.listen(port, () => console.log(`Server started on port ${port}`))