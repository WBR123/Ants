/***
 * @creater:wjiban
 * @create_time:20-8-5 9:47:24
 * @last_modify:wjiban
 * @modify_time:20-8-5 10:44:33
 * @line_count:15
 **/


var users = {"name": "小韦", "pwd": "123"};
var data = [];


for (let i in users) {
	data.push(i);
	data.push(users[i]);
}

console.log(data);

module.export = {
	banks: data
}