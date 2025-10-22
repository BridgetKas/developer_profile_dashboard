export default function SearchBar({ onSearch ,handleProfileSearch}) {
    return (
      <div className="flex justify-between my-4 w-[60%] mx-auto">
        <input
          type="text"
          placeholder="Search by skill..."
          onChange={(e) => onSearch(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-2/3 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button onClick={handleProfileSearch} className="bg-blue-500 px-2 py-1.5 rounded-md text-white hover:bg-blue-700 cursor-pointer">Search</button>
      </div>
    );
}
  