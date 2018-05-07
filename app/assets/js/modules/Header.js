import $ from 'jquery';

class Header{

	constructor(){
		this.menuIcon = $("#menu-icon");
		this.menu = $("#menu");

		this.image = $("#modal-image");
		this.thumbGroup = $("#thumb-group");
		this.thumbs = $(".modal__thumbnail");

		this.events();
	}

	events(){
		this.menuIcon.click(this.toggleMenu.bind(this));
		this.thumbs.click(this.toggleActiveThumb);
		this.thumbs.click(this.changeImage.bind(this));
	}

	toggleMenu(){
		this.menu.toggleClass("header__menu--is-visible");
	}
	
	changeImage(){
	   var sourceToSet = this.thumbGroup.find('.modal__thumbnail--is-active').attr('src');
	   this.image.attr('src', sourceToSet);
	}

	toggleActiveThumb(){
		$(this).siblings().removeClass('modal__thumbnail--is-active');
		$(this).addClass('modal__thumbnail--is-active');
	}
}

export default Header;