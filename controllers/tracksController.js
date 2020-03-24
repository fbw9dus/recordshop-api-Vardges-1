var Track = require('../models/Tracks')

exports.createTrack = async (req, res) => {
    var data = req.body
    var track = new Track(data)
    await track.save()
    res.status(200).send(track)

}

exports.getTracks = async (req, res) => {
      var tracks = await Track.find()
      res.status(200).send(tracks)

}

exports.getTrack = async (req, res) => {
    var id = req.params.id
    var track = await Track.findById(id)
    res.status(200).send(track)
}


exports.updateTrack = async (req, res) => {

    var id = req.params.id
    var track = await Track.findByIdAndUpdate(id, data, {new: true})
    res.status(200).send(track)
}



exports.patchTrack = async (req, res) => {
    try{
        const trackUpdate = await Track.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.status(200).send(trackUpdate)
    }catch(err){
      res.json({message: err});
    }
};
