import Projects from "@/components/ui/Projects";

export default async function ProjectPage() {
	return (
		<article className="mt-8 flex flex-col gap-8 pb-16">
			<h1 className="font-calistoga text-5xl">my projects.</h1>

			<Projects />
		</article>
	);
}
