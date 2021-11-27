import React, { useEffect, useState } from "react";
import { getCategories } from "../services";
import Image from "next/Image";
import Link from "next/Link";

const categories = [
	{ name: "React", slug: "react" },
	{ name: "Web develeoppment", slug: "web-dev" },
];
const Header = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((newCategories) => {
			setCategories(newCategories);
		});
	}, []);
	// console.log(categories);
	return (
		<div className="container mx-auto px-10 mb-8">
			<div className="border-b w-full inline-block border-blue-400 py-8">
				<div className="md:float-left block">
					<Link href="/">
						{/* <Image src="/vercel.svg" /> */}
						<span className="font-semibold text-4xl text-white tracking-tight cursor-pointer">
							Blog CSM
						</span>
					</Link>
				</div>
				<div className="hidden md:float-left md:contents">
					{categories.map((category) => (
						<Link key={category.slug} href={`/category/${category.slug}`}>
							<span className="md:float-right ml-4 mt-2 align-middle font-semibold text-white cursor-pointer">
								{category.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
