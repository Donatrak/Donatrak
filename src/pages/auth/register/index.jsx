import { useState } from "react";
import Input from "../../../components/formFields/Input";
import Checkbox from "../../../components/formFields/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/formFields/SubmitButton";
import { apiRegister } from "../../../services/auth";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
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
    if (!formData.firstName)
      validationErrors.firstName = "First name is required";
    if (!formData.lastName) validationErrors.lastName = "Last name is required";
    if (!formData.email || !emailRegex.test(formData.email))
      validationErrors.email = "Valid email is required";
    if (!formData.password || formData.password.length < 6)
      validationErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      validationErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreedToTerms)
      validationErrors.agreedToTerms =
        "You must agree to the terms and conditions";

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form (e.g., send data to backend)
      console.log("Form data submitted:", formData);
      setLoading(true);
      try {
        const res = await apiRegister({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        });
        if (res.status === 200 || res.status === 201) {
          console.log("Register response-->", res);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            agreedToTerms: false,
          });
          navigate("/login");
        }
      } catch (error) {
        console.log("Error registering user-->", error);
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="min-h-screen bg-background-light flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-primary-dark mb-6 text-center">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-4">
            {/* First Name */}
            <div className="w-full">
              <Input
                htmlFor="firstName"
                id="firstName"
                name="firstName"
                label="First Name"
                // placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required={true}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="w-full">
              <Input
                htmlFor="lastName"
                id="lastName"
                name="lastName"
                label="Last Name"
                // placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required={true}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
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
          </div>
          <div className="flex items-center gap-4">
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
            {/* Confirm Password */}
            <div className="w-full">
              <Input
                type="password"
                htmlFor="confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                // placeholder="Enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required={true}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* Agree to Terms */}
          <div className="flex items-center">
            <Checkbox
              id="agreedToTerms"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={(e) =>
                setFormData({ ...formData, agreedToTerms: e.target.checked })
              }
              label={
                <p>
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms and Conditions
                  </a>
                </p>
              }
              required={true}
            />
            {errors.agreedToTerms && (
              <p className="text-red-500 text-sm">{errors.agreedToTerms}</p>
            )}{" "}
          </div>

          {/* Submit Button */}
          <div>
            <SubmitButton label="Sign Up" />
          </div>
        </form>

        {/* Link to Login */}
        <p className="mt-6 text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
