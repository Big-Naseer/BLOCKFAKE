import Drugs from '../model/product.model.js'

export const find = async (req, res) => {
    console.log("am getting the signal");
    try {
        // Getting search items from the request body
        const drugId = req.body.drugId;

        // Performing search for drugs
        const drugResult = await Drugs.findOne({drugId: drugId});

        if (!drugResult) {
            // If no drug match, return error
            return res.status(404).json({ error: 'No Drug Match' });
        }
        // Respond with the searched drug
        res.json(drugResult);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};