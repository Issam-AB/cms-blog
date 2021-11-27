import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/Link";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ category, slug }) => {
	const [relatedPost, setRelatedPost] = useState([]);

	useEffect(() => {
		if (slug) {
			getSimilarPosts(category, slug).then((result) => setRelatedPost(result));
		} else {
			getRecentPosts().then((result) => setRelatedPost(result));
		}
	}, [slug]);

	console.log(relatedPost);

	return (
		<div className="bg-white shadow-lg rounded-lg mb-8 p-8">
			<h3 className="text-xl mb-8 font-semibold  border-b pb-4">
				{slug ? "Related Post" : "Recent Post"}
			</h3>
			{relatedPost.map((post) => (
				<div key={post.title} className="flex items-center w-full mb-4">
					<div className="w-16 flex-none">
						<img
							src={post.featuredImage.url}
							alt={post.title}
							height="60px"
							width="60px"
							className="align-middle rounded-full"
						/>
					</div>
					<div className="flex-grow ml-4">
						<p className="text-gray-600 text-sm">
							{moment(post.createdAt).format("MMM dd, YYYY")}
						</p>
						<Link
							href={`/post/${post.slug}`}
							key={post.title}
							className="text-md"
						>
							{post.title}
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default PostWidget;
