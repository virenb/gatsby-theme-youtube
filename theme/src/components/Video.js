import React from 'react';

const Video = ({ title, videoId }) => (
	<div>
		<header style={{ fontWeight: 500 }}>{title}</header>
		<div
			style={{
				position: 'relative',
				overflow: 'hidden',
				paddingTop: '56.25%',
				paddingBottom: '-56.25%',
				marginBottom: '2rem'
			}}
		>
			<iframe
				style={{
					position: 'absolute',
					top: '0',
					left: '0',
					width: '100%',
					height: '100%',
					border: '0'
				}}
				src={`https://www.youtube.com/embed/${videoId}`}
				title={title}
				name={title}
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				frameBorder="0"
				webkitallowfullscreen="true"
				mozallowfullscreen="true"
				width="600"
				height="400"
				allowFullScreen
				aria-hidden="true"
			/>
		</div>
	</div>
);

export default Video;
