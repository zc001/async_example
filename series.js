var async = require('async');
/*
	commonAPI

	这是一个使用setTimeout方法模拟异步操作，接受三个参数。

	error 为该异步操作产生的错误。

	time_delay 为异步操作所需要的时间。

	callback是传递的回调函数，按照async回调的格式，回调函数的第一个参数是错误值，第二个参数是传递值
*/

function commonAPI (error, time_delay, callback) {
	setTimeout(function () {
		console.log('延时 %d 的操作完成， 错误是： %s', time_delay, String(error));
		callback(error, time_delay);
	}, time_delay);
}

/*
	firstTest
	依次执行三个commonAPI


*/
function firstTest() {
	async.series([
		function (callback) {
			commonAPI(null, 1000, callback);
		},
		function (callback) {
			commonAPI(null, 2000, callback);
		},
		function (callback) {
			commonAPI(null, 3000, callback);
		}], 
		function (error, result) {
			console.log('final error: ', error);
			console.log('final result: ', result);
	});
}

firstTest();

function secondTest () {
	async.series([
		function (callback) {
			commonAPI(null, 1000, callback);
		},
		function (callback) {
			commonAPI('error_two', 2000, callback);
		},
		function (callback) {
			commonAPI(null, 3000, callback);
		}], 
		function (error, result) {
			console.log('final error: ', error);
			console.log('final result: ', result);
	});
}

// secondTest();



