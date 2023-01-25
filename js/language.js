let selectElement = document.getElementById("language-selector");

function checkLanguage() {
    let language = localStorage.getItem("language");
    if (language == "en") {
        document.getElementById("root").className = "english";
        selectElement.selectedIndex = 1;
    } else {
        localStorage.setItem("language", "fr");
        document.getElementById("root").className = "french";
        selectElement.selectedIndex = 0;
    }
}

function setLanguage(choice) {
    if (choice == "english") {
        localStorage.setItem("language", "en");
    } else {
        localStorage.setItem("language", "fr");
    }
    checkLanguage();
}

function actualizeLanguage() {
    setLanguage(selectElement.options[selectElement.selectedIndex].value);
}

checkLanguage();
