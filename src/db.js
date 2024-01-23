const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin123@cluster1.2jxz2q1.mongodb.net/Cadastro?retryWrites=true&w=majority');

let db = mongoose.connection;

