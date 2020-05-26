const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'losprogramadores.chiper@gmail.com',
    pass: 'PROgramadores2020'
  },
  tls: {
    rejectUnauthorized: false
},
secure: false, // use SSL
});


//router.get('/', async (req, res) => {
router.get('/:correo/:nombre/:prod/:id', async (req, res) => {
///:title/:id/random', async (req, res) => {
 var correo = req.params.correo;
  var prod = req.params.prod;
  var nombre = req.params.nombre;
  var id = req.params.id;
 // var correo="lily.duque@hotmail.com";
  //var prod="YEA";
 // var nombre="LILY";
  //var id="111";
  var htmlj = '	<div id ="YO"><td align="left" ><p> Hola '+ nombre;
  htmlj = htmlj +', </p><p>Solo para que estés informado — hemos recibido tu pedido #'+id;
  htmlj= htmlj + ', y ahora se está procesando:</p> <p>'+prod+'</p>';
  htmlj= htmlj + '<p> Gracias, por elegirnos</p></td > </div <tbody><tr><td align="center" valign="top"><div id="x_x_template_header_image"><p style="margin-top:0;"><img data-imagetype="External" src="cid:chiper" style="width:50px;font-size:20px;font-weight:bold;text-transform:capitalize;vertical-align:middle;display:inline-block;text-decoration:none;max-width:20%;margin-right:0;margin-left:0;border-style:none;outline:none;"></img>';
  htmlj = htmlj + ' <img data-imagetype="External" src="cid:logo" style="width:50px;font-size:20px;font-weight:bold;text-transform:capitalize;vertical-align:middle;display:inline-block;text-decoration:none;max-width:20%;margin-right:0;margin-left:0;border-style:none;outline:none;"></img></p></div></td></tr></tbody><td align="center" valign="top"><table width="600" border="0" cellspacing="0" cellpadding="10" id="x_x_template_footer"><tbody><tr><td valign="top" style="border-radius:6px;padding:0;"><table width="100%" border="0" cellspacing="0" cellpadding="10"><tbody> <tr> <td valign="middle" colspan="2" id="x_x_credit" style="color:#8A8A8A;font-size:12px;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;text-align:center;border-radius:6px;padding:24px 0;border-width:0;line-height:150%;"> <p style="margin:0 0 16px 0;">Chiper — Powered by <a href="http://52.86.245.138:8000/" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" style="color:#DE1F32;font-weight:normal;text-decoration:underline;">Los PROgramadores</a> </p> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr>'
  var mailOptions = {
    from: 'losprogramadores.chiper@gmail.com',
    to: correo,
    subject: 'Se hizo un pedido a tu tienda',
    html: htmlj,
    attachments: [{
        filename: 'Logo.png',
        path: 'https://i.imgur.com/8jV2ttl.png',
        cid: 'logo' //my mistake was putting "cid:logo@cid" here! 
   },
   {
    filename: 'Chiper.png',
    path: 'https://www.kaszek.com/wp-content/uploads/2019/08/chiper-logo.png',
    cid: 'chiper' //my mistake was putting "cid:logo@cid" here! 
}
    ]
    
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(400).send({error: error});

    } else {
      console.log('Email sent: ' + info.response);
      res.json(mailOptions);
    }
    
  });
  
});

module.exports = router;