"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function ContactSection() {
	const [loadingMessage, setLoadingMessage] = useState({
		loading: false,
		message: "",
		success: false,
	});

	const [formData, setFormData] = useState({
		subject: "",
		message: "",
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleChange = (e: any): any => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			if (!formData?.subject || !formData?.message) {
				setLoadingMessage({
					loading: false,
					message: "Please Fill All the Fields!",
					success: false,
				});
				return;
			}
			window.location.href = `mailto:${process.env.NEXT_PUBLIC_RECEIVER_EMAIL}?subject=${formData.subject}&body=${formData?.message}`;
		} catch (e) {
			console.error(e);
		}
	};
	return (
		<div
			id="contact"
			className="max-w-[800px] backdrop-blur-[18px] bg-[#11121617] z-[20] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"
		>
			<h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200">
				Contact Me!
			</h2>
			{loadingMessage?.message && (
				<p
					className={`mt-[20px] text-[0.9rem] ${
						loadingMessage?.success
							? " text-green-400"
							: "text-red-400"
					}`}
				>
					*{loadingMessage?.message}
				</p>
			)}
			<form className="my-8" onSubmit={handleSubmit}>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="subject">Email Subject</Label>
					<Input
						id="subject"
						placeholder="Subject"
						type="text"
						name="subject"
						value={formData?.subject}
						onChange={handleChange}
					/>
				</LabelInputContainer>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="message">Enter Your Message</Label>
					<Input
						id="message"
						placeholder="Your Message"
						type="textarea"
						name="message"
						value={formData?.message}
						onChange={handleChange}
					/>
				</LabelInputContainer>
				<button
					className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
					type="submit"
				>
					Submit
					<BottomGradient />
				</button>
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
