import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";
// Middleware to make sure only admin is allowed
export const adminOnly = TryCatch(async (req, res, next) => {
    const { id } = req.query;
    if (!id)
        return next(new ErrorHandler("Please login First", 401));
    const user = await User.findById(id);
    if (!user)
        return next(new ErrorHandler("Given id is incorrect", 401));
    if (user.role !== "admin")
        return next(new ErrorHandler("You are not admin,for admins only", 403));
    next();
});
//# sourceMappingURL=auth.js.map