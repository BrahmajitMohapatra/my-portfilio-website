const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


function downloadFile() {
	// Create a temporary anchor element
	var downloadLink = document.createElement('a');
  
	// Set the href attribute to the URL of the file to download
	downloadLink.href = 'http://localhost:8080/Isaac\'s%20Resume%20(3).pdf';

  
	// Set the download attribute to the filename you want the file to be saved as
	downloadLink.download = 'resume.pdf';
  
	// Append the anchor element to the document body
	document.body.appendChild(downloadLink);
  
	// Trigger the download by programmatically clicking the anchor element
	downloadLink.click();
  
	// Remove the anchor element from the document body
	document.body.removeChild(downloadLink);
  }
  
  

 