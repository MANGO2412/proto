const app = require('./app');

(
 async ()=>{
     await app.listen(app.get('port'));
     console.log('server on port',app.get('port'));
 }   
)(); 