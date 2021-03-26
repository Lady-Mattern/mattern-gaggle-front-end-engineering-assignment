import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        // Add modal to the array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // Remove the modal from the array o active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string) {
        // Open the modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }

    close(id: string) {
        // Close the modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}