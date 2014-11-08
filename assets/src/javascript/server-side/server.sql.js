var express = require('express'),
    app     = express(),
    mysql   = require('mysql'),
    prettyjson = require('prettyjson'),
    prettyjson_options = {
      noColor: true
    },
    connectionpool = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        port: '8889',
        database : 'amail_db'
    });

app.get('/api/amail/users/get_all', function(req,res){
  console.error('Try to call get_all_users service');
  res.setHeader('Content-Type', 'application/json');
  connectionpool.getConnection(function(err, connection) {
    if (err) {
        console.error('CONNECTION error: ',err);
        res.statusCode = 503;
        res.send({
            result: 'error',
            err:    err.code
        });
    } else {
      //res.send(req.params.table);
      connection.query('SELECT * FROM am_users ORDER BY id DESC LIMIT 20', req.params.id, function(err, rows, fields) {
          if (err) {
              console.error(err);
              res.statusCode = 500;
              res.send({
                  result: 'error',
                  err:    err.code
              });
          }
          res.send({
              result: 'success',
              err:    '',
              fields: fields,
              json:   rows,
              length: rows.length
          });
          console.log(prettyjson.render(rows, prettyjson_options));
          connection.release();
      });
    }
  });
});
app.get('/:table/:id', function(req,res){});
app.put('/api/amail/users/add/:id', function(req,res){});
app.delete('/:table/:id', function(req,res){});
 
app.listen(3000);
console.log('Rest Demo Listening on port 3000');