import $ from 'jquery';

class Inbox{

	constructor(){
        this.requests = $(".request");
        this.requestGroup = $("#request-group");
        this.message = $("#message");
        this.backButton = $("#message-back");
        this.filter = $("#filter-inbox");
        this.btnShowFilter = $("#btn-inbox-show");
        this.btnHideFilter = $("#btn-inbox-hide");
		this.events();
	}

	events(){
        this.requests.click(this.toggleMessage.bind(this));
        this.backButton.click(this.toggleMessage.bind(this));
        this.btnShowFilter.click(this.toggleInboxMenu.bind(this));
        this.btnHideFilter.click(this.toggleInboxMenu.bind(this));
	}

	toggleMessage(){
        this.message.toggleClass("d-none");
        this.requestGroup.toggleClass("d-none");
    }

    toggleInboxMenu(){
        this.filter.toggleClass("d-none");
        this.requestGroup.toggleClass("d-none");
    }
    
}

export default Inbox;