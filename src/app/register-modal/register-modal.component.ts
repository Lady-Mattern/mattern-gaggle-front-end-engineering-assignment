import { Component, OnInit, ViewEncapsulation, ElementRef, Input, OnDestroy } from '@angular/core';

import { ModalService } from './register-modal.service';

@Component({
  selector: 'register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
  encapsulation: ViewEncapsulation.None // Allows us to make variables in this component global
})
export class RegisterModalComponent implements OnInit, OnDestroy {
  // Sets the id of the modal window
  @Input() id: string;
  // Accessing the DOM element containing the modal 
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // check to see if id attribute exists
    if (!this.id) {
      console.error('Modal must hav an id');
      return;
    }

    // Move the element to the bottom of the age so it can be displayed before anything else
    document.body.appendChild(this.element);

    // Close the modal when background is clicked
    this.element.addEventListener('click', el => {
      if (el.target.className === 'app-register-modal') {
        this.close();
      }
    });

    // Add this modal instance to the modal service so it is accessible from controllers
    this.modalService.add(this);
  }

  // Remove this modal instance from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // Open the modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('register-modal-open')
  }

  // Close the modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('register-modal-open');
  }

}
