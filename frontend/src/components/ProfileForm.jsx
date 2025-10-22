import { useState } from "react";

export default function ProfileForm({ onSubmit, initialData = {} }) {
  const [form, setForm] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    location: initialData.location || "",
    skills: initialData.skills?.join(", ") || "",
    experienceYears: initialData.experienceYears || "",
    hourlyRate: initialData.hourlyRate || "",
    availableForWork: initialData.availableForWork || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      skills: form.skills.split(",").map((s) => s.trim()),
    };
    onSubmit(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-2xl space-y-3 max-w-md mx-auto"
    >
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        className= " placeholder-gray-400 border border-gray-400 rounded w-full p-2  focus:border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none "

      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className= "placeholder-gray-400 border border-gray-400 rounded w-full p-2  focus:border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none "

      />
      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        className= "placeholder-gray-400 border border-gray-400 rounded w-full p-2  focus:border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none "

      />
      <input
        name="skills"
        placeholder="Skills (comma separated)"
        value={form.skills}
        onChange={handleChange}
        className= "placeholder-gray-400 border border-gray-400 rounded w-full p-2  focus:border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none "

      />
      <input
        type="number"
        name="experienceYears"
        placeholder="Experience (years)"
        value={form.experienceYears}
        onChange={handleChange}
        className= "placeholder-gray-400 border border-gray-400 rounded w-full p-2  focus:border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none "

      />
      <input
        type="number"
        name="hourlyRate"
        placeholder="Hourly rate (USD)"
        value={form.hourlyRate}
        onChange={handleChange}
        className= "placeholder-gray-400 border border-gray-400 rounded w-full p-2  focus:border-blue-600 focus:ring-blue-600 focus:ring-2 focus:outline-none "

      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="availableForWork"
          checked={form.availableForWork}
          onChange={handleChange}
        />
        Available for work
      </label>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full transition"
      >
        Save Profile
      </button>
    </form>
  );
}
