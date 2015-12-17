var posthtml = require('posthtml');

module.exports = function () {
	return function altAlways(tree) {
		tree.match([{ tag: 'img' }], function(node) {
			if (!node.attrs.alt){
				node.attrs.alt = true;
			}
			return node;
		});
	};
};

module.exports.process = function (contents, options) {
	return posthtml().use(module.exports(options)).process(contents);
};
