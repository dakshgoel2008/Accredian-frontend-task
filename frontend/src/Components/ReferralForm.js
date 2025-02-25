import React, { useState } from "react";
import { TextField, Button, Typography, Stack } from "@mui/material";
import axios from "axios";

const ReferralForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        refereeName: "",
        refereeEmail: "",
        refereePhone: "",
        referrerEmail: "",
        referrerName: "",
        courseName: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.referrerName) newErrors.referrerName = "Referrer Name is required";
        if (!formData.referrerEmail) newErrors.referrerEmail = "Referrer Email is required";
        if (!formData.refereeName) newErrors.refereeName = "Referee Name is required";
        if (!formData.refereeEmail) newErrors.refereeEmail = "Referee Email is required";
        if (!formData.refereePhone) newErrors.refereePhone = "Referee Phone is required";
        if (!formData.courseName) newErrors.courseName = "Course Name is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const payload = {
                referrerName: formData.referrerName,
                referrerEmail: formData.referrerEmail,
                name: formData.refereeName,
                email: formData.refereeEmail,
                phone: formData.refereePhone,
                courseName: formData.courseName,
            };

            const response = await axios.post("http://localhost:4444/referrals", payload, {
                headers: { "Content-Type": "application/json" },
            });

            console.log("Referral submitted:", response.data);
            onClose();
        } catch (error) {
            console.error("Error submitting referral:", error.response?.data || error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography
                variant="h5"
                gutterBottom
                sx={{
                    fontWeight: "bold",
                    color: "#d10760",
                    textAlign: "center",
                    marginBottom: "20px",
                }}
            >
                Refer a Course 🚀
            </Typography>

            <Stack spacing={2}>
                {/* Form Fields */}
                <TextField
                    label="Referrer's Name"
                    name="referrerName"
                    value={formData.referrerName}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.referrerName}
                    helperText={errors.referrerName}
                    sx={{ borderRadius: "8px" }}
                />

                <TextField
                    label="Referrer's Email"
                    name="referrerEmail"
                    value={formData.referrerEmail}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.referrerEmail}
                    helperText={errors.referrerEmail}
                />

                <TextField
                    label="Referee's Name"
                    name="refereeName"
                    value={formData.refereeName}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.refereeName}
                    helperText={errors.refereeName}
                />

                <TextField
                    label="Referee's Email"
                    name="refereeEmail"
                    value={formData.refereeEmail}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.refereeEmail}
                    helperText={errors.refereeEmail}
                />

                <TextField
                    label="Referee's Phone"
                    name="refereePhone"
                    value={formData.refereePhone}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.refereePhone}
                    helperText={errors.refereePhone}
                />

                <TextField
                    label="Enter Course Name"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.courseName}
                    helperText={errors.courseName}
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#d10760",
                        color: "#fff",
                        padding: "12px",
                        fontSize: "16px",
                        borderRadius: "30px",
                        fontWeight: "bold",
                        "&:hover": {
                            backgroundColor: "#a1054a",
                            transform: "scale(1.05)",
                            transition: "0.3s",
                        },
                    }}
                >
                    Submit Referral ✅
                </Button>
            </Stack>
        </form>
    );
};

export default ReferralForm;
