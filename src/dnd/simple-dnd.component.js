"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SimpleDndComponent = (function () {
    function SimpleDndComponent() {
        this.simpleDrop = null;
    }
    SimpleDndComponent = __decorate([
        core_1.Component({
            selector: 'simple-dnd',
            template: "\n<h4>Simple Drag-and-Drop</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">Available to drag</div>\n            <div class=\"panel-body\">\n                <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\">\n                    <div class=\"panel-body\">\n                        <div>Drag Me</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"simpleDrop=$event\">\n            <div class=\"panel-heading\">Place to drop</div>\n            <div class=\"panel-body\">\n                <div *ngIf=\"simpleDrop\">Item was dropped here</div>\n            </div>\n        </div>\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleDndComponent);
    return SimpleDndComponent;
}());
exports.SimpleDndComponent = SimpleDndComponent;
//# sourceMappingURL=simple-dnd.component.js.map