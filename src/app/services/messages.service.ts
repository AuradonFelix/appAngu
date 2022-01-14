import { Injectable } from '@angular/core';
import {Message} from "../modeles/Message";
import {Personnes} from "../modeles/Personnes";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public tabMess: Message[];

  constructor() {

    this.tabMess =
      [
        new Message('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam, asperiores, blanditiis dignissimos ea earum eius eos exercitationem id illo laboriosam minima nam nisi, optio placeat praesentium sequi sunt voluptate.\n',new Personnes('Clodomir','The best')),
        new Message('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam, asperiores, blanditiis dignissimos ea earum eius eos exercitationem id illo laboriosam minima nam nisi, optio placeat praesentium sequi sunt voluptate.\n',new Personnes('putone','jeanmich')),
        new Message('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam, asperiores, blanditiis dignissimos ea earum eius eos exercitationem id illo laboriosam minima nam nisi, optio placeat praesentium sequi sunt voluptate.\n',new Personnes('razmo','kekette')),

      ];
  }

  public recupTabMes(): Message[] {
    return this.tabMess;
  }

  public recupTabPers(): Personnes[] {
   let tabPers: Personnes[] = [];
    for (const msg of this.tabMess) {
      tabPers.push(msg.user);

    }
    return tabPers;
  }

  public addMess(msg: Message){
    this.tabMess.push(msg);
  }
}
