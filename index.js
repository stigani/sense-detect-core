const express = require('express');

var cors = require('cors');

const { DataManager } = require('./Models/DataManager');
const { DogServices } = require('./Services/CRUDServices/DogServices');
const { MetricServices } = require('./Services/CRUDServices/MetricServices');
const { UserServices } = require('./Services/CRUDServices/UserServices');
const { SampleServices } = require('./Services/CRUDServices/SampleServices');

const { EducationSessionServices } = require('./Services/CRUDServices/EducationSessionServices');
const { TestingSessionServices } = require('./Services/CRUDServices/TestingSessionServices');

const { Helpers } = require('./Helpers/Helpers');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.listen(PORT, function(){
    Helpers.log("Backend - index.js", "Server is running on port ".concat(PORT));
});

// DB Session
let dataManager = new DataManager();
let session = dataManager.session;


/////////////////////////////////////////////////////////////////
// SenseDetect API - God Serivices
/////////////////////////////////////////////////////////////////

let dogServices = new DogServices(session, dataManager.dogModel);

// Create Service - Verified with Postman
app.post('/dog/create', function(request, response){
    // Get Query Body
    let element = request.body;
    // Save to DB
    dogServices.create(element).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Update Service - Verified with Postman
app.put('/dog/update/:id', function(request, response){
    
    // Get user ID
    let id = parseInt(request.params.id);
    // Get Query Body
    let element = request.body;
    // Update DB
    dogServices.update(id, element).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By ID Service - Verified with Postman
app.get('/dog/read/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Get from DB
    dogServices.getById(id).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Delete By ID Service - Verified with Postman
app.delete('/dog/delete/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Delete from DB
    dogServices.delete(id).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By All Service - Verified with Postman
app.get('/dog/read', function(request, response){
    // Get All from DB
    dogServices.getAll().then(function(results){
        // Response  
        response.status(200);
        response.json(results);
    }).catch(function(error){
        console.log(error);
    });
});

/////////////////////////////////////////////////////////////////
// SenseDetect API - God Serivices
/////////////////////////////////////////////////////////////////

let metricServices = new MetricServices(session, dataManager.metricModel);

// Create Service - Verified with Postman
app.post('/metric/create', function(request, response){
    // Get Query Body
    let element = request.body;
    // Save to DB
    metricServices.create(element).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Update Service - Verified with Postman
app.put('/metric/update/:id', function(request, response){
    
    // Get user ID
    let id = parseInt(request.params.id);
    // Get Query Body
    let element = request.body;
    // Update DB
    metricServices.update(id, element).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By ID Service - Verified with Postman
app.get('/metric/read/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Get from DB
    metricServices.getById(id).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Delete By ID Service - Verified with Postman
app.delete('/metric/delete/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Delete from DB
    metricServices.delete(id).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By All Service - Verified with Postman
app.get('/metric/read', function(request, response){
    // Get All from DB
    metricServices.getAll().then(function(results){
        // Response  
        response.status(200);
        response.json(results);
    }).catch(function(error){
        console.log(error);
    });
});

/////////////////////////////////////////////////////////////////
// SenseDetect API - User Serivices
/////////////////////////////////////////////////////////////////

let userServices = new UserServices(session, dataManager.userModel);

// Create Service - Verified with Postman
app.post('/user/create', function(request, response){
    // Get Query Body
    let element = request.body;
    // Save to DB
    userServices.create(element).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Update Service - Verified with Postman
app.put('/user/update/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Get Query Body
    let element = request.body;
    // Update DB
    userServices.update(id, element).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By ID Service - Verified with Postman
app.get('/user/read/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Get from DB
    userServices.getById(id).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By ID Service - Verified with Postman
app.post('/user/loggin', function(request, response){
    // Get user profile
    let credentials = request.body;
    // Get from DB
    userServices.getByCredentials(credentials).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By ID Service - Verified with Postman
app.get('/user/read/email/:email', function(request, response){
    // Get user profile
    let email = request.params.email;
    // Get from DB
    userServices.getByEmail(email).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By ID Service - Verified with Postman
app.get('/user/read/profile/:profile', function(request, response){
    // Get user profile
    let profile = request.params.profile;
    // Get from DB
    userServices.getByProfile(profile).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Delete By ID Service - Verified with Postman
app.delete('/user/delete/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Delete from DB
    userServices.delete(id).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By All Service - Verified with Postman
app.get('/user/read', function(request, response){
    // Get All from DB
    userServices.getAll().then(function(results){
        // Response  
        response.status(200);
        response.json(results);
    }).catch(function(error){
        console.log(error);
    });
});

/////////////////////////////////////////////////////////////////
// SenseDetect API - Sample Serivices
/////////////////////////////////////////////////////////////////

let sampleServices = new SampleServices(session, dataManager.sampleModel);

// Create Service - Verified with Postman
app.post('/sample/create', function(request, response){
    // Get Query Body
    let element = request.body;
    // Save to DB
    sampleServices.create(element).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Update Service - Verified with Postman
app.put('/sample/update/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Get Query Body
    let element = request.body;
    // Update DB
    sampleServices.update(id, element).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By ID Service - Verified with Postman
app.get('/sample/read/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Get from DB
    sampleServices.getById(id).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Delete By ID Service - Verified with Postman
app.delete('/sample/delete/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Delete from DB
    sampleServices.delete(id).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By All Service - Verified with Postman
app.get('/sample/read', function(request, response){
    // Get All from DB
    sampleServices.getAll().then(function(results){
        // Response  
        response.status(200);
        response.json(results);
    }).catch(function(error){
        console.log(error);
    });
});


/////////////////////////////////////////////////////////////////
// SenseDetect API - Education Session Serivices
/////////////////////////////////////////////////////////////////

let educationSessionServices = new EducationSessionServices(session, dataManager.educationSessionModel);

// Create Service - Verified with Postman
app.post('/education-session/create', function(request, response){
    // Get Query Body
    let element = request.body;
    Helpers.log("/education-session/create", element);
    // Save to DB
    educationSessionServices.create(element).then(function(result){
        response.status(200);
        response.json(result);
    }).catch(function(error){
        console.log(error);
    });
});

// Update Service - Verified with Postman
app.put('/education-session/update/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Get Query Body
    let element = request.body;
    // Update DB
    educationSessionServices.update(id, element).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By ID Service - Verified with Postman
app.get('/education-session/read/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Get from DB
    educationSessionServices.getById(id).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Delete By ID Service - Verified with Postman
app.delete('/education-session/delete/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Delete from DB
    educationSessionServices.delete(id).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By All Service - Verified with Postman
app.get('/education-session/read', function(request, response){
    // Get All from DB
    educationSessionServices.getAll().then(function(results){
        // Response  
        response.status(200);
        response.json(results);
    }).catch(function(error){
        console.log(error);
    });
});

/////////////////////////////////////////////////////////////////
// SenseDetect API - Testing Session Serivices
/////////////////////////////////////////////////////////////////

let testingSessionServices = new TestingSessionServices(session, dataManager.testingSessionModel);

// Create Service - Verified with Postman
app.post('/testing-session/create', function(request, response){
    // Get Query Body
    let element = request.body;
    // Save to DB
    testingSessionServices.create(element).then(function(result){
        response.status(200);
        response.json(result);
    }).catch(function(error){
        console.log(error);
    });
});

// Update Service - Verified with Postman
app.put('/testing-session/update/:id', function(request, response){
    Helpers.log("Update API", request);
    // Get user ID
    let id = parseInt(request.params.id);
    // Get Query Body
    let element = request.body;
    Helpers.log("User API - receved element", element);
    Helpers.log("User API - receved id", id);
    // Update DB
    testingSessionServices.update(id, element).then(function(result){
        Helpers.log("UserService Response - update result", result);
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By ID Service - Verified with Postman
app.get('/testing-session/read/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Get from DB
    testingSessionServices.getById(id).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Delete By ID Service - Verified with Postman
app.delete('/testing-session/delete/:id', function(request, response){
    // Get user ID
    let id = parseInt(request.params.id);
    // Delete from DB
    testingSessionServices.delete(id).then(function(result){
        // Response  
        response.status(200);
        response.json(result);
    });
});

// Get By All Service - Verified with Postman
app.get('/testing-session/read', function(request, response){
    // Get All from DB
    testingSessionServices.getAll().then(function(results){
        // Response  
        response.status(200);
        response.json(results);
    }).catch(function(error){
        console.log(error);
    });
});