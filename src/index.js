import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//instanciar express
const app = express();
//crear un puerto
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'));
})
//configuraciones extras midlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//crear rutas
app.get('/', (req, res)=>{
    res.send('hola esto es una prueba desde el backend')
})
app.delete('/borrarproducto', (req, res)=>{
    res.send('alguien quiere borrar')
})

