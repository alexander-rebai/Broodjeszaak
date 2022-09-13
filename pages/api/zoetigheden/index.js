import dbConnect from "../../../utils/mongo.js";
import Zoetigheid from "../../../models/Zoetigheid";

export default async function handler(req, res) {
    const { method } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const zoetjes = await Zoetigheid.find();
            res.status(200).json(zoetjes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    if (method === "POST") {
        try {
            const zoetje = await Zoetigheid.create(req.body);
            res.status(201).json(zoetje);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}