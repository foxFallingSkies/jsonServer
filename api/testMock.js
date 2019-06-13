var Mock = require('mockjs');
var template = {
    'name|1-5': 'string', //重复生成string,但是次数在1-5间，如果写成固定的则为重复固定的数量
    'number|1-100': 10, //生成一个1到100间的整数
    'number|+1': 10, //在10的基础上加1
    'flag|1': true, //随机生成一个boolean类型数据，
    'isFlag|0-5': true, //随机生成boolean类型数据，当前value为true,那么生成true的概率为0/(0+5)
    'obj|0-1': {
        'pro1': '属性1',
        'pro2': '属性2'
    }, //从属性中随机选择0-1个属性，如果为固定值，则随机选取固定值个属性
    'list|1-5': [
        'array1', 'array2'
    ], //生成一个新数组，重复次数大于1小于5，如果为固定值，重复次数为固定的
    'list1|+1': ['array1', 'array2'], //顺序选取1个元素
    'list2|1': ['array1', 'array2'], //随机选取1个元素
    'objFun': function() {
        return 1;
    }, //执行方法，取其返回值
    'date1': '@date("yyyy-MM-dd")',
    'date2': '@datetime("yyyy-MM-dd HH:mm:ss")',
    'date3': '@now()', //里面可以输入格式
    'img': '@image(100*100,"#000000","图片上文字")',
    'ename': '@name()', //生成英文名
    'cName': '@cname()' //生成中文名
};
module.exports = {
    testMock: Mock.mock(template)
}