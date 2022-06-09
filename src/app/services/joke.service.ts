import { Injectable } from '@angular/core';
import { Joke } from "../models/joke";
import { HttpClient } from "@angular/common/http";
import { Money } from "../models/convert";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http:HttpClient) { }
  public funnyJoke(){
    return this.http.get<Joke>("https://v2.jokeapi.dev/joke/Programming?type=single")

  }

}
