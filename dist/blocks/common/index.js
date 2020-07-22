"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = __importDefault(require("@loadable/component"));
const Audio = component_1.default(() => Promise.resolve().then(() => __importStar(require('./audio'))));
const Cover = component_1.default(() => Promise.resolve().then(() => __importStar(require('./cover'))));
const File = component_1.default(() => Promise.resolve().then(() => __importStar(require('./file'))));
const Gallery = component_1.default(() => Promise.resolve().then(() => __importStar(require('./gallery'))));
const Heading = component_1.default(() => Promise.resolve().then(() => __importStar(require('./heading'))));
const Image = component_1.default(() => Promise.resolve().then(() => __importStar(require('./image'))));
const List = component_1.default(() => Promise.resolve().then(() => __importStar(require('./list'))));
const Paragraph = component_1.default(() => Promise.resolve().then(() => __importStar(require('./paragraph'))));
const Quote = component_1.default(() => Promise.resolve().then(() => __importStar(require('./quote'))));
const Video = component_1.default(() => Promise.resolve().then(() => __importStar(require('./video'))));
exports.default = {
    Audio,
    Cover,
    File,
    Gallery,
    Heading,
    Image,
    List,
    Paragraph,
    Quote,
    Video
};
//# sourceMappingURL=index.js.map