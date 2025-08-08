import { TryCatch } from "../middlewares/error.js";
import type { NextFunction, Request, Response } from "express";
// import { faker } from "@faker-js/faker";
import { Product } from "../models/product.js";
import { rm } from "fs";
import type {
    BaseQuery, 
    NewProductRequestBody, 
    SearchRequestQuery 
} from "../types/types.js"

import ErrorHandler from "../utils/utility-class.js";
import { myCache } from "../app.js";
import { invalidateCache } from "../utils/features.js";

  export const getlatestProducts = TryCatch(async (req, res, next) => {

    let products;

    if (myCache.has("latest-product")) 
      products = JSON.parse(myCache.get("latest-product") as string);
    else {
      products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
      myCache.set("latest-product", JSON.stringify(products));
    }

    return res.status(200).json({
    success: true,
    products
    });
  });

  export const getAllCategories = TryCatch(async (req, res, next) => {

  let categories;

  if (myCache.has("categories")) 
    categories = JSON.parse(myCache.get("categories") as string);
  else {
    categories = await Product.distinct("category");
    myCache.set("categories", JSON.stringify(categories));
  }
  return res.status(200).json({
    success: true,
    categories,
  });
});

export const getAdminProducts = TryCatch(async (req, res, next) => {

  let products;
 
    if (myCache.has("all-product")) 
      products = JSON.parse(myCache.get("all-product") as string);
    else {
      products = await Product.find({});
      myCache.set("all-product", JSON.stringify(products));
    }

  return res.status(200).json({
    success: true,
    products,
  });
});

export const getSingleProduct = TryCatch(async (req, res, next) => {

  let product;
  const id = req.params.id;
  const key = `product-${id}`;

    if (myCache.has(`key`)) 
      product = JSON.parse(myCache.get(`key`) as string);
  else {
    product = await Product.findById(id);
    if (!product) return next(new ErrorHandler("Product Not Found", 404));

    myCache.set(`key`, JSON.stringify(product));
  }

    return res.status(200).json({
    success: true,
    product,
    });
  });

  export const newProduct = TryCatch( async (
    req: Request<{}, {}, NewProductRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { name, price, stock, category, description } = req.body;
    const photo = req.file;

    if (!photo) return next(new ErrorHandler("Please add Photo", 400));

     if (!name || !price || !stock || !category || !description) {
        rm(photo.path, () => {
            console.log("Deleted");
        });

        return next(new ErrorHandler("Please enter All Fields", 400));
     }

     await Product.create({
      name,
      price,
      description,
      stock,
      category: category.toLowerCase(),
      photo: photo.path,
    });
        
    await invalidateCache({product : true});

    return res.status(201).json({
    success: true,
    message: "Product Created Successfully",
    });
  });

  export const updateProduct = TryCatch( async (req,res,next) => {

    const { id } = req.params 
    const { name, price, stock, category, description } = req.body;
    const photo = req.file;
    const product = await Product.findById(id);

    if (!product) return next(new ErrorHandler("Product not found!!", 404));
    

     if (photo) {
        rm(product.photo!, () => {
            console.log("Old Photo deleted !!");
        });
        product.photo = photo.path;
     }

     if(name) product.name = name;
     if(price) product.name = price;
     if(stock) product.name = stock;
     if(category) product.name = category;
     if(description) product.name = description;

    await product.save(); 
    await invalidateCache({product : true});  

    return res.status(200).json({
    success: true,
    message: "Product Updated Successfully",
    });
  });

  export const deleteProduct = TryCatch(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) return next(new ErrorHandler("Product not found!!", 404));

    rm(product.photo!, () => {
            console.log("Product Photo deleted !!");
        });
    
    await Product.deleteOne();
    await invalidateCache({product : true});

    return res.status(200).json({
    success: true,
    message: "Product deleted Successfully",
    });
  });

  export const getAllProducts = TryCatch(
    async (req: Request<{},{},{}, SearchRequestQuery>, res, next) => {
     
     const { search, sort, category, price } = req.query;
     const page = Number(req.query.page) || 1;

     let products;
     let totalPage;

      // 1,2,3,4,5,6,7,8
      // 9,10,11,12,13,14,15,16
      // 17,18,19,20,21,22,23,24
      const limit = Number(process.env.PRODUCT_PER_PAGE) || 8;
      const skip = (page - 1) * limit;

      const baseQuery: BaseQuery = {};

      if (search)
        baseQuery.name = {
          $regex: search,
          $options: "i",
        };

      if (price)
        baseQuery.price = {
          $lte: Number(price),
        };

      if (category) baseQuery.category = category;

      const productsPromise = Product.find(baseQuery)
        .sort(sort && { price: sort === "asc" ? 1 : -1 })
        .limit(limit)
        .skip(skip);

      const [productsFetched, filteredOnlyProduct] = await Promise.all([
        productsPromise,
        Product.find(baseQuery),
      ]);

      products = productsFetched;
      totalPage = Math.ceil(filteredOnlyProduct.length / limit);

    return res.status(200).json({
        success: true,
        products,
        totalPage
        });
    });

    
// const generateRandomProducts = async (count: number = 10) => {
//   const products = [];

//   for (let i = 0; i < count; i++) {
//     const product = {
//       name: faker.commerce.productName(),
//       photo: "uploads\\8c67ff04-9ce6-4053-97b9-9354e1cc80f8.jpg",
//       price: faker.commerce.price({ min: 1500, max: 80000, dec: 0 }),
//       stock: faker.commerce.price({ min: 0, max: 100, dec: 0 }),
//       category: faker.commerce.department(),
//       description: faker.commerce.productDescription(),
//       createdAt: new Date(faker.date.past()),
//       updatedAt: new Date(faker.date.recent()),
//       __v: 0,
//     };

//     products.push(product);
//   }

//   await Product.create(products);

//   console.log({ succecss: true });
// };


// const deleteRandomsProducts = async (count: number = 10) => {
//   const products = await Product.find({}).skip(2);

//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     await product.deleteOne();
//   }

//   console.log({ succecss: true });
// };

