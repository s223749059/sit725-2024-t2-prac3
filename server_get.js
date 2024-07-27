    const express = require("express");
    const app = express();
    app.use(express.static('public'))

    const addTwoNumber = (n1, n2) => {
        return n1 + n2;
    }

    const multiplyTwoNumber = (n1, n2) => {
        return n1 * n2;
    }

    app.get("/addTwoNumber", (req, res)=>{
        const n1 = parseInt(req.query.n1);
        const n2 = parseInt(req.query.n2);
        const result = addTwoNumber(n1,n2);
        res.json({statuscocde:200, data: result }); 
    });

    app.get("/multiplyTwoNumber", (req, res)=>{
        const n1 = parseInt(req.query.n1);
        const n2 = parseInt(req.query.n2);
        const result = multiplyTwoNumber(n1,n2);
        res.json({statuscocde:200, data: result }); 
    });

    app.get("/display", (req, res) => {
        const n1 = "<html><body><p><b>WEBSITE PAGE - DISPLAY</b></p></body></html>";
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(n1));     
    })

    console.log("addTwoNumber() output: " + addTwoNumber(123, 456));
    console.log("multiplyTwoNumber() output: " + multiplyTwoNumber(123, 456));

    const port = 3000;
    app.listen(port, ()=> {
        console.log("The application is available at http://localhost:" + port);
    })