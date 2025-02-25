import React, { useState } from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import ReferralModal from "./ReferralModal";
import { motion } from "framer-motion";

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
                    padding: "20px",
                }}
            >
                <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
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
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
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
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
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
                    </motion.div>

                    <ReferralModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </Container>
            </Box>
        </motion.div>
    );
};

export default HeroSection;
