import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/ui/InputField";
import { HiMail, HiLockClosed, HiEye, HiEyeOff } from "react-icons/hi";

type SignUpFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>();

  const passwordValue = watch("password");

  const onSubmit = async (data: SignUpFormData) => {
    // Simulate an async call (e.g. API request)
    await new Promise((res) => setTimeout(res, 1000));
    console.log("Form submitted:", data);
    // TODO: call your auth API here
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050a1a] font-barlow p-5">
      {/* Two-column card */}
      <div
        className="
        grid grid-cols-1 md:grid-cols-2
        w-full max-w-[860px] min-h-[500px]
        rounded-sm overflow-hidden
        border border-white/[0.06]
        shadow-[0_40px_80px_rgba(0,0,0,0.6)]
      "
      >
        {/* ── Left panel ── */}
        <div
          className="
          relative flex flex-col justify-center
          bg-gradient-to-br from-[#1a3a8f] via-[#0d1f5c] to-[#060d2e]
          px-11 py-14 overflow-hidden
        "
        >
          <div
            aria-hidden
            className="absolute top-0 -right-[60px] bottom-0 w-[120px] z-10"
            style={{
              background:
                "linear-gradient(135deg, #0a1540 50%, transparent 50%)",
            }}
          />

          <div className="relative z-20">
            <h1
              className="
              font-rajdhani font-bold uppercase leading-[1.05] tracking-wide
              text-white text-[clamp(2.2rem,4vw,3.2rem)] mb-5
            "
            >
              Create Your
              <br />
              Account
            </h1>
            <p className="text-[0.85rem] font-light text-white/60 leading-relaxed max-w-[280px]">
              Sign up to start exploring a wide range of comfortable shortlet
              spaces tailored to your needs. Create an account to easily book,
              manage your stays, and enjoy a smooth experience from start to
              finish.
            </p>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="bg-[#090f22] px-11 py-14 flex flex-col justify-center gap-7">
          <h2 className="font-rajdhani font-semibold text-[1.9rem] tracking-[0.05em] text-white text-center">
            Sign Up
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-5"
          >
            <InputField
              label="Email"
              icon={<HiMail />}
              error={errors.email?.message}
              type="email"
              placeholder="you@example.com"
              inputProps={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />

            <InputField
              label="Password"
              icon={<HiLockClosed />}
              error={errors.password?.message}
              type={showPassword ? "text" : "password"}
              placeholder="Min. 8 characters"
              inputProps={register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Must be at least 8 characters",
                },
              })}
              rightElement={
                <span onClick={() => setShowPassword((v) => !v)}>
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </span>
              }
            />

            <InputField
              label="Confirm Password"
              icon={<HiLockClosed />}
              error={errors.confirmPassword?.message}
              type={showConfirm ? "text" : "password"}
              placeholder="Repeat password"
              inputProps={register("confirmPassword", {
                required: "Please confirm your password",
                validate: (val) =>
                  val === passwordValue || "Passwords do not match",
              })}
              rightElement={
                <span onClick={() => setShowConfirm((v) => !v)}>
                  {showConfirm ? <HiEyeOff /> : <HiEye />}
                </span>
              }
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full py-3.5 mt-1 rounded-[3px]
                bg-[#2d5cf5] hover:bg-[#3b6ef5]
                active:scale-[0.98]
                disabled:opacity-60 disabled:cursor-not-allowed
                text-white font-barlow font-medium tracking-[0.06em]
                transition-all duration-200
              "
            >
              {isSubmitting ? "Creating account…" : "Next"}
            </button>
          </form>

          <p className="text-center text-[0.82rem] text-white/40">
            Already have an account?
            <a
              href="/signin"
              className="text-[#3b6ef5] font-medium ml-1 hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
