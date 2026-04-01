import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {};

    if (!form.name.trim()) newError.name = "Name is required";
    if (!form.email.trim()) newError.email = "Email is required";
    if (!form.password.trim()) newError.password = "Password is required";
    if (!form.confirm.trim()) newError.confirm = "Confirm password required";

    if (form.password && form.confirm && form.password !== form.confirm) {
      newError.confirm = "Passwords do not match";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      alert("Registered Successfully ✅");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">

      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl w-[90%] max-w-md text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className={`w-full p-2 rounded bg-white/20 placeholder-white outline-none ${
            error.name && "border border-red-500"
          }`}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        {error.name && <p className="text-red-400 text-sm">{error.name}</p>}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className={`w-full p-2 mt-3 rounded bg-white/20 placeholder-white outline-none ${
            error.email && "border border-red-500"
          }`}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        {error.email && <p className="text-red-400 text-sm">{error.email}</p>}

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
        {error.password && <p className="text-red-400 text-sm">{error.password}</p>}

        {/* Confirm */}
        <input
          type="password"
          placeholder="Confirm Password"
          className={`w-full p-2 mt-3 rounded bg-white/20 placeholder-white outline-none ${
            error.confirm && "border border-red-500"
          }`}
          onChange={(e) =>
            setForm({ ...form, confirm: e.target.value })
          }
        />
        {error.confirm && <p className="text-red-400 text-sm">{error.confirm}</p>}

        <button className="w-full bg-white text-black py-2 mt-5 rounded font-semibold hover:bg-gray-200">
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span className="underline cursor-pointer">Login</span>
        </p>
      </form>
    </div>
  );
};

export default Register;