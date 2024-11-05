import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface Experience {
	name: string;
	href: string;
	title: string;
	logo: string;
	start: string;
	end?: string;
	description: string[];
	links?: {
		name: string;
		href: string;
		icon: keyof typeof dynamicIconImports;
	}[];
}

export interface ExperienceData {
	education: Experience[];
	career: Experience[];
}

export interface tag {
	href: string;
	name: string;
}
export interface Project {
	name: string;
	description: string;
	href: string;
	image: string;
	tags: tag[];
	links: {
		name: string;
		href: string;
		icon: keyof typeof dynamicIconImports;
	}[];
}

export interface ProjectData {
	projects: Project[];
}
