import mongoose from "mongoose";
const nameSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    }
})

const name = mongoose.model('name', nameSchema);
export default name;