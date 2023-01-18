function checkLanguage() {
    let language = localStorage.getItem("language");
    if (language == "en") {
        document.getElementById("root").className = "english";
    } else {
        localStorage.setItem("language", "fr");
        document.getElementById("root").className = "french";
    }
}

function setLanguage(choice) { // choice = "en" or "fr"
    if (choice == "en") {
        localStorage.setItem("language", "en");
    } else {
        localStorage.setItem("language", "fr");
    }
    checkLanguage();
}

checkLanguage();
