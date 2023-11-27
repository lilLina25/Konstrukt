'use strict';
//Header
let header_btn = document.querySelector('.menu-header__icon');
let header_menu = document.querySelector('.menu-header__menu');
let header_links = document.querySelectorAll('.menu-header__link');

header_btn.addEventListener('click',function(){
	header_btn.classList.toggle('active');
	header_menu.classList.toggle('active_menu');
	document.body.classList.toggle('overflow');
});
for(let link of header_links) {
	link.addEventListener('click',function(){
		header_btn.classList.remove('active');
		header_menu.classList.remove('active_menu');
		document.body.classList.remove('overflow');
	});
}

//Signup
let signup_inp = document.querySelector('.signup__mail');
signup_inp.addEventListener('click',function(){
	if(signup_inp.value === 'test@youremail.com'){
		signup_inp.value = "";
	}
});
signup_inp.addEventListener('blur', function(){
	if(signup_inp.value === ""){
		signup_inp.value = 'test@youremail.com';
	}
});