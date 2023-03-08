import { useState } from "react";
import axios from "axios";
import { getAuthorizationHeader } from "../../utils/getAuthorizationHeader";
const UploadModal = ({ allFolders }) => {
  const [file, setFile] = useState<File | null>(null);
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", allFolders?.id);
      const response = await axios
        .post(`${process.env.baseUrl}/files/upload`, formData, {
          headers: getAuthorizationHeader(),
        })
        .then((response) => console.log("response", response))
        .catch((error) => console.log("error", error));
    }

    // Handle response
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileInputChange} />
      <button type="submit">Upload</button>
    </form>
  );
};
export default UploadModal;
