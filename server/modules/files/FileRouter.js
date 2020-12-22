const FileController = require('./FileController')
const router = require('express').Router()
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, './uploads/files')
  },
  filename: (req, file, cb)=>{
    const filename = file.originalname.split('.')[0]
    cb(null, filename+Date.now()+path.extname(file.originalname))

  }
})
const upload = multer({storage})
router.get('/',FileController.get_all)
router.get('/file-count',FileController.file_count)
router.post('/upload',upload.single('file'),FileController.upload)

module.exports = router
