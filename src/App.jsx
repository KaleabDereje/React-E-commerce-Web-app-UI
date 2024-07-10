function App () {
    /* 
        // using exported module 
        var http = require('http');
        var dt = require('./myfirstmodule');

        http.createServer(function(res, req) {
            res.writeHead(200, {'content-Type': 'text/html'});
            res.write('the date and time are currently: ' + dt.myDateTime());
            res.end();
        }).listen(8080);

        //query string using 'url' node.js module

        var http = require('http');
        var url = require('url');

        http.createServer(function(res, req) {
            res.writeHeader(200, {'content-Type': 'text/html'});
            var q = url.parse(req.url, true).query;

            var txt = q.year + " " + q.month;
            res.end(txt);
        }).listen(8080);

        //node.js as file server and working on file systems 
        //use 'fs' node.js module

        var http = require('http');
        var fs = require('fs');

        http.createServer(function(res, req) {
            //open file on the server and return its contnent
            fs.readFile('demoFile.html', function(err, data){
                res.writeHead(200, {"content-Type": "text/html"});
                res.write(data);
                return res.end(err);
            });
        }).listen(8080);

        //fs module has three methods to create a new file on the server

        var http = require('http');
        var fs = require('fs');

        http.createServer(function(res, req){
            //fs.appenFile() method add a content to existing file else create new with the file name
            fs.appendFile('demoFile.html', 'hello baby contnent',function(err){
                if (err) throw err;
                console.log('updated!');
            });
        }).listen(8080);

        //fs.open() method takes 'w' as flag and open file to write and edit else create file
        http.createServer(function(res, req) {
            fs.open('demoFile.html', 'w', 'hello baby contnet', function(err, file){
                if (err) throw err;
                console.log('file dited');
            });
        }).listen(8080);

        //fs.writeFile method open file and overWrites with new content else create a file with the content

        http.createServer(function(res, req){
            fs.writeFile('demoFile.html', 'overWriten content', function(err){
                if (err) throw err;
                console.log(overWriten file);
            });
        }).listen(8080);

        //fs module uses fs.appendFile() and fs.writeFile() methods to update files

        //fs module uses fs.unlink() method to delete a file in the server

        http.createServer(functio(res,req){
            fs.unlink('demoFile.html', function(err){
                if (err) throw err;
                console.log("file removed");
            });
        }).listen(8080);

        //fs module uses fs.rename() method module to rename  a file in the serve

        http.createServer(function(res, req){
            fs.rename('demofile.html', 'newFiel.html', function(err){
                if (err) throw err;
                console.log('renamed file');
            });
        }).listen(8080);

        //fs module uses fs.upload() method to upload file into the server

        //split a web address into a t=readable parts:
         
        var url = require('url');
        var adress = 'http://localhost:8080/default.htm?year=2017&month=february';
        var adr = url.parse(address, true);

        console.log(adr.host);
        console.log(adr.pathname);
        console.log(adr.search);
         var data = q.query;
         console.log(data.month);

         var http = require('http');
         var url = require('url');
         var fs = require('fs');

         http.createServer(function(res, req){
            var adr = url.parse(req.url, true);
            var fileName = "." + adr.pathname;

            fs.readFile(fileName, function(err, data){
                if (err) {
                    res.writeHead(404, {"content-Type": "text/html"});
                    res.end("404 not found");
                }

                res.writeHead(200, {"content-Type": "text/html"});
                res.write(data);
                return res.end();
            });
         }).listen(8080);

         //node.js 'events' module to add ahd handle event objects
         
         var events = require('ebvents');
         // every event is instance of EventEmiiter object

         var events = require("events");
         var newEvent = new EventEmitter();

         //add event handler
         var eventHandler = function() {
            console.log('scream');
         };

         //add event handler to the event
         newEvent.on('scream', eventHandler);
         
         //fire event
         newEvent.emit('scream');

         //node mongo db connection using mongo module

         var mongodb = require('mogodb').MongoClient;
         var url = 'mongodb://localhost:27017/';

         mongodb.connect(url, function(err, db){
            if (err) throw err;
            var dbo = db.db('mydb');
            var query = {address: /S/}
            dbo.collection('customers').findMany(query).limit(5).toArray(function(err, result){
                if(err) throw err;
                console.log(result)
                db.close();
            });
         });

         //join mongodb
         var mongodb = require('mongodb').MongoClient;
         var url = 'mongodb://localhost:27017';

         mongodb.connect(url, function(err, db){
            if(err) throw err;
            var dbo = db.db('mydb');

            dbo.collection('order').aggregate([
                {$lookup: {
                    from: 'products',
                    localField: 'product_id',
                    forignField: '_id',
                    as: 'orderdetails'
                }}
            ]).toArray(function(err, result){
                if(err) throw err;
                console.log(JSON.stringify(result))
                db.close();
            });
         });


    */

}

export default App;