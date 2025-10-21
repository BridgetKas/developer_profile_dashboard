export default function ProfileCard({ profile }) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold">{profile.name}</h2>
        <p>{profile.location}</p>
        <p className="text-sm text-gray-600">
          Skills: {profile.skills.join(", ")}
        </p>
        <p>{profile.availableForWork ? "Profile Available" : "Profile Not available"}</p>
      </div>
    );
  }
  