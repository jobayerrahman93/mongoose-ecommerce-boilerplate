const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'dist/assets/uploads/product_image');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,uniqueSuffix + '-' + file.originalname)
    }
  })
  
  const upload = multer(
    { 
        storage: storage ,
        fileFilter:(req,file,cb)=>{

            const supportedImage = /jpg|png/;
            const extension = path.extname(file.originalname);

            if(supportedImage.test(extension)){
                cb(null,true)
            }
            else{
                cb(new Error ("Photo must be jpg/png"))
            }

  },
 limits:{
    fileSize:5000000
 }
})

  module.exports = upload;