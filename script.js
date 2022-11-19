/* Below is the variables and functions associated with creating the menu tool for mobile/tablet devices*/ 

const menu = document.getElementById("navBtn");
const nav = document.getElementById("navBar");
const close = document.getElementById("menuClose");

/*If anyone clicks on the element bar, it will activate this bar variable event*/
if (menu) { 
        menu.addEventListener('click', () => {  /*If click is used, arrow function will trigger nav to add the '.active' class*/
        nav.classList.add('active');
     })
}

if (close) { /*If anyone clicks on X at the mobile screen menu, it will remove the '.active' class */
        close.addEventListener('click', () => {  
        nav.classList.remove('active');
     })
    }