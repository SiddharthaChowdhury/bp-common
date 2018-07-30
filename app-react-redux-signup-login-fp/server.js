const express   = require('express'),
app             = express(),
_PORT = 1337;


var hosts = ['http://localhost:8080'].join(', ');

app.use((req, res, next) => {
    res.header('access-control-allow-origin', hosts);
    next();
});

app.get('/api/users', function (req, res){
    res.status(200);
    return res.json([
        {id: 1, name: "Sidd"},
        {id: 2, name: "Surbhi"},
        {id: 3, name: "Ruma"} 
    ])
})


app.listen(_PORT, () => console.log(`Express server up on port: ${_PORT}`));