import React from "react";
import Image from "next/image";

/**
 * Defines the prop types for the Modal component.
 *
 * @interface ModalProps
 * @property {boolean} isOpen - Determines whether the modal is open.
 * @property {Function} onClose - Function to be called when closing the modal.
 * @property {React.ReactNode} children - The content to be displayed inside the modal.
 */
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}


 /**
 * A reusable modal component.
 *
 * @component
 * @param {ModalProps} props - The component props.
 * @param {boolean} props.isOpen - Determines whether the modal is visible.
 * @param {Function} props.onClose - Function to close the modal.
 * @param {React.ReactNode} props.children - The content to be displayed inside the modal.
 * @returns {JSX.Element | null} The modal component if `isOpen` is true, otherwise `null`.
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-[#202D3F] p-3 rounded-lg shadow-lg flex  w-150 relative text-white">
        <h2 className="absolute  font-bold text-white pl-3 pt-2">SXM-8 First Try</h2>
        <button name="back" onClick={onClose}className="absolute top-2 right-2 text-gray-500 pt-4 pr-4"><Image src="/back.png" width={26} height={26} alt="back"/></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
