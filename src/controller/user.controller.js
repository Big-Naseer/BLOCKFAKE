// importing needed library 
import Drugs from "../model/product.model.js";
import qrcode from "qrcode";
import { nanoid } from 'nanoid';
const ID = nanoid();

// function for adding drugs
// export const addDrug = async (req, res) => {
//     try {
//         const existingDrug = await Drugs.findOne({nafdacReg:req.body.nafdacReg})
//         console.log(existingDrug)
        
//         if(existingDrug){
//             return res.status(409).json({success: false, message: "Drug existing already"});
//         }
//         //  Saving the new drug
//         const newDrug = new Drugs(req.body);
//         const savedDrug = await newDrug.save();

//         // saved the DrugId into a Qrcode

//         const qrCodeData = JSON.stringify(savedDrug.drugId);
//         const qrCodeImage = await qrcode.toDataURL(savedDrug.drugId);
//         // console.log(qrCodeData)
        
//         savedDrug.qrcode = qrCodeImage; 
//         await savedDrug.save();

//         res.status(201).json(savedDrug);

//     } catch (error) {
//         res.status(400).json({message: error.message });
//     }
// };

export const addDrug = async (req, res) => {
    try {
        const { drugName, manufacturedDate, manufacturer, expiryDate, nafdacReg, component } = req.body;

        // Check if a drug with the provided nafdacReg already exists
        const existingDrug = await Drugs.findOne({ nafdacReg });

        if (existingDrug) {
            return res.status(409).json({ success: false, message: "Drug already exists." });
        }

        // Concatenate drugName with current timestamp to generate drugId
        const drugId = drugName + Date.now();

        // Create a new drug instance
        const newDrug = new Drugs({
            drugName,
            drugId,
            manufacturedDate,
            manufacturer,
            expiryDate,
            nafdacReg,
            component
        });

        // Save the new drug to the database
        const savedDrug = await newDrug.save();

        // Generate QR code for drugId
        const qrCodeImage = await qrcode.toDataURL(drugId);

        // Update the drug instance with the generated QR code
        savedDrug.qrcode = qrCodeImage;
        await savedDrug.save();

        res.status(201).json(savedDrug);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateDrug = async (req, res) => {
    const id = req.params.nafdacReg;
    try {
        const existingDrug = await Drugs.findById(id);

        if (!existingDrug) {
            return res.status(404).json({message: 'Drug not found'});
        }

        const{} = req.body;
        if (tittle != undefined){

        }
    console.log('Updating user with ID:',id);

    //  creating the function for updating
    const updatedDrug = await Drugs.findByIdAndUpdate(id,
        { $set: req.body},
        {new: true});

        console.log('Updated Drug:',updateDrug);

        res.status(200).json({
            success: true,
            message: 'Updated Successfully',
            data: updateDrug,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to update User'
        });
    }
};
