import React from "react";
import Layout from "@/components/Layout";
import { Box, Grid, Link } from "@mui/material";
import { LinkedIn, WhatsApp, Instagram, EmailOutlined, GitHub } from "@mui/icons-material";


const Contact = () => {
    return (
        <Layout title="Contact">
            <Box>
                <Grid container className="contacts-container">
                    <Grid item xs={6} sm={2.4}>
                        <Link href="https://www.linkedin.com/in/satyaveer-jaligama" target="_blank">
                            <LinkedIn className="contact-options"/>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2.4}>
                        <Link href="https://github.com/Satyaveerjaligama" target="_blank">
                            <GitHub className="contact-options"/>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2.4}>
                        <Link href="mailto:satyaveerjaligama13@gmail.com" target="_blank">
                            <EmailOutlined className="contact-options"/>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2.4}>
                        <Link href="https://www.instagram.com/satyaveer_jaligama/" target="_blank">
                            <Instagram className="contact-options"/>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2.4}>
                        <Link href="https://wa.me/qr/FB2UCT6ZJPQKL1" target="_blank">
                            <WhatsApp className="contact-options"/>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

export default Contact;