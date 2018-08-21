module.exports = {
    //get bin
    readBin: (req, res) => {
        const id = req.params.id.split('');
        let shelfId = id[0] ;
        let binId = id[1];
        const db = req.app.get('db');
        db.getProducts([shelfId, binId]).then(([inventory]) => res.send(inventory));
        // or-->> db.getProducts([shelfId, binId]).then((inventory) => res.send(inventory[0]))
        //inventory is being destructured -> we are only sending one item back
    }, 
    //add to bin
    create: (req, res) => {
        // const id = req.params.id.split('')
        // const db = req.app.get('db');
        // let shelfId = id[0];
        // let binId = id[1];
        // const {name, price} = req.body;
        // db.addBin([name, price, shelfId, binId]).then((inventory) => res.send(inventory));
    }, 
    //edit view
    update: (req, res) => {
        const id = req.params.id.split('')
        let shelfId = id[0];
        let binId = id[1];
        const {name, price} = req.body;
        const db = req.app.get('db');
        db.updateProducts([name, price, shelfId, binId]).then((inventory) => res.send(inventory));
        //db.updateProducts([shelfId, binId, name, price]).then(() => res.sendStatus(200))
    }, 
    //edit view
    delete: (req, res) => {
        // const id = req.params.id.split('');
        // let shelfId = id[0];
        // let binId = id[1];
        // const db = req.app.get('db');
        // db.deleteProd([shelfId, binId]).then(() => res.sendStatus(200));
        const id = req.params.id.split('')
        let shelfId = id[0];
        let binId = id[1];
        const {name, price} = req.body;
        const db = req.app.get('db');
        db.updateProducts([name, price, shelfId, binId]).then((inventory) => res.send(inventory));
    },
    //get shelf
    readShelf: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.getShelf([id]).then((inventory) => res.send(inventory));
    }
}