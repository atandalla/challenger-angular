import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Bot } from "../interfaces/Bot";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(private http: HttpClient) {}
  BASE_URL : string = 'https://back.test.kimsabot.com';

  //token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjc0NDkyODc0LCJleHAiOjE2NzUwOTc2NzR9.anMn1EsJimWkYeme-PrjXGRztsL-9SlbM1t-9FcFMjY'

  getAllConfigBot(): Observable<Bot[]>{
    console.log(`${this.BASE_URL}/config-bot`)
    return this.http.get<Bot[]>(`${this.BASE_URL}/config-bot`);
  }

  getOneConfigBot(id:string): Observable<Bot>{
    return this.http.get<Bot>(`${this.BASE_URL}/config-bot/${id}`);
  }

  createBot(bot: Bot): Observable<Bot>{
    return this.http.post<Bot>(`${this.BASE_URL}/config-bot`, bot);
  }

  deleteBot(id: string): Observable<Bot>{
    return this.http.delete<Bot>(`${this.BASE_URL}/config-bot/${id}`)
  }

  updateBot(id: any, bot:Bot): Observable<Bot>{
    return this.http.patch<Bot>(`${this.BASE_URL}/config-bot/${id}`, bot)
  }

}
