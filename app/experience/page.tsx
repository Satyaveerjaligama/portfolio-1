import React from "react";
import Layout from "@/components/Layout";
import { Box } from "@mui/material";

const Experience = () => {
    const experienceInformation = [
        {
            companyName: "Zuno General Insurance",
            role: "Frontend Developer",
            employmentType: "Full time",
            duration: "Aug 2022 - Present",
            className: "zuno",
            workDescription: [
                "My responsibility at Zuno is to create the Frontend for the web applications based on the Business requirements.",
                "I had an opportunity to work with technologies/languages like JavaScript, TypeScript, React JS, Next JS, Vite JS, Redux Toolkit, CSS, Sass, Material UI and Docker. Integration of REST APIs with the frontend using axios.",
                "For the contribution that I have done to the company and team, I was awarded with the title 'Popper' (Surprise Achiever)."
            ]
        },
        {
            companyName: "Vocera Communications",
            role: "Quality Assurance Engineer",
            employmentType: "Intern",
            duration: "Sept 2021 - July 2022",
            className: "vocera",
            workDescription: [
                "My responsibility was to write the Python with Selenium code in order to automate the manual testcases.",
                "I have done most of the automation for testcases related to company's gadget (Vocera badge) then after a couple of testcases related to Mobile application and web application."
            ]
        }
    ];

    return (
        <Layout title="Experience">
            <Box className="experience">
                { experienceInformation.map((experience, index)=>
                    <Box className={experience.className} key={index}>
                        <p className="role">{experience.role}</p>
                        <p className="company-name">{experience.companyName} - {experience.employmentType}</p>
                        <p className="period">{experience.duration}</p>
                        <ul className="work-info">
                            { experience.workDescription.map((point, index)=>
                                <li key={index}>
                                    {point}
                                </li>
                            )}
                        </ul>
                    </Box>
                )}
            </Box>
        </Layout>
    )
}

export default Experience;