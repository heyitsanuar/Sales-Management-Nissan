import $ from 'jquery';

class Gallery{

	constructor(){
		this.image = $("#modal-image");
		this.thumbGroup = $("#thumb-group");
		this.thumbs = $(".modal__thumbnail");
		this.events();
	}

	events(){
		this.thumbs.click(this.toggleActiveThumb);
		this.thumbs.click(this.changeImage.bind(this));
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

export default Gallery;