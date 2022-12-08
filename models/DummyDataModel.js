const mongoose = require('mongoose')

const DummyDataSchema = mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    distance:{
        type:Number,
        required: [true, 'Please add a distance value']
    },
    cost:{
        type:Number,
        required: [true, 'Please add a cost value']
    },
    createdAt:{
        type:String,
        required: [true, 'Please add a secretKey']
    },


}
)


module.exports = mongoose.model('DummyDataModel', DummyDataSchema)

