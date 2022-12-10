import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CarService} from "./services/car.service";
import {CarData} from "./models/model";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder,
              private carService: CarService) {}
  public carsData: CarData[] = this.carService.carsData;
  public openModal: Observable<boolean> = this.carService.getOpenModal();
  public priceForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    tel: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    car: ['', [Validators.required,  Validators.minLength(3), Validators.maxLength(40)]],
  })

  public goScroll(target: HTMLElement, car?: any): void {
   this.carService.goScroll(target);
    if (car) {
      this.priceForm.patchValue({car: car.name});
    }
  }
  public trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)'};
  }

  public bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = {backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px'};
  }
  public onSubmit(): void {
    if (this.priceForm.valid) {
      this.carService.setOpenModal(true);
      this.carService.isScroll('hidden');
      this.priceForm.reset();
    } else {
      return;
    }
  }
  get name() { return this.priceForm.get('name'); }

  get tel() { return this.priceForm.get('tel'); }

  get car() { return this.priceForm.get('car'); }
}
