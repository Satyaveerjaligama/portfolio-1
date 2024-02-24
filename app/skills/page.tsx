"use client"
import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import SkillsCard from "@/components/SkillsCard";
import reactLogo from "@/assets/ReactJsLogo.png";
import nextLogo from "@/assets/NextJsLogo.png";
import htmlLogo from "@/assets/HtmlLogo.png";
import cssLogo from "@/assets/CssLogo.png";
import sassLogo from "@/assets/SassLogo.png";
import jsLogo from "@/assets/JavaScriptLogo.png";
import tsLogo from "@/assets/TypeScriptLogo.png";
import gitLogo from "@/assets/GitLogo.png";
import reduxLogo from "@/assets/ReduxLogo.png";

const Skills = () => {
    const skillsList = [
        {
            name: "React JS",
            logo: reactLogo
        },
        {
            name: "Next JS",
            logo: nextLogo
        },
        {
            name: "HTML",
            logo: htmlLogo
        },
        {
            name: "CSS",
            logo: cssLogo
        },
        {
            name: "SASS",
            logo: sassLogo
        },
        {
            name: "Java Script",
            logo: jsLogo
        },
        {
            name: "Type Script",
            logo: tsLogo
        },
        {
            name: "Redux",
            logo: reduxLogo
        },
        {
            name: "Git",
            logo: gitLogo
        },
    ];

    return (
        <Box className="skills mx-10">
            <Grid container columnGap={3} rowGap={2} className="justify-center">
                { skillsList.map((skill)=>
                    <Grid item key={skill.name}>
                        <SkillsCard
                            className="skill-card"
                            alt={`${skill.name} logo`}
                            skill={skill.name}
                            src={skill.logo}
                        />
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}

export default Skills;