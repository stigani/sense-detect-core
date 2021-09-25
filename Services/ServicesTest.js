/*
const { DataManager } = require('./Models/DataManager');

const { UserServices } = require('./Services/CRUDServices/UserServices');
const { DogServices } = require('./Services/CRUDServices/DogServices');
const { MetricServices } = require('./Services/CRUDServices/MetricServices');
const { SampleServices } = require('./Services/CRUDServices/SampleServices');
const { EducationSessionServices } = require('./Services/CRUDServices/EducationSessionServices');
const { GeneralEducationSessionServices } = require('./Services/CRUDServices/GeneralEducationSessionServices');
const { OlfactoryAwakingSessionServices } = require('./Services/CRUDServices/OlfactoryAwakingSessionServices');
const { EducationSessionRatingServices } = require('./Services/CRUDServices/EducationSessionRatingServices');
const { TestingSessionServices } = require('./Services/CRUDServices/TestingSessionServices');
const { TestingSessionRatingServices } = require('./Services/CRUDServices/TestingSessionRatingServices');
const { EducationMilestoneServices } = require('./Services/CRUDServices/EducationMilestoneServices');


let dataManager = new DataManager();

let session = dataManager.session;


*/
//////////////////////////////////////////////////////
// EducationMiletone Tests
//////////////////////////////////////////////////////

/* Okey
let educationMilestoneModel = dataManager.educationMilestoneModel;
let educationMilestoneServices = new EducationMilestoneServices(session, educationMilestoneModel);
*/

/* Okey
let newEducationMiletone = {
    dateTime: "2020-10-1 15:22:14",
    milestoneType: "Pause",
    TestingSessionId: 2,
};

educationMilestoneServices.create(newEducationMiletone).then(function(result){
    console.log(result);
});
*/

/* Okey
educationMilestoneServices.getById(1).then(function(result){
    console.log(result);
});
*/

/* Okey 
let updatedEducationMiletone = {
    dateTime: "2020-8-12 00:22:14",
    milestoneType: "Pause",
    TestingSessionId: 2,
};

let status = educationMilestoneServices.update(1, updatedEducationMiletone).then(function(result){
    console.log(result);
});
*/

/* Okey 
educationMilestoneServices.getAll().then(function(results){
    console.log(results);
});
*/

/* Okey
educationMilestoneServices.delete(1).then(function(result){
    console.log(result);
    educationMilestoneServices.getAll().then(function(results){
        console.log(results);
    });
});
*/

//////////////////////////////////////////////////////
// TestingMiletone Tests
//////////////////////////////////////////////////////

/* Okey
let testingMilestoneModel = dataManager.testingMilestoneModel;
let testingMilestonesServices = new TestingMilestoneServices(session, testingMilestoneModel);
*/

/* Okey
let newTestingMiletone = {
    dateTime: "2020-05-11 15:22:14",
    milestoneType: "Pause",
    TestingSessionId: 2,
};

testingMilestonesServices.create(newTestingMiletone).then(function(result){
    console.log(result);
});
*/

/* Okey
testingMilestonesServices.getById(1).then(function(result){
    console.log(result);
});
*/

/* Okey 
let updatedTestingMiletone = {
    dateTime: "2020-05-12 00:22:14",
    milestoneType: "Pause",
    TestingSessionId: 2,
};

let status = testingMilestonesServices.update(1, updatedTestingMiletone).then(function(result){
    console.log(result);
});
*/

/* Okey 
testingMilestonesServices.getAll().then(function(results){
    console.log(results);
});
*/

/* Okey
testingMilestonesServices.delete(1).then(function(result){
    console.log(result);
    testingMilestonesServices.getAll().then(function(results){
        console.log(results);
    });
});
*/





//////////////////////////////////////////////////////
// TestingSessionRating Tests
//////////////////////////////////////////////////////

/* Okey
let testingSessionRatingModel = dataManager.testingSessionRatingModel;
let testingSessionRatingServices = new TestingSessionRatingServices(session, testingSessionRatingModel);
*/

/* Okey
let newTestingSessionRating = {
    value: 3,
    comment: "Capacité moyenne...",
    EducationSessionId: 2,
    MetricId: 2,
};

testingSessionRatingServices.create(newTestingSessionRating).then(function(result){
    console.log(result);
});
*/

/* Okey
testingSessionRatingServices.getById(1).then(function(result){
    console.log(result);
});
*/

/* Okey 
let updatedTestingSessionRating = {
    value: 5,
    comment: "Excellent",
    EducationSessionId: 2,
    MetricId: 2,
};

let status = testingSessionRatingServices.update(1, updatedTestingSessionRating).then(function(result){
    console.log(result);
});
*/

/* Okey 
testingSessionRatingServices.getAll().then(function(results){
    console.log(results);
});
*/

/* Okey
testingSessionRatingServices.delete(1).then(function(result){
    console.log(result);
    testingSessionRatingServices.getAll().then(function(results){
        console.log(results);
    });
});
*/



//////////////////////////////////////////////////////
// TestingSession Tests
//////////////////////////////////////////////////////

/* Okey
let testingSessionModel = dataManager.testingSessionModel;
let testingSessionServices = new TestingSessionServices(session, testingSessionModel);
*/

/* Okey
let newTestingSession = {
    environment: "Laboratoire",
    sampleType: "Echantillon XYE",
    supportType:  "General Education" ,
    UserId: 7,
    DogId: 2,
    SampleId :1
};

testingSessionServices.create(newTestingSession).then(function(result){
    console.log(result);
});
*/

/* Okey
testingSessionServices.getById(1).then(function(result){
    console.log(result);
});
*/

/* Okey 
let updatedTestingSession = {
    environment: "Plein Air",
    sampleType: "Echantillon Maladie",
    supportType:  "Pieds de Detection" ,
    UserId: 7,
    DogId: 2,
    SampleId :1
};

let status = testingSessionServices.update(1, updatedTestingSession).then(function(result){
    console.log(result);
});
*/

/* Okey 
testingSessionServices.getAll().then(function(results){
    console.log(results);
});
*/

/* Okey
testingSessionServices.delete(1).then(function(result){
    console.log(result);
    testingSessionServices.getAll().then(function(results){
        console.log(results);
    });
});
*/



//////////////////////////////////////////////////////
// EducationSessionRating Tests
//////////////////////////////////////////////////////


/* Okey
let educationSessionRatingModel = dataManager.educationSessionRatingModel;
let educationSessionRatingServices = new EducationSessionRatingServices(session, educationSessionRatingModel);
*/

/* Okey
let newEducationSessionRating = {
    value: 3,
    comment: "Capacité moyenne...",
    EducationSessionId: 2,
    MetricId: 2,
};

educationSessionRatingServices.create(newEducationSessionRating).then(function(result){
    console.log(result);
});
*/

/* Okey
educationSessionRatingServices.getById(2).then(function(result){
    console.log(result);
});
*/

/* Okey 
let updatedEducationSessionRating = {
    value: 5,
    comment: "Excellent",
    EducationSessionId: 2,
    MetricId: 2,
};

let status = educationSessionRatingServices.update(1, updatedEducationSessionRating).then(function(result){
    console.log(result);
});
*/

/* Okey 
educationSessionRatingServices.getAll().then(function(results){
    console.log(results);
});
*/

/* Okey
educationSessionRatingServices.delete(1).then(function(result){
    console.log(result);
    educationSessionRatingServices.getAll().then(function(results){
        console.log(results);
    });
});
*/


//////////////////////////////////////////////////////
// OlfactoryAwakingSession Tests
//////////////////////////////////////////////////////


/* Okey
let olfactoryAwakingSessionModel = dataManager.olfactoryAwakingSessionModel;
let olfactoryAwakingSessionServices = new OlfactoryAwakingSessionServices(session, olfactoryAwakingSessionModel);
*/

/* Okey
let newOlfactoryAwakingSession = {
    environment: "Plein Aire",
    trainingType: "Type 12",
    EducationSessionId: 2,
};

olfactoryAwakingSessionServices.create(newOlfactoryAwakingSession).then(function(result){
    console.log(result);
});
*/

/* Okey
olfactoryAwakingSessionServices.getById(1).then(function(result){
    console.log(result);
});
*/

/* Okey 
let updatedOlfactoryAwakingSession = {
    environment: "Plein Aire",
    trainingType: "Type 4712",
    EducationSessionId: 2,
};

let status = olfactoryAwakingSessionServices.update(1, updatedOlfactoryAwakingSession).then(function(result){
    console.log(result);
});
*/

/* Okey 
olfactoryAwakingSessionServices.getAll().then(function(results){
    console.log(results);
});
*/

/* Okey
olfactoryAwakingSessionServices.delete(1).then(function(result){
    console.log(result);
    olfactoryAwakingSessionServices.getAll().then(function(results){
        console.log(results);
    });
});
*/

//////////////////////////////////////////////////////
// GeneralEducationSession Tests
//////////////////////////////////////////////////////


/* Okey
let generalEducationSessionModel = dataManager.generalEducationSessionModel;
let generalEducationSessionServices = new GeneralEducationSessionServices(session, generalEducationSessionModel);
*/

/* Okey
let newGeneralEducationSession = {
    EducationSessionId: 2,
};

generalEducationSessionServices.create(newGeneralEducationSession).then(function(result){
    console.log(result);
});
*/

/* Okey
generalEducationSessionServices.getById(1).then(function(result){
    console.log(result);
});
*/

/* Okey 
let updatedGeneralEducationSession = {
    EducationSessionId: 2,
};

let status = generalEducationSessionServices.update(1, updatedGeneralEducationSession).then(function(result){
    console.log(result);
});
*/

/* Okey 
generalEducationSessionServices.getAll().then(function(results){
    console.log(results);
});
*/

/* Okey
generalEducationSessionServices.delete(1).then(function(result){
    console.log(result);
    generalEducationSessionServices.getAll().then(function(results){
        console.log(results);
    });
});
*/

//////////////////////////////////////////////////////
// EducationSession Tests
//////////////////////////////////////////////////////


/* Okey
let educationSessionModel = dataManager.educationSessionModel;
let educationSessionServices = new EducationSessionServices(session, educationSessionModel);
*/

/* Okey
let newEducationSession = {
    educationType:  "General Education" ,
    UserId: 7,
    DogId: 2,
    SampleId :1
};

educationSessionServices.create(newEducationSession).then(function(result){
    console.log(result);
});
*/

/* Okey
educationSessionServices.getById(1).then(function(result){
    console.log(result);
});
*/

/* Okey 
let updatedEducationSession = {
    educationType:  "Olfactory Capacity" ,
    UserId: 7,
    DogId: 2,
    SampleId :1
};

let status = educationSessionServices.update(1, updatedEducationSession).then(function(result){
    console.log(result);
});
*/

/* Okey 
educationSessionServices.getAll().then(function(results){
    console.log(results);
});
*/

/* Okey
educationSessionServices.delete(1).then(function(result){
    console.log(result);
    educationSessionServices.getAll().then(function(results){
        console.log(results);
    });
});
*/



//////////////////////////////////////////////////////
// sample Tests
//////////////////////////////////////////////////////

/* Okey
let sampleModel = dataManager.sampleModel;
let sampleServices = new SampleServices(session, sampleModel);
*/

/* Okey
let newSample = {
    sample: "ABDE",
    details:  "Echentillon ABDE X Y Z" ,
};

sampleServices.create(newSample).then(function(result){
    console.log(result);
});
*/

/* Okey
sampleServices.getById(1).then(function(result){
    console.log(result);
});
*/

/* Okey 
let updatedSample = {
    sample: "SARS-COV-19",
    details:  "Echentillon CIVOD19 X Y Z" ,
};

let status = sampleServices.update(1, updatedSample).then(function(result){
    console.log(result);
});
*/

/* Okey 
sampleServices.getAll().then(function(results){
    console.log(results);
});
*/

/* Okey
sampleServices.delete(1).then(function(result){
    console.log(result);
    sampleServices.getAll().then(function(results){
        console.log(results);
    });
});
*/


//////////////////////////////////////////////////////
// Metric Tests
//////////////////////////////////////////////////////


/* Okey
let metricModel = dataManager.metricModel;
let metricServices = new MetricServices(session, metricModel);
*/

/* Okey
let newMetric = {
    legend: "Capacité de XYR",
    sessionType:  "Test" ,
    weight: 0.05,
    comment : "Calcul la capacité du chien à faire X et Y."
};

metricServices.create(newMetric).then(function(result){
    console.log(result);
});
*/

/* Okey
metricServices.getById(1).then(function(result){
    console.log(result);
});
*/

/* Okey 
let updatedMetric = {
    legend: "Capacité de XYR 0000",
    sessionType:  "Test" ,
    weight: 0.05,
    comment : "Calcul la capacité du chien à faire X et Y."
};

let status = metricServices.update(1, updatedMetric).then(function(result){
    console.log(result);
});
*/

/* Okey 
metricServices.getAll().then(function(results){
    console.log(results);
});
*/

/* Okey
metricServices.delete(1).then(function(result){
    console.log(result);
    metricServices.getAll().then(function(results){
        console.log(results);
    });
});
*/


//////////////////////////////////////////////////////
// Dog Tests
//////////////////////////////////////////////////////

/* Okey
let dogModel = dataManager.dogModel;
let dogServices = new DogServices(session, dogModel);
*/

/* Okey
let newDog = {
    race: "Race 50",
    picture:  "CH011-C50.jpg" ,
};

dogServices.create(newDog).then(function(result){
    console.log(result);
});
*/

/* Okey
dogServices.getById(1).then(function(result){
    console.log(result);
});
*/

/* Okey 
let updatedDog = {
    race: "Race 505",
    picture:  "CH011-C505.jpg" ,
};

let status = dogServices.update(1, updatedDog).then(function(result){
    console.log(result);
});
*/

/* Okey 
dogServices.getAll().then(function(results){
    console.log(results);
});
*/

/* Okey
dogServices.delete(1).then(function(result){
    console.log(result);
    dogServices.getAll().then(function(results){
        console.log(results);
    });
});
*/

//////////////////////////////////////////////////////
// Dog Tests
//////////////////////////////////////////////////////

/* Okey
let DogModel = dataManager.DogModel;
let DogServices = new DogServices(session, DogModel);
*/

/* Okey
let newDog = {
    firstNme: "Alex",
    lastName:  "Test" ,
    email: "pull@outlook.com" ,
    password: "00000050" ,
    profile: "Monitor" ,
    function: "Monitoring" ,
    entreprise: "XddYZ" ,
    hiringDate: "2018-01-01 14:00:00",
};

DogServices.create(newDog).then(function(result){
    console.log(result);
});


*/

/* Okey
let element = DogServices.getById(5);


/* Okey
DogServices.delete(3).then(function(result){
    console.log(result);
});
*/


/* Okey 
let updatedDog = {
    firstNme: "Alex",
    lastName:  "Alex" ,
    email: "s.kkjhg@outlook.com" ,
    password: "dzvr" ,
    profile: "Admin" ,
    function: "Administration" ,
    entreprise: "XYZ" ,
    hiringDate: "2014-01-01 14:00:00",
};

let status = DogServices.update(3, updatedDog);
console.log(status);
*/

/* Okey 
DogServices.getAll().then(function(results){
    console.log(results);
});
*/

//////////////////////////////////////////////////////
// User Tests
//////////////////////////////////////////////////////

/* Okey
let userModel = dataManager.userModel;
let userServices = new UserServices(session, userModel);
*/

/* Okey
let newUser = {
    firstNme: "Alex",
    lastName:  "Test" ,
    email: "pull@outlook.com" ,
    password: "00000050" ,
    profile: "Monitor" ,
    function: "Monitoring" ,
    entreprise: "XddYZ" ,
    hiringDate: "2018-01-01 14:00:00",
};

userServices.create(newUser).then(function(result){
    console.log(result);
});


*/

/* Okey
let element = userServices.getById(5);


/* Okey
userServices.delete(3).then(function(result){
    console.log(result);
});
*/


/* Okey 
let updatedUser = {
    firstNme: "Alex",
    lastName:  "Alex" ,
    email: "s.kkjhg@outlook.com" ,
    password: "dzvr" ,
    profile: "Admin" ,
    function: "Administration" ,
    entreprise: "XYZ" ,
    hiringDate: "2014-01-01 14:00:00",
};

let status = userServices.update(3, updatedUser);
console.log(status);
*/

/* Okey 
userServices.getAll().then(function(results){
    console.log(results);
});
*/
