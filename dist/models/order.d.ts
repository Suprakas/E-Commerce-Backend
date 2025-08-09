import mongoose from "mongoose";
export declare const Order: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: string;
    status: "Processing" | "Shipped" | "Delivered";
    subtotal: number;
    tax: number;
    shippingCharges: number;
    discount: number;
    total: number;
    orderItems: mongoose.Types.DocumentArray<{
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }> & {
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }>;
    shippingInfo?: {
        address: string;
        city: string;
        state: string;
        country: string;
        pinCode: number;
    } | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: string;
    status: "Processing" | "Shipped" | "Delivered";
    subtotal: number;
    tax: number;
    shippingCharges: number;
    discount: number;
    total: number;
    orderItems: mongoose.Types.DocumentArray<{
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }> & {
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }>;
    shippingInfo?: {
        address: string;
        city: string;
        state: string;
        country: string;
        pinCode: number;
    } | null;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: string;
    status: "Processing" | "Shipped" | "Delivered";
    subtotal: number;
    tax: number;
    shippingCharges: number;
    discount: number;
    total: number;
    orderItems: mongoose.Types.DocumentArray<{
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }> & {
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }>;
    shippingInfo?: {
        address: string;
        city: string;
        state: string;
        country: string;
        pinCode: number;
    } | null;
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
    user: string;
    status: "Processing" | "Shipped" | "Delivered";
    subtotal: number;
    tax: number;
    shippingCharges: number;
    discount: number;
    total: number;
    orderItems: mongoose.Types.DocumentArray<{
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }> & {
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }>;
    shippingInfo?: {
        address: string;
        city: string;
        state: string;
        country: string;
        pinCode: number;
    } | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: string;
    status: "Processing" | "Shipped" | "Delivered";
    subtotal: number;
    tax: number;
    shippingCharges: number;
    discount: number;
    total: number;
    orderItems: mongoose.Types.DocumentArray<{
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }> & {
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }>;
    shippingInfo?: {
        address: string;
        city: string;
        state: string;
        country: string;
        pinCode: number;
    } | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: string;
    status: "Processing" | "Shipped" | "Delivered";
    subtotal: number;
    tax: number;
    shippingCharges: number;
    discount: number;
    total: number;
    orderItems: mongoose.Types.DocumentArray<{
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }> & {
        name?: string | null;
        photo?: string | null;
        price?: number | null;
        productId?: {
            prototype?: mongoose.Types.ObjectId | null;
            cacheHexString?: unknown;
            generate?: {} | null;
            createFromTime?: {} | null;
            createFromHexString?: {} | null;
            createFromBase64?: {} | null;
            isValid?: {} | null;
        } | null;
        quantity?: number | null;
    }>;
    shippingInfo?: {
        address: string;
        city: string;
        state: string;
        country: string;
        pinCode: number;
    } | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=order.d.ts.map