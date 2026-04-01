import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {};

    if (!form.email.trim()) newError.email = "Email is required";
    if (!form.password.trim()) newError.password = "Password is required";

    setError(newError);

    if (Object.keys(newError).length === 0) {
      alert("Login Success ✅");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-lg w-[90%] max-w-sm text-white"
      >
        <h2 className="text-2xl font-bold text-center mb-5">
          Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className={`w-full p-2 rounded bg-white/20 placeholder-white outline-none ${
            error.email && "border border-red-500"
          }`}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        {error.email && (
          <p className="text-red-400 text-sm">{error.email}</p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className={`w-full p-2 mt-3 rounded bg-white/20 placeholder-white outline-none ${
            error.password && "border border-red-500"
          }`}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />
        {error.password && (
          <p className="text-red-400 text-sm">{error.password}</p>
        )}

        <button className="w-full bg-white text-black py-2 mt-4 rounded font-semibold hover:bg-gray-200">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;