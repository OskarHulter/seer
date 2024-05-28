import { Button, Text, Html } from "@react-email/components";
import * as React from "react";

export default function Email() {
	return (
		<Html>
			<Button
				href="https://example.com"
				style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
			>
				Click me
			</Button>
			<Text>
				<strong>Legal Disclaimer:</strong> This email and any attachments are
				confidential and may be privileged. If you are not the intended
				recipient, please notify the sender immediately and delete this email
				from your system. Any unauthorized use or disclosure of the contents of
				this email is strictly prohibited and may be unlawful. The views and
				opinions expressed in this email are those of the author and do not
				necessarily represent the views and opinions of the company. The company
				does not guarantee the integrity, security, or proper receipt of this
				email and any attachments. The company does not accept any liability for
				any errors or omissions in the contents of this email or any
				attachments, or for any actions taken based on the information contained
				in this email or any attachments.
			</Text>
		</Html>
	);
}
