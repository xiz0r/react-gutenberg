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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const index_1 = require("../../index");
const WPGColumnsBlock = (props) => {
    const { 
    // attrs,
    innerBlocks, } = props;
    if (!Array.isArray(innerBlocks)) {
        console.warn('Columns should have innerBlocks');
        return null;
    }
    const cols = innerBlocks.length;
    const columns = innerBlocks.map((col, ci) => React.createElement("div", { className: `wp-block-column ${ci + 1}-column`, key: ci }, col.innerBlocks.map((block, bi) => React.createElement(index_1.WPGBlock, { key: bi, block: block }))));
    return (React.createElement("div", { className: `wp-block-columns has-${cols}-columns` }, columns));
};
exports.default = WPGColumnsBlock;
//# sourceMappingURL=columns.js.map