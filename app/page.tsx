import Experience from "@/components/ui/Experience";
import LinkWithIcon from "@/components/ui/LinkWithIcon";
import Projects from "@/components/ui/Projects";
import Socials from "@/components/ui/Socials";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

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
						<Socials />
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
					<Projects limit={LIMIT} />
				</section>
			</div>
		</>
	);
}
