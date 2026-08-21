import mongoose, {Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"


const vedioSchema = new Schema({
    vedio:{
        type:String, //cloudnary url
        required:True
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        requried:true
    },
    view:{
        type:Number,
        default:0
    },
    isPublished:{
        type: Boolean,
        default: true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})


vedioSchema.plugin(mongooseAggregatePaginate)


export const Vedio = mongoose.model("Vedio",vedioSchema)