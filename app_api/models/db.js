const mongoose = require('mongoose');

let dbURI = 'mongodb://localhost/Loc8r';

if(process.env.NODE_ENV === 'production'){
  dbURI = process.env.DBURI;

  // code dibawah ini untuk melindungi password account mongodb atlas kita jika kita menyimpan code di public rpository dan cara runningnya sbb: 
  // NODE_ENV=production MONGODB_URI=mongodb+srv://cef_syarif:Kampungan_123@loc8r.swe2p.mongodb.net/Loc8r?retryWrites=true&w=majority
  // dbURI = process.env.MONGODB_URI;
}

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to Mongo Atlas`);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restart 
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () =>{
    process.kill(process.pid, 'SIGUSR2');
  });
});

// For app termination 
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

// For Heroku app termination 
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

require('./locations');
require('./users');