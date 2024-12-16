import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  private meerCount:any;
  private kvCount:any;

  setMeerKVRecord(meerCount, kvCount){
    this.meerCount = meerCount-4;
    this.kvCount = kvCount -5;

  }

  getMeerCount(){
    return this.meerCount;
  }
  getKvCount(){
    return this.kvCount;
  }
}
