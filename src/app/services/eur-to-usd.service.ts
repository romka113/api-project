import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Money } from "../models/convert";

@Injectable({
  providedIn: 'root'
})
export class EurToUsdService {

  constructor(private http:HttpClient) { }

  public convertation(){
    return this.http.get<Money>("https://api.frankfurter.app/latest?to=USD")

  }
}
