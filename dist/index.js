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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WPGBlock = void 0;
const React = __importStar(require("react"));
const blocks_1 = require("./blocks");
const WPGBlocks = ({ blocks, mapToBlock }) => {
    return (React.createElement("div", { className: "wpg-blocks" }, blocks.filter(block => !!block.blockName).map((block, index) => React.createElement(exports.WPGBlock, { key: index, block: block, mapToBlock: mapToBlock }))));
};
exports.WPGBlock = ({ block, mapToBlock }) => {
    const { blockName, attrs, innerBlocks, innerHTML } = block;
    if (!blockName)
        return null;
    if (mapToBlock)
        exports.WPGBlock.MapToBlock = mapToBlock;
    let TheBlock = exports.WPGBlock.MapToBlock ? exports.WPGBlock.MapToBlock(blockName) : null;
    if (!TheBlock)
        TheBlock = blocks_1.GetTheBlock(blockName);
    if (!TheBlock)
        return null;
    return (React.createElement(TheBlock, { blockName: blockName, attrs: attrs, innerBlocks: innerBlocks, innerHTML: innerHTML }));
};
exports.default = WPGBlocks;
__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map