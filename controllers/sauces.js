const Sauce = require('../models/Sauce');
const fs = require ('fs')


//add a sauce and save it (or return error)
exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  sauce.save()
    .then(() => res.status(201).json({message: 'Sauce saved!'}))
    .catch(error => res.status(400).json({error}));
};

// find a sauce
exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id})
  .then(sauce => res.status(200).json(sauce))
  .catch(error => res.status(404).json({error}));
};

//update a sauce
exports.modifySauce = (req, res, next) => {
  const sauceObject = req.file ?
  {
    ...JSON.parse(req.body.sauce),
    imageUrl : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : {...req.body};
  Sauce.updateOne({_id: req.params.id}, {...sauceObject, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Sauce updated successfully!'}))
    .catch(error => res.status(400).json({error}));
};

// delete a sauce
exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({_id: req.params.id})
  .then(thing => {
    const filename = thing.imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, () => {
      Sauce.deleteOne({_id: req.params.id})
      .then(() => res.status(200).json({message: 'Deleted!'}))
      .catch(error => res.status(400).json({error}));
    });
  })
  .catch(erroe=> res.status(500).json({error}));
};

//find all sauces
exports.getAllSauces = (req, res, next) => {
  Sauce.find()
  .then(sauces => res.status(200).json(sauces))
  .catch(error => res.status(400).json({error: error}));
};

// like/dislike
exports.likeSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
 .then(sauce => {
     switch (req.body.like) {
        //dislike a sauce
         case -1:
             Sauce.updateOne({ _id: req.params.id }, {
                 $inc: {dislikes:1},
                 $push: {usersDisliked: req.body.userId},
                 _id: req.params.id
             })
                 .then(() => res.status(201).json({ message: 'Disliked sauce !'}))
                 .catch( error => res.status(400).json({ error }))
             break;
        //cancel like/dislike
         case 0:
             if (sauce.usersLiked.find(user => user === req.body.userId)) {
                 Sauce.updateOne({ _id : req.params.id }, {
                     $inc: {likes:-1},
                     $pull: {usersLiked: req.body.userId},
                     _id: req.params.id
                 })
                     .then(() => res.status(201).json({message: ' Like canceled !'}))
                     .catch( error => res.status(400).json({ error }))
             }
             if (sauce.usersDisliked.find(user => user === req.body.userId)) {
                 Sauce.updateOne({ _id : req.params.id }, {
                     $inc: {dislikes:-1},
                     $pull: {usersDisliked: req.body.userId},
                     _id: req.params.id
                 })
                     .then(() => res.status(201).json({message: ' Dislike canceled !'}))
                     .catch( error => res.status(400).json({ error }));
             }
             break;    
        //like a sauce
         case 1:
             Sauce.updateOne({ _id: req.params.id }, {
                 $inc: { likes:1},
                 $push: { usersLiked: req.body.userId},
                 _id: req.params.id
             })
                 .then(() => res.status(201).json({ message: 'Liked sauce !'}))
                 .catch( error => res.status(400).json({ error }));
             break;
         default:
             return res.status(500).json({ error });
     }
 })
 .catch(error => res.status(500).json({ error }))
};
