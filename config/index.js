"use strict";
require("dotenv").config();

const loadConfig = () => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return {
                setting: {
                    url: process.env.URL,
                    database:process.env.DATABASE
                }
            };

        case 'production':
            return {
                setting: {
                    url: process.env.URL,
                    database:process.env.DATABASE
                }
            };
        default:
            return {
                setting: {
                    url: process.env.URL,
                    database:process.env.DATABASE
                }
            };
    }
};

module.exports = loadConfig();