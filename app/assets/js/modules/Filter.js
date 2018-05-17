import $ from 'jquery';

class Filter{
	
	constructor(){
        this.filter = $("#filter");
        this.filterShowButton = $("#filter-show");
        this.filterBackButton = $("#filter-back");
        this.carsPage = $("#cars-page");
        this.events();
	}

	events(){
        this.filterShowButton.click(this.toggleFilter.bind(this));
        this.filterBackButton.click(this.toggleFilter.bind(this));
	}

	toggleFilter(){
        this.filter.toggleClass("d-none");
        this.carsPage.toggleClass("d-none");
    }
}

export default Filter;