const FileModel = require('./FileModel')

exports.get_all = (req,res) =>{
  res.send('files')
}
exports.upload = (req, res) =>{
  res.send('upload')
}

exports.file_count = (req, res) =>{
  res.send('file count')
}
