const { CityService } = require("../services/index")

const cityService = new CityService();

const create = async (req, res) =>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "succcessfully created city",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: "Couldn't create a city",
            err: error
        });
        
    }
}

const get = async (req, res) =>{
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "successfully fetched a city",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success:false,
            message: "couldn't fetched a city",
            err: error
        });
    }
}

const update = async (req, res) =>{
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "successfully updated a city",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "couldn't update the city",
            err: error
        });
    }
}

const destroy = async (req, res) =>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully deleted a city",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "couldn't delete the city",
            err: error
        });
    }
}
const getAll = async(req,res) => {
    try {
        const cities = await cityService.getAllCity();
        return res.status(200).json({
            data: cities,
            sucess: true,
            message: "successfully fetched all cities",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "couldn't fetch cities",
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    update,
    destroy,
    getAll
}