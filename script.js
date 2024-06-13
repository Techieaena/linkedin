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

    for (let i = 1; i <= 115; i++) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = i;
        row.appendChild(cell);

        // Add empty cells for other columns
        for (let j = 0; j < 6; j++) {
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
 
// Function to retrieve MongoDB data and format it into an array
async function fetchDataFromMongoDB() {
    // Simulating MongoDB query result
    const mongoDBData = [
        {
            "Name Of Certificates": "Learning MongoDB (2020)",
            "Completion Date": "Completed 4/15/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable"
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79924"
            },
            "Name Of Certificates": "Business Skills Foundation",
            "Completion Date": "Completed 5/29/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79925"
            },
            "Name Of Certificates": "Tips for Working Remotely",
            "Completion Date": "Completed 5/29/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79926"
            },
            "Name Of Certificates": "Being an Effective Team Member (2020)",
            "Completion Date": "Completed 5/29/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79927"
            },
            "Name Of Certificates": "Interpersonal Communication (2020)",
            "Completion Date": "Completed 5/28/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79928"
            },
            "Name Of Certificates": "Creating Great First Impressions",
            "Completion Date": "Completed 5/27/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79929"
            },
            "Name Of Certificates": "Writing Email (2014)",
            "Completion Date": "Completed 5/27/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7992a"
            },
            "Name Of Certificates": "IT Security Foundations: Network Security (2020)",
            "Completion Date": "Completed 4/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7992b"
            },
            "Name Of Certificates": "Cybersecurity with Cloud Computing",
            "Completion Date": "Completed 4/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7992c"
            },
            "Name Of Certificates": "NLP with Python for Machine Learning Essential Training",
            "Completion Date": "Completed 4/25/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7992d"
            },
            "Name Of Certificates": "Critical Thinking and Problem Solving",
            "Completion Date": "Completed 2/24/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7992e"
            },
            "Name Of Certificates": "Angular: Ecosystems",
            "Completion Date": "Completed 4/29/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7992f"
            },
            "Name Of Certificates": "Learning Splunk",
            "Completion Date": "Completed 4/29/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79930"
            },
            "Name Of Certificates": "JMeter: Performance and Load Testing",
            "Completion Date": "Completed 4/30/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79931"
            },
            "Name Of Certificates": "Building a Full-Stack App with Angular 2+ and Spring Boot",
            "Completion Date": "Completed 5/2/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79932"
            },
            "Name Of Certificates": "Python for Data Science Essential Training Part 2",
            "Completion Date": "Completed 5/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79933"
            },
            "Name Of Certificates": "Being Positive at Work",
            "Completion Date": "Completed 3/13/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79934"
            },
            "Name Of Certificates": "Angular: API Communication and Authentication",
            "Completion Date": "Completed 4/30/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79935"
            },
            "Name Of Certificates": "Body Language for Leaders (2019)",
            "Completion Date": "Completed 3/13/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79936"
            },
            "Name Of Certificates": "Tableau Essential Training",
            "Completion Date": "Completed 5/21/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79937"
            },
            "Name Of Certificates": "Everybody's Introduction to Tableau (2022)",
            "Completion Date": "Completed 5/16/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79938"
            },
            "Name Of Certificates": "How to Use Data Visualization to Make Better Decisions—Faster",
            "Completion Date": "Completed 5/16/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79939"
            },
            "Name Of Certificates": "Introduction to Data Warehouses",
            "Completion Date": "Completed 5/16/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7993a"
            },
            "Name Of Certificates": "Python for Data Science Essential Training Part 1",
            "Completion Date": "Completed 5/2/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7993b"
            },
            "Name Of Certificates": "Python Essential Training (2018)",
            "Completion Date": "Completed 4/29/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7993c"
            },
            "Name Of Certificates": "Cybersecurity Awareness: Phishing and Whaling",
            "Completion Date": "Completed 4/25/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7993d"
            },
            "Name Of Certificates": "Ethical Hacking: Vulnerability Analysis",
            "Completion Date": "Completed 4/26/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7993e"
            },
            "Name Of Certificates": "Introduction to AWS DeepLens",
            "Completion Date": "Completed 4/25/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7993f"
            },
            "Name Of Certificates": "Web Security: User Authentication and Access Control (2019)",
            "Completion Date": "Completed 4/24/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79940"
            },
            "Name Of Certificates": "Web Security: OAuth and OpenID Connect (2018)",
            "Completion Date": "Completed 4/24/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79941"
            },
            "Name Of Certificates": "Learning TensorFlow with JavaScript",
            "Completion Date": "Completed 4/24/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79942"
            },
            "Name Of Certificates": "Building and Deploying Deep Learning Applications with TensorFlow",
            "Completion Date": "Completed 4/24/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79943"
            },
            "Name Of Certificates": "Deep Learning: Image Recognition",
            "Completion Date": "Completed 4/24/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79944"
            },
            "Name Of Certificates": "Building Deep Learning Applications with Keras 2.0 (2017)",
            "Completion Date": "Completed 4/23/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79945"
            },
            "Name Of Certificates": "Neural Networks and Convolutional Neural Networks Essential Training",
            "Completion Date": "Completed 4/20/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79946"
            },
            "Name Of Certificates": "Deep Learning: Face Recognition",
            "Completion Date": "Completed 4/19/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79947"
            },
            "Name Of Certificates": "Security Testing: Vulnerability Management with Nessus",
            "Completion Date": "Completed 4/19/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79948"
            },
            "Name Of Certificates": "Learning Penetration Testing (2016)",
            "Completion Date": "Completed 4/19/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79949"
            },
            "Name Of Certificates": "Cisco Network Security: Core Security Concepts",
            "Completion Date": "Completed 4/18/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7994a"
            },
            "Name Of Certificates": "Oracle Database 12c: Basic SQL",
            "Completion Date": "Completed 4/15/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7994b"
            },
            "Name Of Certificates": "Learning GraphQL (2018)",
            "Completion Date": "Completed 4/15/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7994c"
            },
            "Name Of Certificates": "Microsoft SQL Server 2016 Essential Training",
            "Completion Date": "Completed 4/15/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7994d"
            },
            "Name Of Certificates": "Understanding Capital Markets",
            "Completion Date": "Completed 4/13/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7994e"
            },
            "Name Of Certificates": "Introduction to Artificial Intelligence",
            "Completion Date": "Completed 4/13/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7994f"
            },
            "Name Of Certificates": "Learning to Be Assertive",
            "Completion Date": "Completed 4/13/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79950"
            },
            "Name Of Certificates": "Career Essentials in System Administration by Microsoft and ",
            "Completion Date": "Completed 4/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79951"
            },
            "Name Of Certificates": "Dynamic Application Security Testing",
            "Completion Date": "Completed 4/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79952"
            },
            "Name Of Certificates": "Practical Cybersecurity for IT Professionals",
            "Completion Date": "Completed 4/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79953"
            },
            "Name Of Certificates": "Programming Foundations: Secure Coding",
            "Completion Date": "Completed 4/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79954"
            },
            "Name Of Certificates": "Data Steward Foundations",
            "Completion Date": "Completed 4/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79955"
            },
            "Name Of Certificates": "Performance Testing Foundations",
            "Completion Date": "Completed 3/29/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79956"
            },
            "Name Of Certificates": "SharePoint Advanced: Document Creation and Automation",
            "Completion Date": "Completed 3/26/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79957"
            },
            "Name Of Certificates": "Building Modern Projects with React",
            "Completion Date": "Completed 1/21/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79958"
            },
            "Name Of Certificates": "Interaction Design: Interface",
            "Completion Date": "Completed 1/21/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79959"
            },
            "Name Of Certificates": "Express Essential Training (2018)",
            "Completion Date": "Completed 1/21/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7995a"
            },
            "Name Of Certificates": "Node.js: Securing RESTful APIs",
            "Completion Date": "Completed 1/21/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7995b"
            },
            "Name Of Certificates": "Learning Full-Stack JavaScript Development: MongoDB, Node, and React",
            "Completion Date": "Completed 1/21/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7995c"
            },
            "Name Of Certificates": "Building a Website with Node.js and Express.js",
            "Completion Date": "Completed 1/21/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7995d"
            },
            "Name Of Certificates": "Node.js: Testing and Code Quality",
            "Completion Date": "Completed 1/21/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7995e"
            },
            "Name Of Certificates": "React: Software Architecture",
            "Completion Date": "Completed 1/21/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7995f"
            },
            "Name Of Certificates": "Node.js: Deploying Applications",
            "Completion Date": "Completed 1/20/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79960"
            },
            "Name Of Certificates": "Node.js: Security",
            "Completion Date": "Completed 1/20/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79961"
            },
            "Name Of Certificates": "React.js Essential Training (2020)",
            "Completion Date": "Completed 1/18/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79962"
            },
            "Name Of Certificates": "Learning npm: A Package Manager",
            "Completion Date": "Completed 1/13/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79963"
            },
            "Name Of Certificates": "React: Securing Applications",
            "Completion Date": "Completed 1/13/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79964"
            },
            "Name Of Certificates": "React.js Essential Training (2018)",
            "Completion Date": "Completed 1/13/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79965"
            },
            "Name Of Certificates": "What Is Generative AI?",
            "Completion Date": "Completed 1/11/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79966"
            },
            "Name Of Certificates": "Get Ready for Generative AI",
            "Completion Date": "Completed 1/11/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79967"
            },
            "Name Of Certificates": "Introduction to Prompt Engineering for Generative AI",
            "Completion Date": "Completed 1/11/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79968"
            },
            "Name Of Certificates": "Node.js Essential Training (2019)",
            "Completion Date": "Completed 1/10/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79969"
            },
            "Name Of Certificates": "Learning webpack 4",
            "Completion Date": "Completed 1/9/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7996a"
            },
            "Name Of Certificates": "Learning Java 11",
            "Completion Date": "Completed 1/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7996b"
            },
            "Name Of Certificates": "React: Testing and Debugging",
            "Completion Date": "Completed 1/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7996c"
            },
            "Name Of Certificates": "Introduction to MongoDB (2022)",
            "Completion Date": "Completed 1/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7996d"
            },
            "Name Of Certificates": "React.js Essential Training",
            "Completion Date": "Completed 1/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7996e"
            },
            "Name Of Certificates": "React.js: Building an Interface",
            "Completion Date": "Completed 1/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7996f"
            },
            "Name Of Certificates": "Managing Stress for Positive Change",
            "Completion Date": "Completed 1/6/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79970"
            },
            "Name Of Certificates": "MERN Essential Training (2020)",
            "Completion Date": "Completed 1/5/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79971"
            },
            "Name Of Certificates": "UX Insights Weekly",
            "Completion Date": "Completed 1/5/2024",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79972"
            },
            "Name Of Certificates": "Digital Marketing Foundations",
            "Completion Date": "Completed 1/12/2023",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79973"
            },
            "Name Of Certificates": "Learning the JavaScript Language (2019)",
            "Completion Date": "Completed 8/11/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79974"
            },
            "Name Of Certificates": "Getting Your First Job as a Web Developer",
            "Completion Date": "Completed 8/11/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79975"
            },
            "Name Of Certificates": "Become a Web Developer",
            "Completion Date": "Completed 8/11/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79976"
            },
            "Name Of Certificates": "Getting Started as a Full-Stack Web Developer",
            "Completion Date": "Completed 8/11/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79977"
            },
            "Name Of Certificates": "Web Programming Foundations",
            "Completion Date": "Completed 8/11/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79978"
            },
            "Name Of Certificates": "Succeeding in Web Development: Full Stack and Front End",
            "Completion Date": "Completed 8/11/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79979"
            },
            "Name Of Certificates": "Search Techniques for Web Developers",
            "Completion Date": "Completed 8/11/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7997a"
            },
            "Name Of Certificates": "JavaScript Essential Training",
            "Completion Date": "Completed 8/11/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7997b"
            },
            "Name Of Certificates": "CSS Essential Training (2019)",
            "Completion Date": "Completed 8/10/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7997c"
            },
            "Name Of Certificates": "CSS Fundamentals: Unlock the Power of Web Styling",
            "Completion Date": "Completed 8/10/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7997d"
            },
            "Name Of Certificates": "Excel: Tips and Tricks (2018)",
            "Completion Date": "Completed 8/10/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7997e"
            },
            "Name Of Certificates": "Excel: Advanced Formulas and Functions (2022)",
            "Completion Date": "Completed 8/10/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7997f"
            },
            "Name Of Certificates": "Learning Excel 2019",
            "Completion Date": "Completed 8/10/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79980"
            },
            "Name Of Certificates": "Foundations of Enterprise Content Management",
            "Completion Date": "Completed 7/15/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79981"
            },
            "Name Of Certificates": "Problem-Solving Techniques",
            "Completion Date": "Completed 7/15/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79982"
            },
            "Name Of Certificates": "Introduction to CSS (2017)",
            "Completion Date": "Completed 7/15/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79983"
            },
            "Name Of Certificates": "The DOM in JavaScript, jQuery, AngularJS, and React",
            "Completion Date": "Completed 4/24/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79984"
            },
            "Name Of Certificates": "Learning MySQL Development (2014)",
            "Completion Date": "Completed 4/6/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79985"
            },
            "Name Of Certificates": "MySQL Essential Training (2019)",
            "Completion Date": "Completed 4/5/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79986"
            },
            "Name Of Certificates": "C# & .NET: Programming",
            "Completion Date": "Completed 4/6/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79987"
            },
            "Name Of Certificates": "Communicating with Confidence (2015)",
            "Completion Date": "Completed 4/4/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79988"
            },
            "Name Of Certificates": "Nano Tips for Communicating with Confidence with Selena Rezvani",
            "Completion Date": "Completed 4/1/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79989"
            },
            "Name Of Certificates": "JavaScript: Classes (2018)",
            "Completion Date": "Completed 3/31/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7998a"
            },
            "Name Of Certificates": "HTML Essential Training",
            "Completion Date": "Completed 3/31/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7998b"
            },
            "Name Of Certificates": "Oracle Database 19c: Basic SQL",
            "Completion Date": "Completed 3/30/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7998c"
            },
            "Name Of Certificates": "Learning Linux Shell Scripting",
            "Completion Date": "Completed 3/14/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7998d"
            },
            "Name Of Certificates": "IT Security Foundations: Core Concepts (2019)",
            "Completion Date": "Completed 3/13/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7998e"
            },
            "Name Of Certificates": "Personal Effectiveness Tips",
            "Completion Date": "Completed 3/13/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec7998f"
            },
            "Name Of Certificates": "Data Visualization: Storytelling",
            "Completion Date": "Completed 3/13/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79990"
            },
            "Name Of Certificates": "Master Confident Presentations",
            "Completion Date": "Completed 3/13/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79991"
            },
            "Name Of Certificates": "Establishing Credibility as a Speaker",
            "Completion Date": "Completed 3/13/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79992"
            },
            "Name Of Certificates": "Own Your Voice: Improve Presentations and Executive Presence",
            "Completion Date": "Completed 3/13/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79993"
            },
            "Name Of Certificates": "Public Speaking Foundations",
            "Completion Date": "Completed 3/13/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79994"
            },
            "Name Of Certificates": "How to Present and Stay on Point",
            "Completion Date": "Completed 3/13/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable",
            "null": null
          },
          {
            "_id": {
              "$oid": "666b27d4bf2450440ec79995"
            },
            "Name Of Certificates": "Being the Best You: Self-Improvement Modeling",
            "Completion Date": "Completed 2/24/2022",
            "Linkedin Certificate": "Certificate",
            "IIBA Certificates": "Not Applicable",
            "NASBA Certificates": "Not Applicable",
            "PAIIB Certificates": "Not Applicable"
          }]// Add more MongoDB documents as needed

    // Format MongoDB data into an array
    const dataArray = mongoDBData.map(doc => [
        doc["Name Of Certificates"],
        doc["Completion Date"],
        doc["Linkedin Certificate"],
        doc["IIBA Certificates"],
        doc["NASBA Certificates"],
        doc["PAIIB Certificates"]
        // Add more fields if needed
    ]);

    return dataArray;
}

// Function to populate table with MongoDB data
async function populateTableWithMongoDBData() {
    const dataArray = await fetchDataFromMongoDB();

    // Remove existing table content
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    // Generate sequence
    generateSequence();

    // Fill table with MongoDB data
    generateTableRowsFromArrays(dataArray, 0);
}

// Call populateTableWithMongoDBData to populate the table with MongoDB data
populateTableWithMongoDBData();
