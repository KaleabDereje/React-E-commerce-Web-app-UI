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

    */

}

export default App;