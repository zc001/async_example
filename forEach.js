var async = require('async')
,	array = [{name: 'zc', time_delay: 2000}, {name: 'async', time_delay: 1000}, {name: 'asyc', time_delay: 3000}];

/*	
	firstTest
	正常调用
*/
function firstTest () {
	async.forEach(array, function (item, callback) {
		console.log('start iterator. item: ', item);
		setTimeout(function () {
			console.log('show name: ', item.name);
			callback(null);
		}, item.time_delay);
	}, function (error) {
		console.log('error: ', error);
	});	
}

// firstTest();

/*
	secondTest
	中间有异常抛出
*/
function secondTest () {
	async.forEach(array, function (item, callback) {
		console.log('start iterator. item: ', item);
		setTimeout(function () {
			console.log('show name: ', item.name);
			if(item.name === 'zc') {
				return callback('error_zc');
			}
			callback(null);
		}, item.time_delay);
	}, function (error) {
		console.log('error: ', error);
	});
}

// secondTest();

/*	
	thirdTest
	一个需要注意的地方
	假如没有iterator没有回调的话，则最后的callback不会被触发
*/
function thirdTest () {
	async.forEach(array, function (item, callback) {
		console.log('start iterator. item: ', item);
		setTimeout(function () {
			console.log('show name: ', item.name);
			// callback(null);
		}, item.time_delay);
	}, function (error) {
		console.log('error: ', error);
	});	
}

// thirdTest();





