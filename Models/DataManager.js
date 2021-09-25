const { Sequelize, DataTypes } = require('sequelize');

const mysql2 = require('mysql2');

class DataManager{
  // Namecheap user : naosylcr_root
  // Namecheap password : Full@..015
  // Namecheap db name : naosylcr_sense_detect_odb
  // Namecheap host : server234.web-hosting.com
  constructor(){
    /* Local Credentials
    this.session = new Sequelize('SENSE_DETECT_ODB', 'root', 'r00t', {
      host: 'localhost',
      dialect: 'mysql',
      dialectModule: mysql2
    });
    */

    // Azure Credentials
    const DB_NAME = "sensedetect_azure_db";
    const DB_HOSTNAME = "sensdetectprod.database.windows.net";
    const DB_USERNAME = "sense_detect_admin";
    const DB_PASSWORD = "Axm@2021";
    const DB_DIALECT = "mssql";

    this.session = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
      host: DB_HOSTNAME,
      dialect: DB_DIALECT
    });

    try {
      this.session.authenticate();
      console.log('Connection has been established successfully.');

      this.dogModel = this.session.define('Dog', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true
        },        
        reference: {
          type: DataTypes.STRING,
          allowNull: true
        },
        birthDate: {
          type: DataTypes.DATE,
          allowNull: true
        },
        LOFNumber: {
          type: DataTypes.STRING,
          allowNull: true
        },
        race: {
          type: DataTypes.STRING,
          allowNull: true
        },
        picture: {
          type: DataTypes.STRING,
          allowNull: true
        }
      });

      this.userModel = this.session.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
          },
          firstName: {
            type: DataTypes.STRING,
            allowNull: true
          },
          lastName: {
            type: DataTypes.STRING,
            allowNull: true
          },
          email: {
            type: DataTypes.STRING,
            allowNull: true
          },
          password: {
            type: DataTypes.STRING,
            allowNull: true
          },
          profile: {
            type: DataTypes.STRING,
            allowNull: true
          },
          function: {
            type: DataTypes.STRING,
            allowNull: true
          },
          entreprise: {
            type: DataTypes.STRING,
            allowNull: true
          },
          hiringDate: {
            type: DataTypes.DATE,
            allowNull: true
          }
      });

      this.sampleModel = this.session.define('Sample', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        sample: {
          type: DataTypes.STRING,
          allowNull: true
        },
        details: {
          type: DataTypes.STRING,
          allowNull: true
        }
      });
    
      this.metricModel = this.session.define('Metric', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        legend: {
          type: DataTypes.STRING,
          allowNull: true
        },
        sessionType: {
          type: DataTypes.STRING,
          allowNull: true
        },
        weight: {
          type: DataTypes.FLOAT,
          allowNull: true
        },
        comment: {
          type: DataTypes.STRING,
          allowNull: true
        },
      });
    
      this.educationSessionModel = this.session.define('EducationSession', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        educationType: {
          type: DataTypes.STRING,
          allowNull: true
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: true
        },
        administratorComment: {
          type: DataTypes.STRING,
          allowNull: true
        },
      });

      this.educationSessionInstanceModel = this.session.define('EducationSessionInstance', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        educatorComment: {
          type: DataTypes.STRING,
          allowNull: true
        }
      });

      this.educationMilestoneModel = this.session.define('EducationMilestone', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        dateTime: {
          type: DataTypes.DATE,
          allowNull: true
        },
        milestoneType: {
          type: DataTypes.STRING,
          allowNull: true
        }
      });
      
      this.educationRatingModel = this.session.define('EducationRating', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        value: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        educatorComment: {
          type: DataTypes.STRING,
          allowNull: true
        }
      });

      this.testingSessionModel = this.session.define('TestingSession', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        positiveSamplePositionKnown: {//
          type: DataTypes.STRING,
          allowNull: true
        },
        environment: {// Plein Air ...
          type: DataTypes.STRING,
          allowNull: true
        },
        sampleType: {
          type: DataTypes.STRING,
          allowNull: true
        },
        sampleNumber: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        supportType: {
          type: DataTypes.STRING,
          allowNull: true
        },
        linesNumber: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        supportQuantityPerLine: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: true
        },
        seriesNumber: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });

      this.testingSessionInstanceModel = this.session.define('TestingSessionInstance', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        monitorComment: {
          type: DataTypes.STRING,
          allowNull: true
        }
      });

      this.testingMilestoneModel = this.session.define('TestingMilestone', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        dateTime: {
          type: DataTypes.DATE,
          allowNull: true
        },
        milestoneType: {
          type: DataTypes.STRING,
          allowNull: true
        }
      });
    
      this.testingRatingModel = this.session.define('TestingRating', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        value: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        comment: {
          type: DataTypes.STRING,
          allowNull: true
        }
      });
    
      // Associations Definition
      this.educationSessionInstanceModel.educationSession = this.educationSessionInstanceModel.belongsTo(this.educationSessionModel, {as: 'educationSession'});
      this.educationSessionInstanceModel.user = this.educationSessionInstanceModel.belongsTo(this.userModel, {as: 'user'});
      this.educationSessionInstanceModel.sample = this.educationSessionInstanceModel.belongsTo(this.sampleModel, {as: 'sample'});
      this.educationSessionInstanceModel.dog = this.educationSessionInstanceModel.belongsTo(this.dogModel, {as: 'dog'});
      
      this.educationMilestoneModel.educationSessionInstance = this.educationMilestoneModel.belongsTo(this.educationSessionInstanceModel, {as: 'educationSessionInstance'});
      
      this.educationRatingModel.educationSessionInstance = this.educationRatingModel.belongsTo(this.educationSessionInstanceModel, {as: 'educationSessionInstance'});
      this.educationRatingModel.metric = this.educationRatingModel.belongsTo(this.metricModel, {as: 'metric'});
      
      this.testingSessionInstanceModel.testingSession = this.testingSessionInstanceModel.belongsTo(this.testingSessionModel, {as: 'testingSession'});
      this.testingSessionInstanceModel.user = this.testingSessionInstanceModel.belongsTo(this.userModel, {as: 'user'});
      this.testingSessionInstanceModel.sample = this.testingSessionInstanceModel.belongsTo(this.sampleModel, {as: 'sample'});
      this.testingSessionInstanceModel.dog = this.testingSessionInstanceModel.belongsTo(this.dogModel, {as: 'dog'});
      
      this.testingMilestoneModel.testingSessionInstance = this.testingMilestoneModel.belongsTo(this.testingSessionInstanceModel, {as: 'testingSessionInstance'});
      
      this.testingRatingModel.testingSessionInstance = this.testingRatingModel.belongsTo(this.testingSessionInstanceModel, {as: 'testingSessionInstance'});
      this.testingRatingModel.metric = this.testingRatingModel.belongsTo(this.metricModel, {as: 'metric'});
  
    }
    catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  syncDataModels(){
    try {
      this.userModel.sync({force:true});
      this.dogModel.sync({force:true});
      this.metricModel.sync({force:true});
      this.sampleModel.sync({force:true});

      this.educationSessionModel.sync({force:true});
      this.educationSessionInstanceModel.sync({force:true});
      this.educationMilestoneModel.sync({force:true});
      this.educationRatingModel.sync({force:true});

      this.testingSessionModel.sync({force:true});
      this.testingSessionInstanceModel.sync({force:true});
      this.testingMilestoneModel.sync({force:true});
      this.testingRatingModel.sync({force:true});
      
      console.log('DB Created...');
    }
    catch (error) {
      console.error('DB Init Error : ', error);
    }
  }

};

module.exports.DataManager = DataManager;