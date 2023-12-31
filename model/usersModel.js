// require modules
const mongoose = require("mongoose");



// schema for send userData to DataBase
const userSchema = mongoose.Schema({

    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    addresses:[{
        fullName:{
            type:String,
            required:true,
        },
        mobile:{
            type:Number,
            required:true,
        },
        houseName:{
            type:String,
            required:true,
        },
        colony:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },
        state:{
            type:String,
            required:true,
        },
        pin:{
            type:Number,
            required:true,
        },
    }],
    wallet:{
        balance:{
            type:Number,
            default: 0,
        },
        transactionHistory:[{
            amount:{
                type:Number,
                require:true
            },
            direction:{
                type:String,
                require:true
            },
            transactionDate:{
                type:Date,
                require:true
            },
        }]
    },
    password:{
        type:String,
        require:true
    },
    isVerified:{
        type:Boolean,
        require:true
    },
    status:{
        type:Boolean,
        require:true
    }
});

// export modules
module.exports = mongoose.model("User",userSchema);