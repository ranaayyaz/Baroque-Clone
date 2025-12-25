import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:7777/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      if (!res.ok) {
        let errBody = null;
        try {
          errBody = await res.json();
        } catch (e) {
          /* ignore parse error */
        }
        throw new Error(
          (errBody && errBody.message) || `Request failed: ${res.status}`
        );
      }

      const data = await res.json();
      console.log("SignIn response:", data);

      if (data && data.status === "success") {
        setMessage("Login successful");
        const token = data.token || null;
        const user = data.user || null;

        if (!token) console.warn("No token received from login response");
        if (!user) console.warn("No user object received from login response");

        // store separately for compatibility
        if (token) localStorage.setItem("token", token);
        if (user) {
          try {
            localStorage.setItem("user", JSON.stringify(user));
          } catch (e) {
            console.error("Failed to save user to localStorage", e);
          }
        }

        // store combined auth object
        try {
          const auth = { token: token, user: user };
          localStorage.setItem("auth", JSON.stringify(auth));
        } catch (e) {
          console.error("Failed to save auth to localStorage", e);
        }

        // redirect to admin dashboard
        navigate("/");
      } else {
        throw new Error((data && data.message) || "Login failed");
      }
    } catch (err) {
      console.error("SignIn error:", err);
      setMessage(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          <Link to="/">
            <img
              alt="BAROQUE Logo"
              src="https://cdn.shopify.com/s/files/1/2277/5269/files/Baroque_logo_24-Aug-2023_200x60@2x.png?v=1692878661.webp"
              className="h-7 sm:h-8 md:h-9 items-center mx-auto"
            />
          </Link>
        </h2>

        {message && (
          <p className="text-center my-4 text-sm text-red-500 font-bold">
            {message}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter E-mail"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white p-2  hover:bg-transparent hover:text-black border border-black transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-black font-bold hover:underline">
            Sign up
          </Link>
        </p>

        <p className="text-center mt-4 text-sm">
          Go To{" "}
          <Link to="/" className="text-black font-bold hover:underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
