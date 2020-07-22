Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const index_1 = require("../../index");
const uniqid = require("uniqid");
const WPGColumnsBlock = (props) => {
    const { 
    // attrs,
    innerBlocks, } = props;
    if (!Array.isArray(innerBlocks)) {
        console.warn('Columns should have innerBlocks');
        return null;
    }
    const cols = innerBlocks.length;
    const columns = innerBlocks.map((col, ci) => React.createElement("div", { className: `wp-block-column ${ci + 1}-column`, key: uniqid() }, col.innerBlocks.map((block, bi) => React.createElement(index_1.WPGBlock, { key: bi, block: block }))));
    return (React.createElement("div", { className: `wp-block-columns has-${cols}-columns` }, columns));
};
exports.default = WPGColumnsBlock;
//# sourceMappingURL=columns.js.map