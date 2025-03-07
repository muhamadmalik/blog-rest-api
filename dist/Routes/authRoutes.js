"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authController_1 = require("../Controllers/authController");
var authRouter = (0, express_1.default)();
authRouter.post('/signup', authController_1.register);
authRouter.post('/login', authController_1.login);
exports.default = authRouter;
