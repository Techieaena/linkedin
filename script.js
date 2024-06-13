// Define content arrays
const contentArray1 = [
    ["Data 1-1", "Data 1-2", "Data 1-3", "Data 1-4", "Data 1-5"],
    ["Data 2-1", "Data 2-2", "Data 2-3", "Data 2-4", "Data 2-5"],
    // Add more rows as needed
];

const contentArray2 = [
    ["Data A-1", "Data A-2", "Data A-3", "Data A-4", "Data A-5"],
    ["Data B-1", "Data B-2", "Data B-3", "Data B-4", "Data B-5"],
    // Add more rows as needed
];

// Function to generate table rows directly from content arrays and fill them into the sequence table
function generateTableRowsFromArrays(contentArrays, startingIndex) {
    const tbody = document.getElementById('tableBody');
    let rowIndex = startingIndex;

    contentArrays.forEach(contentArray => {
        const row = tbody.rows[rowIndex]; // Get the corresponding row in the sequence table

        contentArray.forEach((content, columnIndex) => {
            const cell = row.cells[columnIndex + 1]; // Start from the second cell (index 1) to skip the first column
            cell.textContent = content;
        });

        rowIndex++; // Move to the next row in the sequence table
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

// Generate the sequence table first
generateSequence();

// Fill tables with different content arrays in the sequence table
generateTableRowsFromArrays(contentArray1, 0); // Fill contentArray1 starting from the first row
generateTableRowsFromArrays(contentArray2, contentArray1.length); // Fill contentArray2 after contentArray1