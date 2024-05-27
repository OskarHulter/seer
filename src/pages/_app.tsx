import { GeistSans } from "geist/font/sans";
import type { AppProps, AppType } from "next/app";
import PlausibleProvider from "next-plausible";
import Head from "next/head";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Welcome to seer!</title>
			</Head>
			<PlausibleProvider domain="example.com" trackLocalhost>
				<main className={GeistSans.className}>
					<Component {...pageProps} />
				</main>
			</PlausibleProvider>
		</>
	);
};

export default MyApp;
