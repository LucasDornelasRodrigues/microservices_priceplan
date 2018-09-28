/* eslint-disable id-length */
import {models} from 'mongoose';
const {PriceCourses} = models;

const createPrice = (req, res) => {

    // Create new prices by req.body data
    PriceCourses
        .create(req.body)
        .then(prices => {
            return res.api.send(prices, res.api.codes.CREATED);
        })
        .catch(err => {
            return res.api.send(err.message, res.api.codes.INTERNAL_SERVER_ERROR);
        })
};

export default createPrice;