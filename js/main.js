var input = document.querySelector('input');

input.addEventListener("keypress", function(event) {
    if (event.which===13) {
        console.log("enter button");
	}
});
