import $ from 'jquery';

class Header{

	constructor(){
		this.menuIcon = $("#menu-icon");
		this.menu = $("#menu");
		this.events();
	}

	events(){
		this.menuIcon.click(this.toggleMenu.bind(this));
	}

	toggleMenu(){
		this.menu.toggleClass("header__menu--is-visible");
	}

}

export default Header;