import dbConnect from "../../../utils/mongo.js";
import Drank from "../../../models/Drank";

export default async function handler(req, res) {
    const { method } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const dranken = await Drank.find();
            res.status(200).json(dranken);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    if (method === "POST") {
        try {
            const drank = await Drank.create(req.body);
            res.status(201).json(drank);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}