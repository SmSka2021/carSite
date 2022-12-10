import { Injectable } from '@angular/core';
import {CarData} from "../models/model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor() { }

  carsData: CarData[] = [
    {
      name: 'Lamborghini Hurricane Spyder',
      image: '1.png',
      engines: 'полный',
      gear: '5.2л.с.',
      belt: 2,
    },
    {
      name: 'Chevrolet Corvette',
      image: '2.png',
      engines: 'полный',
      gear: '6.2л.с.',
      belt: 2,
    },
    {
      name: 'Ferrari California',
      image: '3.png',
      engines: 'полный',
      gear: '3.9л.с.',
      belt: 4,
    },
    {
      name: 'Lamborghini Uris',
      image: '4.png',
      engines: 'полный',
      gear: '4.0л.с.',
      belt: 5,
    },
    {
      name: 'Audi R8',
      image: '5.png',
      engines: 'полный',
      gear: '5.2л.с.',
      belt: 2,
    },
    {
      name: 'Аренда Chevrolet Camaro',
      image: '6.png',
      engines: 'полный',
      gear: '2.0л.с.',
      belt: 4,
    }

  ];
  public goScroll(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }
  private openModal$ = new BehaviorSubject<boolean>(false);
  public getOpenModal(): Observable<boolean> {
    return this.openModal$.asObservable();
  }
  public setOpenModal(open: boolean): void {
    this.openModal$.next(open);
  }
  public isScroll(item: string) {
    document.body.style.overflow = item;
  }
}
