import { Experience } from "@/lib/types";
import TimelineItem from "./TimelineItem";
import { Card, CardContent } from "./card";

interface Props {
	experience: Experience[];
}

export default function Timeline({ experience }: Props) {
	return (
		<section>
			<Card className="rounded-lg">
				<CardContent className="p-0 bg-background">
					<ul className="ml-10 border-l">
						{experience.map((exp, id) => (
							<TimelineItem key={id} experience={exp} />
						))}
					</ul>
				</CardContent>
			</Card>
		</section>
	);
}
