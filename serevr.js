const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const os = require('os');

console.log();


var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((request,response,next)=>{
	 var now = new Date().toString();
	 var log = `${now} : ${request.method}  ${request.url}`;
	 console.log(log);
     
       next();

});

/*app.use((req,res,next)=>{
  res.render('maintanance.hbs');

});
*/
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('time',() => {
	return new Date().getFullYear()
});

hbs.registerHelper('screamIt',(text) => {
	return text.toUpperCase();
});
app.get('/',(request, response)=>{
  		response.render('home.hbs',{
		pageTitle:'Home Page',
		welcomeMessage: 'Welcome to my website',
		

	});
});


app.get('/about',(request,response)=>{
		response.render('about.hbs',{
		pageTitle:'About Page',
		 

	});
	});

app.get('/bad',(request,response)=>{
		response.render('error.hbs',{
		pageTitle:'error Page',
		time: new Date().getFullYear()
	})
 
});

app.listen(3000,()=>{
	console.log('Serevre Started @ port 3000');
});