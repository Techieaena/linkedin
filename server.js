const express = require('express');
const app = express();
const port = 3000;

// Sample data for certificates
const certificates = [
  { id: 1, name: 'Angular: Ecosystems', date: '4/29/2024', link: 'CertificateOfCompletion_Angular Ecosystems.pdf' },
  // Add more certificate data here
];

// Endpoint to get all certificates
app.get('/certificates', (req, res) => {
  res.json(certificates);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});