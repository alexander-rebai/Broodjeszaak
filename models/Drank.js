import mongoose from 'mongoose';

const DrankSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100,
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export default mongoose.models.Drank || mongoose.model('Drank', DrankSchema);