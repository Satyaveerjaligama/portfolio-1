import { Card, CardContent, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface SkillsProps {
    src: string | StaticImageData;
    alt: string;
    skill: string;
    className?: string;
}

const SkillsCard = (props: SkillsProps) => {
    const {src, alt, skill, className} = props;
    return (
        <Card className={className}>
            <CardContent>
                <Image src={src} alt={alt} width={100} height={100}/>
                <Typography className="text-center mt-4">{skill}</Typography>
            </CardContent>
        </Card>
    )
}

export default SkillsCard;