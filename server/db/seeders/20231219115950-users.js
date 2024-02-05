

const { models } = require('../models/index.js');

module.exports = {
  up: async () => {
    try {
      // Check if the models object contains the 'users' model
      if ('users' in models) {
        const users = models.users;
        
        const inserted = await users.insertMany([
          
            
          {
            _id:"6582bc69818113e62b231703",
              name:"Blessy K Babu",
              email:"blessy@gmail.com",
              phone:"7902301544",
              district:"pathanamthitta",
              category:"admin",
              address:"Blessy Villa,Thoduppuzha P O,Pathanamthitta",
              password:"$2a$10$z./5Y9gMxNnqETFOG8VCW.8aEYnC9UzNcp4w1hqZ1J5FkEzsvbBga",  //Admin@123
              usertype:"6582ce130a0dd1bc7fe48dae"
          },
          {
            _id:"65ba7ac55aa13a6866629137",
              name:"Mithra C",
              email:"mithra@gmail.com",
              phone:"7902301544",
              district:"Kochi",
              category:"seller",
              address:"Everyday Elegance Store,Thoduppuzha P O,Kochi",
              password:"$2a$10$uT2Lq0NQ23kvhdBZe9JwXeKgTHQeCTkRvTBeWiaEI0Wh7BvsfLn5e",  //seller@123
              usertype:"6598dd77f3261b14b25ff389"
          },
          
        ]);
        console.log(inserted.length + ' documents inserted');
      } else {
        throw new Error('users model not found in models object');
      }
    } catch (error) {
      console.error('Error in up() function:', error);
      throw error;
    }
  },

  down: async () => {
    try {
      // Check if the models object contains the 'users' model
      if ('users' in models) {
        const users = models.users;
        const deleted = await users.deleteMany({
          _id: {$in:["6582bc69818113e62b231703","65ba7ac55aa13a6866629137"]} ,
        });
        console.log(deleted.deletedCount + ' documents deleted');
      } else {
        throw new Error('users model not found in models object');
      }
    } catch (error) {
      console.error('Error in down() function:', error);
      throw error;
    }
  },
};

