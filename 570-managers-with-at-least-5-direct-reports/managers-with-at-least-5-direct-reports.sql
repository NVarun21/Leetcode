# Write your MySQL query statement below
select a.name from Employee a join Employee b
on a.id=b.managerid
group by a.name,a.id
having count(b.id)>=5; 