import Experience from "@/components/ui/Experience";
import LinkWithIcon from "@/components/ui/LinkWithIcon";
import { ArrowRightIcon, FileDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const BIRTH_YEAR = 1997;
	const LIMIT = 2;
	return (
		<>
			<div className="flex flex-col gap-16">
				<article className="md:flex flex-row-reverse gap-8 items-center">
					<Image
						alt="picture of me"
						src="/me.webp"
						width={180}
						height={180}
						className="rounded-3xl"
					/>
					<div className="flex flex-col mt-4">
						<h1 className="text-5xl font-calistoga">
							hi cody here <span>👋🏼</span>
						</h1>
						<p className="font-light mt-4">
							{new Date().getFullYear() - BIRTH_YEAR}-year-old{" "}
							<s>nursing assistant</s> full stack developer from 📍Irvine, CA
						</p>
						<p className="font-light mt-2">
							I like to build things, drink coffee and play pickleball
						</p>
						<div className="mt-4 flex items-center gap-4">
							<Link
								href="/CodyEpstein-resume.pdf"
								target="_blank"
								className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
							>
								Resume <FileDown />
							</Link>
							<Link
								href="https://www.linkedin.com/in/cody-epstein/"
								target="_blank"
							>
								<Linkedin className="link" />
							</Link>
							<Link href="https://github.com/kepsteen/" target="_blank">
								<Github className="link" />
							</Link>
							<Link href="mailto:codykentepstein@gmail.com" target="_blank">
								<Mail className="link" />
							</Link>
						</div>
					</div>
				</article>
				<Experience />
				<section className="flex flex-col gap-8">
					<div className="flex justify-between">
						<h2 className="font-calistoga text-2xl sm:text-3xl">
							featured projects
						</h2>
						<LinkWithIcon
							href="/projects"
							position="right"
							icon={<ArrowRightIcon className="size-5" />}
							text="view more"
						/>
					</div>
					{/* <Projects limit={LIMIT} /> */}
				</section>
			</div>
		</>
	);
}
