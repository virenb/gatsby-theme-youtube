import React from 'react';
import { Styled } from 'theme-ui';
import Layout from '../components/layout';
import VideosGrid from '../components/VideosGrid';

const PageTemplate = ({ pageContext }) => (
	<Layout>
		<Styled.h1>{pageContext.heading}</Styled.h1>
		<div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
		<VideosGrid />
	</Layout>
);

export default PageTemplate;
