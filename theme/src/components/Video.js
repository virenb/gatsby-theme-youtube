import React from 'react';

const Video = ({ title, videoId, thumbnail }) => (
	<div>
		<header>{title}</header>
		<iframe
			src={`https://www.youtube.com/embed/${videoId}`}
			title={title}
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			frameBorder="0"
			webkitallowfullscreen="true"
			mozallowfullscreen="true"
			width="600"
			height="400"
			allowFullScreen
		/>
	</div>
);

export default Video;
