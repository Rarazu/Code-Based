const { request, response } = require("express");

exports.middleware1 = (request, response, next) => {
    let message = `This is first middleware`
    console.log(message);
    next() // untuk melanjutkan ke controller
}

exports.middleware2 = (request, response, next) => {
    let message = `This is second middleware`
    console.log(message);
    next()
}