import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "Admin" && password === "123") {
      localStorage.setItem("isAdmin", "true"); // Save session
      navigate("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-green-400 to-green-600">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-96">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-green-800">
          Admin Login
        </h1>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-5 py-3 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-green-500 font-semibold"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-green-700 mt-6 text-sm">
          Welcome back! Please login to continue.
        </p>
      </div>
    </div>
  );
}
