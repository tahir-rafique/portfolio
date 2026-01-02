"use client";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import CustomIcon from "@/components/shared/customIcon";

const ADMIN_PASSWORD = "Sheikh101@#$";

export default function AdminAuthModal({ open, setOpen }) {
  const [adminPassword, setAdminPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setAdminPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = () => {
    const passwordIsCorrect = adminPassword === ADMIN_PASSWORD;
    setSubmitted(true);
    setIsCorrect(passwordIsCorrect);
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const handleTryAgain = () => {
    setSubmitted(false);
    setAdminPassword("");
    setShowPassword(false);
  };

  const resetForm = () => {
    setAdminPassword("");
    setSubmitted(false);
    setIsCorrect(false);
    setShowPassword(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="flex justify-center items-center"
    >
      <div className="bg-background border border-primary shadow-md p-6 sm:p-10 w-full max-w-[500px] rounded-secondary flex flex-col gap-10 m-2">
        <h2 id="modal-title" className="text-3xl font-bold text-center">
          Only for Admin!
        </h2>

        <div className="flex flex-col gap-2">
          <h3 id="modal-subtitle" className="text-xl font-semibold">
            Admin Authentication
          </h3>

          {!submitted ? (
            <PasswordInputForm
              adminPassword={adminPassword}
              showPassword={showPassword}
              onPasswordChange={handlePasswordChange}
              onTogglePassword={handleTogglePassword}
              onSubmit={handleSubmit}
            />
          ) : isCorrect ? (
            <SuccessMessage onClose={handleClose} />
          ) : (
            <ErrorMessage onTryAgain={handleTryAgain} />
          )}
        </div>
      </div>
    </Modal>
  );
}

function PasswordInputForm({
  adminPassword,
  showPassword,
  onPasswordChange,
  onTogglePassword,
  onSubmit,
}) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex items-center gap-3 relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Admin Password"
          className="outline-none border border-gray-300 p-2 rounded-primary w-full px-4 pr-10 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          value={adminPassword}
          onChange={onPasswordChange}
          onKeyPress={handleKeyPress}
          autoFocus
          aria-label="Admin password"
        />
        <button
          type="button"
          onClick={onTogglePassword}
          className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 p-1 transition-all duration-200"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <CustomIcon
            iconName={showPassword ? EyeOff : Eye}
            className="size-5 text-text-heading"
          />
        </button>
      </div>

      <button
        onClick={onSubmit}
        className="bg-primary p-3 rounded-secondary text-center text-base font-semibold leading-[110%] cursor-pointer hover:opacity-90 active:scale-95 transition-all"
        type="button"
      >
        Submit
      </button>
    </div>
  );
}

function SuccessMessage({ onClose }) {
  return (
    <>
      <p className="text-green-600 font-semibold my-1 flex items-center gap-2">
        <span className="text-lg">✓</span> Password Correct!
      </p>
      <Link
        href="/admin"
        className="bg-primary p-3 rounded-secondary text-center text-base font-semibold leading-[110%] cursor-pointer hover:opacity-90 active:scale-95 transition-all block"
        onClick={onClose}
      >
        Access Admin Dashboard
      </Link>
    </>
  );
}

function ErrorMessage({ onTryAgain }) {
  return (
    <>
      <p className="text-red-600 font-semibold my-1 flex items-center gap-2">
        <span className="text-lg">✗</span> Wrong Password!
      </p>
      <button
        onClick={onTryAgain}
        className="bg-primary p-3 rounded-secondary text-center text-base font-semibold leading-[110%] cursor-pointer hover:opacity-90 active:scale-95 transition-all"
        type="button"
      >
        Try Again
      </button>
    </>
  );
}
