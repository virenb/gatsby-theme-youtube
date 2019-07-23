exports.createPages = ({ actions, reporter }) => {
	reporter.warn('make sure to load data from somewhere!');

	// TODO replace this with data from somewhere
	actions.createPage({
		path: '/',
		component: require.resolve('./src/templates/page.js'),
		context: {
			heading: 'Gatsby Theme YouTube'
		}
	});
};
