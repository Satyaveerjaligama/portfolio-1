import { Button } from "@mui/material";
import React, { MouseEventHandler } from "react";

interface CustomButtonProps {
    title: string;
    variant: "text" | "outlined" | "contained";
    className?: string;
    onClick?: MouseEventHandler;
};

const CustomButton = (props: CustomButtonProps) => {
    const {title, variant, className, onClick} = props;
    return (
        <Button
            className={className}
            variant={variant}
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

export default CustomButton;