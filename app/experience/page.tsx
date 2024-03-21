import Layout from "@/components/Layout";
import { Box, Typography } from "@mui/material";
import React from "react";

const Experience = () => {
    return (
        <Layout title="Experience">
            <Box className="experience">
                <Box className="zuno">
                    <p className="role">Frontend Developer</p>
                    <p className="company-name">Zuno General Insurance</p>
                    <p className="period">Aug 2022 - Present</p>
                    <ul className="work-info">
                        <li>
                            My responsibility at Zuno is to create the Frontend for the web applications based on the Business requirements.
                        </li>
                        <li>
                            I had an opportunity to work with technologies/languages like JavaScript, TypeScript, React JS, Next JS, Vite JS, Redux Toolkit, CSS, Sass, Material UI and Docker.
                            Integration of REST APIs with the frontend using axios.
                        </li>
                        <li>
                            For the contribution that I have done to the company and team, I was awarded with the title &quot;Popper&quot; (Surprise Achiever)
                        </li>
                    </ul>
                </Box>

                <Box className="vocera">
                    <p className="role">Quality Assurance Intern</p>
                    <p className="company-name">Vocera Communications (Now part of Stryker)</p>
                    <p className="period">Sept 2021 - July 2022</p>
                    <ul className="work-info">
                        <li>My responsibility was to write the Python with Selenium code in order to automate the manual testcases.</li>
                        <li>I have written most of the automation code for textcases related to company&apos;s gadget (Vocera badge) then after a
                            couple of testcases related to Mobile application and web application.</li>
                        <li>During my 10 months of tenure, I was the major contributor for the automation.</li>
                    </ul>
                </Box>
            </Box>
        </Layout>
    )
}

export default Experience;