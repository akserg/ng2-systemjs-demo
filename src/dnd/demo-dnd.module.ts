// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DndModule } from 'ng2-dnd';

import { SimpleDndComponent } from './simple-dnd.component';
import { SimpleDndHandleComponent } from './simple-dnd-handle.component';
import { ZoneDndComponent } from './zone-dnd.component';
import { CustomDataDndComponent } from './custom-data-dnd.component';
import { CustomFunctionDndComponent } from './custom-function-dnd.component';
import { ShoppingBasketDndComponent } from './shopping-basket-dnd.component';

import { SimpleSortableComponent } from './simple-sortable.component';
import { SimpleSortableHandleComponent } from './simple-sortable-handle.component';
import { MultiSortableComponent } from './multi-sortable.component';
import { RecycleMultiSortableComponent } from './recycle-multi-sortable.component';
import { EmbeddedSortableComponent} from './embedded-sortable.component';
import { SimpleSortableCopyComponent } from './simple-sortable-copy.component';

const dndComponents = [SimpleDndComponent, SimpleDndHandleComponent, ZoneDndComponent, CustomDataDndComponent, CustomFunctionDndComponent, ShoppingBasketDndComponent];
const sortableComponents = [SimpleSortableComponent, SimpleSortableHandleComponent, MultiSortableComponent, RecycleMultiSortableComponent, EmbeddedSortableComponent, SimpleSortableCopyComponent];

@NgModule({
    imports: [BrowserModule, FormsModule, DndModule.forRoot()],
    declarations: [...dndComponents, ...sortableComponents],
    exports: [...dndComponents, ...sortableComponents]
})
export class DemoDndModule { }