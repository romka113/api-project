import { Component, OnInit } from '@angular/core';
import { EurToUsdService } from "../../services/eur-to-usd.service";
import { Money, Rates } from "../../models/convert";

@Component({
  selector: 'app-keitykla',
  templateUrl: './keitykla.component.html',
  styleUrls: ['./keitykla.component.css']
})
export class KeityklaComponent implements OnInit {
public eurUsd:Money|null=null
  public  error=false
  public loading=true
  public errorCode:number=0

  constructor(private eurToUsd:EurToUsdService) { }

  ngOnInit(): void {
  this.loading=true
  this.eurToUsd.convertation().subscribe(
    {next:(eur)=>{
    this.eurUsd=eur
        this.loading=false

    },error:(error)=>{
      this.error=true
        this.errorCode=error.status
      }} )
  }

}
