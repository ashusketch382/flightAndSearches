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
        }
    }
    
    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
        }
    }

    async updateCity(data, cityId){
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
        }
    }

    async deleteCity(cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;           
        } catch (error) {
            console.log("something went wrong in service layer");
        }
    }
}