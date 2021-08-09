const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports= app =>{
    app.post("/api/stripe",requireLogin ,async (req,res)=>{

        let error;
        let status;
        

            const customer = await stripe.customers.create({
                email: req.body.email,
                source: req.body.id
            });
            const charge = await stripe.charges.create(
            {
                amount: 5 * 100,
                currency: "usd",
                customer: customer.id,
                description: `Purchased the ${req.body.name}`,
                shipping: {
                name: req.body.card.name,
                address: {
                    line1: req.body.card.address_line1,
                    line2: req.body.card.address_line2,
                    city: req.body.card.address_city,
                    country: req.body.card.address_country,
                    postal_code: req.body.card.address_zip
                }
                }
            });
            console.log("Charge:", { charge });
            status = "success";
        
        res.json({ error, status });

        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
}