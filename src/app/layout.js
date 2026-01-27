import {Geist, Geist_Mono, Homemade_Apple, Playfair_Display} from "next/font/google";
import "./globals.css"


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const homemadeApple = Homemade_Apple({
    weight: "400",
    variable: "--font-homemade-apple",
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"]
})


export const metadata = {
    title: "Brendon's Portfolio",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${homemadeApple.variable}
          ${playfair.variable}
          antialiased
        `}
        >
        {children}
        </body>
        </html>
    );
}
