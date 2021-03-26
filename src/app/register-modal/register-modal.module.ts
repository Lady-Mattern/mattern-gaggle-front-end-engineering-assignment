import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterModalComponent } from './register-modal.component';

@NgModule({
    imports: [CommonModule],
    declarations: [RegisterModalComponent],
    exports: [RegisterModalComponent]
})
export class ModalModule { }