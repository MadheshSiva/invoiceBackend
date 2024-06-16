const {connection} = require("../mongoDB")
const invoiceModlue = require("../model/model")

exports.createInvoice = async(req,res) => {
    try{
        console.log(req.body,"item06")
            await connection();
        const created =  await invoiceModlue({
            items : req.body.items,
            rate : req.body.rate,
            IGST : {
                IGST_percentage : req.body.IGST_percentage,
                IGST_Amt : req.body.IGST_Amt
            }
        })  
       await  created.save() 
       res.status(200).json(created) 
    }catch(err) {
      res.status(500).json({message : err.message})
    }
}