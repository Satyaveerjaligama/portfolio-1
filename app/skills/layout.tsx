"use client"
import Header from "@/components/Header";
import { ReactNode } from "react";
import { inter } from "../fonts";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";

const Layout = ({children} : Readonly<{children: ReactNode}>) => {
    const router = useRouter();
    return (
        <html>
            <body className={inter.className}>
                <Header />
                <Box className="label-box mx-10">
                    <ArrowBackRoundedIcon className="cursor-pointer" onClick={()=>{
                        router.push("/");
                    }}/>
                    <Typography variant="h4" className="page-label">Skills</Typography>
                </Box>
                {children}
            </body>
        </html>
    )
}

export default Layout;