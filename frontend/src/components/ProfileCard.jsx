import { MdModeEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaForward } from "react-icons/fa";


export default function ProfileCard({ profile }) {
  const navigate = useNavigate();
    function handleEditProfile(){
      navigate(`/profile/${profile._id}`)
    }

    return (
      <div className=" flex items-start justify-between p-4 bg-white rounded-lg shadow">
        <div className='flex flex-col gap-1.5'>
          <h2 className="text-lg font-semibold">{profile.name}</h2>
          <p>{profile.location}</p>
          <p className="text-sm text-gray-600">
            Skills: {profile.skills.join(", ")}
          </p>
          <p>{profile.availableForWork ? "Profile Available" : "Profile Not available"}</p>
        </div>
        <div  onClick={ handleEditProfile}>
          <FaForward size={20} color="green" />
        </div>
      </div>
    );
  }
  