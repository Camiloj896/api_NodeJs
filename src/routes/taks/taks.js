const user = require('./../../models/task')

const taskRoutes = {
    get: (req, res) => {
        user.getUsers((err, data) => {
            res.json(data);
        })
    },
    post: () => {
        
    },
    put: () => {

    },
    delete: () => {

    }
}

module.exports = taskRoutes;