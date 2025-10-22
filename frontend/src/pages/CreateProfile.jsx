import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProfileForm from "../components/ProfileForm";

export default function CreateProfile() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3001/api/profiles", data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create New Profile</h2>
        <ProfileForm onSubmit={handleSubmit} />
      </div>
    </>
  );
}
