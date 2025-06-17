import { useRef, useState } from "react";
import img from "../../assets/Group 2.png";
import { useAlert } from "../../context/AlertContext";
import { AddOrUpdateProfilePicture } from "../../services/api/account";

export default function ProfilePictureUpload() {
  const [file, setFile] = useState(null);
  const { showAlert } = useAlert();
  const inputRef = useRef();
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateFile(droppedFile);
  };

  const handleBrowse = (e) => {
    const selectedFile = e.target.files[0];
    validateFile(selectedFile);
  };

  const validateFile = (file) => {
    if (!file) return;
    const isValidType = ["image/jpeg", "image/png"].includes(file.type);
    const isValidSize = file.size <= 5 * 1024 * 1024;

    if (!isValidType) {
      showAlert("Only JPEG and PNG formats are allowed.", "error");
      return;
    }
    if (!isValidSize) {
      showAlert("File size must be under 5MB.", "error");
      return;
    }
    setFile(file);
    handleUpload(file);
  };

  const handleUpload = async (passedFile) => {
    const uploadFile = passedFile || file;
    if (!uploadFile) return;
    try {
      await AddOrUpdateProfilePicture(uploadFile);
      showAlert("Profile picture updated successfully!", "success");
      window.location.reload();
    } catch (err) {
      console.error("Upload failed:", err);
      showAlert("Upload failed. Please try again.", "error");
    }
  };

  return (
    <div className="max-w-md mx-auto rounded-t-xl border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex">
        <div className="w-12 h-12 p-2 rounded-full border-2 border-gray-300 mr-3">
          <img src={img} alt="img" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Change profile picture</h2>
          <p className="text-sm text-gray-500">Select and upload the picture</p>
        </div>
      </div>

      <div
        className="p-6 text-center border-2 border-dashed border-gray-300 rounded-b-xl bg-white cursor-pointer hover:border-gray-400"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current.click()}
      >
        <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleBrowse}
          ref={inputRef}
          className="hidden"
        />
        <div className="flex flex-col items-center">
          <img
            src={img}
            alt="Upload icon"
            className="w-10 h-10 mb-3 opacity-50"
          />
          <p className="text-gray-700 font-medium mb-1">
            Choose a file or drag & drop it here
          </p>
          <p className="text-sm text-gray-500 mb-4">
            JPEG and PNG formats, up to 5MB
          </p>
          <button
            type="button"
            className="px-4 py-2 bg-gray-100 rounded-md border border-gray-300 text-sm hover:bg-gray-200"
            onClick={() => handleUpload(file)}
          >
            Upload File
          </button>
        </div>

        {file && (
          <div className="mt-4 text-sm text-gray-700">
            Selected: <strong>{file.name}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
