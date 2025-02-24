import React, { useState } from "react";
import { TextField, Button, Typography, Stack } from "@mui/material";
import axios from "axios";

const ReferralForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        refereeName: "",
        refereeEmail: "",
        refereePhone: "", // Fixed typo (was refreePhone)
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.refereeName) newErrors.refereeName = "Referee Name is required";
        if (!formData.refereeEmail) newErrors.refereeEmail = "Referee Email is required";
        if (!formData.refereePhone) newErrors.refereePhone = "Referee Phone is required"; // Fixed typo
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await axios.post("http://localhost:4444/api/referrals", formData);
            console.log("Referral submitted:", response.data);
            onClose(); // Close the modal after submission
        } catch (error) {
            console.error("Error submitting referral:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", marginBottom: "20px" }}>
                Refer a Friend
            </Typography>
            <Stack spacing={3}>
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
                    name="refereePhone" // Fixed field name
                    value={formData.refereePhone} // Fixed state reference
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.refereePhone} // Fixed error reference
                    helperText={errors.refereePhone} // Fixed helper text reference
                />
                <Button type="submit" variant="contained" color="success" size="large" fullWidth>
                    Submit
                </Button>
            </Stack>
        </form>
    );
};

export default ReferralForm;
