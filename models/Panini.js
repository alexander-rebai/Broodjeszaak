import mongoose from 'mongoose';

const PaniniSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 80,
    },
    ingredients: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export default mongoose.models.Panini || mongoose.model('Panini', PaniniSchema);