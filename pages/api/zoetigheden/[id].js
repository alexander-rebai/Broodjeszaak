import dbConnect from "../../../utils/mongo.js";
import Zoetigheid from "../../../models/Zoetigheid";

export default async function handler(req, res) {
    const { method, query: {id} } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const zoetje = await Zoetigheid.findById(id);
            res.status(200).json(zoetje);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    if (method === "PUT") {
        try {
            const zoetje = await Zoetigheid.findByIdAndUpdate(id, req.body);
            res.status(200).json(zoetje);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}