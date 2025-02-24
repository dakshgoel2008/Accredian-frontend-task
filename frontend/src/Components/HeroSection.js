import React, { useState } from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import ReferralModal from "./ReferralModal";

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <Box
            sx={{
                textAlign: "center",
                padding: "100px 20px",
                backgroundColor: "#f4f4f9",
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
                    Refer & Earn
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ color: "#666", marginBottom: "40px" }}>
                    Invite your friends and earn exciting rewards!🎁🎁
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={openModal}
                    sx={{ fontSize: "18px", padding: "10px 30px" }}
                >
                    Refer Now
                </Button>
                <ReferralModal isOpen={isModalOpen} onClose={closeModal} />
            </Container>
        </Box>
    );
};

export default HeroSection;
