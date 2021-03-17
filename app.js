const csvParser = require('csv-parser');
const fs = require('fs');
const filepath = './export_visit_uploads.csv';

fs.createReadStream(filepath)
    .on('error', () => {
        // handle error
    })

    .pipe(csvParser())
    .on('data', (row) => {
        console.log(row['_id']);
        console.log(row['timestamp']);
        console.log(row['notes']);
        console.log(row['contentType']);
        console.log(row['type']);
        console.log(row['owner']);
        console.log(row['owner_name']);
        
        const bufferdata = Buffer.from(row['binaryData'], 'hex');
        fs.writeFileSync(row['_id'] + '.jpeg', bufferdata);
    })

    .on('end', () => {
        // handle end of CSV
    })