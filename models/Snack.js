import mongoose from 'mongoose';

const SnackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 80,
    },
    price: {
        type: Number,
        required: true
    },
    keuzeOpties: {
        type: [{ keuze: { type: String, required: true }}],
        required: false
    }
}, { timestamps: true });

export default mongoose.models.Snack || mongoose.model('Snack', SnackSchema);