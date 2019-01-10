var express    = require("express");
var login = require('./routes/loginroutes');
var register = require('./routes/registerroutes');
var createEmployee = require('./routes/createEmployee');
var viewEmployee = require('./routes/viewEmployee');
var updateEmployee = require('./routes/updateEmployee');
var uploadEmployee = require('./routes/uploadEmployee');
var saveBank = require('./routes/saveBank');
var viewBankdetails = require('./routes/viewBankdetails');
var updateBankdetails = require('./routes/updateBankdetails');
var benifit = require('./routes/benifit');
var updateBenifit = require('./routes/updateBenifit');
var viewProof = require('./routes/viewProof');
var generateSalary = require('./routes/generatesalary');
var saveSalary = require('./routes/saveSalary');
var readAttendence = require('./routes/readAttendence');
var leave = require('./routes/leave');
var updateLeave = require('./routes/updateLeave');

var bodyParser = require('body-parser');
var app = express();
var urlencodedParser=bodyParser.urlencoded({extended:false});

app.use(bodyParser.urlencoded({ limit: '50mb' }));
app.use(bodyParser.json({limit:'50mb'}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,authentication-token, application/json,charset=utf-8");
    next();
});
var router = express.Router();
// test route
app.get('/', function(req, res) {
    res.send({ message: 'welcome to our upload module apis' });
});
//route to handle user registration
app.post('/login',login.login);
app.post('/register',register.register);
app.post('/createemployee',createEmployee.createEmployee);
app.post('/viewemployee',viewEmployee.viewEmployee);
app.post('/updateemployee',updateEmployee.updateEmployee);
app.post('/uploademployee',uploadEmployee.uploadEmployee);
app.post('/savebank',saveBank.saveBank);
app.post('/bankdetails',viewBankdetails.viewBankdetails);
app.post('/updatebankdetails',updateBankdetails.updateBankdetails);
app.post('/benifit',benifit.benifit);
app.post('/updatebenifit',updateBenifit.updateBenifit);
app.post('/viewproof',viewProof.viewProof);
app.post('/generatesalary',generateSalary.generateSalary);
app.post('/savesalary',saveSalary.saveSalary);
app.post('/readAttendence',readAttendence.readAttendence);
app.post('/leaves',leave.leave);
app.post('/updateleave',updateLeave.updateLeave);

app.use('/api', router);
app.listen(3000);
