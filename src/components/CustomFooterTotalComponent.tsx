import { Box, Typography } from "@mui/material";
import React from "react";

interface CustomFooterTotalComponentProps {
    total: number
};

const CustomFooterTotalComponent: React.FC<CustomFooterTotalComponentProps> = ({ total }) => {
    return (
        <Box sx={{ marginRight: '215px', display: "flex", justifyContent: "flex-end" }}>
            <Box sx={{ padding: "10px", width: 200, backgroundColor: '#ffd485', textAlign: "right" }}>
                <Typography variant="body1"><strong>SUB TOTAL: {total.toFixed(2)}</strong> </Typography>
            </Box>
        </Box>
    );
}

export default CustomFooterTotalComponent;