let header = document.createElement("div");
header.className = "header";
header.innerHTML = `Hello World! 🌍</br></br> I'm YOUR_NAME. a software dev & deep learning enthusiast.</br>Passionate about coding, reading, and continuous learning 🚀 📘👨‍💻`;

let followButton = document.createElement("div");
followButton.className = "followButton";
followButton.innerHTML = "Embrace the journey, Follow ➡️ ";

header.appendChild(followButton);
document.body.appendChild(header);