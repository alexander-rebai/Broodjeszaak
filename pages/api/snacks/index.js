import dbConnect from "../../../utils/mongo.js";
import Snack from "../../../models/Snack";

export default async function handler(req, res) {
    const { method } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const snacks = await Snack.find();
            res.status(200).json(snacks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    if (method === "POST") {
        try {
            const snack = await Snack.create(req.body);
            res.status(201).json(snack);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}