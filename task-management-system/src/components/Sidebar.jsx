import { Home, Users, Clipboard, CheckCircle, BarChart2, LogOut } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { name: "Dashboard", icon: Home, key: "dashboard" },
    { name: "Users", icon: Users, key: "users" },
    { name: "Tasks", icon: Clipboard, key: "tasks" },
    { name: "Task Status", icon: CheckCircle, key: "status" },
    { name: "Reports", icon: BarChart2, key: "reports" },
    { name: "Logout", icon: LogOut, key: "logout" },
  ];

  return (
    <div className="w-72 bg-gradient-to-b from-green-600 to-green-700 text-white flex flex-col">
      <div className="flex flex-col items-center mt-8 mb-10">
        <img
          src="https://i.pravatar.cc/100"
          alt="Admin Profile"
          className="w-20 h-20 rounded-full border-2 border-white mb-2"
        />
        <h2 className="text-lg font-bold">Admin Name</h2>
        <p className="text-sm text-green-200">Administrator</p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition hover:bg-green-500 ${
              activeTab === item.key ? "bg-green-500" : ""
            }`}
          >
            <item.icon className="h-6 w-6 mr-3" />
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
