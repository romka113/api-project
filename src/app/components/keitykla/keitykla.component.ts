import { Component, OnInit } from '@angular/core';
import { EurToUsdService } from "../../services/eur-to-usd.service";
import { Money } from "../../models/convert";

@Component({
  selector: 'app-keitykla',
  templateUrl: './keitykla.component.html',
  styleUrls: ['./keitykla.component.css']
})
export class KeityklaComponent implements OnInit {
public eurUsd:Money|null=null
  constructor(private eurToUsd:EurToUsdService) { }

  ngOnInit(): void {
  this.eurToUsd.convertation().subscribe((eur)=>{
    this.eurUsd=eur
    console.log(eur.rates.USD);
    })
  }

}
