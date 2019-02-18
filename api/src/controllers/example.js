const Item = require('../models/Item');

exports.getFiles = (req, res) => {
  Item.find()
    .then(items => {
      res.json(items);
    })
    .catch(err => res.json({ msg: 'No items found' }));
}

exports.postFile = (req, res) => {
  const newItem = new Item({
    item: req.body.item
  });

  req.body.item ?
    newItem.save().then(item => res.json({ status: "succesfull!" }))
      .catch(err => console.log(err))
    :
    res.json({ status: "empty body" });
}