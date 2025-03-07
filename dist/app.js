"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var indexRoute_1 = __importDefault(require("./Routes/indexRoute"));
var tagRouter_1 = __importDefault(require("./Routes/tagRouter"));
var passport_1 = __importDefault(require("./authentication/passport"));
var authRoutes_1 = __importDefault(require("./Routes/authRoutes"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use(passport_1.default.initialize());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/api/articles/', indexRoute_1.default);
app.use('/api/tags/', tagRouter_1.default);
app.use('/api/auth/', authRoutes_1.default);
app.set('json spaces', 2);
app.listen(3002, '0.0.0.0', function () {
    console.log('Server is running on port 3002');
});
