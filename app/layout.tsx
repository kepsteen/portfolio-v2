import type { Metadata } from "next";
import localFont from "next/font/local";
import { Calistoga } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/dark mode/ThemeProvider";
import Link from "next/link";
import { ModeToggle } from "../components/dark mode/ModeToggle";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const calistoga = Calistoga({
	subsets: ["latin"],
	variable: "--font-calistoga",
	weight: ["400"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${calistoga.variable} antialiased`}
			>
				<div className="min-h-screen px-8 max-w-3xl flex flex-col gap-8 mx-auto">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<header className="h-16 p-4">
							<nav className="flex justify-between items-center">
								<ul className="flex gap-4">
									<li>
										<Link href="/" className="link">
											home
										</Link>
									</li>
									<li>
										<Link href="/about" className="link">
											about
										</Link>
									</li>
									<li>
										<Link href="/projects" className="link">
											projects
										</Link>
									</li>
								</ul>
								<ModeToggle />
							</nav>
						</header>
						{children}
					</ThemeProvider>
				</div>
			</body>
		</html>
	);
}