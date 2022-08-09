import dbConnect from "../../../utils/mongo.js";
import Broodje from "../../../models/Broodje";

export default async function handler(req, res) {
    const { method, query: {id} } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const broodje = await Broodje.findById(id);
            res.status(200).json(broodje);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    if (method === "PUT") {
        try {
            const broodje = await Broodje.findByIdAndUpdate(id, req.body);
            res.status(200).json(broodje);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}