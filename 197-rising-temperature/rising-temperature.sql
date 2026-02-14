# Write your MySQL query statement below
select a.id from Weather a join Weather b on datediff(a.recorddate,b.recorddate)=1 
where a.temperature>b.temperature;