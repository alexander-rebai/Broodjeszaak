import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
        maxLength: 80,
    },
    phone: {
        type: String,
        required: false,
        maxLength: 200
    },
    total: {
        type: Number,
        required: true
    },
    products: {
        type: [String],
        required: true
    },
    saladItems : {
        type: [[String]],
        required: false
    },
    paymentMethod: {
        type: Number,
        required: true
    },
    afgewerkt: {
        type: Boolean,
        required: true,
        default: false
    },
    comment: {
        type: String,
        required: false,
    }
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);