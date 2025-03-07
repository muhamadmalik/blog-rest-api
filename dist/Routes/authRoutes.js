"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authController_1 = require("../Controllers/authController");
var authRouter = express_1.default.Router();
authRouter.post('/signup', authController_1.register);
authRouter.post('/login', authController_1.login);
exports.default = authRouter;
