var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var UserSchema = new Schema ({
    userName: {
        type: String, 
        trim: true,
        required: false
    },
    firstName: {
        type: String,
        required: true
    }, 
    lastName: {
        type: String, 
        required: true
    }, 
    email: {
        type: String,
        required: "Email is Required", 
        unique: true,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    }, 
    password: {
        type: String,
        required: "Password is Required",
        validate: [
            function(input) {
                return input.length >= 6
            },
            "Password should be more than 5 characters"
        ]

    },
    bills: [{ type: Schema.Types.ObjectId, ref: 'Bill' }]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;