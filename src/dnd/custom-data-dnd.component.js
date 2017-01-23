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
var CustomDataDndComponent = (function () {
    function CustomDataDndComponent() {
        this.transferData = { id: 1, msg: 'Hello' };
        this.receivedData = [];
    }
    CustomDataDndComponent.prototype.transferDataSuccess = function ($event) {
        this.receivedData.push($event);
    };
    CustomDataDndComponent = __decorate([
        core_1.Component({
            selector: 'custom-data-dnd',
            template: "\n<h4>Transfer custom data in Drag-and-Drop</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">Available to drag</div>\n            <div class=\"panel-body\">\n                <div class=\"panel panel-default\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"transferData\">\n                    <div class=\"panel-body\">\n                        <div>Drag Me</div>\n                        <div>{{transferData | json}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div dnd-droppable class=\"panel panel-info\" (onDropSuccess)=\"transferDataSuccess($event)\">\n            <div class=\"panel-heading\">Place to drop (Items:{{receivedData.length}})</div>\n            <div class=\"panel-body\">\n                <div [hidden]=\"!receivedData.length > 0\" *ngFor=\"let data of receivedData\">{{data | json}}</div>\n            </div>\n        </div>\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], CustomDataDndComponent);
    return CustomDataDndComponent;
}());
exports.CustomDataDndComponent = CustomDataDndComponent;
//# sourceMappingURL=custom-data-dnd.component.js.map