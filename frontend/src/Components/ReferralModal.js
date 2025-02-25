import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import ReferralForm from "./ReferralForm";
import CloseIcon from "@mui/icons-material/Close";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "500px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.2)", // Subtle shadow
    borderRadius: "12px", // Smooth rounded edges
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
};

const ReferralModal = ({ isOpen, onClose }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={modalStyle}>
                {/* Just a closing button */}
                <IconButton onClick={onClose} sx={{ alignSelf: "flex-end", color: "#d10760" }}>
                    <CloseIcon />
                </IconButton>

                <ReferralForm onClose={onClose} />
            </Box>
        </Modal>
    );
};

export default ReferralModal;
