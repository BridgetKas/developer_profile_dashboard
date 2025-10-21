import { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/profiles")
      .then(res => setProfiles(res.data))
      .catch(err => console.error(err));
    }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {profiles.map((p) => <ProfileCard key={p._id} profile={p} />)}
    </div>
  );
}
