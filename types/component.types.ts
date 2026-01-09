import { LucideIcon } from "lucide-react";
import { ChangeEvent, KeyboardEvent } from "react";

// types/iconTypes
export interface IconTypes {
  iconName: LucideIcon;
  className?: string;
  onClick?: () => void;
}

// types/adminAuthModal.tsx
export interface AdminAuthModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface PasswordInputFormProps {
  adminPassword: string;
  showPassword: boolean;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTogglePassword: () => void;
  onSubmit: () => void;
}

export interface SuccessMessageProps {
  onClose: () => void;
}

export interface ErrorMessageProps {
  onTryAgain: () => void;
}

// State types (optional but useful)
export interface AdminAuthState {
  adminPassword: string;
  submitted: boolean;
  isCorrect: boolean;
  showPassword: boolean;
}

// types/button.tsx
export interface ButtonProps {
  text: string;
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  iconImgStart?: string;
  iconImgEnd?: string;
  iconClass?: string;
}
