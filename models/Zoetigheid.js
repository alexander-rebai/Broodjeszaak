import mongoose from 'mongoose';

const ZoetigheidSchema = new mongoose.Schema({
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

export default mongoose.models.Zoetigheid || mongoose.model('Zoetigheid', ZoetigheidSchema);