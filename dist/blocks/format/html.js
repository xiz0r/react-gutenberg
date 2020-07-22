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
class WPGHtmlBlock extends React.Component {
    constructor() {
        super(...arguments);
        this.id = Math.floor(Math.random() * 100000);
    }
    componentDidMount() {
        document.querySelectorAll(`[data-script="${this.id}"]`).forEach(script => {
            window.eval(script.innerHTML);
        });
    }
    render() {
        const { 
        // attrs,
        // innerBlocks,
        innerHTML } = this.props;
        const scriptHtml = innerHTML.replace(/<script(>|\s)/gm, `<script data-script="${this.id}"$1`);
        return (React.createElement("div", { className: "wpg-block wpg-b_html", dangerouslySetInnerHTML: { __html: scriptHtml } }));
    }
}
exports.default = WPGHtmlBlock;
//# sourceMappingURL=html.js.map