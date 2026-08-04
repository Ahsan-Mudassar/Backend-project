import { v2 as cloudinary } from "cloudinary"
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        fs.unlinkSync(localFilePath)

        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)

        return null;
    }
}

const deleteFileOnCloundinary = async (publicId) => {
    try {

        if (!publicId) return null;
        const response = await cloudinary.uploader.destroy(publicId, {
            invalidate: true
        })

        return response;
    } catch (err) {
        console.log(err.message || "Some thing went wrong while detelting the image")
        return null;
    }
}

export { uploadOnCloudinary, deleteFileOnCloundinary };