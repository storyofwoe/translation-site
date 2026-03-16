# 🌍 Language Translator App
### **Exercise**

## **Overview**
In this exercise, you’ll build a **basic translator app** using **Node.js**, **Express**, and the **Fetch API**.
Your app will let a user type a word, select a language, and receive a translation from your server.

---

## **Learning Objectives**
By completing this exercise, you will:
- Create a simple **Express server**.
- Build a **GET API endpoint** that handles query parameters.
- Use the **Fetch API** with **async/await** to request data from the server.
- Dynamically update the webpage with server responses.
- Handle **errors** gracefully.

---

## **Your Task**
You are going to create **two parts**:
1. A **server** to handle translation requests.
2. A **client** to collect user input and display translations.

---

### **Step 1 — Set Up Your Project**
```bash
cd translator-app
npm install
```

---

### **Step 2 — Build Your Server (`server.js`)**
- Create a **GET route**:
  ```
  GET /translate?word=hello&lang=fr
  ```
- Inside the route:
    - Use a **small hard coded dictionary** in your server file.
    - If the translation exists → send it back in JSON.
    - If it doesn’t exist → send a friendly “not found” message.

**Example server response:**
```json
{
  "translated": "bonjour"
}
```

---

### **Step 3 — Build Your HTML (`index.html`)**
Create a simple page containing:
- A **text input** for the word.
- A **dropdown** for the target language (eg French, Spanish, German).
- A **Translate** button.
- An **output area** for showing the translation or error.

---

### **Step 4 — Add Client JavaScript (`client.js`)**
- Get the input values from the text box and dropdown.
- Use **fetch** to call your server’s `/translate` route:
```js
const response = await fetch(`/translate?word=${word}&lang=${lang}`);
const data = await response.json();
```
- Update the page with the result from the server.

---

### **Step 5 — Run and Test**
Start your server:
```bash
node server.js
```
Open `index.html` in your browser.
Type a word, select a language, and test your translations.

---

## **Basic Example Dictionary**
```js
const dictionary = {
  hello: { fr: "bonjour", es: "hola", de: "hallo", nl: "hallo" },
  goodbye: { fr: "au revoir", es: "adiós", de: "tschüss", nl: "tot ziens" },
  thanks: { fr: "merci", es: "gracias", de: "danke", nl: "dank je" }
};
```

---

## **Stretch Goals (Optional)**
For those of you who want to challenge yourselves:
- **Add POST Requests**  
    Instead of query parameters, use a POST request to send `{ word, lang }` in the **request body**.
- **Add More Languages**  
    Extend the dictionary to support Italian, Portuguese, etc.
- **Make the UI Dynamic**  
    Fetch the available languages from the server instead of hard-coding them.
- **Handle Unknown Words Gracefully**  
    Display a custom error message in the browser if a translation isn’t found.
- **Advanced** → Allow **multi-word translations**.

---

## **What Good Looks Like**
✅ A running server on **http://localhost:8080**  
✅ User enters a word → chooses a language → clicks **Translate**  
✅ If the translation exists → display it in the browser  
✅ If it doesn’t → display a friendly error message  
✅ Bonus points for adding **stretch goals**
