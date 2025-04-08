import express from 'express';
import treesRoutes from './routes/treesRoutes';

const app = express();  
app.use(express.json());
app.use('/', treesRoutes);

app.listen(3010, () =>{
    console.log('Server run on port 3010')
});