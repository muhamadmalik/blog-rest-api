"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var indexController_1 = require("../Controllers/indexController");
var indexRouter = express_1.default.Router();
indexRouter.get('/all', indexController_1.getIndexData);
indexRouter.get('/latest', indexController_1.getLatestArticlesData);
indexRouter.get('/:id', indexController_1.getArticleContorller);
indexRouter.post('/:id/comment', indexController_1.postComment);
indexRouter.post('/add', indexController_1.addArticle);
exports.default = indexRouter;
