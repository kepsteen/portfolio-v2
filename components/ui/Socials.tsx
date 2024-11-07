import { cn } from "@/lib/utils";
import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

interface SocialsProps {
	className?: string;
}

export default function Socials({ className }: SocialsProps) {
	return (
		<div className={cn("mt-4 flex items-center gap-4", className)}>
			<Link
				href="/CodyEpstein-resume.pdf"
				target="_blank"
				className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
			>
				Resume <FileDown />
			</Link>
			<Link href="https://www.linkedin.com/in/cody-epstein/" target="_blank">
				<Linkedin className="link" />
				<span className="sr-only">LinkedIn</span>
			</Link>
			<Link href="https://github.com/kepsteen/" target="_blank">
				<Github className="link" />
				<span className="sr-only">GitHub</span>
			</Link>
			<Link href="mailto:codykentepstein@gmail.com" target="_blank">
				<Mail className="link" />
				<span className="sr-only">Email</span>
			</Link>
		</div>
	);
}
