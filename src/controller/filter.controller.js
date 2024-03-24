import Drug from "../model/product.model.js";

export const filterDrugs =async (req, res) => {
    try {
        const {batchNumber} = req.query;

        const filter ={};
        if(batchNumber) filter.batchNumber = batchNumber;
        
        const drugs = await Drug.find(filter);

        res.json(drugs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};