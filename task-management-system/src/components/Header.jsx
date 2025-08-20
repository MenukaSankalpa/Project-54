import { SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow">
      <div className="flex items-center space-x-2">
        <SearchIcon className="h-6 w-6 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-3 py-1 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="text-gray-700 font-medium">Admin Name</div>
    </div>
  );
}
