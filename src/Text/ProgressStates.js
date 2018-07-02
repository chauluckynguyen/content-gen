var data = require('../data.js');
const loadModule = require('../loadData.js');

export default function onRun(context){
	var states = data[1][1];
	loadModule.loadData(context, states);
}