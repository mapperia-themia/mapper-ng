import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { GetByIdPipe } from './get-by-id.pipe';
import { KeysPipe } from './keys.pipe';



@NgModule({
    declarations: [FilterPipe, GetByIdPipe, KeysPipe],
    exports: [
        FilterPipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipesModule { }
