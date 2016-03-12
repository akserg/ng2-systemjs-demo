// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-demo

'use strict';

import {Component, Injectable} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

import {DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';

@Component({
    selector: 'dnd-demo',
    directives: [COMMON_DIRECTIVES, DND_DIRECTIVES],
    template: `
<div class="container">
    <div>
        <h4>Drag And Drop - Shopping basket</h4>
        <div class="row">

            <div class="col-sm-3">
                <div class="panel panel-success">
                    <div class="panel-heading">Available products</div>
                    <div class="panel-body">
                        <div *ngFor="#product of availableProducts" class="panel panel-default"
                            dnd-draggable [dragEnabled]="product.quantity>0" [draggableData]="product" (onDragSuccess)="orderedProduct($event)" [dropZones]="['demo1']">
                            <div class="panel-body">
                                <div [hidden]="product.quantity===0">{{product.name}} - \${{product.cost}}<br>(available: {{product.quantity}})</div>
                                <div [hidden]="product.quantity>0"><del>{{product.name}}</del><br>(NOT available)</div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="col-sm-3">
                <div dnd-droppable (onDropSuccess)="addToBasket($event)" [dropZones]="['demo1']" class="panel panel-info">
                    <div class="panel-heading">Shopping Basket<br>(to pay: \${{totalCost()}})</div>
                    <div class="panel-body">
                        <div *ngFor="#product of shoppingBasket" class="panel panel-default">
                            <div class="panel-body">
                            {{product.name}}<br>(ordered: {{product.quantity}}<br>cost: \${{product.cost * product.quantity}})
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})
export class DndDemo {
    availableProducts: Array<Product> = [];
    shoppingBasket: Array<Product> = [];

    constructor() {
        this.availableProducts.push(new Product("Blue Shoes", 3, 35));
        this.availableProducts.push(new Product("Good Jacket", 1, 90));
        this.availableProducts.push(new Product("Red Shirt", 5, 12));
        this.availableProducts.push(new Product("Blue Jeans", 4, 60));
    }

    orderedProduct(orderedProduct: Product) {
        orderedProduct.quantity--;
    }
    
    addToBasket(newProduct: Product) {
        for (let indx in this.shoppingBasket) {
            let product:Product = this.shoppingBasket[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
    }

    totalCost():number {
        let cost:number = 0;
        for (let indx in this.shoppingBasket) {
            let product:Product = this.shoppingBasket[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    }
}

class Product {
  constructor(public name:string, public quantity:number, public cost:number) {}
}