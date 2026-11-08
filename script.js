let textArea = document.querySelector("textarea"); // Sekect Text Area:
let resultElement = document.getElementById("reading-time");

textArea.addEventListener("input", function () {
    all();
});

// Results Area:
// Word:
function word() {
    const words = textArea.value.trim();
    if (words == "") {
        document.getElementById("words").innerHTML = 0;
    } else {
        const length = words.split(/\s+/).length;
        document.getElementById("words").innerHTML = length;
    }
}

// Characters:
function characters() {
    const words = textArea.value;
    const length = words.length;
    document.getElementById("characters").innerHTML = length;
}

// Reading Time:
function readingTime() {
    const text = textArea.value.trim();

    if (text === "") {
        resultElement.innerHTML = "0 min";
        return;
    }

    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const totalSeconds = Math.round((wordCount / 250) * 60);

    if (totalSeconds < 60) {
        resultElement.innerHTML = totalSeconds + " sec";
    } else {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        resultElement.innerHTML = seconds === 0 ? minutes + " min" : minutes + " min " + seconds + " sec";
    }
}

// Characters Without Space:
function charactersWS() {
    const words = textArea.value.replace(/\s/g, "");
    const length = words.length;
    document.getElementById("characters-no-space").innerHTML = length;
}

// All Function:
function all() {
    word();
    characters();
    charactersWS();
    readingTime();
}

// Function Area:
// Uppercase:
document.getElementById("uppercase").addEventListener("click", function () {
    document.querySelector("textarea").value = textArea.value.toUpperCase();
});

// Lowercase:
document.getElementById("lowercase").addEventListener("click", function () {
    document.querySelector("textarea").value = textArea.value.toLowerCase();
});

// Capitalize:
document.getElementById("capitalize").addEventListener("click", function () {
    document.querySelector("textarea").value = textArea.value
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
});

// Copy:
document.getElementById("copy").addEventListener("click", function () {
    navigator.clipboard.writeText(textArea.value);
});

// Downlod As Txt:

// Clear:
document.getElementById("clear").addEventListener("click", function () {
    textArea.value = "";
});
