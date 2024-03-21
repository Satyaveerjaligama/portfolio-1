import React from "react";
import Layout from "@/components/Layout";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { projects } from "@/utilities/constants";
import TechnologyTiles from "@/components/TechnologyTiles";


const Projects = () => {
    return (
        <Layout title="Projects">
            <Box className="mx-10">
                <Grid container rowSpacing={2} columnSpacing={2}>
                    {projects.map((project, index)=>
                        <Grid item xs={12} sm={6} key={index}>
                            <Card className="project-card">
                                <CardContent>
                                    <p className="project-title">{project.projectTitle}</p>
                                    <TechnologyTiles list={project.technologiesUsed} />
                                    <p className="project-decription">{project.projectDescription}</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Layout>
    )
}

export default Projects;