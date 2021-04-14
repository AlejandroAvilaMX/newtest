var UPLOAD_PATH =require('./routes').UPLOAD_PATH,
Image = require('./models/image'),
path = require('path'),
fs = require('fs'),
del = require('del');

exports.uploadImage = function(req, res){
    let newImage = new Image();
    newImage.filename = req.file.filename;
    newImage.originalName = req.file.originalName;
    newImage.descr = req.body.descr;
    newImage.save(err => {
        if(err){
            return res.sendStatus(400);
        }
        res.status(201).send({newImage})
    });
}