import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Video from './Video';

const VideosGrid = () => {
	const data = useStaticQuery(graphql`
		query {
			allYoutubeVideo(limit: 6) {
				edges {
					node {
						title
						videoId
						publishedAt
						description
						thumbnail {
							height
							url
							width
						}
					}
				}
			}
		}
	`);

	return (
		<div>
			{data.allYoutubeVideo.edges.map(({ node }) => {
				return <Video key={node.videoId} {...node} />;
			})}
		</div>
	);
};

export default VideosGrid;
