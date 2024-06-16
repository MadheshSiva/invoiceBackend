const mongoose = require("mongoose")

const invoiceModel = mongoose.Schema({
    items:{
        type : [String],
        require : true
    },
    rate:{
        type:String,
        require: true
    },
    IGST:{
     IGST_percentage: {
        type: String,
        require: true
     },
     IGST_Amt : {
        type : String,
        require: true
     }

    },

},{
    timestamps : true
})

const invoiceModlue = mongoose.model("invoice",invoiceModel)
module.exports = invoiceModlue;