const bikes = [
  {
    id: "SS001",
    brand: "Yamaha",
    model: "YZF-R1",
    year: 2023,
    price: 17999.99,
    specifications: {
      engine: {
        type: "998cc liquid-cooled inline 4-cylinder",
        horsepower: 200,
        torque: "112 Nm",
      },
      weight: {
        dry: "448 lbs",
        wet: "456 lbs",
      },
      suspension: {
        front: "43mm KYB inverted fork",
        rear: "KYB single shock",
      },
    },
  },
  {
    id: "SS002",
    brand: "Honda",
    model: "CBR1000RR",
    year: 2022,
    price: 16999.99,
    specifications: {
      engine: {
        type: "999cc liquid-cooled inline 4-cylinder",
        horsepower: 189,
        torque: "114 Nm",
      },
      weight: {
        dry: "430 lbs",
        wet: "440 lbs",
      },
      suspension: {
        front: "Showa 43mm telescopic fork",
        rear: "Showa Pro-Link single shock",
      },
    },
  },
  {
    id: "SS003",
    brand: "Ducati",
    model: "Panigale V4",
    year: 2024,
    price: 23995.0,
    specifications: {
      engine: {
        type: "1103cc liquid-cooled V4",
        horsepower: 214,
        torque: "124 Nm",
      },
      weight: {
        dry: "386 lbs",
        wet: "436 lbs",
      },
      suspension: {
        front: "Ohlins 43mm NIX30 fork",
        rear: "Ohlins TTX36 monoshock",
      },
    },
  },
  {
    id: "SS004",
    brand: "Kawasaki",
    model: "Ninja ZX-10R",
    year: 2023,
    price: 16499.99,
    specifications: {
      engine: {
        type: "998cc liquid-cooled inline 4-cylinder",
        horsepower: 203,
        torque: "115 Nm",
      },
      weight: {
        dry: "452 lbs",
        wet: "460 lbs",
      },
      suspension: {
        front: "Showa 43mm Balance Free fork",
        rear: "Showa BFRC lite shock",
      },
    },
  },
  {
    id: "SS005",
    brand: "BMW",
    model: "S1000RR",
    year: 2023,
    price: 18995.0,
    specifications: {
      engine: {
        type: "999cc liquid-cooled inline 4-cylinder",
        horsepower: 205,
        torque: "113 Nm",
      },
      weight: {
        dry: "434 lbs",
        wet: "447 lbs",
      },
      suspension: {
        front: "Marzocchi 45mm upside-down fork",
        rear: "Marzocchi monoshock",
      },
    },
  },
  {
    id: "SS006",
    brand: "Suzuki",
    model: "GSX-R1000",
    year: 2022,
    price: 15999.99,
    specifications: {
      engine: {
        type: "999cc liquid-cooled inline 4-cylinder",
        horsepower: 199,
        torque: "117 Nm",
      },
      weight: {
        dry: "445 lbs",
        wet: "452 lbs",
      },
      suspension: {
        front: "Showa 43mm inverted fork",
        rear: "Showa link-type shock",
      },
    },
  },
  {
    id: "SS007",
    brand: "Triumph",
    model: "Street Triple RS",
    year: 2024,
    price: 12995.0,
    specifications: {
      engine: {
        type: "765cc liquid-cooled inline 3-cylinder",
        horsepower: 123,
        torque: "79 Nm",
      },
      weight: {
        dry: "366 lbs",
        wet: "414 lbs",
      },
      suspension: {
        front: "Showa 41mm upside-down fork",
        rear: "Ohlins STX40 monoshock",
      },
    },
  },
  {
    id: "SS008",
    brand: "KTM",
    model: "1290 Super Duke R",
    year: 2023,
    price: 18999.99,
    specifications: {
      engine: {
        type: "1301cc liquid-cooled V-twin",
        horsepower: 180,
        torque: "140 Nm",
      },
      weight: {
        dry: "417 lbs",
        wet: "430 lbs",
      },
      suspension: {
        front: "WP 48mm upside-down fork",
        rear: "WP monoshock",
      },
    },
  },
  {
    id: "SS009",
    brand: "Harley-Davidson",
    model: "Sportster S",
    year: 2022,
    price: 14999.99,
    specifications: {
      engine: {
        type: "1252cc liquid-cooled V-twin",
        horsepower: 121,
        torque: "125 Nm",
      },
      weight: {
        dry: "487 lbs",
        wet: "502 lbs",
      },
      suspension: {
        front: "Showa 43mm inverted fork",
        rear: "Showa monoshock",
      },
    },
  },
  {
    id: "SS010",
    brand: "Aprilia",
    model: "RSV4 Factory",
    year: 2024,
    price: 21999.99,
    specifications: {
      engine: {
        type: "1099cc liquid-cooled V4",
        horsepower: 217,
        torque: "125 Nm",
      },
      weight: {
        dry: "390 lbs",
        wet: "445 lbs",
      },
      suspension: {
        front: "Sachs 43mm smart EC fork",
        rear: "Sachs monoshock",
      },
    },
  },
  {
    id: "SS011",
    brand: "Yamaha",
    model: "MT-09",
    year: 2023,
    price: 9499.99,
    specifications: {
      engine: {
        type: "890cc liquid-cooled inline 3-cylinder",
        horsepower: 119,
        torque: "93 Nm",
      },
      weight: {
        dry: "417 lbs",
        wet: "425 lbs",
      },
      suspension: {
        front: "KYB 41mm upside-down fork",
        rear: "KYB monoshock",
      },
    },
  },
  {
    id: "SS012",
    brand: "Honda",
    model: "Africa Twin",
    year: 2022,
    price: 14499.99,
    specifications: {
      engine: {
        type: "1084cc liquid-cooled parallel-twin",
        horsepower: 101,
        torque: "105 Nm",
      },
      weight: {
        dry: "498 lbs",
        wet: "520 lbs",
      },
      suspension: {
        front: "Showa 45mm telescopic fork",
        rear: "Showa monoshock",
      },
    },
  },
  {
    id: "SS013",
    brand: "Ducati",
    model: "Monster",
    year: 2023,
    price: 12995.0,
    specifications: {
      engine: {
        type: "937cc liquid-cooled L-twin",
        horsepower: 111,
        torque: "93 Nm",
      },
      weight: {
        dry: "366 lbs",
        wet: "414 lbs",
      },
      suspension: {
        front: "KYB 43mm upside-down fork",
        rear: "KYB monoshock",
      },
    },
  },
  {
    id: "SS014",
    brand: "Kawasaki",
    model: "Z900",
    year: 2024,
    price: 9499.99,
    specifications: {
      engine: {
        type: "948cc liquid-cooled inline 4-cylinder",
        horsepower: 125,
        torque: "99 Nm",
      },
      weight: {
        dry: "465 lbs",
        wet: "471 lbs",
      },
      suspension: {
        front: "41mm inverted fork",
        rear: "Horizontal back-link shock",
      },
    },
  },
  {
    id: "SS015",
    brand: "BMW",
    model: "R 1250 GS",
    year: 2023,
    price: 17995.0,
    specifications: {
      engine: {
        type: "1254cc air/liquid-cooled boxer twin",
        horsepower: 136,
        torque: "143 Nm",
      },
      weight: {
        dry: "548 lbs",
        wet: "591 lbs",
      },
      suspension: {
        front: "BMW Telelever",
        rear: "BMW Paralever",
      },
    },
  },
  {
    id: "SS016",
    brand: "Suzuki",
    model: "V-Strom 1050",
    year: 2022,
    price: 13499.99,
    specifications: {
      engine: {
        type: "1037cc liquid-cooled V-twin",
        horsepower: 106,
        torque: "100 Nm",
      },
      weight: {
        dry: "487 lbs",
        wet: "534 lbs",
      },
      suspension: {
        front: "KYB 43mm inverted fork",
        rear: "KYB monoshock",
      },
    },
  },
  {
    id: "SS017",
    brand: "Triumph",
    model: "Tiger 900 Rally",
    year: 2024,
    price: 14995.0,
    specifications: {
      engine: {
        type: "888cc liquid-cooled inline 3-cylinder",
        horsepower: 94,
        torque: "87 Nm",
      },
      weight: {
        dry: "443 lbs",
        wet: "465 lbs",
      },
      suspension: {
        front: "Showa 45mm upside-down fork",
        rear: "Showa monoshock",
      },
    },
  },
  {
    id: "SS018",
    brand: "KTM",
    model: "790 Adventure",
    year: 2023,
    price: 12999.99,
    specifications: {
      engine: {
        type: "799cc liquid-cooled parallel-twin",
        horsepower: 95,
        torque: "88 Nm",
      },
      weight: {
        dry: "417 lbs",
        wet: "450 lbs",
      },
      suspension: {
        front: "WP 43mm upside-down fork",
        rear: "WP monoshock",
      },
    },
  },
  {
    id: "SS019",
    brand: "Harley-Davidson",
    model: "Pan America 1250",
    year: 2022,
    price: 17999.99,
    specifications: {
      engine: {
        type: "1252cc liquid-cooled V-twin",
        horsepower: 150,
        torque: "128 Nm",
      },
      weight: {
        dry: "534 lbs",
        wet: "559 lbs",
      },
      suspension: {
        front: "Showa 47mm inverted fork",
        rear: "Showa monoshock",
      },
    },
  },
  {
    id: "SS020",
    brand: "Aprilia",
    model: "Tuono V4",
    year: 2024,
    price: 15999.99,
    specifications: {
      engine: {
        type: "1077cc liquid-cooled V4",
        horsepower: 175,
        torque: "121 Nm",
      },
      weight: {
        dry: "408 lbs",
        wet: "460 lbs",
      },
      suspension: {
        front: "Sachs 43mm upside-down fork",
        rear: "Sachs monoshock",
      },
    },
  },
];

module.exports = bikes;
