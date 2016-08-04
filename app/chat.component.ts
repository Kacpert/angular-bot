import { Component, Input } from '@angular/core'
import { MessageService   } from './services/messages.service'

@Component({
  selector: 'chat-dialog',
  templateUrl: 'app/view/chat.html',
  styleUrls: ['app/assets/chat.css'],
  providers: [MessageService]
})

export class ChatComponent{
  message: string
  // messages = [[true, "Hello, to learn bot new answer you have to write question and answer in one message usign these pattern:  ~a new question` ~a question answer` for example "],
  //             [false, "~How are you?` ~I am fine thanks.`"],
  //             [true, "~` these symbols(tilde) are under 'Esc' at first use shift"]]
  messages = []

  constructor(private messageService: MessageService){}

  send (message: string) {
    if(!message){return;}
    this.messageService.post(message)
                        .subscribe(
                          answer =>  this.messages.push([true, answer])
                        );
    this.messages.push([false, message]);
  }
}