# sql-study
sql学习

#连接数据库，本机没密码
mysql -u root -p

#查看数据库
SHOW DATABASES;

#创建数据库
CREATE DATABASE 数据库名;

#删除数据库
drop database 数据库名;

#查询
SELECT * FROM 表名字

#查询某个表下的id为1的数据
SELECT * FROM 表名字 WHERE id=1

#更新数据
UPDATE 表名字 SET phone='666'  WHERE id=2;

#删除数据
DELETE FROM 表名字 WHERE id=3;
