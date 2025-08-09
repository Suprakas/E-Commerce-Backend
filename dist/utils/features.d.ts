import type { InvalidateCacheProps, OrderItemType } from "../types/types.js";
export declare const connectDB: (uri: string) => void;
export declare const invalidateCache: ({ product, order, admin, review, userId, orderId, productId, }: InvalidateCacheProps) => Promise<void>;
export declare const reduceStock: (orderItems: OrderItemType[]) => Promise<void>;
//# sourceMappingURL=features.d.ts.map