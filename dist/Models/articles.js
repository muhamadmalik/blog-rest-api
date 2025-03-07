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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removesTags = exports.removeTag = exports.getTags = exports.createTag = exports.addComment = exports.removeComments = exports.getComments = exports.deleteArticles = exports.deleteArticle = exports.searchArticles = exports.getTagArticles = exports.getLatestArticles = exports.findComments = exports.getArticle = exports.getArticles = exports.createArticle = void 0;
var db_1 = __importDefault(require("./db"));
var createArticle = function (post) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.article.create({
                data: {
                    title: post.title,
                    text: post.text,
                    author: { connect: { id: post.authorId } },
                    tags: {
                        connectOrCreate: post.tags.map(function (tag) { return ({
                            where: { id: tag.id },
                            create: { name: tag.name },
                        }); }),
                    },
                },
                include: { tags: true },
            })];
    });
}); };
exports.createArticle = createArticle;
var getArticles = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.article.findMany({ include: { tags: true, comments: true } })];
    });
}); };
exports.getArticles = getArticles;
var getArticle = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.article.findUnique({
                where: { id: id },
                include: {
                    comments: true,
                    tags: true,
                    author: { select: { id: true, username: true } },
                },
            })];
    });
}); };
exports.getArticle = getArticle;
var findComments = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2];
    });
}); };
exports.findComments = findComments;
var getLatestArticles = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.article.findMany({
                orderBy: { createdAt: 'desc' },
                take: 10,
                include: { comments: true, tags: true },
            })];
    });
}); };
exports.getLatestArticles = getLatestArticles;
var getTagArticles = function (tags) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.article.findMany({
                where: { tags: { some: { name: { in: tags } } } },
                include: { comments: true },
            })];
    });
}); };
exports.getTagArticles = getTagArticles;
var searchArticles = function (query) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.article.findMany({
                where: {
                    OR: [
                        { title: { contains: query, mode: 'insensitive' } },
                        { text: { contains: query, mode: 'insensitive' } },
                    ],
                },
            })];
    });
}); };
exports.searchArticles = searchArticles;
var deleteArticle = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.article.delete({ where: { id: id } })];
    });
}); };
exports.deleteArticle = deleteArticle;
var deleteArticles = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.article.deleteMany()];
    });
}); };
exports.deleteArticles = deleteArticles;
var getComments = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.comment.findMany()];
    });
}); };
exports.getComments = getComments;
var removeComments = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.comment.deleteMany()];
    });
}); };
exports.removeComments = removeComments;
var addComment = function (comment) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.comment.create({
                data: {
                    text: comment.text,
                    username: comment.username,
                    article: { connect: { id: comment.articleId } },
                },
            })];
    });
}); };
exports.addComment = addComment;
var createTag = function (tag) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.tag.create({ data: { name: tag.name } })];
    });
}); };
exports.createTag = createTag;
var getTags = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.tag.findMany()];
    });
}); };
exports.getTags = getTags;
var removeTag = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.tag.delete({ where: { id: id } })];
    });
}); };
exports.removeTag = removeTag;
var removesTags = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, db_1.default.tag.deleteMany()];
    });
}); };
exports.removesTags = removesTags;
