import {mongoClient} from 'mongodb'
export default async function ApiValidate(req,res){
    // connect to mongoDB
    const db= await mongoClient.connect(
        'mongodb+srv://Shun-P:<password>@cluster0.xka8u1j.mongodb.net/')
    try{
        if(req.method==="POST") {
            // method 1
            const {firstName,bloodGroup,genotype,maritalStatus,gender}=req.body;
            const M ="M";
            const F = "F";
            const single = "single"
            const married = "married"

            // validate
            // name
            if (firstName===undefined){
                res.status(203).json({errorMsg:"please fill in first name"})
            }
            // blood group 
            if (bloodGroup.length>3) {
                res.status(422).json({errorMsg:"blood group cannot be more than 3 characters"})
            }
            // Genotype
            if (genotype.length>2) {
                res.status(422).json({errorMsg:"genotype cannot be more than 3 characters"})
            }
            // Gender
            if (gender!=M||gender!=F ) {
                res.status(422).json({errorMsg:"unaccepted gender"})
            }
            // marital Status
            if (maritalStatus!==single||maritalStatus!==married) {
                res.status(422).json({errorMsg:"unaccepted marital status"})
            }

            console.log(firstName);
            console.log(bloodGroup);
            console.log(genotype);
            console.log(maritalStatus);
            console.log(gender);

            // store in database
            res.status(201).json({msg:"user data stored successfully"})
            
        }
    }
    catch(err){
        console.log(err);
    }
}