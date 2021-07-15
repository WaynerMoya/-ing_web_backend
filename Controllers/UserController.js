
const User = require('../Model/User')

const UserController = {

    createUser: async (req, res) => {
        try {

            console.log(req.body)

            const user = new User(req.body);
            await user.save();

            if (!user)
                return res.status(404).send({ message: 'User not created' })

            return res.send(user);

        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    },
    deleteUser: async (req, res) => {
        try {

        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    },
    updateUser: async (req, res) => {

        try {

        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find()
            if (!users)
                return res.status(404).send({ message: 'Users not found' });
            return res.send(users);
        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    }

}

module.exports = UserController