
const Bonus = require('../Model/Bonus')

const BonusController = {

    createBonus: async (req, res) => {
        try {
            const bonus = new Bonus(req.body);
            await bonus.save();

            if(!bonus)
                return res.status(404).send({message : 'Bonus not created'})

            const reponse = await Bonus.findOne({ _id : bonus._id }).populate('_idUser')
            console.log( reponse )
            
            return res.send( reponse );

        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    },
    deleteBonus: async (req, res) => {
        try {

        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    },
    updateBonus: async (req, res) => {

        try {

        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    },
    getAllBonus: async (req, res) => {
        try {
            const bonus = await Bonus.find({}).populate('_idUser');
            if(!bonus)
                return res.status(404).send({ message: 'Bonus not found' });
            return res.send(bonus);
        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    }
}

module.exports = BonusController