var data = require('../data.js');
const loadModule = require('../loadData.js');

export default function onRun(context){
	var names = data[0][1];
	loadModule.loadData(context, names);
}