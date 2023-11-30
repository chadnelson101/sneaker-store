document.addEventListener("DOMContentLoaded", function() {
    let menuToggle = document.querySelector('.menuToggle');
    let sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
});

let navlist = document.querySelectorAll('.navlist');

// Function to handle the click event
function activeLink() {
    // Remove 'active' class from all elements
    navlist.forEach((item) => item.classList.remove('active'));

    // Add 'active' class to the clicked element
    this.classList.add('active');
}

// Add click event listener to each element in navlist
navlist.forEach((item) => item.addEventListener('click', activeLink));