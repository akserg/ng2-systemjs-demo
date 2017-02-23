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
        <simple-dnd-handle></simple-dnd-handle>
        <zone-dnd></zone-dnd>
        <custom-data-dnd></custom-data-dnd>
        <custom-function-dnd></custom-function-dnd>
        <shoping-basket-dnd></shoping-basket-dnd>
        <simple-sortable></simple-sortable>
        <simple-sortable-handle></simple-sortable-handle>
        <simple-sortable-copy></simple-sortable-copy>
        <recycle-multi-sortable></recycle-multi-sortable>
        <simple-sortable-copy></simple-sortable-copy>
        <multi-sortable></multi-sortable>
        <embedded-sortable></embedded-sortable>
    </div>
</div>`
})
export class DndComponent {}
