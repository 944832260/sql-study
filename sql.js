/*
    查询表数据
*/
// 查询当前表指定字段
// SELECT 指定字段名,指定字段名,指定字段名 FROM 表名字 WHERE 查询字段名 = '查询字段值' and 查询字段名 = '查询字段值'
let sqlLang = `select phone,age from users where user_name = '${userName}' and pass_word = '${passWord}'`;
// 查询当前表所有字段
// SELECT * FROM 表名字 WHERE id = '1' and name = '张三'
let sqlLang = `select * from users where user_name = '${userName}' and pass_word = '${passWord}'`;


/*
    新增数据
*/
// 新增单条数据
// INSERT INTO 表名字 (A字段名，B字段名) VALUS (A字段名内容,B字段名内容)
let sqlLang = `insert into  users  (user_name,pass_word,phone,name) values (zhangsan,123,15566667777,张三)`;
// 新增多条数据
// INSERT INTO 表名字 (A字段名，B字段名) VALUS (A字段名内容,B字段名内容),(A字段名内容,B字段名内容)
let sqlLang = `insert into  users  (user_name,pass_word,phone,name) values (zhangsan,123,15566667777,张三),(zhangsan,123,15566667777,张三)`;


/*
    更新数据
*/
// 更新单条数据
//  UPDATE 表名字 SET 字段=内容 WHERE id = 1
// 例：
let sqlLang = `update users set phone=${phone} where id = '${id}'`;
// 更新多条sql数据
//  UPDATE 表名字 SET 字段=内容,字段=内容 WHERE id in (1,2,3)
// 例：
let sqlLang = `update users set name=${name} ,phone = ${phone} where id in (1,2,3)`;


/*
    删除数据
*/
// 删除单条数据
//  DELETE FROM 表名字 WHERE id = 1
// 例：
var sqlLang = `delete from users where id = '${id}'`
// 删除多条sql数据
//  DELETE FROM 表名字 WHERE id in (1,2,3)
// 例：
var sqlLang = `delete from users where id in (1,2,3})`;