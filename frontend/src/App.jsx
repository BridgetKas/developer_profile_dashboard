import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateProfile from "./pages/CreateProfile";
import EditProfile from "./pages/EditProfile";
import ProfileDetail from "./pages/ProfileDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProfile />} />
        <Route path="/edit/:id" element={<EditProfile />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

