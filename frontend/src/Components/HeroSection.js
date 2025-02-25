import React, { useState } from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import ReferralModal from "./ReferralModal";

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Box
            sx={{
                height: "100vh", // Full viewport height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
                padding: "20px",
            }}
        >
            <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                        marginBottom: "10px",
                    }}
                >
                    Refer & Earn
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        letterSpacing: "0.5px",
                        background: "linear-gradient(90deg, rgb(221, 7, 96), rgb(123, 160, 254))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginBottom: "30px",
                    }}
                >
                    Invite your friends and earn exciting rewards!
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        fontSize: "18px",
                        padding: "12px 35px",
                        borderRadius: "50px",
                        backgroundColor: "#fff",
                        color: "#d10760",
                        fontWeight: "bold",
                        textTransform: "none",
                        transition: "0.3s",
                        "&:hover": {
                            backgroundColor: "#d10760",
                            color: "#fff",
                            transform: "scale(1.05)",
                        },
                    }}
                    onClick={() => setIsModalOpen(true)}
                >
                    Refer Now 🚀
                </Button>

                <ReferralModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </Container>
        </Box>
    );
};

export default HeroSection;
