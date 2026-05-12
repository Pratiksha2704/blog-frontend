import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
const handleRegister = async (e) => {
  e.preventDefault();

  if (password !== conpassword) {
    setError("Passwords do not match");
    return;
  }

  try {
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();

    console.log(data);
    alert("User Registered Successfully");

    setLoading(false);

  } catch (error) {
    console.log(error);
    setError("Something went wrong");
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register Here...📝
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded-lg text-sm mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>


          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            
              <span
                className="absolute right-3 top-2 cursor-pointer text-gray-500 text-sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-600 mb-1">Confirm Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={conpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

            
              <span
                className="absolute right-3 top-2 cursor-pointer text-gray-500 text-sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            </div>

          {/* Button */}
          <button
            type="Submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300 font-semibold disabled:bg-blue-400"
          >
            {loading ? "Registering...." : "register"}
          </button>

        </form>

        <p className="text-center text-gray-500 mt-4 text-sm">
          Already have an account?{" "}
          <span
  onClick={() => navigate("/login")}
  className="text-blue-600 cursor-pointer hover:underline"
>
  Login
</span>
        </p>


      </div>
    </div>
  );
}

export default Register;