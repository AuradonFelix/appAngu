import {Component, Inject, OnInit} from '@angular/core';
import {Personnes} from "../modeles/Personnes";
import {Message} from "../modeles/Message";
import {MessagesService} from "../services/messages.service";
import {PersonnesService} from "../services/personnes.service";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']

})


export class ChatComponent implements OnInit {


  public tabMess: Message[] = [];



  constructor(
    @Inject(MessagesService) private monService: MessagesService

  ) {

    this.tabMess = this.monService.recupTabMes();




  }

  ngOnInit(): void {
  }

}
