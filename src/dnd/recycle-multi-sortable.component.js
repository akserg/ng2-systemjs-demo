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
var RecycleMultiSortableComponent = (function () {
    function RecycleMultiSortableComponent() {
        this.listTwo = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
        this.listRecycled = [];
    }
    RecycleMultiSortableComponent = __decorate([
        core_1.Component({
            selector: 'recycle-multi-sortable',
            template: "\n<h4>Simple sortable With Drop into recycle bin</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">\n                Favorite drinks\n            </div>\n            <div class=\"panel-body\">\n                <ul class=\"list-group\" dnd-sortable-container [sortableData]=\"listTwo\" [dropZones]=\"['delete-dropZone']\">\n                    <li *ngFor=\"let item of listTwo; let i = index\" class=\"list-group-item\"\n                    dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\"\n                dnd-sortable-container\n                [dropZones]=\"['delete-dropZone']\"\n                [sortableData]=\"listRecycled\">\n                Recycle bin: Drag into me to delete it<br/>\n            </div>\n        </div>\n        <div *ngIf=\"listRecycled.length\">\n        <b>Recycled:</b> <span>{{listRecycled.toString()}} </span>\n        </div>\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], RecycleMultiSortableComponent);
    return RecycleMultiSortableComponent;
}());
exports.RecycleMultiSortableComponent = RecycleMultiSortableComponent;
//# sourceMappingURL=recycle-multi-sortable.component.js.map