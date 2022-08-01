import dbConnect from "../../../utils/mongo.js";
import Product from "../../../models/Product";

export default async function handler(req, res) {
    const { method, query: {id} } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    if (method === "PUT") {
        try {
            const product = await Product.findByIdAndUpdate(id, req.body);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    if (method === "DELETE") {
        try {

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}