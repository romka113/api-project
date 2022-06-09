import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Joke } from "../../models/joke";
import { JokeService } from "../../services/joke.service";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  public joke:Joke|null=null
  constructor(private jokeService:JokeService) {}
  private loadJoke(){    this.jokeService.funnyJoke().subscribe((result)=>{
    this.joke=result
  })}

  ngOnInit(): void {
this.loadJoke()


  }
  public nextJoke(){
    this.loadJoke()
  }

}
