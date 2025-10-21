import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import ProfileForm from "../components/ProfileForm";

export default function EditProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/profiles/${id}`)
      .then(res => setProfile(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:5000/api/profiles/${id}`, data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (!profile) return <p className="text-center mt-6">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Profile</h2>
        <ProfileForm onSubmit={handleSubmit} initialData={profile} />
      </div>
    </>
  );
}
