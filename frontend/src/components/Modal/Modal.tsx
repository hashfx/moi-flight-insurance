import React from "react";

type IModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: IModalProps) => {
  return (
    <div className="flex justify-center items-center top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 absolute bg-[#20262E] border-[#797979] border rounded-md">
      {children}
    </div>
  );
};

export default Modal;
