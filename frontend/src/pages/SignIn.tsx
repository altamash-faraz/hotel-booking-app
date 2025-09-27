import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
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
      <div className="card max-w-md w-full p-8">
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold gradient-text-hotel">Welcome Back</h2>
            <p className="text-luxury-600 mt-2">Sign in to your account</p>
          </div>

          <label className="text-luxury-700 text-sm font-semibold">
            Email Address
            <input
              type="email"
              className="input-hotel mt-2"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
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

          <button
            type="submit"
            className="btn-primary w-full py-4 text-lg"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Signing In..." : "Sign In"}
          </button>

          <div className="text-center">
            <span className="text-luxury-600">
              Don't have an account?{" "}
              <Link 
                className="text-hotel-600 hover:text-hotel-700 font-semibold underline decoration-hotel-300 hover:decoration-hotel-500 transition-colors" 
                to="/register"
              >
                Create one here
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
