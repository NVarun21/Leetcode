# Write your MySQL query statement below
select query_name,Round(Avg(rating/position),2) as quality,Round(
    SUM(CASE WHEN rating<3 then 1 else 0 end)*100.0/count(*),2) as poor_query_percentage from Queries group by query_name;