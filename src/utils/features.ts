import mongoose from "mongoose";
import type { InvalidateCacheProps, OrderItemType } from "../types/types.js";
import { Product } from "../models/product.js";
import { myCache } from "../app.js";

export const connectDB = () => {
    mongoose.connect("mongodb+srv://SuprakashBallav1:Suprakash995@cluster0.epqw1.mongodb.net/E-Commerce-DB", {
        dbName : "E-Commerce-DB",
    }).then((c) => console.log(`DB connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};


export const invalidateCache = async ({
  product,
  order,
  admin,
  review,
  userId,
  orderId,
  productId,
}: InvalidateCacheProps) => {

  if (product) {
    const productKeys: string[] = [
      "latest-products",
      "categories",
      "all-products",
    ];

    const products = await Product.find({}).select("_id");

      products.forEach((i) => { 
        productKeys.push(`product-${i._id}`);
        });

         if (typeof productId === "string") productKeys.push(`product-${productId}`);

         if (typeof productId === "object")
            productId.forEach((i) => productKeys.push(`product-${i}`));

        myCache.del(productKeys);
      }
    if (order) {
        const ordersKeys: string[] = [
          "all-orders",
          `my-orders-${userId}`,
          `order-${orderId}`,
          ];  
          myCache.del(ordersKeys);
       }
    if (admin) {
     
      }
  };

export const reduceStock = async (orderItems: OrderItemType[]) => {
  for (let i = 0; i < orderItems.length; i++) {
    const order = orderItems[i];
    if (!order) continue;
    const product = await Product.findById(order.productId);
    if (!product) throw new Error("Product Not Found");
    product.stock -= order.quantity;
    await product.save();
      }
    };