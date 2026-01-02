"use client";
import React, { useState, FC, ChangeEvent, KeyboardEvent } from "react";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import CustomIcon from "@/components/shared/customIcon";
import {
  AdminAuthModalProps,
  PasswordInputFormProps,
  SuccessMessageProps,
  ErrorMessageProps,
} from "@/types";

const ADMIN_PASSWORD = "Sheikh101@#$";

const AdminAuthModal: FC<AdminAuthModalProps> = ({ open, setOpen }) => {
  const [adminPassword, setAdminPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setAdminPassword(e.target.value);
  };

  const handleTogglePassword = (): void => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (): void => {
    const passwordIsCorrect = adminPassword === ADMIN_PASSWORD;
    setSubmitted(true);
    setIsCorrect(passwordIsCorrect);
  };

  const handleClose = (): void => {
    setOpen(false);
    resetForm();
  };

  const handleTryAgain = (): void => {
    setSubmitted(false);
    setAdminPassword("");
    setShowPassword(false);
  };

  const resetForm = (): void => {
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
      <div className="bg-background border border-primary shadow-md p-10 w-full max-w-[500px] rounded-secondary flex flex-col gap-10">
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
};

const PasswordInputForm: FC<PasswordInputFormProps> = ({
  adminPassword,
  showPassword,
  onPasswordChange,
  onTogglePassword,
  onSubmit,
}) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
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
          className="outline-none border border-gray-300 p-2 rounded-primary w-full px-4 pr-10 focus:border-primary focus:ring-1 focus: ring-primary transition-colors"
          value={adminPassword}
          onChange={onPasswordChange}
          onKeyPress={handleKeyPress}
          autoFocus
          aria-label="Admin password"
        />
        <button
          type="button"
          onClick={onTogglePassword}
          className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-all duration-200"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <CustomIcon
            iconName={showPassword ? EyeOff : Eye}
            className="size-5 text-gray-600 hover:text-gray-800"
          />
        </button>
      </div>

      <button
        onClick={onSubmit}
        className="bg-primary p-3 rounded-secondary text-center text-base font-semibold leading-[110%] cursor-pointer hover: opacity-90 active:scale-95 transition-all"
        type="button"
      >
        Submit
      </button>
    </div>
  );
};

const SuccessMessage: FC<SuccessMessageProps> = ({ onClose }) => {
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
};

const ErrorMessage: FC<ErrorMessageProps> = ({ onTryAgain }) => {
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
};

export default AdminAuthModal;
