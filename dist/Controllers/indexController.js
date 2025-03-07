"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postComment = exports.addArticle = exports.getArticleContorller = exports.getLatestArticlesData = exports.getTaggedArticles = exports.getIndexData = void 0;
var articles_1 = require("../Models/articles");
var getIndexData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var articles, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, (0, articles_1.getArticles)()];
            case 1:
                articles = _a.sent();
                res.json(articles);
                return [3, 3];
            case 2:
                error_1 = _a.sent();
                console.error('Error fetching articles:', error_1);
                res.status(500).json({ error: 'Internal Server Error' });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getIndexData = getIndexData;
var getTaggedArticles = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tags, articles, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                tags = { tags: req.params.tags.split(',') };
                return [4, (0, articles_1.getTagArticles)(tags)];
            case 1:
                articles = _a.sent();
                res.json(articles);
                return [3, 3];
            case 2:
                error_2 = _a.sent();
                console.error('Error fetching articles:', error_2);
                res.status(500).json({ error: 'Internal Server Error' });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getTaggedArticles = getTaggedArticles;
var getLatestArticlesData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var latestArticles, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, (0, articles_1.getLatestArticles)()];
            case 1:
                latestArticles = _a.sent();
                res.json(latestArticles);
                return [3, 3];
            case 2:
                error_3 = _a.sent();
                console.error('Error fetching latest articles:', error_3);
                res.status(500).json({ error: 'Internal Server Error' });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getLatestArticlesData = getLatestArticlesData;
var getArticleContorller = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, article, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = parseInt(req.params.id, 10);
                if (isNaN(id)) {
                    return [2, res.status(400).json({ error: 'Invalid article ID' })];
                }
                return [4, (0, articles_1.getArticle)(id)];
            case 1:
                article = _a.sent();
                if (!article) {
                    return [2, res.status(404).json({ error: 'Article not found' })];
                }
                res.json(article);
                return [3, 3];
            case 2:
                error_4 = _a.sent();
                console.error('Error fetching article:', error_4);
                res.status(500).json({ error: 'Internal Server Error' });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getArticleContorller = getArticleContorller;
var addArticle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, text, title, authorId, tags, newArticle, article, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, text = _a.text, title = _a.title, authorId = _a.authorId, tags = _a.tags;
                if (!text || !title || !authorId) {
                    return [2, res.status(400).json({ error: 'Title, text, and authorId are required' })];
                }
                if (!Array.isArray(tags)) {
                    return [2, res.status(400).json({ error: 'Tags should be an array' })];
                }
                newArticle = { text: text, title: title, authorId: authorId, tags: tags };
                return [4, (0, articles_1.createArticle)(newArticle)];
            case 1:
                article = _b.sent();
                res.status(201).json({ message: 'Article created successfully', article: article });
                return [3, 3];
            case 2:
                error_5 = _b.sent();
                console.error('Error creating article:', error_5);
                res.status(500).json({ error: 'Internal Server Error' });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.addArticle = addArticle;
var postComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, text, username, articleId, intArticleId, comment, newComment, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, text = _a.text, username = _a.username, articleId = _a.articleId;
                intArticleId = parseInt(articleId, 10);
                if (!text || !username || isNaN(intArticleId)) {
                    return [2, res.status(400).json({ error: 'text, username, and valid articleId are required' })];
                }
                comment = { text: text, username: username, articleId: intArticleId };
                console.log(comment);
                return [4, (0, articles_1.addComment)(comment)];
            case 1:
                newComment = _b.sent();
                res.status(201).json({ message: 'Comment added successfully.', newComment: newComment });
                return [3, 3];
            case 2:
                error_6 = _b.sent();
                console.error('Error adding comment:', error_6);
                res.status(500).json({ error: 'Internal Server Error' });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.postComment = postComment;
