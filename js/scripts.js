// Show navigation
let btnMenu = document.querySelector('.btn-menu').addEventListener('click', () => {
  let navigation = document.querySelector('.navigation');
  navigation.style.display = 'block';
});

// Hide navigation
let btnCloseMenu = document.querySelector('.btn-close-menu').addEventListener('click', () => {
  let navigation = document.querySelector('.navigation');
  navigation.style.display = 'none';
});

// Switch portfolio tabs
function openTab(e, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "grid";
  e.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();