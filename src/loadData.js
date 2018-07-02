exports.loadData = function(context, data){
	var selection = context.selection;

	for (var i = 0, l = selection.length; i < l; i++) {
		var layer = selection[i];
		var randomState = data[ Math.floor(Math.random() * data.length) ];

		layer.stringValue = randomState;
		layer.name = randomState;
	}
};