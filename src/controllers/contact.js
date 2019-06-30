const Contact = require('../models/contact');

module.exports = function (app){


    app.post('/contact', async (req, res) => {
        let infoBody = req.body
        
        if (infoBody.telefono == "") {
          res.status(304).json({
            msg: "El teléfono es requerido",
            code: 304
          });
        } else {
          let newContact = new Contact({
            nombre: infoBody.nombre,
            apellido: infoBody.apellido,
            telefono: infoBody.telefono
          });

            await newContact.save();
          res.json({
            msg: "El usuario se a añadido correctamente"
          });
        }

        
    })

    app.get('/contact', async (req, res) =>{

        const listContacts = await Contact.find({})

        res.json({
          listContacts
        });
    })
}