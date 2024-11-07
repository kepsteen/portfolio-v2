import Socials from "@/components/ui/Socials";
import About from "@/content/about.mdx";
import Hobbies from "@/content/hobbies.mdx";

export default function AboutPage() {
	return (
		<article className="mt-8 flex flex-col gap-8 pb-16">
			<h1 className="font-calistoga text-5xl">about me.</h1>
			<Socials />
			<div className="prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert">
				<h2>Bio</h2>
				<About />
				<h2>Hobbies</h2>
				<Hobbies />
			</div>
		</article>
	);
}
