create database internship;

create table interns(
    id int primary key auto_increment,
    name varchar (50),
    stack varchar(50)
);

insert into interns( name, stack)
values('nathaniel', 'python'),
    ('emmanuel', 'javascript'),
    ('mudia', 'javascript'),
    ('muyiwa', 'python'),
    ('taofeeq', 'javascript'),
    ('abdul', 'php');

select * from interns;