update inventory
set 
    name = $1,
    price = $2
where shelf_id = $3 and bin_id = $4;