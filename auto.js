var async = require('async');

function commonAPI (error, time_delay, callback) {
    setTimeout(function () {
        console.log('延时 %d 的操作完成， 错误是： %s', time_delay, String(error));
        callback(error, time_delay, time_delay + 1);
    }, time_delay);
}

/*
    firstTest
    基础用法
*/
function firstTest () {
    async.auto({
        one: function(callback){
            console.log('one start');
            commonAPI(null, 1000, callback);
        },
        two: function(callback){
            console.log('two start');
            commonAPI(null, 2000, callback);
        },
        three: ['one', 'two', function(callback, results){
            console.log('three start and the results: ', results);
            commonAPI(null, 3000, callback);
        }],
        four: function(callback){
            console.log('four start');
            commonAPI(null, 4000, callback);
        }
    }, function(err, results) {
        console.log('final error: ', err);
        console.log('final results: ', results);
    });
}

// firstTest();

/*
    secondTest
    有报错信息
*/
function secondTest () {
    async.auto({
        one: function(callback){
            console.log('one start');
            commonAPI('error in one', 1000, callback);
        },
        two: function(callback){
            console.log('two start');
            commonAPI(null, 2000, callback);
        },
        three: ['one', 'two', function(callback, results){
            console.log('three start and the results: ', results);
            commonAPI(null, 3000, callback);
        }],
        four: function(callback){
            console.log('four start');
            commonAPI(null, 4000, callback);
        }
    }, function(err, results) {
        console.log('final error: ', err);
        console.log('final results: ', results);
    });
}

// secondTest();

/*
    thirdTest
    有报错信息
*/
function thirdTest () {
    async.auto({
        one: function(callback){
            console.log('one start');
            commonAPI('error in one', 4000, callback);
        },
        two: function(callback){
            console.log('two start');
            commonAPI(null, 2000, callback);
        },
        three: ['one', 'two', function(callback, results){
            console.log('three start and the results: ', results);
            commonAPI(null, 3000, callback);
        }],
        four: function(callback){
            console.log('four start');
            commonAPI(null, 1000, callback);
        }
    }, function(err, results) {
        console.log('final error: ', err);
        console.log('final results: ', results);
    });
}

// thirdTest();

/*
    需要注意的是，secondTest和thirdTest虽然只有one以及four的延时时间对调外，别的都相同，但是运行结果是有差异的。
    test
*/

