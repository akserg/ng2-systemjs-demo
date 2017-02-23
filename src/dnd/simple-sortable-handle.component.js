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
var SimpleSortableHandleComponent = (function () {
    function SimpleSortableHandleComponent() {
        this.listOne = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
    }
    SimpleSortableHandleComponent = __decorate([
        core_1.Component({
            selector: 'simple-sortable-handle',
            template: "\n<h4>Simple sortable handle</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">\n                Favorite drinks\n            </div>\n            <div class=\"panel-body\">\n                <ul class=\"list-group\" dnd-sortable-container [sortableData]=\"listOne\">\n                    <li *ngFor=\"let item of listOne; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">\n                      <span dnd-sortable-handle>=</span>&nbsp;\n                      {{item}}\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                My prefences:<br/>\n                <span *ngFor=\"let item of listOne; let i = index\">{{i + 1}}) {{item}}<br/></span>\n            </div>\n        </div>\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleSortableHandleComponent);
    return SimpleSortableHandleComponent;
}());
exports.SimpleSortableHandleComponent = SimpleSortableHandleComponent;
//# sourceMappingURL=simple-sortable-handle.component.js.map