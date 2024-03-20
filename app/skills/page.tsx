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
import dockerLogo from "@/assets/DockerLogo.webp";
import Layout from "@/components/Layout";

const Skills = () => {
    const skillsList = [
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
            name: "React JS",
            logo: reactLogo
        },
        {
            name: "Next JS",
            logo: nextLogo
        },
        {
            name: "Redux",
            logo: reduxLogo
        },
        {
            name: "Type Script",
            logo: tsLogo
        },
        {
            name: "Git",
            logo: gitLogo
        },
        {
            name: "Docker",
            logo: dockerLogo
        }
    ];

    return (
        <Layout title="Skills">
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
        </Layout>
    )
}

export default Skills;