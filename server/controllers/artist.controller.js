const Artist = require('../models/artist');
const artistCtrl = {};

artistCtrl.getArtists = async (req, res)=>{
    const artists = await Artist.find(); //the better way of getting data, using async
    res.json(artists);
}
artistCtrl.createArtist = async(req, res)=>{
    const artist = new Artist(req.body);
    await artist.save();
    res.json({
        "status" : "Artist saved"
    });
}
artistCtrl.getArtist = async(req, res)=>{
    const artist = await Artist.findById(req.params.id);
    res.json(artist)
}
artistCtrl.editArtist = async(req, res)=>{
    const artist = {
        name: req.body.name,
        mainskill: req.body.mainskill,
        description: req.body.description,
        ubi: req.body.ubi
    }
    await Artist.findByIdAndUpdate(req.params.id, {$set: artist}, {new: true}); //si no existe, lo crea
    res.json({status: "artist updated"})
}
artistCtrl.deleteArtist = async(req, res)=>{
    await Artist.findByIdAndDelete(req.params.id); 
    res.json({status: "artist deleted"})
}

module.exports = artistCtrl;