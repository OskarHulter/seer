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
	inviteFromLocation = "São Paulo, Brazil",
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
					<Heading as="h1">How did I do?</Heading>
					<Text>Hello {username},</Text>
					<Text>
						Thanks for your recent purchase from {teamName}. Remember that
						support is included. Just let me know if you need help.
						<strong>{invitedByUsername}</strong> (
						<Link href={`mailto:${invitedByEmail}`}>{invitedByEmail}</Link>)
					</Text>
					<Text>
						Your feedback helps me improve. Please let me know how I did.
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

						<Img
							src={`${baseUrl}/static/sln.png`}
							// src="sln.png"
							alt="logo"
							width="500"
							height="500"
						/>
						<Button
							href={inviteLink}
							style={{
								background: "#000",
								color: "#fff",
								padding: "12px 20px",
							}}
						>
							Leave a review
						</Button>
						<Img
							src={`${baseUrl}/static/sln.png`}
							alt="logo"
							width="500"
							height="500"
						/>
					</Section>
					<Text>
						Your response might be posted on <strong>oskarhulter.com</strong>.
						<Text>Thanks for your feedback,</Text>
						<Text>
							<strong>Oskar Hulter</strong>
						</Text>
					</Text>
					<Hr />
					<Text>
						This email was sent by Oskar Hulter. Oskar Hulter is the data
						controller of your personal data, and he is also the data processor.
					</Text>
					<Text>
						Not sure why you received this email? You can unsubscribe from our
						Do Do you have questions about your data? Contact me using the
						details in my privacy policy.
						<Link href="https://oskarhulter.com">Unsubscribe</Link>
					</Text>
				</Container>
			</Body>
		</Html>
	);
}
