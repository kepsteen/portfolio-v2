import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<main>
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
							27-year-old <s>nursing assistant</s> full stack developer from
							📍Irvine, CA
						</p>
						<p className="font-light mt-2">
							I like to build things, drink coffee and play pickle ball
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
			</main>
		</>
	);
}
