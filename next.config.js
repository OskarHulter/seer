//@ts-check
import withBundleAnalyzer from "@next/bundle-analyzer";
import MillionLint from "@million/lint";
import { withPlausibleProxy } from "next-plausible";
//const withPlausibleProxy = require("next-plausible");
//const MillionLint = require("@million/lint");
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

const analyticsProvider = withPlausibleProxy();

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	/**
	 * If you are using `appDir` then you must comment the below `i18n` config out.
	 *
	 * @see https://github.com/vercel/next.js/issues/41980
	 */
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	transpilePackages: ["geist"],
};

const analyticsConfig = analyticsProvider(nextConfig);
const bundleConfig = bundleAnalyzer(analyticsConfig);

export default MillionLint.next()(bundleConfig);
