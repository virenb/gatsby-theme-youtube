import React from 'react';
import Layout from '../components/layout';
import VideosGrid from '../components/VideosGrid';

const PageTemplate = ({ pageContext }) => (
	<Layout>
		<div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
		<VideosGrid />
	</Layout>
);

export default PageTemplate;
