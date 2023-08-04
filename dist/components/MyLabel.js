import { jsx as _jsx } from "react/jsx-runtime";
import './mylabel.css';
export var MyLabel = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'No Label' : _b, _c = _a.size, size = _c === void 0 ? 'normal' : _c, _d = _a.allCaps, allCaps = _d === void 0 ? false : _d, _e = _a.color, color = _e === void 0 ? 'primary' : _e, _f = _a.fontColor, fontColor = _f === void 0 ? '' : _f, _g = _a.backgroundColor, backgroundColor = _g === void 0 ? 'transparent' : _g;
    return (_jsx("span", { className: "label ".concat(size, " text-").concat(color), style: { color: fontColor, backgroundColor: backgroundColor }, children: allCaps ? label.toUpperCase() : label }));
};
