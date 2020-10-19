var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keywHQ83c6HLp5wgz'}).base('appS3LEmZFI2vnGxK');

base('Westworld-Best-Quotes').select({
maxRecords: 15,
 view:"Grid view"
 }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
       
var firstValue = document.getElementById('description')
firstValue.innerHTML = record.get('Description');
console.log(record.get('Description'));
 var secondValue= document.getElementById('note');
 secondValue.innerHTML = record.get('Notes');

    },


    // List elements
base('Westworld-Best-Quotes').select({
    sort: [{field:"Description", direction:"desc"}],
    view:"Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
var element = document.createElement('div');


element.classList.add('Notes');
element.innerHTML = record.fields.Description;
console.log(record.get('Notes'));

fetchNextPage();
}); function done(err) {
    if (err) {console.error(err); return;}
};
    })
    )})
