const FileController = require('./FileController')
const router = require('express').Router()

router.get('/',FileController.get_all)
router.get('/file-count',FileController.file_count)
router.post('/upload',FileController.upload)

module.exports = router
