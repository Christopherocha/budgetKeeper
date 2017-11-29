var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var BillSchema = new Schema ({
    billName: {
        type: String,
        required: true
    },
    billFrequecy: {
        type: Number,
        required: true
    },
    Amount: {
        type: Number, 
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

var Bill = mongoose.model("Bill", PostSchema);

module.exports = Bill;