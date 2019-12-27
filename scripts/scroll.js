function aboutScroll() {
  var sectionAbout = document.getElementById('sectionAbout');
  sectionAbout.scrollIntoView({behavior:"smooth"});
}

function servicesScroll() {
  var sectionServices = document.getElementById('sectionServices');
  sectionServices.scrollIntoView({behavior:"smooth"});
}

document.getElementById('nav-about').addEventListener('click', aboutScroll);
document.getElementById('nav-services').addEventListener('click', servicesScroll);
