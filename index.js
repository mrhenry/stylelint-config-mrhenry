module.exports = {
	extends: 'stylelint-config-standard',
	rules: {
		indentation: 'tab',
		'declaration-block-no-redundant-longhand-properties': [
			true,
			{ ignoreShorthands: ['flex'] }
		],
		'block-no-empty': null,
		'media-feature-name-no-unknown': [
			true,
			{ ignoreMediaFeatureNames: ['prefers-reduced-motion'] }
		]
	}
};
