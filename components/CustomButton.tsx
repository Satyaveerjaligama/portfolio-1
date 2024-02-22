import { Button } from "@mui/material";

interface CustomButtonProps {
    title: string;
    variant: "text" | "outlined" | "contained";
};

const CustomButton = (props: CustomButtonProps) => {
    const {title, variant} = props;
    return (
        <Button
            variant={variant}
        >
            {title}
        </Button>
    )
}

export default CustomButton;