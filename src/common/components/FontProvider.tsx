import { Poppins } from "next/font/google";
import React, { FC } from "react";


const PoppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const FontProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className={PoppinsFont.className}>{children}</div>
}

export default FontProvider