import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEDID } from "src/models/EDID";

@Injectable({ providedIn: 'root' })

export class EdidService {
  private fileNames = [
    "BenQ SC3211",
    "Dell ZT60",
    "Haier LE39B50",
    "LG 50LA621Y",
    "Mag RD24L",
    "Normande ND3276",
    "Panasonic TH-L32B6",
    "Philips 55PFL6008",
    "Philips 226V4LSB",
    "Samsung UA46F6400",
    "Samsung UA55F6400",
    "Sharp LC50LE450M",
    "Sony KDL50W656"];

  constructor(private http: HttpClient) { }

  getAllEdid(): IEDID[] {
    let edidArr: IEDID[] = [];

    this.fileNames.forEach(fileName => {
      this.fetch(fileName).subscribe(dataArrived => {
        edidArr.push(dataArrived);
      });
    })
    return edidArr;
  }

  private fetch(fileName): Observable<IEDID> {
    return this.http.get<IEDID>(`/assets/data/${fileName}.json`);
  }

}
