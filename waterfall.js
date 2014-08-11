var async = require('async');

/*
	中间有错误信息
*/
async.waterfall([
	function (callback) {
		console.log('start the first task');
		setTimeout(function () {
			console.log('the first task finished');
			callback(null, 1000, 1001);
		}, 1000);
	},
	function (argu_1, argu_2, callback) {
		console.log('start the second task');
		console.log('argu_1: %d, argu_2: %d', argu_1, argu_2);
		setTimeout(function () {
			console.log('the second task finished');
			callback('error_two', 2000);
		}, 2000);
	},
	function (argu_1, callback) {
		console.log('start the third task');
		console.log('argu_1: %d, argu_2: %d', argu_1, argu_2);
		setTimeout(function () {
			console.log('the third task finished');
			callback(null, 3000);
		}, 3000);		
	}], 
	function (error, result) {
		console.log('enter the finial callback');
		console.log('finial error: ', error);
		console.log('finial result: ', result);
});