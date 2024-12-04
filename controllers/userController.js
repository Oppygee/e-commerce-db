const create = async(req, res)=>{
   const {first_Name,other_Names, username, phone, password, email} = req.body()

   if (!first_Name || other_Names || username || phone || password || email) {
    throw new Error("signup invalid")
   } else {
    res.status(200).json({
        status: "success",
        message: "welcome! account signup completed"
    })
   }
}

module.exports = create
