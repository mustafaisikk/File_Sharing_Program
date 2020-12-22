const FileModel = require('./FileModel')

exports.get_all = (req,res) =>{
  FileModel.find()
  .then(files=> {
    res.status(200).json({
      files
    })
  })
  .catch(error => {
    res.status(400).json({
      message: 'Error',
      error: error,
      mongoose: error.errmsg
    })
  })
}
exports.upload = (req, res) =>{
  // res.send('upload')
  const title = req.headers.title
  const fileUrl = '/uploads/files/'+req.file.filename
  const fileType = req.file.originalname.split('.')[1]

  const newFile = new FileModel({
    title, fileUrl, fileType
  })
  newFile.save()
  .then(response => {
    res.status(200).json({
      message: 'Files uploaded succesfully',
      id: response._id,
      response
    })
  }).catch(error => {
    res.status(400).json({
      message: 'Error',
      error : error,
      mongoose: error.errmsg
    })
  })
  // console.log(title+fileName+fileType);
}

exports.file_count = (req, res) =>{
  const agg = [
    {
      $group : {
        _id : '$fileType',
        total: {$sum: 1}
      }
    }
  ]
  FileModel.aggregate(agg)
  .then(response => {
    res.status(200).json(
      response
    )
  })
}
