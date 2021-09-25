
const {Helpers} = require('../../Helpers/Helpers');

class UserServices{

    constructor(session, model){      
        this.model = model;
        this.session = session;
    }

    async create(element){
        try {
            return await this.model.create(element);
        }
        catch (error) {
            console.error('Error : ', error);
        }
    }

    async delete(id){
        try {
            let criteria = { 
                where: {id: id}
            };

            await this.model.destroy(criteria).then(function(status){ 
               if(status === 1){
                    return true;
                }
            });
        }
        catch (error) {
            console.error(error);
        }
        return false;
    }

    async update(id, element){
        try {
            return await this.model.update(element, {where: {id:id}});
        }
        catch (error) {
            console.error(error);
        }
    }

    async getById(id){
        try {
            return await this.model.findByPk(id);
        }
        catch (error) {
            console.error(error);
        }
    }

    async getAll(){
        try {
            let results = await this.model.findAll({});

            return results.map(function(row){
                return row.dataValues;
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    
    async getByCredentials(credentials){
        try {
            let results = await this.model.findAll({
                where: {
                    email: credentials.email,
                    password: credentials.password,
                }
            });

            return results.map(function(row){
                return row.dataValues;
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    async getByEmail(email){
        try {
            let results = await this.model.findAll({
                where: {
                    email: email
                }
            });

            return results.map(function(row){
                return row.dataValues;
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    async getByProfile(profile){
        try {
            let results = await this.model.findAll({
                where: {
                    profile: profile
                }
            });

            return results.map(function(row){
                return row.dataValues;
            });
        }
        catch (error) {
            console.error(error);
        }
    }
}

module.exports.UserServices = UserServices;
