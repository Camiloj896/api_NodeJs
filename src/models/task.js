const conexion = require('./conexion')

const userModel = {
    getUsers: (callback) => {
        if(conexion){
            conexion.query('SELECT * FROM task', (err, row) => {
                if(err){
                    throw err;
                }else{
                    callback(null, row)
                }
            })
        }
    },
    createUsers: () => {
        
    }
}

module.exports = userModel;