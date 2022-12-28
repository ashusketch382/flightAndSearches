const { CityRepository } = require("../repositories/index")

class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(cityId){
        try {
            const city = await this.cityRepository.createCity(cityId);
            return city;            
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    
    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }

    async updateCity(cityId, data){
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }

    async deleteCity(cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;           
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    async getAllCity(filter){
        try {
            const cities = await this.cityRepository.getAllCity({name: filter.name});
            return cities;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
}

module.exports = CityService;