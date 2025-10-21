import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchProfiles();
  }, [query]);

  const fetchProfiles = async () => {
    try {
      const res = query
        ? await axios.get(`http://localhost:5000/api/profiles/search?skills=${query}`)
        : await axios.get("http://localhost:5000/api/profiles");
      setProfiles(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <SearchBar onSearch={setQuery} />
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

