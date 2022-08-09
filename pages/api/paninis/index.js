import dbConnect from "../../../utils/mongo.js";
import Panini from "../../../models/Panini";

export default async function handler(req, res) {
    const { method } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const paninis = await Panini.find();
            res.status(200).json(paninis);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    if (method === "POST") {
        try {
            const panini = await Panini.create(req.body);
            res.status(201).json(panini);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}