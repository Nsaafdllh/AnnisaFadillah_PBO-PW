// Data Mahasiswa (contoh)
const mahasiswa = [
    { nama: 'Annisa Nur Fadillah', nim: '2300349', kelas: 'A', alamat: 'Lampung' },
    { nama: 'Angga Fadzar', nim: '2306201', kelas: 'B', alamat: 'Jakarta' },
    { nama: 'Nur Annisa Vian Husaine', nim: '2307061', kelas: 'A', alamat: 'Kalimantan' },
    { nama: 'Syarifatul', nim: '456789', kelas: 'C', alamat: 'Yogyakarta' },
    { nama: 'Raygie', nim: '567890', kelas: 'B', alamat: 'Malang' }
];

// Fungsi untuk membuat elemen tabel 5x5 menggunakan DOM
function createTable(rows, cols) {
    const table = document.createElement('table'); // Membuat elemen <table>
    table.style.borderCollapse = 'collapse';
    table.style.margin = '20px auto';  // Mengatur margin untuk tabel
    table.style.width = '60%';

    // Membuat Header Tabel
    const headerRow = document.createElement('tr');
    const headers = ['No', 'Nama', 'NIM', 'Kelas', 'Alamat'];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        th.style.border = '1px solid black';
        th.style.padding = '10px';
        th.style.backgroundColor = 'purple';
        th.style.textAlign = 'center';
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Membuat Baris Tabel
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');  // Membuat elemen <tr> untuk baris

        // Kolom No (Nomor urut mahasiswa)
        const cellNo = document.createElement('td');
        cellNo.textContent = i + 1;
        cellNo.style.border = '1px solid black';
        cellNo.style.padding = '10px';
        cellNo.style.textAlign = 'center';
        row.appendChild(cellNo);

        // Kolom Nama
        const cellNama = document.createElement('td');
        cellNama.textContent = mahasiswa[i].nama;
        cellNama.style.border = '1px solid black';
        cellNama.style.padding = '10px';
        cellNama.style.textAlign = 'center';
        row.appendChild(cellNama);

        // Kolom NIM
        const cellNim = document.createElement('td');
        cellNim.textContent = mahasiswa[i].nim;
        cellNim.style.border = '1px solid black';
        cellNim.style.padding = '10px';
        cellNim.style.textAlign = 'center';
        row.appendChild(cellNim);

        // Kolom Kelas
        const cellKelas = document.createElement('td');
        cellKelas.textContent = mahasiswa[i].kelas;
        cellKelas.style.border = '1px solid black';
        cellKelas.style.padding = '10px';
        cellKelas.style.textAlign = 'center';
        row.appendChild(cellKelas);

        // Kolom Alamat
        const cellAlamat = document.createElement('td');
        cellAlamat.textContent = mahasiswa[i].alamat;
        cellAlamat.style.border = '1px solid black';
        cellAlamat.style.padding = '10px';
        cellAlamat.style.textAlign = 'center';
        row.appendChild(cellAlamat);

        // 1. Event Click: Mengubah warna baris yang diklik
        row.addEventListener('click', function () {
            row.style.backgroundColor = row.style.backgroundColor === 'yellow' ? '' : 'yellow';
        });

        // 2. Event Double Click: Mengganti warna teks sel Nama menjadi merah
        cellNama.addEventListener('dblclick', function () {
            cellNama.style.color = cellNama.style.color === 'red' ? '' : 'red';
        });

        // 3. Event Mouseover: Mengubah ukuran teks saat mouse melewati kolom NIM
        cellNim.addEventListener('mouseover', function () {
            cellNim.style.fontSize = '18px';
        });

        // Event Mouseout: Kembali ke ukuran teks normal saat mouse keluar dari kolom NIM
        cellNim.addEventListener('mouseout', function () {
            cellNim.style.fontSize = '';
        });

        // 4. Event Right Click (Context Menu): Mengganti warna teks pada kolom Alamat menjadi biru
        cellAlamat.addEventListener('contextmenu', function (e) {
            e.preventDefault();  // Mencegah menu konteks default
            cellAlamat.style.color = cellAlamat.style.color === 'blue' ? '' : 'blue';
        });

        // 5. Event Hover untuk seluruh baris: Mengubah warna latar belakang saat mouse berada di atas baris
        row.addEventListener('mouseover', function () {
            row.style.backgroundColor = row.style.backgroundColor === 'yellow' ? 'yellow' : '#e0e0e0';
        });

        // Mengembalikan warna latar belakang saat mouse keluar
        row.addEventListener('mouseout', function () {
            row.style.backgroundColor = row.style.backgroundColor === 'yellow' ? 'yellow' : '';
        });

        table.appendChild(row);  // Menambahkan baris ke dalam tabel
    }

    return table;  // Mengembalikan elemen tabel
}

// Fungsi untuk menambahkan tabel ke dalam body
function renderTable() {
    const body = document.body;  // Mengambil elemen body
    body.style.fontFamily = 'Arial, sans-serif';  // Menambahkan style ke body
    body.style.backgroundColor = 'pink';  // Warna latar belakang

    const title = document.createElement('h2');  // Membuat elemen judul
    title.textContent = 'Tabel Identitas Mahasiswa';
    title.style.textAlign = 'center';
    body.appendChild(title);  // Menambahkan judul ke dalam body

    const table = createTable(5, 5);  // Membuat tabel 5x5
    body.appendChild(table);  // Menambahkan tabel ke dalam body
}

// Memanggil fungsi renderTable untuk menampilkan tabel ketika halaman dimuat
window.onload = renderTable;
