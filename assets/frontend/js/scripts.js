function abrirMenu() {
    if (window.innerWidth <= 768) {
        document.getElementById("mySidenav").style.width = "100%";
        document.querySelectorAll('.hide-on-toggle').forEach(function(button) {
            button.style.display = 'none'; 
        });
    } else {
        document.getElementById("mySidenav").style.width = "400px";
        document.getElementById("main1").style.marginLeft = "400px"; 
        document.querySelector('.overlay').style.width = '100%';
        document.querySelector('.overlay').style.display = 'block';
        document.getElementById("searchButton").style.display = 'none';
        document.getElementById("cartButton").style.display = 'none';
    }
    document.documentElement.classList.add('no-scroll');
}

function cerrarMenu() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector('.overlay').style.width = '0';
    document.querySelector('.overlay').style.display = 'none';
    document.querySelectorAll('.hide-on-toggle').forEach(function(button) {
        button.style.display = 'block'; 
    });

    if (window.innerWidth > 768) {
        document.getElementById("main1").style.marginLeft = "0";
        document.querySelector('.overlay').style.width = "100%";
        document.getElementById("searchButton").style.display = 'block';
        document.getElementById("cartButton").style.display = 'block';
    }

    setTimeout(function() {
        document.documentElement.classList.remove('no-scroll');
    }, 500); 
}

function toggleSearch() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.classList.toggle('active');
    }
}
