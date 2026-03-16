let wordInput = document.getElementById("wordInput")
let langInput = document.getElementById("langSelect")
let output = document.getElementById("output")
let langSelect = document.getElementById("langSelect")

let hasCheckedLangs = false

async function submitTranslation() {
    try {
        const response = await fetch("http://localhost:8080/translate", {
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                word: wordInput.value,
                lang: langInput.value
            })
        })

        const data = await response.json()

        if (response.status == 200) {
            output.textContent = data.translated
        } else {
            output.textContent = data.error
        }        

    } catch (error) {
        console.error("Error:", error)
        output.textContent = "Error retrieving translation"
    }
}

async function getLanguages() {
    if (!hasCheckedLangs) {
        try {

            const response = await fetch("http://localhost:8080/languages")
            const data = await response.json()

            for (let i = 0; i < data.length; i++) {
                let dropEntry = document.createElement("option") //populate the language select dropdown with the languages the server supports, but only run this check once to save resources
                dropEntry.textContent = data[i]
                langSelect.appendChild(dropEntry)
            }

            hasCheckedLangs = true
            
        } catch (error) {
            console.error("Error:", error)
            output.textContent = "Error retrieving languages"
        }
    }
}
