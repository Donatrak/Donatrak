import { useState } from "react";
import Input from "../../../components/formFields/Input";
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/formFields/SubmitButton";
import { apiLogin } from "../../../services/auth";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email))
      validationErrors.email = "Valid email is required";
    if (!formData.password || formData.password.length < 6)
      validationErrors.password = "Password must be at least 6 characters";

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form (e.g., send data to backend)
      console.log("Login data submitted:", formData);
      setLoading(true);
      try {
        const res = await apiLogin({
          email: formData.email,
          password: formData.password,
        });
        if (res.status === 200) {
          console.log("Login response-->", res.data.accessToken);
          window.localStorage.setItem(
            "donatrakAccessToken",
            res.data.accessToken
          );
          navigate("/user/dashboard");
        }
      } catch (error) {
        console.log("Error logging in-->", error);
        setErrors({ server: "Invalid email or password" });
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="min-h-screen bg-background-light flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-primary-dark mb-6 text-center">
          Log In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="w-full">
            <Input
              htmlFor="email"
              id="email"
              name="email"
              label="Email"
              // placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required={true}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="w-full">
            <Input
              type="password"
              htmlFor="password"
              id="password"
              name="password"
              label="Password"
              // placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required={true}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Server Errors */}
          {errors.server && (
            <p className="text-red-500 text-sm">{errors.server}</p>
          )}

          {/* Submit Button */}
          <div>
            <SubmitButton label={loading ? "Logging in..." : "Log In"} />
          </div>
        </form>

        {/* Link to Register */}
        <p className="mt-6 text-sm text-center text-gray-500">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
