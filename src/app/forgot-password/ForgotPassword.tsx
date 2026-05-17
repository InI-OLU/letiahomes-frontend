"use client";

import { useForm } from "react-hook-form";
import InputField from "@/components/ui/InputField";
import { HiMail } from "react-icons/hi";
import Link from "next/link";

type ForgotPasswordFormData = {
  email: string;
};

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>();

  const onSubmit = async (data: ForgotPasswordFormData) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log("Reset link sent to:", data.email);
    // TODO: call your forgot-password API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-barlow p-5">
      {/* Two-column card */}
      <div
        className="
        grid grid-cols-1 md:grid-cols-2
        w-full max-w-[860px] min-h-[500px]
        rounded-sm overflow-hidden
        border border-white/[0.06]
        bg-[#041456]"
      >
        {/* ── Left panel ── */}
        <div className="relative flex flex-col justify-center px-11 py-14 overflow-hidden">
          <div
            aria-hidden
            className="absolute top-0 -right-[60px] bottom-0 w-[120px] z-10"
          />

          <div className="relative z-20">
            <h1
              className="
              font-rajdhani font-bold uppercase leading-[1.05] tracking-wide
              text-white text-[clamp(2.2rem,4vw,3.2rem)] mb-5
            "
            >
              Forgot
              <br />
              Password
            </h1>
            <p className="text-[0.85rem] font-light text-white/60 leading-relaxed max-w-[280px]">
              No worries, enter your email and we&apos;ll send you a link to
              reset your password and get back into your account quickly.
            </p>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div
          className="px-11 py-14 flex flex-col justify-center gap-7 bg-[#02040C]"
          style={{
            clipPath: "polygon(39% 2%, 97% 2%, 97% 97%, 0% 97%)",
            color: "#041456",
          }}
        >
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-[50%] py-2.5 mt-1 rounded-[3px]
                ml-auto
                bg-[#0E1767] hover:bg-[#3b6ef5]
                active:scale-[0.98]
                disabled:opacity-60 disabled:cursor-not-allowed
                text-white font-barlow font-medium tracking-[0.06em]
                transition-all duration-200
              "
            >
              {isSubmitting ? "Sending link…" : "Next"}
            </button>
          </form>

          <p className="text-center text-[0.82rem] text-white/40 ml-24">
            Remember your password?{" "}
            <Link
              href="/signin"
              className="text-[#3b6ef5] font-medium ml-1 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;