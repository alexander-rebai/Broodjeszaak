import dbConnect from "../../../utils/mongo.js";
import Drank from "../../../models/Drank";

export default async function handler(req, res) {
    const { method, query: {id} } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const drank = await Drank.findById(id);
            res.status(200).json(drank);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    if (method === "PUT") {
        try {
            const drank = await Drank.findByIdAndUpdate(id, req.body);
            res.status(200).json(drank);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}