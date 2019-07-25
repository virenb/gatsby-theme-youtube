# Gatsby Theme YouTube - Installation Guide & More

  
The theme was built to allow users to bring YouTube content to their Gatsby websites. The main package in this theme is `gatsby-source-youtube-v2`. Here is a working [demo](https://gatsby-theme-youtube.netlify.com) of the theme.

## Installation

1) Install theme via npm or yarn

```sh
npm install --save gatsby-theme-jam-youtube
```
or

```sh
yarn add gatsby-theme-youtube
```

2)  Add the theme to your `gatsby-config.js`:

```js
module.exports = {
  plugins: ['gatsby-theme-youtube']
}
```

3.  Start your site

```sh
gatsby develop
```

## Usage

#### Setup

Note: You will need an API key from YouTube to use this theme.

By default, the theme displays 6 videos from the Gatsby YouTube account. 

Default `gatsby-config.js`:

```js
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: 'Gatsby Theme YouTube'
	},
	plugins: [
		'gatsby-plugin-theme-ui',
		{
			resolve: 'gatsby-source-youtube-v2',
			options: {
				channelId: ['UCjnp770qk7ujOq8Q9wiC82w'], // Can be array of channel IDs, this is Gatsby's channel,
				apiKey: `${process.env.apiKey}`, // Must register for a YouTube API key,
				maxVideos: 50 // This is default
			}
		}
	]
};
```

1) To change the content provider (YouTube channel), update the channelId.
2) The apiKey must be updated. I've put my YouTube API in an .env file as it is sensitive information. Please visit: [https://www.gatsbyjs.org/docs/environment-variables/](https://www.gatsbyjs.org/docs/environment-variables/)


*To register for a YouTube API key, please visit:  [https://developers.google.com/youtube/v3/getting-started](https://developers.google.com/youtube/v3/getting-started)


#### Querying Data

Once changes to the `gatsby-config.js` file are made, run `gatsby develop` again. Gatsby comes with GraphQL, so you can visit `localhost:8000/___graphql` to see what data is available from YouTube. I've ran a query in the VideoGrids.js component, but there is a lot of different data to pick from.

```gql
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
```

#### Components, Styles, Files


It rhymes :)

As this repository was forked, it comes with the basic Gatsby Layout component, page template, and styling via [theme-ui](https://www.npmjs.com/package/gatsby-plugin-theme-ui). There are two simple components, VideosGrid and Video. useStaticQuery was used to pull the data from GraphQL and the videos are mapped into Video components. 


## Changes and Future Updates

If you don't want to render out the actual videos, you can render out thumbnails with links to the videos, or maybe just links, however you want to structure your Gatsby website. 

I would consider using createPages API so each video has its own page instead of all being rendered on one page. UI can also be updated and improved as it is very simple currently.

