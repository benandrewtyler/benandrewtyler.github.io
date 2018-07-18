//Displays the nav menu when the hamburger is pressed
function myFunction() {
    var x = document.getElementById("my_nav_list");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
//Loads the 600px media query as a variable
var mql = window.matchMedia("screen and (max-width:600px)");

//Makes the nav menu visible after it is hidded on mobile view and view expanded to above 600px
mql.addListener(function(mql) {
    if (mql.matches) {
        //If the media query is matched change the my_nav_list ID css to display:none;
        var x = document.getElementById("my_nav_list");
        x.style.display = "none";
        console.log("Matches now!");
    } else {
        //If the media query is matched change the my_nav_list ID css to display:flex;
        var x = document.getElementById("my_nav_list");
        x.style.display = "flex";
        console.log("Doesn't match now!");
    }
});


//Test code
/*
function myFunction() {
    var x = document.getElementById("my_nav_list");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

var mql = window.matchMedia("screen and (max-width:600px)");

mql.addListener(function(mql) {
    if (mql.matches) {
        function myFunction() {
            var x = document.getElementById("my_nav_list");
            if (x.style.display === "flex") {
                x.style.display = "none";
            } else {
                x.style.display = "flex";
            }
        }
        console.log("Matches now!");
    } else {
        var x = document.getElementById("my_nav_list");
        x.style.display = "flex";
        console.log("Doesn't match now!");
    }
});
*/