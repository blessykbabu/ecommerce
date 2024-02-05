

const { models } = require('../models/index.js');

module.exports = {
  up: async () => {
    try {
      // Check if the models object contains the 'users' model
      if ('products' in models) {
        const products = models.products;
        
        const inserted = await products.insertMany([
          
            
          {
            _id:"65bbcaad69c1df2d08ae9f57",
              name:"Aldo",
              price:"890",
              quantity:10,
              description:"The Aldo ladies' bag exudes modern elegance with its sleek design, premium materials, and thoughtful organization, making it a stylish and functional accessory for any occasion. Crafted with precision and adorned with subtle details, it effortlessly complements the contemporary woman's lifestyle",
              category:"Bag",
              pimage:"uploads/products/2.jpg",
              sid:"65ba7ac55aa13a6866629137"
          },
          {
            _id:"65c0819b03ffab10cc996759",
              name:"Aqua Allegoria",
              price:"7980",
              quantity:5,
              description:"Guerlain's Aqua Allegoria 'Pera Granita' is a refreshing and invigorating perfume that captures the essence of a sun-kissed orchard in bloom. Opening with a burst of crisp and juicy Nashi pear, this fragrance immediately awakens the senses with its fruity vibrancy. The heart notes unfold to reveal a delicate blend of floral accords, where luminous jasmine petals and dew-kissed peony add an air of sophistication.",
              category:"Perfume",
              pimage:"uploads/products/perfume.jpg",
              sid:"65ba7ac55aa13a6866629137"
          },
          {
            _id:"65c082fa03ffab10cc99675a",
              name:"HP Laptop",
              price:"75000",
              quantity:5,
              description:"Unleash the power of versatility with the HP Pavilion x360 14-inch 2-in-1 Laptop. Designed to elevate your computing experience, this sleek and stylish laptop effortlessly combines performance, portability, and flexibility.Powered by the latest Intel Core i5 processor, this laptop delivers seamless multitasking and responsive performance for both work and play. Whether you're editing documents, streaming content, or running creative applications, the Pavilion x360 handles it all with ease",
              category:"Electronis",
              pimage:"uploads/products/14.jpg",
              sid:"65ba7ac55aa13a6866629137"
          },
          {
            _id:"65c0849c03ffab10cc99675b",
              name:"Canon EOS 3000D",
              price:"36000",
              quantity:4,
              description:"Capture moments in unparalleled clarity with the Canon EOS [Model Name] Digital Camera. Its advanced autofocus system ensures swift and precise focusing, even in challenging lighting conditions. This versatile camera offers a range of shooting modes, from automatic to manual controls, catering to both beginners and seasoned photographers. Experience the joy of 4K video recording, bringing your creative vision to life with incredible detail. With a durable build and intuitive touchscreen interface, the Canon EOS [Model Name] is your perfect companion for an immersive and enjoyable photography experience.",
              category:"Electronis",
              pimage:"uploads/products/pr1.jpeg",
              sid:"65ba7ac55aa13a6866629137"
          },
          {
            _id:"65c0873c03ffab10cc99675c",
              name:"la roche posay serum",
              price:"250",
              quantity:20,
              description:"Experience skincare luxury with La Roche-Posay Serum. This advanced formula revitalizes and hydrates, leaving your skin with a radiant, youthful glow. Infused with dermatologist-recommended ingredients, it targets fine lines and wrinkles for a smoother complexion. Lightweight and fast-absorbing, this serum seamlessly integrates into your daily routine. Unlock a new level of skin nourishment with La Roche-Posay Serum.",
              category:"cosemetics",
              pimage:"uploads/products/pr3.png",
              sid:"65ba7ac55aa13a6866629137"
          },
          {
            _id:"65c0880503ffab10cc99675d",
              name:"Nike",
              price:"850",
              quantity:20,
              description:"Step into style and performance with Nike shoes. Engineered for comfort and durability, these sneakers boast a sleek design that merges fashion with function. Featuring innovative technology for responsive cushioning and support, they are ideal for workouts or everyday wear. The iconic Nike swoosh adds a touch of sporty flair to your look. Elevate your footwear game with Nike – where comfort meets cutting-edge design.",
              category:"Shoes",
              pimage:"uploads/products/pr5.avif",
              sid:"65ba7ac55aa13a6866629137"
          },
          {
            _id:"65c08ce803ffab10cc99675e",
              name:"JBL Headphone",
              price:"2400",
              quantity:10,
              description:"Immerse yourself in exceptional audio quality with JBL headphones. The powerful sound signature delivers crisp highs and deep bass, enhancing your music experience. Designed for comfort, these headphones feature ergonomic ear cups and a lightweight build for extended wear. With wireless connectivity options, you can enjoy tangle-free listening, while the intuitive controls make playback and calls a breeze. Elevate your audio journey with JBL headphones – where style meets superior sound.",
              category:"Electronics",
              pimage:"uploads/products/pr2.avif",
              sid:"65ba7ac55aa13a6866629137"
          },
          {
            _id:"65c08ded03ffab10cc99675f",
              name:"Ganeva",
              price:"1500",
              quantity:10,
              description:"Elevate your style with the Ganeva Watch. This timepiece seamlessly blends elegance and functionality, featuring a sophisticated design that complements any outfit. Crafted with precision, it boasts a durable build and reliable quartz movement for accurate timekeeping. The minimalist dial and refined details showcase timeless sophistication. Make a statement with the Ganeva Watch – a perfect fusion of fashion and functionality on your wrist.",
              category:"Watch",
              pimage:"uploads/products/12.jpg",
              sid:"65ba7ac55aa13a6866629137"
          },
          {
            _id:"65c092ac03ffab10cc996766",
              name:"Iphone",
              price:"72990",
              quantity:10,
              description:"Experience innovation at your fingertips with the iPhone. Sleek and powerful, this iconic device combines cutting-edge technology with seamless design. Capture stunning photos and videos with its advanced camera, enjoy a vibrant display, and navigate effortlessly with intuitive features. With a robust ecosystem of apps and updates, the iPhone is not just a smartphone but a lifestyle companion. Stay connected, productive, and stylish with the unparalleled performance of the iPhone.",
              category:"Electronics",
              pimage:"uploads/products/4.jpg",
              sid:"65ba7ac55aa13a6866629137"
          },
          {
            _id:"65c0903103ffab10cc996760",
            name:"Gown",
            price:"2000",
            quantity:10,
            description:"Elevate your elegance with our Ladies Gown Dress. This exquisite garment combines flowing grace with modern style, featuring a flattering silhouette and intricate detailing. Crafted with premium fabrics, it ensures both comfort and sophistication for any special occasion. The gown's timeless design and attention to detail make it a versatile choice for formal events or evening affairs. Embrace timeless beauty with our Ladies Gown Dress – a statement piece that effortlessly blends fashion and femininity.",
            category:"dress",
            pimage:"uploads/products/d.jpg",
            sid:"65ba7ac55aa13a6866629137"
        },
        {
          _id:"65c0910603ffab10cc996761",
          name:"T-shirt",
          price:"450",
          quantity:10,
          description:"Indulge in casual comfort with our classic T-shirt. Crafted from soft, breathable cotton, this wardrobe essential ensures all-day ease. The versatile design and relaxed fit make it a perfect choice for everyday wear. With a range of colors to suit any style, our T-shirt effortlessly combines comfort and timeless fashion. Elevate your casual wardrobe with this go-to piece – a staple that complements any look with laid-back flair.",
          category:"dress",
          pimage:"uploads/products/t.jpg",
          sid:"65ba7ac55aa13a6866629137"
      },
          
        ]);
        console.log(inserted.length + ' documents inserted');
      } else {
        throw new Error('products model not found in models object');
      }
    } catch (error) {
      console.error('Error in up() function:', error);
      throw error;
    }
  },

  down: async () => {
    try {
      // Check if the models object contains the 'users' model
      if ('products' in models) {
        const products = models.products;
        const deleted = await products.deleteMany({
          _id: {$in:["65bbcaad69c1df2d08ae9f57","65c0819b03ffab10cc996759","65c082fa03ffab10cc99675a","65c0849c03ffab10cc99675b","65c0873c03ffab10cc99675c","65c0880503ffab10cc99675d","65c08ce803ffab10cc99675e","65c08ded03ffab10cc99675f","65c0903103ffab10cc996760","65c0910603ffab10cc996761","65c092ac03ffab10cc996766"]} ,
        });
        console.log(deleted.deletedCount + ' documents deleted');
      } else {
        throw new Error('products model not found in models object');
      }
    } catch (error) {
      console.error('Error in down() function:', error);
      throw error;
    }
  },
};

