import { Injectable } from '@angular/core';
import {CarData} from "../models/model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor() { }
  private isShowSpinner$ = new BehaviorSubject<boolean>(false);
  public setIsShowSpinner(isShowSpinner: boolean) {
    this.isShowSpinner$.next(isShowSpinner);
  }
  public getIsShowSpinner(): Observable<boolean> {
    return this.isShowSpinner$.asObservable();
  }
  carsData: CarData[] = [];
  private message$ = new BehaviorSubject<string>('');
  public getMessage$(): Observable<string> {
    return this.message$.asObservable();
  }
  public getMessageValue(): string {
    return this.message$.getValue();
  }
  public setMessage(message: string) {
    this.message$.next(message);
  }
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
