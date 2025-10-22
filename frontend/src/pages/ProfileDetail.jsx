import { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function ProfileDetail() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  const navigate = useNavigate()

  useEffect( () => {
    async function fetchProfilesById(){
      try{
        const response = await axios.get(`http://localhost:3001/api/profiles/${id}`)
        const data = await response.data.data
        setProfile(data)
      }catch(err) {
        console.log(err);
      }
    }
    fetchProfilesById()
  }, [id]);

 
  if (!profile) return <p className="text-center mt-6"> Error Loading Developer Profile</p>;

  function handleEditProfile() {
    navigate(`/edit/${id}`)

  }

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto bg-white p-6 mt-8 rounded-lg shadow">
        <div className='flex flex-col gap-1.5'>
          <h2 className="text-xl font-semibold mb-2">{profile.name}</h2>
          <p>Email: {profile.email}</p>
          <p>Location: {profile.location}</p>
          <p>Skills: {profile.skills.join(',')}</p>
          <p>Experience: {profile.experienceYears} years</p>
          <p>Hourly Rate: ${profile.hourlyRate}/hr</p>
          <p>{profile.availableForWork ? "Profile Available" : "Profile Not available"}</p>
        </div>
        <div className='text-center'>
          <button type='button' onClick={handleEditProfile} className="py-2 px-4 rounded-md bg-blue-500 text-white">Edit</button>
        </div>
       
      
      </div>
    </>
  );
}
