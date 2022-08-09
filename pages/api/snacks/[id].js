import dbConnect from "../../../utils/mongo.js";
import Snack from "../../../models/Snack";

export default async function handler(req, res) {
    const { method, query: {id} } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const snack = await Snack.findById(id);
            res.status(200).json(snack);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    if (method === "PUT") {
        try {
            const snack = await Snack.findByIdAndUpdate(id, req.body);
            res.status(200).json(snack);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}