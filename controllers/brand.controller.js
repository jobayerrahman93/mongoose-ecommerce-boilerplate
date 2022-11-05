const  {BrandPostService} = require("../services/brand.service");


const BrandController =async(req,res)=>{

   try {

    console.log("hitting brand controller")
    const result = await BrandPostService(req.body);

    
    res.status(200).json({
        success: true,
        message:'Brand created successfully',
        data: result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message:"Couldn't create brand"
    });
   }

}

module.exports = BrandController;