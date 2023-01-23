import { Component, OnInit } from '@angular/core';
import { Bot } from 'src/app/interfaces/Bot';
import { BotService } from 'src/app/services/bot.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bot-create',
  templateUrl: './bot-create.component.html',
  styleUrls: ['./bot-create.component.css']
})
export class BotCreateComponent implements OnInit{

  constructor(private botService: BotService,
              private router: Router,
              private activatedRoute: ActivatedRoute){}

  bot: Bot = {
    _id: '',
    name: '',
    type: '',
    status: '',
  };

  edit: boolean = false;

  ngOnInit(){

    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.botService.getOneConfigBot(params['id'])
      .subscribe(
        res => {
          console.log(res)
          this.bot = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }

   
  }

  submitBot(){
    console.log(this.bot)
    this.botService.createBot(this.bot)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/config-bot'])
      },
      err => console.log(err)
    )
  }

  updateBot(){
    delete this.bot.createdAt;
    let botid = this.bot._id;
    this.botService.updateBot(botid, this.bot)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/config-bot'])
      },
      err => console.log(err)
    )
  }


}
