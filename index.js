const fs = require('fs');
const csv = require('csv-parser');
const fastcsv = require('fast-csv');

const updatedRoutes = [
  ['ID', 'Departure Code', 'Arrival Code', 'Callsign', 'Flight Number', 'Fleets', 'Altitude', 'CI', 'Route', 'Departure Time', 'Arrival Time', 'Flight Length', 'Flight Distance', 'Start Date', 'End Date', 'Remarks', 'Type', 'Tag', 'Departure Stand Group', 'Arrival Stand Group', 'PAX LF', 'Luggage LF', 'Cargo (Weight) LF', 'Cargo (Volume) LF', 'Containers', 'Flightrules', 'Flighttype', 'Contpct', 'Resvrule', 'Taxifuel', 'Minfob', 'Minfod', 'Melfuel', 'Atcfuel', 'Wxxfuel', 'Addedfuel', 'Tankering', 'Minfob units', 'Minfod units', 'Melfuel units', 'Atcfuel units', 'Wxxfuel units', 'Addedfuel units', 'Tankering units', 'Addedfuel label', 'Hidden', 'Delete']
];

fs.createReadStream('before.csv')
  .pipe(csv())
  .on('data', (row) => {
    let DepartureIcao = row['departure_icao'];
    let ArrivalIcao = row['arrival_icao'];
    let Callsign = row['callsign'];
    let FlightNumber = row['flight_number'];
    let Altitude = row['altitude'];
    let CI = row['cost_index'];
    let Route = row['route'];
    let Fleet = row['aircraft_types'];

    let newRow = [
      '',
      DepartureIcao,
      ArrivalIcao,
      Callsign,
      FlightNumber,
      Fleet,
      Altitude,
      CI,
      Route,
      '', // Departure Time
      '', // Arrival Time
      '', // Flight Length
      '', // Flight Distance
      '', // Start Date
      '', // End Date
      '', // Remarks
      '', // Type
      '', // Tag
      '', // Departure Stand Group
      '', // Arrival Stand Group
      '', // PAX LF
      '', // Luggage LF
      '', // Cargo (Weight) LF
      '', // Cargo (Volume) LF
      '', // Containers
      '', // Flightrules
      '', // Flighttype
      '', // Contpct
      '', // Resvrule
      '', // Taxifuel
      '', // Minfob
      '', // Minfod
      '', // Melfuel
      '', // Atcfuel
      '', // Wxxfuel
      '', // Addedfuel
      '', // Tankering
      '', // Minfob units
      '', // Minfod units
      '', // Melfuel units
      '', // Atcfuel units
      '', // Wxxfuel units
      '', // Addedfuel units
      '', // Tankering units
      '', // Addedfuel label
      0, // Hidden
      '', // Delete
    ];
    updatedRoutes.push(newRow);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');

    const ws = fs.createWriteStream('after.csv');
    fastcsv
      .write(updatedRoutes, { headers: true })
      .pipe(ws)
      .on('finish', () => {
        console.log('CSV file successfully created');
      });
  });