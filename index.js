var posthtml = require('posthtml');

module.exports = function () {
	return function altAlways(tree) {
		tree.match({ tag: 'img', attrs: { alt: false }}, function(node) {
			node.attrs.alt = true;
			return node;
		});
	};
};

module.exports.process = function (contents, options) {
	return posthtml().use(module.exports(options)).process(contents);
};
