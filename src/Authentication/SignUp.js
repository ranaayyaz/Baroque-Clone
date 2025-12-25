import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          {" "}
          <img
            alt="BAROQUE Logo"
            src="https://cdn.shopify.com/s/files/1/2277/5269/files/Baroque_logo_24-Aug-2023_200x60@2x.png?v=1692878661.webp"
            className="h-7 sm:h-8 md:h-9 items-center mx-auto"
          />
        </h2>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full p-2 border rounded"
                placeholder="First name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="w-full p-2 border rounded"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="Email address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded"
              placeholder="Password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-2 border rounded"
              placeholder="Confirm password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-2  hover:bg-transparent hover:text-black border border-black transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/signin" className="text-black font-bold hover:underline">
            Sign in
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

export default SignUp;
