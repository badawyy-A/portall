const sideBar = document.querySelector(".side-bar")
const i = document.querySelector(".bars")
const rightSide = document.querySelector(".details-sidebar")



let active = false

function handelRightSide (){
    rightSide.classList.toggle("show")
    document.querySelector('#right-side').classList.toggle("right-side")
}

function handleSideBar (){
    sideBar.classList.toggle("active-side")
}

function handleSearchPage(){
    window.location.pathname = "/search.html"
}
function handleHomePage(){
    window.location.pathname = "/index.html"
}

document.querySelectorAll('[data-toggle="details-sidebar"]').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelector('.details-sidebar').classList.toggle('show');
        document.querySelector('#right-side').classList.toggle("right-side")
        var row = this.closest('tr');
        document.getElementById('first-name').innerText = row.cells[0].innerText;
        document.getElementById('last-name').innerText = row.cells[1].innerText;
        document.getElementById('email').innerText = row.cells[2].innerText;
        document.getElementById('address').innerText = row.cells[3].innerText;
        document.getElementById('phone').innerText = row.cells[4].innerText;
        document.getElementById('location').innerText = row.cells[5].innerText;
        document.getElementById('date-of-birth').innerText = row.cells[6].innerText;
        document.getElementById('creation-date').innerText = row.cells[7].innerText;
    });
});



