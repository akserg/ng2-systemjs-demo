// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg
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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var ng2_dnd_1 = require('ng2-dnd');
var simple_dnd_component_1 = require('./simple-dnd.component');
var zone_dnd_component_1 = require('./zone-dnd.component');
var custom_data_dnd_component_1 = require('./custom-data-dnd.component');
var shopping_basket_dnd_component_1 = require('./shopping-basket-dnd.component');
var simple_sortable_component_1 = require('./simple-sortable.component');
var multi_sortable_component_1 = require('./multi-sortable.component');
var recycle_multi_sortable_component_1 = require('./recycle-multi-sortable.component');
var embedded_sortable_component_1 = require('./embedded-sortable.component');
var dndComponents = [simple_dnd_component_1.SimpleDndComponent, zone_dnd_component_1.ZoneDndComponent, custom_data_dnd_component_1.CustomDataDndComponent, shopping_basket_dnd_component_1.ShoppingBasketDndComponent];
var sortableComponents = [simple_sortable_component_1.SimpleSortableComponent, multi_sortable_component_1.MultiSortableComponent, recycle_multi_sortable_component_1.RecycleMultiSortableComponent, embedded_sortable_component_1.EmbeddedSortableComponent];
var DemoDndModule = (function () {
    function DemoDndModule() {
    }
    DemoDndModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, ng2_dnd_1.DndModule.forRoot()],
            declarations: dndComponents.concat(sortableComponents),
            exports: dndComponents.concat(sortableComponents)
        }), 
        __metadata('design:paramtypes', [])
    ], DemoDndModule);
    return DemoDndModule;
}());
exports.DemoDndModule = DemoDndModule;
//# sourceMappingURL=demo-dnd.module.js.map