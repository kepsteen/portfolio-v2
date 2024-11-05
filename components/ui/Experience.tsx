import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import careerData from "@/lib/data/career.json";
import educationData from "@/lib/data/education.json";
import Timeline from "./Timeline";

export default function Experience() {
	const career = careerData.career;
	const education = educationData.education;

	return (
		<Tabs defaultValue="work">
			<TabsList className="mb-2 grid w-full grid-cols-2">
				<TabsTrigger value="work">Work</TabsTrigger>
				<TabsTrigger value="education">Education</TabsTrigger>
			</TabsList>
			<TabsContent value="work">
				<Timeline experience={career}></Timeline>
			</TabsContent>
			<TabsContent value="education">
				<Timeline experience={education}></Timeline>
			</TabsContent>
		</Tabs>
	);
}
