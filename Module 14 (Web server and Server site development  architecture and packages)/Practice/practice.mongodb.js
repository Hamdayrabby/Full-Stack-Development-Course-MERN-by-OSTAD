// //db.help();
use("footy-test");

// let players = [
//   {
//     name: "Sadio Mane",
//     position: "Forward",
//     club: "Liverpool",
//     country: "Senegal",
//     age: 27,
//     goals: 18,
//     assists: 12,
//     appearances: 30,
//   },
//   {
//     name: "Mohamed Salah",
//     position: "Forward",
//     club: "Liverpool",
//     country: "Egypt",
//     age: 28,
//     goals: 22,
//     assists: 10,
//     appearances: 32,
//   },
//   {
//     name: "Virgil van Dijk",
//     position: "Defender",
//     club: "Liverpool",
//     country: "Netherlands",
//     age: 29,
//     goals: 5,
//     assists: 2,
//     appearances: 34,
//   },
//   {
//     name: "Alisson Becker",
//     position: "Goalkeeper",
//     club: "Liverpool",
//     country: "Brazil",
//     age: 27,
//     goals: 0,
//     assists: 1,
//     appearances: 30,
//   },
//   {
//     name: "Trent Alexander-Arnold",
//     position: "Defender",
//     club: "Liverpool",
//     country: "England",
//     age: 21,
//     goals: 4,
//     assists: 13,
//     appearances: 33,
//   },
//   {
//     name: "Roberto Firmino",
//     position: "Forward",
//     club: "Liverpool",
//     country: "Brazil",
//     age: 28,
//     goals: 12,
//     assists: 8,
//     appearances: 31,
//   },
//   {
//     name: "Jordan Henderson",
//     position: "Midfielder",
//     club: "Liverpool",
//     country: "England",
//     age: 29,
//     goals: 3,
//     assists: 5,
//     appearances: 32,
//   },
//   {
//     name: "Georginio Wijnaldum",
//     position: "Midfielder",
//     club: "Liverpool",
//     country: "Netherlands",
//     age: 29,
//     goals: 4,
//     assists: 3,
//     appearances: 31,
//   },
//   {
//     name: "Andrew Robertson",
//     position: "Defender",
//     club: "Liverpool",
//     country: "Scotland",
//     age: 26,
//     goals: 2,
//     assists: 11,
//     appearances: 32,
//   },
//   {
//     name: "Fabinho",
//     position: "Midfielder",
//     club: "Liverpool",
//     country: "Brazil",
//     age: 26,
//     goals: 2,
//     assists: 4,
//     appearances: 28,
//   }
// ];

//  db.players.insertMany(players);

// 3. Find
// db.players.find();
//4. Projection
//db.players.find({},{ name: 1, country: 1, goals: 1, _id: 0});

//5. Comparison
// $gt greater than
// $gte greater than equals to
// $lt less than
// $lte less than equals to
// $eq equals to
// $ne not equals to
// $in in []
// $nin not in []


// db.players.find({ goals: { $gt: 10 } });

//db.players.find({age:{$gte: 28}});

//6. Logical operators
// $and
// $or
// $not
// $nor

//db.players.find({$or: [{country: "Brazil"}, {country: "Argentina"}]});

//7. element query
// $exists
// $type

//db.players.find({goals: {$exists: true}});

//8. Evaluation query
// $regex
// $mod
// $text
// $where

//db.players.find({name: {$regex: /Salah/}});

//9. Sort
//-1 for descending and 1 for ascending
//db.players.find().sort({ goals: -1 });

//10. Limit
//db.players.find().limit(3);
//db.players.find().sort({ goals: -1 }).limit(3);

//11. distinct
//db.players.distinct("country");

//12. Count
//db.players.find().count();

//13 Delete
// db.players.remove({name: "Fabinho"});



//MongoDB Aggregation


//db.players.aggregate([]);//sleect * from players

//count operator
// db.players.aggregate([{$count: 'string'}]);

//Sorting
//db.players.aggregate([{$sort: {goals: -1}}]);


//Limiting
//db.players.aggregate([{$limit: 3}]);
//db.brands.aggregate([{$sort: {brandname: 1}}, {$limit: 3}]);


//comparison operator
//$eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
//db.players.aggregate([{$match: {goals: {$gt: 10}}}]);

//Logical operator
//$and, $or, $not, $nor
// db.players.aggregate([{$match: {$or: [{country: "Brazil"}, {country: "Argentina"}]}}]);


//Text search match like
//db.players.aggregate([{$match: {name: {$regex: /Sa/}}}]);

//Projection
// db.players.aggregate([{$project: {name: 1, country: 1, goals: 1, _id: 0}}]);


//skip & limit
db.players.aggregate([{$skip: 3}, {$limit: 3}]);