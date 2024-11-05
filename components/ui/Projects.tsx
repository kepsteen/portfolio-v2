import projectData from "@/lib/data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/lib/types";

interface Props {
	limit?: number;
}

export default function Projects({ limit }: Props) {
	let projects = projectData.projects as Project[];
	if (limit) {
		projects = projects.slice(0, limit);
	}

	return (
		<section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{projects.map((project, id) => (
				<ProjectCard key={id} project={project} />
			))}
		</section>
	);
}
