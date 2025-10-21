export default function SearchBar({ onSearch }) {
    return (
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search by skill..."
          onChange={(e) => onSearch(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-2/3 sm:w-1/3 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
    );
}
  