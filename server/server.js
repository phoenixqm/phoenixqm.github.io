/*jslint node: true*/


(function () {
    "use strict";

    var serverFolder = './server/';


    var express = require('express'),
        bodyParser = require('body-parser'),
        getRawBody = require('raw-body'),
        path = require('path');


    var
        app = express(),
        http = require('http'),
        compression = require('compression'),
        io = require('socket.io').listen(server),
        server = http.createServer(app),

        port = process.argv[2] || 5050;


    var router = express.Router();

    app.use(compression({filter: shouldCompress}))

    function shouldCompress(req, res) {
        if (req.headers['x-no-compression']) {
            // don't compress responses with this request header
            return false
        }

        // fallback to standard filter function
        return compression.filter(req, res)
    }


    app.use(function(req, res, next){
        // access
        if (req.is('text/*')) {
            req.text = '';
            req.setEncoding('utf8');
            req.on('data', function(chunk){
                req.text += chunk;
                console.log("text is " + req.text);
            });
            req.on('end', next);
        } else {
          next();
        }
    });



    app.use(function (req, res, next) {
      getRawBody(req, {
        length: req.headers['content-length'],
        limit: '1mb'
      }, function (err, string) {
        if (err)
            return next(err);
        req.text = string;
        next();
      });
    });


    // auth = express.basicAuth(function (user, pass) {
    //     return user === '' && pass === '';
    // });
    // auth_publish = express.basicAuth(function (user, pass) {
    //     return user === '' && pass === '';
    // });


    app.all('/', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });




    function getReader(req, res){
        console.log("getReaders");
        // console.dir(req);
        // res.send("getReaders");
        res.send( '[{"username":"phoenixqm"}, {"username":"github"}]');
    }
    function postReader(req, res){
        console.log("postReaders");
        res.send("postReaders");
    }
    function putReader(req, res){
        console.log("putReaders");
        res.send("putReaders");
    }
    function deleteReader(req, res){
        console.log("deleteReaders");
        res.send("deleteReaders");
    }


    // app.get('/api/readers/', getReader);
    // app.post('/api/readers/', postReader);

    // app.get('/readers', getReader);
    // app.post('/readers', postReader);

    router.route('/api/readers/')
        .get(getReader)
        .post(postReader)
        .put(putReader)
        .delete(deleteReader);


    // Now handle the routes
    app.use(router);

    global.io = io;
    io.on('connection', function(socket){
       console.log('a user connected');
    });

    io.on('connection', function(socket){
       socket.on('disconnect', function(){
       console.log('user disconnected');
       });
    });

    io.on('connection', function(socket){
       socket.on('chat message', function(msg){
         io.emit('chat message', msg);
         console.log('message: ' + msg);
       });
    });


    server.listen(port);

    console.log('Service listening on port ' + port);

}());
