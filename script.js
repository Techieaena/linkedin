// Function to generate table rows dynamically based on provided content
function generateTableRows(contentArray) {
    const tbody = document.getElementById('tableBody');

    contentArray.forEach(contentRow => {
        const row = document.createElement('tr');

        contentRow.forEach(content => {
            const cell = document.createElement('td');
            cell.textContent = content;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
}

// Function to generate a vertical sequence from 1 to 120 in the first column
function generateSequence() {
    const tbody = document.getElementById('tableBody');

    for (let i = 1; i <= 120; i++) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = i;
        row.appendChild(cell);

        // Add empty cells for other columns
        for (let j = 0; j < 5; j++) {
            const emptyCell = document.createElement('td');
            row.appendChild(emptyCell);
        }

        tbody.appendChild(row);
    }
}

// Generate tables with different content
generateSequence(); // Generate the vertical sequence
generateTableRows(contentArray1); // Generate the table with contentArray1
generateTableRows(contentArray2); // Generate the table with contentArray2
