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
var ShoppingBasketDndComponent = (function () {
    function ShoppingBasketDndComponent() {
        this.availableProducts = [];
        this.shoppingBasket = [];
        this.availableProducts.push(new Product('Blue Shoes', 3, 35));
        this.availableProducts.push(new Product('Good Jacket', 1, 90));
        this.availableProducts.push(new Product('Red Shirt', 5, 12));
        this.availableProducts.push(new Product('Blue Jeans', 4, 60));
    }
    ShoppingBasketDndComponent.prototype.orderedProduct = function ($event) {
        var orderedProduct = $event.dragData;
        orderedProduct.quantity--;
    };
    ShoppingBasketDndComponent.prototype.addToBasket = function ($event) {
        var newProduct = $event.dragData;
        for (var indx in this.shoppingBasket) {
            var product = this.shoppingBasket[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
        this.shoppingBasket.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    };
    ShoppingBasketDndComponent.prototype.totalCost = function () {
        var cost = 0;
        for (var indx in this.shoppingBasket) {
            var product = this.shoppingBasket[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    };
    ShoppingBasketDndComponent = __decorate([
        core_1.Component({
            selector: 'shoping-basket-dnd',
            template: "\n<h4>Drag-and-Drop - Shopping basket</h4>\n<div class=\"row\">\n\n    <div class=\"col-sm-3\">\n        <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">Available products</div>\n            <div class=\"panel-body\">\n                <div *ngFor=\"let product of availableProducts\" class=\"panel panel-default\"\n                    dnd-draggable [dragEnabled]=\"product.quantity>0\" [dragData]=\"product\" (onDragSuccess)=\"orderedProduct($event)\" [dropZones]=\"['demo1']\">\n                    <div class=\"panel-body\">\n                        <div [hidden]=\"product.quantity===0\">{{product.name}} - ${{product.cost}}<br>(available: {{product.quantity}})</div>\n                        <div [hidden]=\"product.quantity>0\"><del>{{product.name}}</del><br>(NOT available)</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div dnd-droppable (onDropSuccess)=\"addToBasket($event)\" [dropZones]=\"['demo1']\" class=\"panel panel-info\">\n            <div class=\"panel-heading\">Shopping Basket<br>(to pay: ${{totalCost()}})</div>\n            <div class=\"panel-body\">\n                <div *ngFor=\"let product of shoppingBasket\" class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                    {{product.name}}<br>(ordered: {{product.quantity}}<br>cost: ${{product.cost * product.quantity}})\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ShoppingBasketDndComponent);
    return ShoppingBasketDndComponent;
}());
exports.ShoppingBasketDndComponent = ShoppingBasketDndComponent;
var Product = (function () {
    function Product(name, quantity, cost) {
        this.name = name;
        this.quantity = quantity;
        this.cost = cost;
    }
    return Product;
}());
//# sourceMappingURL=shopping-basket-dnd.component.js.map