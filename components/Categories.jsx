import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((newCategories) => {
			setCategories(newCategories);
		});
	}, []);
	console.log(categories);

	return (
		<div className="bg-white rounded-lg p-4	shadow-lg pb-12 mb-8">
			<h3 className="text-xl mb-8 border-b pb-4 font-semibold">Categories</h3>
			{categories.map((category, index) => (
				<Link key={index} href={`/category/${category.slug}`}>
					<span
						className={`cursor-pointer block ${
							index === categories.length - 1 ? "border-b-0" : "border-b"
						} pb-3 mb-3 `}
					>
						{category.name}
					</span>
				</Link>
			))}
		</div>
	);
};

export default Categories;
