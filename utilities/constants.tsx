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
        projectDescription: "It is a website with multiple pages like Home, Skills, Projects, Experience and Contact. One can navigate through this pages and check my work.",
        technologiesUsed: ["TypeScript", "React", "Next JS", "Sass", "Tailwind"]
    },
    {
        projectTitle: "E-commerce",
        projectDescription: "This E-commerce application has Login, Home, Product View, Cart and Account pages. User can navigate through these pages and can add the products to his cart.",
        technologiesUsed: ["JavaScript", "React", "Sass", "Redux-Toolkit", "Tailwind"]
    },
    {
        projectTitle: "Todo App",
        projectDescription: "This app can be used to manage day to day tasks. It has 4 sections Dashboard, All tasks, Completed and Pending Tasks. User can create, modify and delete tasks based on his requirement.",
        technologiesUsed: ["TypeScript", "React", "Vite JS", "Sass", "Redux-Toolkit"],
    },
    {
        projectTitle: "Portfolio 2",
        projectDescription: "It is a single page website (with light and dark mode options). It displays the details about my skills, experience, education and social media links to get in touch with me.",
        technologiesUsed: ["JavaScript", "React", "CSS"],
    },
];