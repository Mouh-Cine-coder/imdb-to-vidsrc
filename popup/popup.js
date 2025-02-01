document.getElementById("btn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const error = document.getElementById("error");
        if (tabs.length > 0) {
            const imdbURL = tabs[0].url;
            if (imdbURL.includes("imdb.com")) {
                let imdbId = imdbURL.match(/tt\d+/);
                if (imdbId) {
                    let vidsrcUrl = `https://vidsrc.in/embed/${imdbId}`;
                    chrome.tabs.create({ url: vidsrcUrl });
                }
            } else {
                error.style.display = "block";
                error.style.backgroundColor = "red";
                error.textContent = "this is not an IMDB page !";
            }
        } else {
            error.style.display = "block";
            error.style.backgroundColor = "red";
            error.textContent = "No active tab found !";
        }
    });
});
