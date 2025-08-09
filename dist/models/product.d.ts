import mongoose from "mongoose";
export declare const Product: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    photo: string;
    price: number;
    stock: number;
    category: string;
    description: string;
    ratings: number;
    numOfReviews: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    photo: string;
    price: number;
    stock: number;
    category: string;
    description: string;
    ratings: number;
    numOfReviews: number;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    photo: string;
    price: number;
    stock: number;
    category: string;
    description: string;
    ratings: number;
    numOfReviews: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    photo: string;
    price: number;
    stock: number;
    category: string;
    description: string;
    ratings: number;
    numOfReviews: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    photo: string;
    price: number;
    stock: number;
    category: string;
    description: string;
    ratings: number;
    numOfReviews: number;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    photo: string;
    price: number;
    stock: number;
    category: string;
    description: string;
    ratings: number;
    numOfReviews: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=product.d.ts.map