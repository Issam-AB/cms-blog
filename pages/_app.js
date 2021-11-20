import React, { useState, useeffect } from "react";
import "tailwindcss/tailwind.css";
import "../Styles/globals.scss";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />;
		</Layout>
	);
}

export default MyApp;
