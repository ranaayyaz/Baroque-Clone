const _raw_products = [
  // Stitched Formal (10 products)
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766586005/140_590f415c-33ee-4d97-8814-cf2cb00effa8_iiicur.webp",
    name: "Elegant Silk Formal Shirt",
    price: 4950,
    category: "stitchedFormal",
    season: "All Season",
    images: [
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766586005/140_590f415c-33ee-4d97-8814-cf2cb00effa8_iiicur.webp",
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-9_u4cqey.webp",
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585985/st-11_fvtji6.webp",
    ],
  },
  {
    id: 2,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585985/st-11_fvtji6.webp",
    name: "Premium Cotton Business Shirt",
    price: 3850,
    category: "stitchedFormal",
    season: "Winter",
    images: [
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585985/st-11_fvtji6.webp",
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766586005/140_590f415c-33ee-4d97-8814-cf2cb00effa8_iiicur.webp",
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-9_u4cqey.webp",
    ],
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-9_u4cqey.webp",
    name: "Classic Linen Office Wear",
    price: 4280,
    category: "stitchedFormal",
    season: "Summer",
  },
  {
    id: 4,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-10_hrkrw9.webp",
    name: "Executive Twill Dress Shirt",
    price: 5125,
    category: "stitchedFormal",
    season: "Autumn",
  },
  {
    id: 5,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-8_nz5mmb.webp",
    name: "Designer Formal Blouse",
    price: 4675,
    category: "stitchedFormal",
    season: "All Season",
  },
  {
    id: 6,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/117_4868dea8-e76b-470d-9010-9946f45bf290_vssmbx.webp",
    name: "Business Formal Attire",
    price: 3890,
    category: "stitchedFormal",
    season: "Winter",
  },
  {
    id: 7,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-2_uxqwqi.webp",
    name: "Corporate Office Shirt",
    price: 3450,
    category: "stitchedFormal",
    season: "Summer",
  },
  {
    id: 8,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-4_n8irdi.webp",
    name: "Premium Formal Top",
    price: 4780,
    category: "stitchedFormal",
    season: "Autumn",
  },
  {
    id: 9,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-7_wggw6q.webp",
    name: "Silk Formal Wear",
    price: 5250,
    category: "stitchedFormal",
    season: "All Season",
  },
  {
    id: 10,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-3_ndjbic.webp",
    name: "Luxury Formal Collection",
    price: 5980,
    category: "stitchedFormal",
    season: "Winter",
  },

  // Stitched Casual (10 products)
  {
    id: 11,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-6_jegwyb.webp",
    name: "Bohemian Floral Print Top",
    price: 3650,
    category: "stitchedCasual",
    season: "Summer",
  },
  {
    id: 12,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/163_7583fb1e-93aa-4396-b5d0-ed309cda9e7d_qmlkzo.webp",
    name: "Comfy Cotton Everyday Shirt",
    price: 2925,
    category: "stitchedCasual",
    season: "Winter",
  },
  {
    id: 13,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/144_817e8b02-2ef3-46de-8cd7-78e8a914ed8a_hnfbpl.webp",
    name: "Relaxed Fit Linen Blouse",
    price: 3380,
    category: "stitchedCasual",
    season: "Summer",
  },
  {
    id: 14,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/hover-1st_u6wwur.webp",
    name: "Vintage Denim Casual Wear",
    price: 4175,
    category: "stitchedCasual",
    season: "Autumn",
  },
  {
    id: 15,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/125_2e1aca63-1c7e-4ab9-8aab-82756a0a3633_xbnk4w.webp",
    name: "Casual Printed Top",
    price: 2890,
    category: "stitchedCasual",
    season: "All Season",
  },
  {
    id: 16,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/1st_qsdtxw.webp",
    name: "Everyday Casual Shirt",
    price: 3250,
    category: "stitchedCasual",
    season: "Winter",
  },
  {
    id: 17,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_3514c792-48d8-4721-8c06-99a4ff7e6823_cjls9x.webp",
    name: "Summer Casual Blouse",
    price: 2780,
    category: "stitchedCasual",
    season: "Summer",
  },
  {
    id: 18,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/9_c77276d3-74c0-4db6-8ff0-9e9abe2cdb43_rdh9sa.webp",
    name: "Casual Designer Top",
    price: 3980,
    category: "stitchedCasual",
    season: "Autumn",
  },
  {
    id: 19,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_c60b3c5a-0cee-4720-a388-f239fc8ad9a6_duciqd.webp",
    name: "Casual Wear Collection",
    price: 3450,
    category: "stitchedCasual",
    season: "All Season",
  },
  {
    id: 20,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766577686/1st_prmvwk.webp",
    name: "Premium Casual Attire",
    price: 4320,
    category: "stitchedCasual",
    season: "Winter",
  },

  // Stitched Partywear (10 products)
  {
    id: 21,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766586005/140_590f415c-33ee-4d97-8814-cf2cb00effa8_iiicur.webp",
    name: "Glitter Embellished Party Top",
    price: 5625,
    category: "stitchedPartywear",
    season: "All Season",
  },
  {
    id: 22,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585985/st-11_fvtji6.webp",
    name: "Sequined Evening Blouse",
    price: 4950,
    category: "stitchedPartywear",
    season: "Winter",
  },
  {
    id: 23,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-9_u4cqey.webp",
    name: "Chiffon Designer Party Wear",
    price: 5380,
    category: "stitchedPartywear",
    season: "Summer",
  },
  {
    id: 24,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-10_hrkrw9.webp",
    name: "Velvet Festive Celebration Top",
    price: 6125,
    category: "stitchedPartywear",
    season: "Autumn",
  },
  {
    id: 25,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-8_nz5mmb.webp",
    name: "Designer Party Dress",
    price: 6850,
    category: "stitchedPartywear",
    season: "All Season",
  },
  {
    id: 26,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/117_4868dea8-e76b-470d-9010-9946f45bf290_vssmbx.webp",
    name: "Evening Party Gown",
    price: 7250,
    category: "stitchedPartywear",
    season: "Winter",
  },
  {
    id: 27,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-2_uxqwqi.webp",
    name: "Party Wear Collection",
    price: 5980,
    category: "stitchedPartywear",
    season: "Summer",
  },
  {
    id: 28,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-4_n8irdi.webp",
    name: "Festival Wear Top",
    price: 4780,
    category: "stitchedPartywear",
    season: "Autumn",
  },
  {
    id: 29,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-7_wggw6q.webp",
    name: "Designer Party Blouse",
    price: 5420,
    category: "stitchedPartywear",
    season: "All Season",
  },
  {
    id: 30,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-3_ndjbic.webp",
    name: "Luxury Party Wear",
    price: 6890,
    category: "stitchedPartywear",
    season: "Winter",
  },

  // Stitched Winter (10 products) - WINTER
  {
    id: 31,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-6_jegwyb.webp",
    name: "Cashmere Wool Winter Blouse",
    price: 4650,
    category: "stitchedWinter",
    season: "Winter",
  },
  {
    id: 32,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/163_7583fb1e-93aa-4396-b5d0-ed309cda9e7d_qmlkzo.webp",
    name: "Thermal Fleece Winter Shirt",
    price: 3925,
    category: "stitchedWinter",
    season: "Winter",
  },
  {
    id: 33,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/144_817e8b02-2ef3-46de-8cd7-78e8a914ed8a_hnfbpl.webp",
    name: "Quilted Insulated Winter Top",
    price: 4380,
    category: "stitchedWinter",
    season: "Winter",
  },
  {
    id: 34,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/hover-1st_u6wwur.webp",
    name: "Cable Knit Winter Sweater",
    price: 5175,
    category: "stitchedWinter",
    season: "Winter",
  },
  {
    id: 35,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/125_2e1aca63-1c7e-4ab9-8aab-82756a0a3633_xbnk4w.webp",
    name: "Woolen Winter Wear",
    price: 4890,
    category: "stitchedWinter",
    season: "Winter",
  },
  {
    id: 36,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/1st_qsdtxw.webp",
    name: "Winter Collection Blouse",
    price: 4250,
    category: "stitchedWinter",
    season: "Winter",
  },
  {
    id: 37,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_3514c792-48d8-4721-8c06-99a4ff7e6823_cjls9x.webp",
    name: "Winter Velvet Top",
    price: 5780,
    category: "stitchedWinter",
    season: "Winter",
  },
  {
    id: 38,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/9_c77276d3-74c0-4db6-8ff0-9e9abe2cdb43_rdh9sa.webp",
    name: "Designer Winter Wear",
    price: 4980,
    category: "stitchedWinter",
    season: "Winter",
  },
  {
    id: 39,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_c60b3c5a-0cee-4720-a388-f239fc8ad9a6_duciqd.webp",
    name: "Winter Essentials",
    price: 3450,
    category: "stitchedWinter",
    season: "Winter",
  },
  {
    id: 40,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766577686/1st_prmvwk.webp",
    name: "Premium Winter Collection",
    price: 6320,
    category: "stitchedWinter",
    season: "Winter",
  },

  // Unstitched Formal (10 products)
  {
    id: 41,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766586005/140_590f415c-33ee-4d97-8814-cf2cb00effa8_iiicur.webp",
    name: "Italian Wool Suiting Fabric",
    price: 6725,
    category: "unstitchedFormal",
    season: "All Season",
  },
  {
    id: 42,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585985/st-11_fvtji6.webp",
    name: "Premium Business Attire Material",
    price: 5950,
    category: "unstitchedFormal",
    season: "Winter",
  },
  {
    id: 43,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-9_u4cqey.webp",
    name: "Fine Linen Office Wear Fabric",
    price: 6380,
    category: "unstitchedFormal",
    season: "Summer",
  },
  {
    id: 44,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-10_hrkrw9.webp",
    name: "Executive Twill Suit Material",
    price: 7175,
    category: "unstitchedFormal",
    season: "Autumn",
  },
  {
    id: 45,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-8_nz5mmb.webp",
    name: "Formal Wear Fabric Bundle",
    price: 5675,
    category: "unstitchedFormal",
    season: "All Season",
  },
  {
    id: 46,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/117_4868dea8-e76b-470d-9010-9946f45bf290_vssmbx.webp",
    name: "Business Formal Material",
    price: 4890,
    category: "unstitchedFormal",
    season: "Winter",
  },
  {
    id: 47,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-2_uxqwqi.webp",
    name: "Corporate Office Fabric",
    price: 4450,
    category: "unstitchedFormal",
    season: "Summer",
  },
  {
    id: 48,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-4_n8irdi.webp",
    name: "Premium Formal Material",
    price: 5780,
    category: "unstitchedFormal",
    season: "Autumn",
  },
  {
    id: 49,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-7_wggw6q.webp",
    name: "Silk Formal Fabric",
    price: 6250,
    category: "unstitchedFormal",
    season: "All Season",
  },
  {
    id: 50,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-3_ndjbic.webp",
    name: "Luxury Formal Material",
    price: 6980,
    category: "unstitchedFormal",
    season: "Winter",
  },

  // Unstitched Casual (10 products)
  {
    id: 51,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-6_jegwyb.webp",
    name: "Printed Cotton Daily Wear Fabric",
    price: 3725,
    category: "unstitchedCasual",
    season: "Summer",
  },
  {
    id: 52,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/163_7583fb1e-93aa-4396-b5d0-ed309cda9e7d_qmlkzo.webp",
    name: "Comfortable Everyday Material",
    price: 2950,
    category: "unstitchedCasual",
    season: "Winter",
  },
  {
    id: 53,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/144_817e8b02-2ef3-46de-8cd7-78e8a914ed8a_hnfbpl.webp",
    name: "Breathable Linen Casual Fabric",
    price: 3380,
    category: "unstitchedCasual",
    season: "Summer",
  },
  {
    id: 54,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/hover-1st_u6wwur.webp",
    name: "Vintage Style Denim Cloth",
    price: 4175,
    category: "unstitchedCasual",
    season: "Autumn",
  },
  {
    id: 55,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/125_2e1aca63-1c7e-4ab9-8aab-82756a0a3633_xbnk4w.webp",
    name: "Casual Printed Fabric",
    price: 2890,
    category: "unstitchedCasual",
    season: "All Season",
  },
  {
    id: 56,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/1st_qsdtxw.webp",
    name: "Everyday Casual Material",
    price: 3250,
    category: "unstitchedCasual",
    season: "Winter",
  },
  {
    id: 57,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_3514c792-48d8-4721-8c06-99a4ff7e6823_cjls9x.webp",
    name: "Summer Casual Fabric",
    price: 2780,
    category: "unstitchedCasual",
    season: "Summer",
  },
  {
    id: 58,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/9_c77276d3-74c0-4db6-8ff0-9e9abe2cdb43_rdh9sa.webp",
    name: "Casual Designer Material",
    price: 3980,
    category: "unstitchedCasual",
    season: "Autumn",
  },
  {
    id: 59,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_c60b3c5a-0cee-4720-a388-f239fc8ad9a6_duciqd.webp",
    name: "Casual Wear Fabric Collection",
    price: 3450,
    category: "unstitchedCasual",
    season: "All Season",
  },
  {
    id: 60,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766577686/1st_prmvwk.webp",
    name: "Premium Casual Material",
    price: 4320,
    category: "unstitchedCasual",
    season: "Winter",
  },

  // Unstitched Partywear (10 products)
  {
    id: 61,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766586005/140_590f415c-33ee-4d97-8814-cf2cb00effa8_iiicur.webp",
    name: "Glitter Net Party Fabric",
    price: 7725,
    category: "unstitchedPartywear",
    season: "All Season",
  },
  {
    id: 62,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585985/st-11_fvtji6.webp",
    name: "Beaded Evening Wear Material",
    price: 6950,
    category: "unstitchedPartywear",
    season: "Winter",
  },
  {
    id: 63,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-9_u4cqey.webp",
    name: "Sheer Chiffon Celebration Fabric",
    price: 7380,
    category: "unstitchedPartywear",
    season: "Summer",
  },
  {
    id: 64,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-10_hrkrw9.webp",
    name: "Velvet Festive Season Material",
    price: 8175,
    category: "unstitchedPartywear",
    season: "Autumn",
  },
  {
    id: 65,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-8_nz5mmb.webp",
    name: "Designer Party Fabric",
    price: 7850,
    category: "unstitchedPartywear",
    season: "All Season",
  },
  {
    id: 66,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/117_4868dea8-e76b-470d-9010-9946f45bf290_vssmbx.webp",
    name: "Evening Gown Material",
    price: 8250,
    category: "unstitchedPartywear",
    season: "Winter",
  },
  {
    id: 67,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-2_uxqwqi.webp",
    name: "Party Wear Fabric Collection",
    price: 6980,
    category: "unstitchedPartywear",
    season: "Summer",
  },
  {
    id: 68,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-4_n8irdi.webp",
    name: "Festival Wear Material",
    price: 5780,
    category: "unstitchedPartywear",
    season: "Autumn",
  },
  {
    id: 69,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-7_wggw6q.webp",
    name: "Designer Party Material",
    price: 6420,
    category: "unstitchedPartywear",
    season: "All Season",
  },
  {
    id: 70,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-3_ndjbic.webp",
    name: "Luxury Party Fabric",
    price: 7890,
    category: "unstitchedPartywear",
    season: "Winter",
  },

  // Unstitched Winter (10 products) - WINTER
  {
    id: 71,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-6_jegwyb.webp",
    name: "Merino Wool Winter Fabric",
    price: 5725,
    category: "unstitchedWinter",
    season: "Winter",
  },
  {
    id: 72,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/163_7583fb1e-93aa-4396-b5d0-ed309cda9e7d_qmlkzo.webp",
    name: "Thermal Fleece Cold Wear Material",
    price: 4950,
    category: "unstitchedWinter",
    season: "Winter",
  },
  {
    id: 73,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/144_817e8b02-2ef3-46de-8cd7-78e8a914ed8a_hnfbpl.webp",
    name: "Insulated Quilted Winter Cloth",
    price: 5380,
    category: "unstitchedWinter",
    season: "Winter",
  },
  {
    id: 74,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/hover-1st_u6wwur.webp",
    name: "Knit Blend Winter Material",
    price: 6175,
    category: "unstitchedWinter",
    season: "Winter",
  },
  {
    id: 75,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/125_2e1aca63-1c7e-4ab9-8aab-82756a0a3633_xbnk4w.webp",
    name: "Woolen Winter Fabric",
    price: 5890,
    category: "unstitchedWinter",
    season: "Winter",
  },
  {
    id: 76,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/1st_qsdtxw.webp",
    name: "Winter Collection Material",
    price: 5250,
    category: "unstitchedWinter",
    season: "Winter",
  },
  {
    id: 77,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_3514c792-48d8-4721-8c06-99a4ff7e6823_cjls9x.webp",
    name: "Winter Velvet Material",
    price: 6780,
    category: "unstitchedWinter",
    season: "Winter",
  },
  {
    id: 78,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/9_c77276d3-74c0-4db6-8ff0-9e9abe2cdb43_rdh9sa.webp",
    name: "Designer Winter Material",
    price: 5980,
    category: "unstitchedWinter",
    season: "Winter",
  },
  {
    id: 79,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_c60b3c5a-0cee-4720-a388-f239fc8ad9a6_duciqd.webp",
    name: "Winter Essentials Fabric",
    price: 4450,
    category: "unstitchedWinter",
    season: "Winter",
  },
  {
    id: 80,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766577686/1st_prmvwk.webp",
    name: "Premium Winter Material",
    price: 7320,
    category: "unstitchedWinter",
    season: "Winter",
  },

  // Stitched Main (10 products)
  {
    id: 81,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766586005/140_590f415c-33ee-4d97-8814-cf2cb00effa8_iiicur.webp",
    name: "Signature Stitched Collection",
    price: 3650,
    category: "stitched",
    season: "All Season",
  },
  {
    id: 82,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585985/st-11_fvtji6.webp",
    name: "Traditional Stitched Kurta",
    price: 2925,
    category: "stitched",
    season: "Winter",
  },
  {
    id: 83,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-9_u4cqey.webp",
    name: "Summer Breeze Stitched Top",
    price: 3380,
    category: "stitched",
    season: "Summer",
  },
  {
    id: 84,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-10_hrkrw9.webp",
    name: "Urban Denim Stitched Shirt",
    price: 4175,
    category: "stitched",
    season: "Autumn",
  },
  {
    id: 85,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-8_nz5mmb.webp",
    name: "Designer Stitched Wear",
    price: 4875,
    category: "stitched",
    season: "All Season",
  },
  {
    id: 86,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/117_4868dea8-e76b-470d-9010-9946f45bf290_vssmbx.webp",
    name: "Premium Stitched Collection",
    price: 3890,
    category: "stitched",
    season: "Winter",
  },
  {
    id: 87,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-2_uxqwqi.webp",
    name: "Casual Stitched Top",
    price: 3450,
    category: "stitched",
    season: "Summer",
  },
  {
    id: 88,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-4_n8irdi.webp",
    name: "Formal Stitched Wear",
    price: 4780,
    category: "stitched",
    season: "Autumn",
  },
  {
    id: 89,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-7_wggw6q.webp",
    name: "Luxury Stitched Collection",
    price: 5250,
    category: "stitched",
    season: "All Season",
  },
  {
    id: 90,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-3_ndjbic.webp",
    name: "Winter Stitched Wear",
    price: 5980,
    category: "stitched",
    season: "Winter",
  },

  // Unstitched Main (10 products)
  {
    id: 91,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-6_jegwyb.webp",
    name: "Artisan Unstitched Collection",
    price: 4275,
    category: "unstitched",
    season: "Autumn",
  },
  {
    id: 92,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/163_7583fb1e-93aa-4396-b5d0-ed309cda9e7d_qmlkzo.webp",
    name: "Heritage Linen Unstitched",
    price: 3480,
    category: "unstitched",
    season: "Summer",
  },
  {
    id: 93,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/144_817e8b02-2ef3-46de-8cd7-78e8a914ed8a_hnfbpl.webp",
    name: "Classic Cotton Unstitched Set",
    price: 3150,
    category: "unstitched",
    season: "Winter",
  },
  {
    id: 94,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/hover-1st_u6wwur.webp",
    name: "Premium Designer Fabric Bundle",
    price: 3850,
    category: "unstitched",
    season: "All Season",
  },
  {
    id: 95,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/125_2e1aca63-1c7e-4ab9-8aab-82756a0a3633_xbnk4w.webp",
    name: "Designer Unstitched Fabric",
    price: 4675,
    category: "unstitched",
    season: "Autumn",
  },
  {
    id: 96,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/1st_qsdtxw.webp",
    name: "Luxury Unstitched Collection",
    price: 5250,
    category: "unstitched",
    season: "Winter",
  },
  {
    id: 97,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_3514c792-48d8-4721-8c06-99a4ff7e6823_cjls9x.webp",
    name: "Summer Unstitched Fabric",
    price: 3780,
    category: "unstitched",
    season: "Summer",
  },
  {
    id: 98,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/9_c77276d3-74c0-4db6-8ff0-9e9abe2cdb43_rdh9sa.webp",
    name: "Formal Unstitched Material",
    price: 4980,
    category: "unstitched",
    season: "Autumn",
  },
  {
    id: 99,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_c60b3c5a-0cee-4720-a388-f239fc8ad9a6_duciqd.webp",
    name: "Casual Unstitched Bundle",
    price: 3450,
    category: "unstitched",
    season: "All Season",
  },
  {
    id: 100,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766577686/1st_prmvwk.webp",
    name: "Premium Unstitched Wear",
    price: 4320,
    category: "unstitched",
    season: "Winter",
  },

  // Ready to Wear Velvet (10 products)
  {
    id: 101,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766577686/1st_prmvwk.webp",
    name: "Premium Designer Fabric Bundle",
    price: 3850,
    category: "readytowearformal",
    season: "3 PIECE",
  },
  {
    id: 102,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585985/st-11_fvtji6.webp",
    name: "Luxury Velvet Collection",
    price: 4850,
    category: "readytowearformal",
    season: "3 PIECE",
  },
  {
    id: 103,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-9_u4cqey.webp",
    name: "Designer Velvet Wear",
    price: 4380,
    category: "readytowearformal",
    season: "3 PIECE",
  },
  {
    id: 104,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-10_hrkrw9.webp",
    name: "Premium Velvet Bundle",
    price: 5175,
    category: "readytowearformal",
    season: "3 PIECE",
  },
  {
    id: 105,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-8_nz5mmb.webp",
    name: "Velvet Party Wear",
    price: 5875,
    category: "readytowearformal",
    season: "3 PIECE",
  },
  {
    id: 106,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/117_4868dea8-e76b-470d-9010-9946f45bf290_vssmbx.webp",
    name: "Winter Velvet Collection",
    price: 4890,
    category: "readytowearformal",
    season: "3 PIECE",
  },
  {
    id: 107,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-2_uxqwqi.webp",
    name: "Formal Velvet Wear",
    price: 4450,
    category: "readytowearformal",
    season: "3 PIECE",
  },
  {
    id: 108,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-4_n8irdi.webp",
    name: "Velvet Designer Set",
    price: 5780,
    category: "readytowearformal",
    season: "3 PIECE",
  },
  {
    id: 109,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-7_wggw6q.webp",
    name: "Luxury Velvet Bundle",
    price: 6250,
    category: "readytowearformal",
    season: "3 PIECE",
  },
  {
    id: 110,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-3_ndjbic.webp",
    name: "Premium Velvet Collection",
    price: 6980,
    category: "readytowearformal",
    season: "3 PIECE",
  },

  // Ready to Wear Formals (10 products)
  {
    id: 111,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-6_jegwyb.webp",
    name: "Heritage Linen Formal",
    price: 3480,
    category: "readytowearcasual",
    season: "3 PIECE",
  },
  {
    id: 112,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/163_7583fb1e-93aa-4396-b5d0-ed309cda9e7d_qmlkzo.webp",
    name: "Business Formal Wear",
    price: 4950,
    category: "readytowearcasual",
    season: "3 PIECE",
  },
  {
    id: 113,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/144_817e8b02-2ef3-46de-8cd7-78e8a914ed8a_hnfbpl.webp",
    name: "Corporate Formal Collection",
    price: 5380,
    category: "readytowearcasual",
    season: "3 PIECE",
  },
  {
    id: 114,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/hover-1st_u6wwur.webp",
    name: "Executive Formal Wear",
    price: 6175,
    category: "readytowearcasual",
    season: "3 PIECE",
  },
  {
    id: 115,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/125_2e1aca63-1c7e-4ab9-8aab-82756a0a3633_xbnk4w.webp",
    name: "Designer Formal Set",
    price: 4890,
    category: "readytowearcasual",
    season: "3 PIECE",
  },
  {
    id: 116,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/1st_qsdtxw.webp",
    name: "Premium Formal Collection",
    price: 5250,
    category: "readytowearcasual",
    season: "3 PIECE",
  },
  {
    id: 117,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_3514c792-48d8-4721-8c06-99a4ff7e6823_cjls9x.webp",
    name: "Luxury Formal Wear",
    price: 6780,
    category: "readytowearcasual",
    season: "3 PIECE",
  },
  {
    id: 118,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/9_c77276d3-74c0-4db6-8ff0-9e9abe2cdb43_rdh9sa.webp",
    name: "Formal Office Wear",
    price: 5980,
    category: "readytowearcasual",
    season: "3 PIECE",
  },
  {
    id: 119,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_c60b3c5a-0cee-4720-a388-f239fc8ad9a6_duciqd.webp",
    name: "Business Attire Collection",
    price: 4450,
    category: "readytowearcasual",
    season: "3 PIECE",
  },
  {
    id: 120,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766577686/1st_prmvwk.webp",
    name: "Executive Collection",
    price: 7320,
    category: "readytowearcasual",
    season: "3 PIECE",
  },

  // Ready to Wear Winter (10 products) - WINTER
  {
    id: 121,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766586005/140_590f415c-33ee-4d97-8814-cf2cb00effa8_iiicur.webp",
    name: "Heritage Linen Winter",
    price: 3480,
    category: "readytowearwinter",
    season: "3 PIECE",
  },
  {
    id: 122,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585985/st-11_fvtji6.webp",
    name: "Urban Denim Winter Shirt",
    price: 4175,
    category: "readytowearwinter",
    season: "3 PIECE",
  },
  {
    id: 123,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-9_u4cqey.webp",
    name: "Winter Woolen Collection",
    price: 5380,
    category: "readytowearwinter",
    season: "3 PIECE",
  },
  {
    id: 124,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-10_hrkrw9.webp",
    name: "Premium Winter Wear",
    price: 6175,
    category: "readytowearwinter",
    season: "3 PIECE",
  },
  {
    id: 125,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-8_nz5mmb.webp",
    name: "Winter Designer Set",
    price: 5875,
    category: "readytowearwinter",
    season: "3 PIECE",
  },
  {
    id: 126,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/117_4868dea8-e76b-470d-9010-9946f45bf290_vssmbx.webp",
    name: "Luxury Winter Collection",
    price: 6890,
    category: "readytowearwinter",
    season: "3 PIECE",
  },
  {
    id: 127,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-2_uxqwqi.webp",
    name: "Winter Casual Wear",
    price: 4450,
    category: "readytowearwinter",
    season: "3 PIECE",
  },
  {
    id: 128,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-4_n8irdi.webp",
    name: "Winter Formal Collection",
    price: 5780,
    category: "readytowearwinter",
    season: "3 PIECE",
  },
  {
    id: 129,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-7_wggw6q.webp",
    name: "Premium Winter Bundle",
    price: 6250,
    category: "readytowearwinter",
    season: "3 PIECE",
  },
  {
    id: 130,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-3_ndjbic.webp",
    name: "Designer Winter Collection",
    price: 6980,
    category: "readytowearwinter",
    season: "3 PIECE",
  },

  // Chantelle Stitched (10 products)
  {
    id: 131,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-6_jegwyb.webp",
    name: "Urban Denim Stitched Shirt",
    price: 4175,
    category: "chantellestitched",
    season: "3 PIECE",
  },
  {
    id: 132,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/163_7583fb1e-93aa-4396-b5d0-ed309cda9e7d_qmlkzo.webp",
    name: "Chantelle Stitched Collection",
    price: 4950,
    category: "chantellestitched",
    season: "3 PIECE",
  },
  {
    id: 133,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/144_817e8b02-2ef3-46de-8cd7-78e8a914ed8a_hnfbpl.webp",
    name: "Designer Stitched Wear",
    price: 5380,
    category: "chantellestitched",
    season: "3 PIECE",
  },
  {
    id: 134,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/hover-1st_u6wwur.webp",
    name: "Premium Stitched Bundle",
    price: 6175,
    category: "chantellestitched",
    season: "3 PIECE",
  },
  {
    id: 135,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/125_2e1aca63-1c7e-4ab9-8aab-82756a0a3633_xbnk4w.webp",
    name: "Luxury Stitched Collection",
    price: 6890,
    category: "chantellestitched",
    season: "3 PIECE",
  },
  {
    id: 136,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/1st_qsdtxw.webp",
    name: "Chantelle Formal Wear",
    price: 5250,
    category: "chantellestitched",
    season: "3 PIECE",
  },
  {
    id: 137,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_3514c792-48d8-4721-8c06-99a4ff7e6823_cjls9x.webp",
    name: "Designer Collection",
    price: 6780,
    category: "chantellestitched",
    season: "3 PIECE",
  },
  {
    id: 138,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/9_c77276d3-74c0-4db6-8ff0-9e9abe2cdb43_rdh9sa.webp",
    name: "Premium Wear",
    price: 5980,
    category: "chantellestitched",
    season: "3 PIECE",
  },
  {
    id: 139,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_c60b3c5a-0cee-4720-a388-f239fc8ad9a6_duciqd.webp",
    name: "Casual Collection",
    price: 4450,
    category: "chantellestitched",
    season: "3 PIECE",
  },
  {
    id: 140,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766577686/1st_prmvwk.webp",
    name: "Luxury Bundle",
    price: 7320,
    category: "chantellestitched",
    season: "3 PIECE",
  },

  // Chantelle Unstitched (10 products)
  {
    id: 141,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766586005/140_590f415c-33ee-4d97-8814-cf2cb00effa8_iiicur.webp",
    name: "Urban Denim Unstitched",
    price: 4175,
    category: "chantelleunstitched",
    season: "3 PIECE",
  },
  {
    id: 142,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585985/st-11_fvtji6.webp",
    name: "Chantelle Unstitched Collection",
    price: 4950,
    category: "chantelleunstitched",
    season: "3 PIECE",
  },
  {
    id: 143,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-9_u4cqey.webp",
    name: "Designer Unstitched Wear",
    price: 5380,
    category: "chantelleunstitched",
    season: "3 PIECE",
  },
  {
    id: 144,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-10_hrkrw9.webp",
    name: "Premium Unstitched Bundle",
    price: 6175,
    category: "chantelleunstitched",
    season: "3 PIECE",
  },
  {
    id: 145,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-8_nz5mmb.webp",
    name: "Luxury Unstitched Collection",
    price: 6890,
    category: "chantelleunstitched",
    season: "3 PIECE",
  },
  {
    id: 146,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/117_4868dea8-e76b-470d-9010-9946f45bf290_vssmbx.webp",
    name: "Chantelle Formal Material",
    price: 5250,
    category: "chantelleunstitched",
    season: "3 PIECE",
  },
  {
    id: 147,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-2_uxqwqi.webp",
    name: "Designer Material Collection",
    price: 6780,
    category: "chantelleunstitched",
    season: "3 PIECE",
  },
  {
    id: 148,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-4_n8irdi.webp",
    name: "Premium Material",
    price: 5980,
    category: "chantelleunstitched",
    season: "3 PIECE",
  },
  {
    id: 149,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-7_wggw6q.webp",
    name: "Casual Material Collection",
    price: 4450,
    category: "chantelleunstitched",
    season: "3 PIECE",
  },
  {
    id: 150,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-3_ndjbic.webp",
    name: "Luxury Material Bundle",
    price: 7320,
    category: "chantelleunstitched",
    season: "3 PIECE",
  },

  // Essentials Ensembles (10 products)
  {
    id: 151,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-6_jegwyb.webp",
    name: "Premium Designer Ensemble",
    price: 3850,
    category: "essentialsensembles",
    season: "3 PIECE",
  },
  {
    id: 152,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/163_7583fb1e-93aa-4396-b5d0-ed309cda9e7d_qmlkzo.webp",
    name: "Luxury Ensemble Collection",
    price: 4850,
    category: "essentialsensembles",
    season: "3 PIECE",
  },
  {
    id: 153,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/144_817e8b02-2ef3-46de-8cd7-78e8a914ed8a_hnfbpl.webp",
    name: "Designer Ensemble Wear",
    price: 4380,
    category: "essentialsensembles",
    season: "3 PIECE",
  },
  {
    id: 154,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/hover-1st_u6wwur.webp",
    name: "Premium Ensemble Bundle",
    price: 5175,
    category: "essentialsensembles",
    season: "3 PIECE",
  },
  {
    id: 155,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/125_2e1aca63-1c7e-4ab9-8aab-82756a0a3633_xbnk4w.webp",
    name: "Luxury Ensemble Collection",
    price: 6890,
    category: "essentialsensembles",
    season: "3 PIECE",
  },
  {
    id: 156,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/1st_qsdtxw.webp",
    name: "Formal Ensemble",
    price: 5250,
    category: "essentialsensembles",
    season: "3 PIECE",
  },
  {
    id: 157,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_3514c792-48d8-4721-8c06-99a4ff7e6823_cjls9x.webp",
    name: "Designer Ensemble Collection",
    price: 6780,
    category: "essentialsensembles",
    season: "3 PIECE",
  },
  {
    id: 158,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/9_c77276d3-74c0-4db6-8ff0-9e9abe2cdb43_rdh9sa.webp",
    name: "Premium Ensemble",
    price: 5980,
    category: "essentialsensembles",
    season: "3 PIECE",
  },
  {
    id: 159,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_c60b3c5a-0cee-4720-a388-f239fc8ad9a6_duciqd.webp",
    name: "Casual Ensemble Collection",
    price: 4450,
    category: "essentialsensembles",
    season: "3 PIECE",
  },
  {
    id: 160,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766577686/1st_prmvwk.webp",
    name: "Luxury Ensemble Bundle",
    price: 7320,
    category: "essentialsensembles",
    season: "3 PIECE",
  },

  // Essentials Shawls (10 products)
  {
    id: 161,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766586005/140_590f415c-33ee-4d97-8814-cf2cb00effa8_iiicur.webp",
    name: "Premium Designer Shawl",
    price: 3850,
    category: "essentialsshawls",
    season: "3 PIECE",
  },
  {
    id: 162,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585985/st-11_fvtji6.webp",
    name: "Luxury Shawl Collection",
    price: 4850,
    category: "essentialsshawls",
    season: "3 PIECE",
  },
  {
    id: 163,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-9_u4cqey.webp",
    name: "Designer Shawl Wear",
    price: 4380,
    category: "essentialsshawls",
    season: "3 PIECE",
  },
  {
    id: 164,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-10_hrkrw9.webp",
    name: "Premium Shawl Bundle",
    price: 5175,
    category: "essentialsshawls",
    season: "3 PIECE",
  },
  {
    id: 165,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-8_nz5mmb.webp",
    name: "Luxury Shawl Collection",
    price: 6890,
    category: "essentialsshawls",
    season: "3 PIECE",
  },
  {
    id: 166,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/117_4868dea8-e76b-470d-9010-9946f45bf290_vssmbx.webp",
    name: "Formal Shawl",
    price: 5250,
    category: "essentialsshawls",
    season: "3 PIECE",
  },
  {
    id: 167,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-2_uxqwqi.webp",
    name: "Designer Shawl Collection",
    price: 6780,
    category: "essentialsshawls",
    season: "3 PIECE",
  },
  {
    id: 168,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/st-4_n8irdi.webp",
    name: "Premium Shawl",
    price: 5980,
    category: "essentialsshawls",
    season: "3 PIECE",
  },
  {
    id: 169,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-7_wggw6q.webp",
    name: "Casual Shawl Collection",
    price: 4450,
    category: "essentialsshawls",
    season: "3 PIECE",
  },
  {
    id: 170,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-3_ndjbic.webp",
    name: "Luxury Shawl Bundle",
    price: 7320,
    category: "essentialsshawls",
    season: "3 PIECE",
  },

  // Essentials Dupattas (10 products)
  {
    id: 171,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585951/st-6_jegwyb.webp",
    name: "Premium Designer Dupatta",
    price: 3850,
    category: "essentialsdupattas",
    season: "3 PIECE",
  },
  {
    id: 172,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/163_7583fb1e-93aa-4396-b5d0-ed309cda9e7d_qmlkzo.webp",
    name: "Luxury Dupatta Collection",
    price: 4850,
    category: "essentialsdupattas",
    season: "3 PIECE",
  },
  {
    id: 173,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/144_817e8b02-2ef3-46de-8cd7-78e8a914ed8a_hnfbpl.webp",
    name: "Designer Dupatta Wear",
    price: 4380,
    category: "essentialsdupattas",
    season: "3 PIECE",
  },
  {
    id: 174,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/hover-1st_u6wwur.webp",
    name: "Premium Dupatta Bundle",
    price: 5175,
    category: "essentialsdupattas",
    season: "3 PIECE",
  },
  {
    id: 175,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/125_2e1aca63-1c7e-4ab9-8aab-82756a0a3633_xbnk4w.webp",
    name: "Luxury Dupatta Collection",
    price: 6890,
    category: "essentialsdupattas",
    season: "3 PIECE",
  },
  {
    id: 176,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/1st_qsdtxw.webp",
    name: "Formal Dupatta",
    price: 5250,
    category: "essentialsdupattas",
    season: "3 PIECE",
  },
  {
    id: 177,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_3514c792-48d8-4721-8c06-99a4ff7e6823_cjls9x.webp",
    name: "Designer Dupatta Collection",
    price: 6780,
    category: "essentialsdupattas",
    season: "3 PIECE",
  },
  {
    id: 178,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/9_c77276d3-74c0-4db6-8ff0-9e9abe2cdb43_rdh9sa.webp",
    name: "Premium Dupatta",
    price: 5980,
    category: "essentialsdupattas",
    season: "3 PIECE",
  },
  {
    id: 179,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_c60b3c5a-0cee-4720-a388-f239fc8ad9a6_duciqd.webp",
    name: "Casual Dupatta Collection",
    price: 4450,
    category: "essentialsdupattas",
    season: "3 PIECE",
  },
  {
    id: 180,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766577686/1st_prmvwk.webp",
    name: "Luxury Dupatta Bundle",
    price: 7320,
    category: "essentialsdupattas",
    season: "3 PIECE",
  },

  {
    id: 181,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585950/hover-1st_u6wwur.webp",
    name: "Premium Designer Fabric Bundle",
    price: 3850,
    category: "readytowearpartywear",
    season: "All Season",
  },
  {
    id: 182,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585949/125_2e1aca63-1c7e-4ab9-8aab-82756a0a3633_xbnk4w.webp",
    name: "Designer Unstitched Fabric",
    price: 4675,
    category: "readytowearpartywear",
    season: "Autumn",
  },
  {
    id: 183,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/1st_qsdtxw.webp",
    name: "Luxury Unstitched Collection",
    price: 5250,
    category: "readytowearpartywear",
    season: "Winter",
  },
  {
    id: 184,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_3514c792-48d8-4721-8c06-99a4ff7e6823_cjls9x.webp",
    name: "Summer Unstitched Fabric",
    price: 3780,
    category: "readytowearpartywear",
    season: "Summer",
  },
  {
    id: 185,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/9_c77276d3-74c0-4db6-8ff0-9e9abe2cdb43_rdh9sa.webp",
    name: "Formal Unstitched Material",
    price: 4980,
    category: "readytowearpartywear",
    season: "Autumn",
  },
  {
    id: 186,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585948/176_c60b3c5a-0cee-4720-a388-f239fc8ad9a6_duciqd.webp",
    name: "Casual Unstitched Bundle",
    price: 3450,
    category: "readytowearpartywear",
    season: "All Season",
  },
  {
    id: 187,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766577686/1st_prmvwk.webp",
    name: "Premium Unstitched Wear",
    price: 4320,
    category: "readytowearpartywear",
    season: "Winter",
  },

  // Ready to Wear Partywear (7 products)
  {
    id: 188,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766577686/1st_prmvwk.webp",
    name: "Premium Designer Fabric Bundle",
    price: 3850,
    category: "readytowearpartywear",
    season: "3 PIECE",
  },
  {
    id: 189,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585985/st-11_fvtji6.webp",
    name: "Luxury Velvet Collection",
    price: 4850,
    category: "readytowearpartywear",
    season: "3 PIECE",
  },
  {
    id: 190,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-9_u4cqey.webp",
    name: "Designer Velvet Wear",
    price: 4380,
    category: "readytowearpartywear",
    season: "3 PIECE",
  },
  {
    id: 191,
    imgUrl:
      "https://res.cloudinary.com/dlqzjthos/image/upload/v1766585984/st-10_hrkrw9.webp",
    name: "Premium Velvet Bundle",
    price: 5175,
    category: "readytowearpartywear",
    season: "3 PIECE",
  },
];

// Add `images` array with 3 image URLs per product (fallback to `imgUrl` when not available)
export const products = _raw_products.map((p) => ({
  ...p,
  images:
    Array.isArray(p.images) && p.images.length
      ? p.images
      : [
          p.imgUrl,
          `https://picsum.photos/seed/${p.id}-1/800/1000`,
          `https://picsum.photos/seed/${p.id}-2/800/1000`,
        ],
}));
