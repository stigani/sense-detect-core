
class MetricServices{

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
}

module.exports.MetricServices = MetricServices;