"use client"
import Header from "@/components/Header";
import { ReactNode } from "react";
import { inter } from "../app/fonts";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useRouter } from "next/navigation";
import { Box, Divider, Typography } from "@mui/material";

interface LayoutProps {
    children: ReactNode,
    title: string,
}

const Layout = (props: LayoutProps) => {
    const {children, title} = props;
    const router = useRouter();
    
    return (
        <html>
            <body className={inter.className}>
                <Header />
                <Box className="label-box mx-10">
                    <ArrowBackRoundedIcon className="cursor-pointer" onClick={()=>{
                        router.push("/");
                    }}/>
                    <Typography variant="h4" className="page-label">{title}</Typography>
                </Box>
                {children}
                <Divider sx={{margin:"auto", borderColor: "white", marginTop: "300px"}} className="w-11/12"/>
                <Typography className="py-2 text-center">&#169; Satyaveer Jaligama, All rights reserved</Typography>
            </body>
        </html>
    )
}

export default Layout;