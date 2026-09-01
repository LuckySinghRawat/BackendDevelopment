import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import jwt from "jsonwebtoken"
import { User } from "../models/user.models.js"

export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
/*
req.cookies?.accessToken -> takes stored token client side 
req.header("Authorization")?.replace("Bearer ", "") -> here we have to provide accessToken by using header
                                                    -> passing (key:value) Authorization: Bearer <Accesstoken> 
*/
        if (!token) {
            throw new ApiError(401, "Unauthorizied request")
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id)
            .select("-password -refreshToken")
        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }

        req.user = user
        next()
    }
    catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }

})