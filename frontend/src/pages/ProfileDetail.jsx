import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function ProfileDetail() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/profiles/${id}`)
      .then(res => setProfile(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!profile) return <p className="text-center mt-6">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto bg-white p-6 mt-8 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">{profile.name}</h2>
        <p>Email: {profile.email}</p>
        <p>Location: {profile.location}</p>
        <p>Skills: {profile.skills.join(", ")}</p>
        <p>Experience: {profile.experienceYears} years</p>
        <p>Hourly Rate: ${profile.hourlyRate}/hr</p>
        <p>{profile.availableForWork ? "Profile Available" : "Profile Not available"}</p>
      </div>
    </>
  );
}
