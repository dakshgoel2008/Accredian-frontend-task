import React from "react";
import { Modal, Box } from "@mui/material";
import ReferralForm from "./ReferralForm";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "500px",
  backgroundColor: "#fff",
  boxShadow: 24,
  borderRadius: "8px",
  padding: "24px",
};

const ReferralModal = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyle}>
        <ReferralForm onClose={onClose} />
      </Box>
    </Modal>
  );
};

export default ReferralModal;