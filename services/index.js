import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getPost = async () => {
	const query = gql`
		query MyQuery {
			postsConnection {
				edges {
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result.postsConnection.edges;
};

export const getPostDetails = async () => {
	const query = gql`
	  query getPostDetails() {
		  posts(
			  orderBy: 'createdAt_ASC'
			  last: 3
		  ) {
			  title	
			  featuredImage {
				url
			}
			createAt
			slug
		  }
	  }
	`;
	const result = await request(graphqlAPI, query);

	return result.posts;
};
