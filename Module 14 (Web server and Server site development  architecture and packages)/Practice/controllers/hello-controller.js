exports.HelloGet=(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"This is a get request"
    });
}

exports.HelloPost=(req,res)=>{
    res.status(201).json({
        status:"success",
        data:"This is a post request"
    });
}