var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

// Controller method #1: Simple Response
router.post('/one', function(req, res) {
    res.send("Got a post request")
})

// Controller method #2: Persisting Data
router.post('/two', (req, res) => {
    let testData = "Test data for endpoint two";

    TestModel.create({ testdata: testData })
    res.send("Test two went through");
});

// Controller method #3: req.body
router.post('/three', (req, res) => {
    var testData = req.body.testdata.item;

    TestModel.create({ testdata: testData })
    res.send("Test three went through")
    console.log("Test three went through")
});

// Route 4: use this with postman
router.post('/four', (req, res) => {
    var testData = req.body.testdata.item;
    TestModel.create({ testdata: testData })
    .then(function message() {
        res.send("Test 4 went through");
    });
});

// Route 5: Return data in a promise 
router.post('/five', (req, res) => {
    var testData = req.body.testdata.item;
    TestModel.create({ testdata: testData })
    .then(function message(data) {
        res.send(data);
    });
});

// Route 6: Return response as JSON
router.post('/six', (req, res) => {
    var testData = req.body.testdata.item;
    TestModel.create({ testdata: testData })
    .then(function(testdata) {
        res.json({ testdata: testdata });
    });
});

// Route 7: Handle errors
router.post('/seven', (req, res) => {
    var testData = req.body.testdata.item;
    TestModel.create({ testdata: testData })
    .then(
        function createSuccess(testdata) {
            res.json({ testdata: testdata })
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});

router.get('/helloclient', (req, res) => {
    res.send('This is a message from the server to the client.');
});

router.get('/one', function(req, res) {

    TestModel.findAll({attributes: ['id', 'testdata']})

    .then(
        function findAllSuccess(data) {
            console.log("Controller data:", data);
            res.json(data);
        },
        function findAllErrors(err) {
            res.send(500, err.message);
        }
    );
});

module.exports = router;