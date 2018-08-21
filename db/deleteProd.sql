-- delete from inventory 
-- where shelf_id = $1 and bin_id = $2;
update inventory
set 
    name = $1,
    price = $2
where shelf_id = $3 and bin_id = $4