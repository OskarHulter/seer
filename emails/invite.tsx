import * as React from "react";
import {
	Body,
	Button,
	Column,
	Container,
	Font,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";

interface SlnInviteUserEmailProps {
	username?: string;
	userImage?: string;
	invitedByUsername?: string;
	invitedByEmail?: string;
	teamName?: string;
	teamImage?: string;
	inviteLink?: string;
	inviteFromIp?: string;
	inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "";
export default function Email({
	username = "stresslessness",
	userImage = `${baseUrl}/static/sln.png`,
	invitedByUsername = "Oskar Hulter",
	invitedByEmail = "oskarhulter@gmail.com",
	teamName = "SLN",
	teamImage = `${baseUrl}/static/sln.png`,
	inviteLink = "https://oskarhulter.com",
	inviteFromIp = "204.13.186.218",
	inviteFromLocation = "Copenhagen, Denmark",
}: SlnInviteUserEmailProps) {
	const previewText = `Join ${invitedByUsername} on Seer`;
	return (
		<Html lang="en" dir="ltr">
			<Head>
				<title>Your opinion matters</title>
				<Font
					fontFamily="Roboto"
					fallbackFontFamily="Verdana"
					webFont={{
						url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
						format: "woff2",
					}}
					fontWeight={400}
					fontStyle="normal"
				/>
			</Head>
			<Preview>{previewText}</Preview>
			<Body>
				<Container>
					<Section>
						<Img
							src={`${baseUrl}/static/sln.png`}
							// src="sln.png"
							alt="logo"
							width="500"
							height="500"
						/>
					</Section>
					<Heading as="h1">
						Join <strong>{teamName}</strong> on <strong>Seer</strong>
					</Heading>
					<Text>Hello {username},</Text>
					<Text>
						<strong>{invitedByUsername}</strong> (
						<Link href={`mailto:${invitedByEmail}`}>{invitedByEmail}</Link>) has
						invited you to the <strong>{teamName}</strong> team on{" "}
						<strong>Seer</strong>.
					</Text>

					<Section>
						<Row>
							<Column align="right">
								<Img
									className="rounded-full"
									src={userImage}
									width="64"
									height="64"
								/>
							</Column>
							<Column align="center">
								<Img
									src={`${baseUrl}/static/sln.png`}
									width="12"
									height="9"
									alt="invited you to"
								/>
							</Column>
							<Column align="left">
								<Img
									className="rounded-full"
									src={teamImage}
									width="64"
									height="64"
								/>
							</Column>
						</Row>
					</Section>
					<Section className="text-center mt-[32px] mb-[32px]">
						<Button
							className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-4 py-3"
							href={inviteLink}
						>
							Join the team
						</Button>
					</Section>

					<Text className="text-black text-[14px] leading-[24px]">
						or copy and paste this URL into your browser:{" "}
						<Link href={inviteLink} className="text-blue-600 no-underline">
							{inviteLink}
						</Link>
					</Text>
					<Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
					<Text className="text-[#666666] text-[12px] leading-[24px]">
						This invitation was intended for{" "}
						<span className="text-black">{username} </span>.This invite was sent
						from <span className="text-black">{inviteFromIp}</span> located in{" "}
						<span className="text-black">{inviteFromLocation}</span>. If you
						were not expecting this invitation, you can ignore this email. If
						you are concerned about your account&apos;s safety, please reply to
						this email to get in touch with us.
					</Text>
				</Container>
			</Body>
		</Html>
	);
}
