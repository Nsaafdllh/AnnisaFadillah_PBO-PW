// Fungsi untuk membuat elemen HTML
function createElement(tag, attributes, textContent) {
    const element = document.createElement(tag);
    if (attributes) {
        Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

// Membuat elemen body
const body = document.body;

// Membuat judul formulir
const title = createElement('h2', {}, 'Formulir Data Mahasiswa');
body.appendChild(title);
title.style.textAlign = 'center';

// Membuat form
const form = createElement('form');
body.appendChild(form);

// Fungsi untuk membuat elemen input dengan label
function createInput(label, type) {
    const labelElement = createElement('label', {}, label);
    const inputElement = createElement('input', { type, name: label.toLowerCase().replace(':', '').trim() });
    form.append(labelElement, inputElement);
}

// Membuat elemen input
createInput('Nama:', 'text');
createInput('NIM:', 'text');
createInput('Kelas:', 'text');
createInput('Alamat:', 'text');

// Membuat tombol submit
const submitButton = createElement('button', { type: 'submit' }, 'Submit');
form.appendChild(submitButton);

// Membuat elemen untuk menampilkan data
const dataContainer = createElement('div', { id: 'dataContainer' });
body.appendChild(dataContainer);

// Menambahkan style CSS secara inline
body.style.fontFamily = 'Arial, sans-serif';
body.style.margin = '0';
body.style.padding = '20px';
body.style.backgroundColor = 'pink';

form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '15px';
form.style.padding = '20px';
form.style.border = '1px solid #ddd';
form.style.borderRadius = '8px';
form.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
form.style.maxWidth = '500px';
form.style.margin = '0 auto';
form.style.backgroundColor = '#fff';

const labels = form.querySelectorAll('label');
const inputs = form.querySelectorAll('input');

labels.forEach(label => {
    label.style.fontWeight = 'bold';
    label.style.marginBottom = '5px';
});

inputs.forEach(input => {
    input.style.padding = '10px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '4px';
    input.style.fontSize = '16px';
});

submitButton.style.padding = '10px 20px';
submitButton.style.border = 'none';
submitButton.style.borderRadius = '4px';
submitButton.style.backgroundColor = 'red';
submitButton.style.color = 'white';
submitButton.style.fontSize = '16px';
submitButton.style.cursor = 'pointer';
submitButton.style.transition = 'background-color 0.3s ease';

submitButton.addEventListener('mouseover', () => {
    submitButton.style.backgroundColor = 'orange';
});

submitButton.addEventListener('mouseout', () => {
    submitButton.style.backgroundColor = 'red';
});

// Fungsi untuk menampilkan data di bawah form
function displayData(event) {
    event.preventDefault(); // Mencegah form dari submit default

    // Ambil nilai input
    const data = Array.from(inputs).map(input => input.value);

    // Buat elemen tabel untuk data
    const table = createElement('table', { style: 'width: 100%; border-collapse: collapse; margin-top: 20px;' });
    const thead = createElement('thead');
    const tbody = createElement('tbody');

    // Header tabel
    const headerRow = createElement('tr');
    labels.forEach(label => {
        const th = createElement('th', { style: 'border: 1px solid #ddd; padding: 10px; text-align: left; background-color: white;' }, label.textContent);
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Baris data
    const dataRow = createElement('tr');
    data.forEach(value => {
        const td = createElement('td', { style: 'border: 1px solid #ddd; padding: 10px;' }, value);
        dataRow.appendChild(td);
    });
    tbody.appendChild(dataRow);

    // Tambahkan thead dan tbody ke tabel
    table.appendChild(thead);
    table.appendChild(tbody);

    // Tambahkan tabel ke dataContainer
    dataContainer.appendChild(table);

    // Tampilkan alert
    alert('Data telah dikirim dan ditampilkan!');

    // Reset form
    form.reset();
}

// Menambahkan event listener pada form
form.addEventListener('submit', displayData);

// Event DOM: Klik pada judul
title.addEventListener('click', () => {
    alert('Judul diklik!');
});

// Event DOM: Input pada field Nama
const namaInput = form.querySelector('input[name="nama"]');
namaInput.addEventListener('input', () => {
    console.log('Nama field diubah:', namaInput.value);
});
