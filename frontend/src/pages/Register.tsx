import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration Success!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="card max-w-2xl w-full p-8">
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold gradient-text-hotel">Join MernHolidays</h2>
            <p className="text-luxury-600 mt-2">Create your account to start booking amazing hotels</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="text-luxury-700 text-sm font-semibold">
              First Name
              <input
                className="input-hotel mt-2"
                placeholder="Enter your first name"
                {...register("firstName", { required: "First name is required" })}
              />
              {errors.firstName && (
                <span className="text-sunset-500 text-sm mt-1 block">{errors.firstName.message}</span>
              )}
            </label>
            <label className="text-luxury-700 text-sm font-semibold">
              Last Name
              <input
                className="input-hotel mt-2"
                placeholder="Enter your last name"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <span className="text-sunset-500 text-sm mt-1 block">{errors.lastName.message}</span>
              )}
            </label>
          </div>

          <label className="text-luxury-700 text-sm font-semibold">
            Email Address
            <input
              type="email"
              className="input-hotel mt-2"
              placeholder="Enter your email address"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-sunset-500 text-sm mt-1 block">{errors.email.message}</span>
            )}
          </label>

          <label className="text-luxury-700 text-sm font-semibold">
            Password
            <input
              type="password"
              className="input-hotel mt-2"
              placeholder="Create a strong password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-sunset-500 text-sm mt-1 block">{errors.password.message}</span>
            )}
          </label>

          <label className="text-luxury-700 text-sm font-semibold">
            Confirm Password
            <input
              type="password"
              className="input-hotel mt-2"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                validate: (val) => {
                  if (!val) {
                    return "Please confirm your password";
                  } else if (watch("password") !== val) {
                    return "Passwords do not match";
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <span className="text-sunset-500 text-sm mt-1 block">{errors.confirmPassword.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="btn-primary w-full py-4 text-lg mt-4"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="text-center">
            <span className="text-luxury-600">
              Already have an account?{" "}
              <Link 
                className="text-hotel-600 hover:text-hotel-700 font-semibold underline decoration-hotel-300 hover:decoration-hotel-500 transition-colors" 
                to="/sign-in"
              >
                Sign in here
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
