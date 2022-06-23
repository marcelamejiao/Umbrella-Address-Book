var state = {
    contacts: []
};

function init () {
    // Load the state object from local storage
    loadState();


    $("#add-button").on("click",newContact);
    $("#save-button").on("click",saveContact);

}

function renderContactList() {

}

function newContact() {
    
    $("#contact-information").removeClass("d-none");
}

function saveContact(event) {
    event.preventDefault();
}


function loadState() {
    var json = localStorage.getItem("umbrella-address-book");

    if (json !== null) {
        state = JSON.parse(json);
    }
}

function saveState() {
    var json = JSON.stringify(state);

    localStorage.setItem("umbrella-address-book", json);
}

init();
