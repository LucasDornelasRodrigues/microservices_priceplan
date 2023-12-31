/* eslint-disable id-length,quotes,prefer-destructuring */
import CodeVoucherService from "../../services/CodeVoucher.service";

const createVouchers = (req, res) => {

const {Vouchers} = req.models;


    let {code, cpf} = req.body;

    CodeVoucherService.generateVoucher(6, code, cpf, req.models)
        .then(result => {
            req.body.code = result;

            return Vouchers.create(req.body);
        })
        .then(result => {
            return res.api.send(result, res.api.codes.CREATED);
        })
        .catch(err => {
            return res.api.send(err.message, res.api.codes.INTERNAL_SERVER_ERROR);
        });
};

export default createVouchers;
