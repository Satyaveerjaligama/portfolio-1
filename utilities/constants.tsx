export const routes: { [index: string]: string } = {
    skills: "skills",
    projects: "projects",
    experience: "experience",
    contact: "contact"
};

export const navigationOptions: string [] = ["skills", "projects", "experience", "contact"];

export const projects = [
    {
        projectTitle: "Portfolio 1",
        projectDescription: "It is a multi page web app which describes about my skills, projects, experience etc.",
        technologiesUsed: ["TypeScript", "React", "Next JS", "Sass", "Tailwind"]
    },
    {
        projectTitle: "E-commerce",
        projectDescription: "This E-commerce application has Login, Home, Cart, Account and product view pages.This is developed using JS, React, Redux Toolkit, Materil UI, Sass, Tailwind",
        technologiesUsed: ["JavaScript", "React", "Sass", "Redux-Toolkit", "Tailwind"]
    },
    {
        projectTitle: "Todo App",
        projectDescription: "This application will help the users to manage there daily tasks.It allows the user to create, modify and delete the tasks. Search option is also added for better user experience. User will get the insight about pending and completed tasks in the dashboard section",
        technologiesUsed: ["TypeScript", "React", "Vite JS", "Sass", "Redux-Toolkit"],
    },
    {
        projectTitle: "Portfolio 2",
        projectDescription: "This is a single page website(with Dark and light modes). This page consists of my skills, experience and links to connect with me over the social media platforms",
        technologiesUsed: ["JavaScript", "React", "CSS"],
    },
];