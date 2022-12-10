import { Component } from '@angular/core';
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(private carService: CarService) { }

  public closeModal(): void {
    this.carService.setOpenModal(false);
    this.carService.isScroll('');
  }

}
