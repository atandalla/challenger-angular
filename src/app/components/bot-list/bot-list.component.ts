import { Component } from '@angular/core';
import { Bot } from '../../interfaces/Bot';
import { BotService } from "../../services/bot.service";

@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.css']
})
export class BotListComponent {
  constructor(private botService: BotService){}

  bots: Bot[] = [];
  
  ngOnInit(){
    this.getUser();
  }

  getUser(){
    this.botService.getAllConfigBot()
    .subscribe(
      res => {
        this.bots = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

  deleteBot(id: any){
    this.botService.deleteBot(id)
    .subscribe(
      res=> {
        this.getUser();
      },
      err => console.log(err)
    )
  }

  updateBot(id: string){

  }

}
