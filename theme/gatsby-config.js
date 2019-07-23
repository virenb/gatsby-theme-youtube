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
				channelId: [ 'UCjnp770qk7ujOq8Q9wiC82w' ], // Can be array of channel IDs, this is Gatsby's channel,
				apiKey: `${process.env.apiKey}`, // Must register for a YouTube API key,
				maxVideos: 50 // This is default
			}
		}
	]
};
