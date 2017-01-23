// // Copyright (C) 2016 Sergey Akopkokhyants
// // This project is licensed under the terms of the MIT license.
// // https://github.com/akserg

import {Component, Injectable} from '@angular/core';

@Component({
    selector: 'demo-dnd',
    template: `
<div class="container">
    <div>
        <simple-dnd></simple-dnd>
        <zone-dnd></zone-dnd>
        <custom-data-dnd></custom-data-dnd>
        <shoping-basket-dnd></shoping-basket-dnd>
        
        <simple-sortable></simple-sortable>
        <multi-sortable></multi-sortable>
        <recycle-multi-sortable></recycle-multi-sortable>
        <embedded-sortable></embedded-sortable>
    </div>
</div>`
})
export class DndComponent {}
