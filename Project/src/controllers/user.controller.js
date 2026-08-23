import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.models.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const registerUser = asyncHandler( async(req, res) =>{
    // res.status(200).json({
    //     message:"OK Lucky"
    // })

    /**
    STEPS NOW TO DO 
    1. get user details from frontend or thunder clint
    2. validation - not empty
    3. check if user already exists:username and emails
    4. check for images, avatar
    5. upload them to cloudinary
    6. create user object - create entry in db
    7. remove password and refresh token field
    8. check for user creation
    9. return res 
    */


// step 1
    const {fullname,email,username, password} = req.body
    console.log("Email:", email)
    
// step 2
    if(
        [fullname, email, username, password].some((field => 
            field?.trim() === ""))
    ){
        throw new ApiError(400,"All fields are required")
    }
    
// step 3
    const existedUser = await User.findOne({
        $or: [{ username },{ email }]
    })
    if(existedUser){
        throw new ApiError(409, "Username and email already existed !!! ")
    }
    
// step 4
    const avatarLocalPath = req.files?.avatar?.[0]?.path // print it 
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar Image is required")
    }

// step 5
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400,"Avatar File required for upload")
    }

// step 6
    const user = await User.create({
        fullname,
        avatar:avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()

    })

// step 7
    const createdUsername = await User.findById(user._id).select(
        "-password -refreshToken"
    )

// step 8
    if(!createdUsername){
        throw new ApiError(500, "Something went wrong with createdUsername")
    }

//step 9
    return res.status(201).json(
        new ApiResponse(200, createdUsername, "User registered successfully")
    )
    
})

export {registerUser,}