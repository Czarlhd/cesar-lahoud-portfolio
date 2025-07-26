import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { JOBS, EDUCATION, CERTIFICATES } from "../../data/resume";
import JobSection, { jobDetails } from "../ui/job-section";
import EducationSection from "../ui/education-section";
import CertificateSection from "../ui/certificate-section";

export default function ResumeSection() {
	const data = [
		{
			title: "Experience",
			content: (
				<div className="flex flex-col gap-[30px]">
					{JOBS.map((job: jobDetails) => (
						<JobSection key={job.name} jobDetails={job} />
					))}
				</div>
			),
		},
		{
			title: "Education",
			content: (
				<div className="flex flex-col gap-[30px]">
					{EDUCATION.map((ed) => (
						<EducationSection key={ed.name} educationDetails={ed} />
					))}
				</div>
			),
		},
		{
			title: "Certificates",
			content: (
				<div className="flex flex-col gap-[30px]">
					{CERTIFICATES.map((cert) => (
						<CertificateSection
							key={cert.name}
							certificateDetails={cert}
						/>
					))}
				</div>
			),
		},
	];
	return (
		<div className="w-full" id="resume">
			<Timeline data={data} />
		</div>
	);
}
