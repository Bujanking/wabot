import mongoose, {Schema} from "mongoose";


const topicShchema = new Schema(
    {
        no: String,
        desc: String
    },{
        timestamps: true,
    }
);
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicShchema)

export default Topic;