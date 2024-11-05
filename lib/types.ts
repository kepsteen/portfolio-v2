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
