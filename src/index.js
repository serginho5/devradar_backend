const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb://oministack10:oministack10@cluster0-shard-00-00-nh2bz.mongodb.net:27017,cluster0-shard-00-01-nh2bz.mongodb.net:27017,cluster0-shard-00-02-nh2bz.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE
// Tipos de parametros:

// Query Params: request.query (Filtros, ordenação, paginação ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (não-relacional)

app.listen(3333);