import mongoose from "mongoose";


const notificationSchema = new mongoose.Schema({
    from:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    to:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type:{
        type: String,
        required: true,
        enum: ['like','comment','follow']
    },
    read:{
        type: Boolean,
        default: false//user read or not checking
    }
},{timestamp: true});


const Notification = mongoose.model('Notification',notificationSchema);
export default Notification;