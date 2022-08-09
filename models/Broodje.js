import mongoose from 'mongoose';

const BroodjeSchema = new mongoose.Schema({
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
    },
    categorie: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.models.Broodje || mongoose.model('Broodje', BroodjeSchema);