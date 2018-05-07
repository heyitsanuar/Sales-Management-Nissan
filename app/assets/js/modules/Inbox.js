import $ from 'jquery';

class Inbox{

	constructor(){
        this.requests = $(".request");
        this.requestGroup = $("#request-group");
        this.message = $("#message");
        this.backButton = $("#message-back");
		this.events();
	}

	events(){
        this.requests.click(this.toggleMessage.bind(this));
        this.backButton.click(this.toggleMessage.bind(this));
	}

	toggleMessage(){
        this.message.toggleClass("d-none");
        this.requestGroup.toggleClass("d-none");
    }
    
}

export default Inbox;