import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/Link";

const PostWidget = ({ category, slug }) => {
	const [relatedPost, setRelatedPost] = useState([]);
	useEffect(() => {
		if (slug) {
			getSmilarPosts(category, slug).then((result) => setRelatedPost(result));
		}
	}, []);
	return <div>hello postWedget</div>;
};

export default PostWidget;
