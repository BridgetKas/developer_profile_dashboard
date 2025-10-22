import { useEffect, useState,useCallback} from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [query, setQuery] = useState("");

  const fetchProfiles = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/profiles");
      setProfiles(res.data.data);
    } catch (error) {
      console.error(error);
    }
  },[]);

  const searchProfiles = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:3001/api/profiles/search?skills=${query}`)
      setProfiles(res.data.data);
    } catch (error) {
      console.error(error);
    }
  },[query]);

  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles]);

  return (
    <>
      <Navbar  />
      <div className="container mx-auto p-6">
        <SearchBar onSearch={setQuery} handleProfileSearch={searchProfiles}/>
        {profiles.length ? (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {profiles.map((p) => (
              <ProfileCard key={p._id} profile={p} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">No profiles found.</p>
        )}
      </div>
    </>
  );
}

