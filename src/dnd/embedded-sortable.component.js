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
var EmbeddedSortableComponent = (function () {
    function EmbeddedSortableComponent() {
        this.dragOperation = false;
        this.containers = [
            new Container(1, 'Container 1', [new Widget('1'), new Widget('2')]),
            new Container(2, 'Container 2', [new Widget('3'), new Widget('4')]),
            new Container(3, 'Container 3', [new Widget('5'), new Widget('6')])
        ];
        this.widgets = [];
    }
    EmbeddedSortableComponent.prototype.addTo = function ($event) {
        if ($event) {
            this.widgets.push($event.dragData);
        }
    };
    EmbeddedSortableComponent = __decorate([
        core_1.Component({
            selector: 'embedded-sortable',
            template: "\n<h4>Simple sortable With Drop into something, without delete it</h4>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        Drag Containers <input type=\"checkbox\" [(ngModel)]=\"dragOperation\"/>\n        <div dnd-sortable-container [sortableData]=\"containers\" [dropZones]=\"['container-dropZone']\">\n            <div class=\"col-sm3\"\n                    *ngFor=\"let container of containers; let i = index\"\n                    dnd-sortable [sortableIndex]=\"i\" [dragEnabled]=\"dragOperation\">\n                <div class=\"panel panel-warning\"\n                    dnd-sortable-container [sortableData]=\"container.widgets\" [dropZones]=\"['widget-dropZone']\">\n                    <div class=\"panel-heading\">\n                        {{container.id}} - {{container.name}}\n                    </div>\n                    <div class=\"panel-body\">\n                        <ul class=\"list-group\">\n                            <li *ngFor=\"let widget of container.widgets; let x = index\" class=\"list-group-item\"\n                                dnd-sortable [sortableIndex]=\"x\" [dragEnabled]=\"!dragOperation\"\n                                [dragData]=\"widget\">{{widget.name}}</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">Widgets</div>\n            <div class=\"panel-body\" dnd-droppable (onDropSuccess)=\"addTo($event)\" [dropZones]=\"['widget-dropZone']\">\n                <div *ngFor=\"let widget of widgets\" class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        {{widget.name}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], EmbeddedSortableComponent);
    return EmbeddedSortableComponent;
}());
exports.EmbeddedSortableComponent = EmbeddedSortableComponent;
var Container = (function () {
    function Container(id, name, widgets) {
        this.id = id;
        this.name = name;
        this.widgets = widgets;
    }
    return Container;
}());
var Widget = (function () {
    function Widget(name) {
        this.name = name;
    }
    return Widget;
}());
//# sourceMappingURL=embedded-sortable.component.js.map