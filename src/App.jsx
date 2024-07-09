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
            })
        })

    */

}

export default App;