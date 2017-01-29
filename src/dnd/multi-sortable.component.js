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
var MultiSortableComponent = (function () {
    function MultiSortableComponent() {
        this.listBoxers = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
        this.listTeamOne = [];
        this.listTeamTwo = [];
    }
    MultiSortableComponent = __decorate([
        core_1.Component({
            selector: 'multi-sortable',
            template: "\n<h4>Multi list sortable</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n    <div class=\"panel panel-warning\">\n        <div class=\"panel-heading\">\n        Available boxers\n        </div>\n        <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"listBoxers\">\n            <ul class=\"list-group\" >\n                <li *ngFor=\"let item of listBoxers; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n            </ul>\n        </div>\n    </div>\n    </div>\n    <div class=\"col-sm-3\">\n    <div class=\"panel panel-success\">\n        <div class=\"panel-heading\">\n        First Team\n        </div>\n        <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"listTeamOne\">\n            <ul class=\"list-group\" >\n                <li *ngFor=\"let item of listTeamOne; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n            </ul>\n        </div>\n    </div>\n    </div>\n    <div class=\"col-sm-3\">\n    <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n        Second Team\n        </div>\n        <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"listTeamTwo\">\n            <ul class=\"list-group\">\n                <li *ngFor=\"let item of listTeamTwo; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n            </ul>\n        </div>\n    </div>\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], MultiSortableComponent);
    return MultiSortableComponent;
}());
exports.MultiSortableComponent = MultiSortableComponent;
//# sourceMappingURL=multi-sortable.component.js.map