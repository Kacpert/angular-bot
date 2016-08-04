"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var messages_service_1 = require('./services/messages.service');
var ChatComponent = (function () {
    function ChatComponent(messageService) {
        this.messageService = messageService;
        // messages = [[true, "Hello, to learn bot new answer you have to write question and answer in one message usign these pattern:  ~a new question` ~a question answer` for example "],
        //             [false, "~How are you?` ~I am fine thanks.`"],
        //             [true, "~` these symbols(tilde) are under 'Esc' at first use shift"]]
        this.messages = [];
    }
    ChatComponent.prototype.send = function (message) {
        var _this = this;
        if (!message) {
            return;
        }
        this.messageService.post(message)
            .subscribe(function (answer) { return _this.messages.push([true, answer]); });
        this.messages.push([false, message]);
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'chat-dialog',
            templateUrl: 'app/view/chat.html',
            styleUrls: ['app/assets/chat.css'],
            providers: [messages_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [messages_service_1.MessageService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map