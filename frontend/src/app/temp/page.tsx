import DetailForm from "@/components/DetailForm/DetailForm";
import Modal from "@/components/Modal/Modal";
import TokenModal from "@/containers/components/TokenModal";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Modal>
        <DetailForm />
      </Modal>
    </div>
  );
};

export default page;
