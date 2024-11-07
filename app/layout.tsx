import type { Metadata } from "next";
import localFont from "next/font/local";
import { Calistoga } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/dark mode/ThemeProvider";
import Link from "next/link";
import { ModeToggle } from "../components/dark mode/ModeToggle";
import Footer from "@/components/ui/Footer";

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
	title: "Portfolio - Cody Epstein",
	description:
		"Software engineer portfolio showcasing projects and technical expertise of Cody Epstein",
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
				<div className="min-h-screen max-w-3xl flex flex-col gap-8 mx-auto">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<header className="h-16 px-8 py-4 sticky top-0 z-50 bg-background/75 backdrop-blur-sm">
							<nav className="flex justify-between items-center">
								<ul className="flex items-center gap-4">
									<li>
										<Link href="/" className="link">
											home
										</Link>
									</li>
									<li>
										<Link href="/projects" className="link">
											projects
										</Link>
									</li>
									<li>
										<Link href="/about" className="link">
											about
										</Link>
									</li>
								</ul>
								<ModeToggle />
							</nav>
						</header>
						<main className="px-8">{children}</main>
						<Footer />
					</ThemeProvider>
				</div>
			</body>
		</html>
	);
}
