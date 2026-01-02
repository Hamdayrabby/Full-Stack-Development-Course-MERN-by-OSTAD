/*
// Count Operator 
db.brands.aggregate([
    {$count: 'total'}
])
*/ 


/*
// Sorting 
db.brands.aggregate([
    {$sort: {brandName:-1}}
])
*/ 


/*
// Limiting 
db.brands.aggregate([
    {$limit: 1}
])
*/

/*
// Sorting + Limiting 
db.brands.aggregate([
    {$sort: {brandName:-1}},
    {$limit: 2}
])
*/



// Comparison Operator 
// $eq,$gt,$gte,$lt,$lte,$ne

db.products.aggregate([
    {$match: {
        price:{$lt:"10000"}
    }}
])


// Logincal Operator 
// AND OR 

db.products.aggregate([
    {
        $match: {
            $or:[
                {price:{$lt:"10000"}},
                {discount:{$eq:true}}  
            ]
        }
    }
])

/*
// Text Search match Like
db.products.aggregate([
    {$match: {
        title:/De/
    }}
])
*/


/*
// Projection
db.products.aggregate([
    {$match: { title:/Ap/}},
    {
     $project: {title:1,price:1,image:1}
    }
])
*/



/*
// SKIP & LIMIT
db.products.aggregate([
    {$skip: 2},
    {$limit: 4}
])
*/