import dbConnect from "../../../utils/mongo.js";
import Panini from "../../../models/Panini";

export default async function handler(req, res) {
    const { method, query: {id} } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const panini = await Panini.findById(id);
            res.status(200).json(panini);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    if (method === "PUT") {
        try {
            const panini = await Panini.findByIdAndUpdate(id, req.body);
            res.status(200).json(panini);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}