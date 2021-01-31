import Messages from "./models/dbMessages.js";

module.exports = {
  syncMessage(req,res){

    app.get('/messages/sync/:room', (req,res) => {
      Messages.find((err,data) => {
        if( err ){
          res.status(500).send(err);
        }else{
          res.status(200).send(data);
        }
      })
    });

    // try(
    //   const messages = await Messages.find({
    //     room: {
    //       name: req.params.room
    //     }
    //   });
    //   res.json(messages);
    // )catch(err){
    //   res.status(500).send(err);
    // }


  }, //sync
  newMessage(req,res){
    const dbMessage = req.body;

    Messages.create(dbMessage, (err,data) => {
      if(err){
        res.status(500).send(err)
      }else{
        res.status(201).send(data)
      }
    })
  } //new
};
