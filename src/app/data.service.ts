import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1:string[] = ["varadharaj","E001","varadha@gmail.com"]
  info2:string[] = ["arun","E002","arun@gmail.com"]
  info3:string[] = ["mohan","E003","mohan@gmail.com"]

  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }

  addInfo(info: any){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)

    return this.info1
  }

  constructor() { }

}
