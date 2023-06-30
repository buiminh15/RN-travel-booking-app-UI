const NEARBY_DATA = [
  {
    id: 'a7cdb91b-84bb-4d71-b102-bd5c00266ef9',
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
    title: 'Gulf Hawthorn',
    address: '892 Corben Alley',
    price: 103,
    rating: 1,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
  },
  {
    id: '39b19357-37d5-4b29-99fd-18b3c9f89ef4',
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
    title: "Renner's Map Lichen",
    address: '283 Marquette Street',
    price: 162,
    rating: 2,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
  },
  {
    id: 'a78059bf-0133-4c97-81d9-930b7ecfae0b',
    image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
    title: "Johnson's Seagrass",
    address: '25 Corscot Road',
    price: 149,
    rating: 3,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
  },
  {
    id: 'da735e77-bd1e-4b07-869c-bbc1fc85f2a0',
    image: 'http://dummyimage.com/300x300.png/dddddd/000000',
    title: 'Tussock Panicgrass',
    address: '6872 Bunker Hill Terrace',
    price: 221,
    rating: 5,
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
  },
  {
    id: '37066735-a854-44b7-b74b-6fbf0a1c6d40',
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
    title: 'Wild Bergamot',
    address: '98377 Ridgeview Avenue',
    price: 91,
    rating: 3,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
  },
  {
    id: '5de37691-a15a-4f4d-a9bd-4b8fefa6bfff',
    image: 'http://dummyimage.com/300x300.png/dddddd/000000',
    title: 'Purple Meadowparsnip',
    address: '3 Erie Court',
    price: 255,
    rating: 3,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
  },
];

const POPULAR_DATA = [
  {
    id: '3b810edc-adb7-4101-8e1e-446e3e1f148e',
    image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
    title: 'Lassicus Stitchwort',
    address: '1 Cordelia Park',
    price: 96,
    rating: 5,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
  },
  {
    id: '825bca77-ca84-4fd5-8e9a-e7cc2b466dc7',
    image: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
    title: "Hawai'i Olive",
    address: '06815 Ridgeview Crossing',
    price: 123,
    rating: 4,
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
  },
  {
    id: 'cf6ffe30-6961-4248-acd1-2d9b81ae404b',
    image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
    title: 'Trichostomum Moss',
    address: '1 Sheridan Trail',
    price: 77,
    rating: 3,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
  },
  {
    id: '2c15a3da-4fd9-4f17-8d40-8c44a58c38ae',
    image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
    title: 'Bogmat',
    address: '3583 Fallview Junction',
    price: 284,
    rating: 3,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
  },
  {
    id: '80c90522-df67-4e9d-b595-229d62d84738',
    image: 'http://dummyimage.com/300x300.png/dddddd/000000',
    title: 'Verde Formation Breadroot',
    address: '41 Talmadge Place',
    price: 203,
    rating: 4,
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
  },
  {
    id: '465848e5-53c8-45a1-b95e-636347c54b68',
    image: 'http://dummyimage.com/300x300.png/dddddd/000000',
    title: 'Mokihana Kukae Moa',
    address: '40 Fairview Pass',
    price: 241,
    rating: 3,
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
  },
];

const BOOKING_DATA = [
  {
    id: 'f48ce748-5a75-4eda-be77-9c8f4469bddf',
    image: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
    title: 'Yam',
    address: '93 Lawn Road',
    price: 191,
    rating: 5,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    scheduledDate: '02/05/2023',
  },
  {
    id: '875da90f-1c91-4dec-83a2-7d7dd8fb733c',
    image: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
    title: "Cleland's Evening Primrose",
    address: '5 Muir Point',
    price: 250,
    rating: 4,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    scheduledDate: '08/01/2022',
  },
  {
    id: '74b1d75b-c7fc-468b-ac9a-de9c2db12ef1',
    image: 'http://dummyimage.com/300x300.png/dddddd/000000',
    title: 'Fringed Pink',
    address: '35514 Sloan Park',
    price: 215,
    rating: 4,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    scheduledDate: '12/10/2022',
  },
  {
    id: '06fcd35d-585a-42bb-ab4b-40b0979e0c9e',
    image: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
    title: 'Cup Lichen',
    address: '2572 Lakewood Gardens Park',
    price: 223,
    rating: 2,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    scheduledDate: '04/20/2023',
  },
  {
    id: '51035711-2a24-4a44-94bb-659870ef0a3b',
    image: 'http://dummyimage.com/300x300.png/dddddd/000000',
    title: 'Toano Milkvetch',
    address: '77 Aberg Center',
    price: 63,
    rating: 3,
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    scheduledDate: '09/05/2022',
  },
  {
    id: '23a0c801-512e-4b35-a06c-048c5d27c3d5',
    image: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
    title: 'Australasia Trichostomopsis Moss',
    address: '96 Homewood Park',
    price: 252,
    rating: 2,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    scheduledDate: '06/01/2023',
  },
];
export {NEARBY_DATA, POPULAR_DATA, BOOKING_DATA};
