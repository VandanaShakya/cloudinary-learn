
// upload profile picture//
export const uploadFile = async (req, res) => {
    try {
      res.json({
        message: "File uploaded successfully",
        fileUrl: req.file.path, // Cloudinary URL
      });
    } catch (err) {
      res.status(500).json({ message: "Upload failed" });
    }
  };
  