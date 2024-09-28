//your JS code here. If required.
function askForConfirmation() {
    let confirmation = confirm("Do you want to proceed?");
    
    if (confirmation) {
        alert("You clicked OK. Proceeding...");
    } else {
        alert("You clicked Cancel. Exiting...");
    }
}
askForConfirmation()

