require('dotenv').config()
const express = require('express') //Importar el paquete express
const app = express()
const hbs = require('hbs')
const port = process.env.PORT //Definir el puerto

//Servidor contenido estático
//Establecer el directorio donde se encuentran los 
//archivos html
app.use( express.static('public') ); 

// Motor de plantilla
hbs.registerPartials(__dirname + '/public/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/views');

app.get('/', (req, res) => {
    //res.send('Hola mundo')
    res.render('registrarPedido', {
        nombre: 'Registrar Pedido'
    })
})

app.get('/registrarPedido',(req, res) => {
    res.sendFile(__dirname + '/public/views/registrarPedido.html')
})

app.get('/contacto', (req, res) => {
    res.send('Contacto')
})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`)
} )

//TailWind
//Bumla
//bootstrap

/*
A las 3p.m me comparten por equipos el drive con 
el avance de la página estática en node

Fecha de entrega y sustentación página estática node: 
miércoles 02 de noviembre.
Login
Página de aterrizaje
Registro de cada módulo
Verficación de conocimientos

Fecha de entrega y sustentación mongo db
miércole 02 de noviembre
Entrega de base de datos no relacional del proyecto
Verificación de conocimientos.
*/