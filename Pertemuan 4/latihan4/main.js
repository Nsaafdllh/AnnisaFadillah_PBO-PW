const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   fs.readFile('index.html', function(err, data ) {
    res.statusCode = 200; // server berjalan dengan baik
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    return res.end();
   });
});

server.listen(3000, () => {
    console.log('Server berhasil berjalan di port 3000');
});

const studentTableBody = document.getElementById("studentTableBody");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", function () {
  const name = document.getElementById("studentName").value;
  const nim = document.getElementById("studentNIM").value;

  if (name && nim) {
    // Create a new row for the table
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td>${name}</td>
                    <td>${nim}</td>
                    <td><button class="remove-button">Hapus</button></td>
                `;

    // Append the new row to the table body
    studentTableBody.appendChild(row);

    // Clear the input fields
    document.getElementById("studentName").value = "";
    document.getElementById("studentNIM").value = "";

    // Add event listener to remove button
    row.querySelector(".remove-button").addEventListener("click", function () {
      studentTableBody.removeChild(row);
    });
  } else {
    alert("Harap masukkan nama dan NIM!");
  }
});

// Menangani tampilan FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const isVisible = answer.style.display === 'block';
        answer.style.display = isVisible ? 'none' : 'block';
    });
});