import $ from 'jquery';

class Modal{
	
	constructor(){
        this.roles = $(".modal-form__part");
		this.events();
	}

	events(){
        this.roles.click(this.toggleRole);
    }
    
	toggleRole(){
        $(this).siblings().removeClass("modal-form__part--is-active");
        $(this).addClass("modal-form__part--is-active");
    }
}

export default Modal;