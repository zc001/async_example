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
	基础用法
*/
function firstTest () {
	async.parallel([
		function (callback) {
			console.log('开始第一个任务');
			commonAPI(null, 3000, callback);
		},
		function (callback) {
			console.log('开始第二个任务');
			commonAPI(null, 2000, callback);
		},
		function (callback) {
			console.log('开始第三个任务');
			commonAPI(null, 1000, callback);
		}], 
		function (error, results) {
			console.log('进入最后的回调');
			console.log('finial error: ', error);
			console.log('results error: ', results);
	});
}

// firstTest();

/*
	secondTest
	中间有错误信息传递
*/
function secondTest () {
	async.parallel([
		function (callback) {
			console.log('开始第一个任务');
			commonAPI(null, 3000, callback);
		},
		function (callback) {
			console.log('开始第二个任务');
			commonAPI('error_two', 2000, callback);
		},
		function (callback) {
			console.log('开始第三个任务');
			commonAPI(null, 1000, callback);
		}], 
		function (error, results) {
			console.log('进入最后的回调');
			console.log('finial error: ', error);
			console.log('results error: ', results);
	});
}

// secondTest();
	
    //hello
