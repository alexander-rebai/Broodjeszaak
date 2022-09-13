import dbConnect from "../../../utils/mongo.js";
import Broodje from "../../../models/Broodje";

export default async function handler(req, res) {
    const { method } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const broodjes = await Broodje.find();
            res.status(200).json(broodjes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    if (method === "POST") {
        try {
            const broodje = await Broodje.create(req.body);
            res.status(201).json(broodje);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}