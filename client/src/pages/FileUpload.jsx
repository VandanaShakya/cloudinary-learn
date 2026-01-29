import { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const onFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);

    if (selected.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(selected));
    } else {
      setPreview(null);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("file", file); // MUST be "file"

      const res = await axios.post(
        "http://localhost:5001/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload response:", res.data);

      setSuccess("✅ Upload successful!");

      // Reset
      setFile(null);
      setPreview(null);

    } catch (err) {
      console.error("Upload error:", err.response || err);
      alert("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg space-y-5"
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Upload Image
      </h2>

      <div className="relative w-full h-44 border-2 border-dashed border-gray-300 rounded-xl overflow-hidden cursor-pointer hover:border-blue-500 transition">

        {/* Image Preview */}
        {preview ? (
          <img src={preview} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <p>Click to upload image</p>
          </div>
        )}

        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-white border-t-transparent" />
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={onFileChange}
        />
      </div>

      {success && (
        <p className="text-green-600 text-center font-medium">{success}</p>
      )}

      <button
        type="submit"
        disabled={!file || loading}
        className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
}

export default FileUpload;
