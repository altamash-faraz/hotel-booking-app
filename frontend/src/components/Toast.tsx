import { useEffect } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const styles =
    type === "SUCCESS"
      ? "fixed top-4 right-4 z-50 p-4 rounded-xl bg-forest-500 text-white max-w-md shadow-luxury border border-forest-400"
      : "fixed top-4 right-4 z-50 p-4 rounded-xl bg-sunset-500 text-white max-w-md shadow-luxury border border-sunset-400";

  const Icon = type === "SUCCESS" ? AiOutlineCheckCircle : AiOutlineCloseCircle;

  return (
    <div className={`${styles} transform transition-all duration-300 hover:scale-105`}>
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 flex-shrink-0" />
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-auto text-white/80 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
