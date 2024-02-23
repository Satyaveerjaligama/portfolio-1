import Header from "@/components/Header";
import { ReactNode } from "react";

const Layout = ({children} : Readonly<{children: ReactNode}>) => {
    return (
        <html>
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}

export default Layout;