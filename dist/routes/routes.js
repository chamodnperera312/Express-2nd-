"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const greeting_routes_1 = require("./greeting.routes");
const customer_routes_1 = require("./customer.routes");
class Routes {
    static getInstance() {
        if (!Routes.instance) {
            Routes.instance = new Routes();
        }
        return Routes.instance;
    }
    constructor() {
        this.router = (0, express_1.Router)();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.use("/greeting", greeting_routes_1.GreetingRoute.getInstance().router);
        this.router.use("/customer", customer_routes_1.CustomerRoute.getInstance().router);
    }
}
exports.Routes = Routes;
