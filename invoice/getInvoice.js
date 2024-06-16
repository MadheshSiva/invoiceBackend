const invoiceModlue = require("../model/model")
const {connection} = require("../mongoDB")
exports.getInvoice = async(req,res) => {
    try{
           await connection()
           const getInvoice = await invoiceModlue.find()
           res.status(200).json(getInvoice)
    }catch(err) {
         res.status(500).json({message : err.message})
    }


}