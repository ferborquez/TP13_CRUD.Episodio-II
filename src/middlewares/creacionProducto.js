const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({  /*  para poder traer y manipular archivos,este storage tendra una funcion con un objeto literal */
    destination : (req,file,callback) => {
        callback(null,'./public/images/products')
    },/* sera la ruta donde vamos a llevar los archivos que creamos en nuestro formulario, es file y no res porque hacemos mencion al archivo, y un callback q vamos a utilizar*/
    filename:(req,file,callback) => {  /* sera el nombre de nuestro elemento despues d ser cargado y procesado por multer */
        callback(null,`img-${Date.now()}${path.extname(file.originalname)}`)
    } 
})
const fileFilter = function(req,file,callback) {
    if (!file.originalname.match(/\.(jpg|jepg|png|jfif|gif|webp)$/)){
        req.fileValidationError = "Sólo se permite imágenes";
        return callback(null,false,req.fileValidationError)
    }
    callback(null,true);
} 

module.exports = multer({
    storage
})


