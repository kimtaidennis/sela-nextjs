import { model, models, Schema } from "mongoose";

export interface IImage extends Document {
    title: string;                             // Required
    transformationType: string;                // Required
    publicId: string;                          // Required
    secureURL: string;                         // Required
    width?: number;                            // Optional
    height?: number;                           // Optional
    config?: object;          // Optional, can be an object
    transformationUrl?: string;                // Optional
    aspectRatio?: string;                      // Optional
    color?: string;                            // Optional
    prompt?: string;                           // Optional
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    }                         // Optional, typically ObjectId as a string
    createdAt?: Date;                          // Optional, defaults to now
    updatedAt?: Date;                          // Optional, defaults to now
}

const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    secureURL: { type: String, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: String },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Image = models?.Image || model('Image', ImageSchema);

export default Image;