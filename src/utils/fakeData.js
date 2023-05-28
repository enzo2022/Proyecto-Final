const dataFavorites = [
  {
    id_User: '325c1472-31fc-475f-8894-b12daf86b8ee',
    id_Property: '8577872e-49ae-41bc-9042-6b9d35e7add1',
    id_Favorite: 'fdf7d2e7-3952-4c85-96e3-b69d90b567d0',
  },
  {
    id_User: '325c1472-31fc-475f-8894-b12daf86b8ee',
    id_Property: '2d1a39dd-2d9e-493e-a749-e7bcf26fb9f3',
    id_Favorite: 'b0699600-50a9-4b7b-8fe5-e9c1cc4ace1b',
  },
  {
    id_User: '325c1472-31fc-475f-8894-b12daf86b8ee',
    id_Property: '330801ed-6d2b-47b8-b15b-539f374a57cb',
    id_Favorite: '036ad173-2903-4b49-b842-caea13c06e91',
  },
  {
    id_User: '08f76aa7-5b8f-4b7a-94d4-672a6dcabc95',
    id_Property: 'aed4fe8e-e6a1-4358-b9eb-2fd88bd3e873',
    id_Favorite: '7141bfbb-ecc4-45ac-b90f-158f969fa006',
  },
  {
    id_User: '08f76aa7-5b8f-4b7a-94d4-672a6dcabc95',
    id_Property: 'd93f60b8-a92e-4c33-818b-33aa1f82f81c',
    id_Favorite: '2a8eed5a-704d-4b83-a690-8b7e992611c8',
  },
]

const dataUsers = [
  {
    id_User: 'eef25319-3db7-427f-ac60-79b4e74b83b1',
    userName: 'Rodrigo',
    photo:
      'https://res.cloudinary.com/dtzesfyt1/image/upload/v1668008325/robot-image_xrpox8.png',
    password: '$2b$10$PkXCPmCniHbIrbuhBHTCN.ahiU4X2s84Hvmc07HV6MeNSQaszyWja',
    user_auth_0: false,
    email: 'chanticou@hotmail.com',
    user_type: 'userPremiun',
    cellphone: 777777777,
  },
  {
    id_User: '119e8569-22e7-47c2-9ae5-1eb87a5b317a',
    userName: 'Agustin',
    photo:
      'https://res.cloudinary.com/dtzesfyt1/image/upload/v1668008325/robot-image_xrpox8.png',
    password: '$2b$10$cxnvp87fro5E7R.1fP.Lkugk.T7jNHGhW9/lNZlJecjsYp3WUabJ6',
    user_auth_0: false,
    email: 'musicologo@gmail.com',
    cellphone: 6666666666,
    user_type: 'userPremiun',
  },
  {
    id_User: '073fb7d0-ccc6-49bb-ad20-cb47f2e3ae29',
    userName: 'hermes',
    photo:
      'https://res.cloudinary.com/dtzesfyt1/image/upload/v1668008325/robot-image_xrpox8.png',
    password: '$2b$10$PkXCPmCniHbIrbuhBHTCN.ahiU4X2s84Hvmc07HV6MeNSQaszyWja',
    user_auth_0: false,
    email: 'pfgrupo05@gmail.com',
    user_type: 'userPremiun',

    cellphone: 55555,
  },
  {
    id_User: '08f76aa7-5b8f-4b7a-94d4-672a6dcabc95',
    userName: 'Chanti',
    photo:
      'https://res.cloudinary.com/dtzesfyt1/image/upload/v1668008325/robot-image_xrpox8.png',
    password: '$2b$10$PkXCPmCniHbIrbuhBHTCN.ahiU4X2s84Hvmc07HV6MeNSQaszyWja',
    user_auth_0: false,
    email: 'hborasou@gmail.com',
    user_type: 'userPremiun',
    cellphone: 55555,
  },
  {
    id_User: '325c1472-31fc-475f-8894-b12daf86b8ee',
    userName: 'tomasperez',
    photo:
      'https://pps.whatsapp.net/v/t61.24694-24/310107193_1253459732164501_3778443236274806214_n.jpg?ccb=11-4&oh=01_AdQYMM1muXLGsPqaA8BbsSOXRMvxGrAkzPyDJKhVK7gOeQ&oe=6394E740',
    password: '$2b$10$gQ/x0.ZWNFnXsS9W5Sl55.UotvkfwZlGGvvfi7OthT4Ud88TsXh/e',
    user_auth_0: false,
    email: 'tomi2001perez@gmail.com',
    user_type: 'userPremiun',
    cellphone: '2944140001',
  },
  {
    id_User: '499554a7-9cfc-4bc7-befe-c6b98d5717e9',
    userName: 'eltomasperez',
    photo:
      'https://img.freepik.com/foto-gratis/hombre-europeo-barbudo-melocoton-casual-aislado-gritando-expresion-loca-haciendo-simbolo-rock-manos-arriba_343596-4947.jpg?w=2000',
    password: '$2b$10$Jvvp.dbscCJ1zJTycA8mIOyn.XTD0qsRuqTPN8By3wo8ck4ft4TQC',
    user_auth_0: false,
    email: 'tomasperez.henry@gmail.com',
    user_type: 'admin',
    cellphone: '2944140001',
  },
]

const dataProperties = [
  {
    id: '8577872e-49ae-41bc-9042-6b9d35e7add1',
    address: 'Av Santa fe 908',
    area: 144,
    id_User: '325c1472-31fc-475f-8894-b12daf86b8ee',
    idCity: 820042,
    images: [
      'https://cdna.artstation.com/p/assets/images/images/001/855/390/large/emi-martinez-frente-3c.jpg?1534647282',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 250,
    type: 'Casa',
    description: 'casa con un hermoso ventanal con  vista a la calle',
    modality: 'Alquiler',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'Mucha humedad',
  },
  {
    id: '2d1a39dd-2d9e-493e-a749-e7bcf26fb9f3',
    address: 'joaquin dopazo 09',
    area: 163,
    id_User: '325c1472-31fc-475f-8894-b12daf86b8ee',
    idCity: 820133,
    images: [
      'https://static.tokkobroker.com/pictures/87704458841408397741260856676917773228878592101837496203771274715470925512290.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 250000,
    type: 'Casa',
    description: 'depsartamento luminoso nlananalnma',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'Mucha humedad',
  },
  {
    id: '330801ed-6d2b-47b8-b15b-539f374a57cb',
    address: 'hernesto salva 972',
    area: 45,
    id_User: '325c1472-31fc-475f-8894-b12daf86b8ee',
    idCity: 386252,
    images: [
      'https://http2.mlstatic.com/D_NQ_NP_759608-MLA45114947400_032021-W.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 2,
    garage: 0,
    price: 50000,
    type: 'Casa',
    description: 'es increible la cantidad de policias que vigilan la zona',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'Mucho ruido',
  },
  {
    id: 'aed4fe8e-e6a1-4358-b9eb-2fd88bd3e873',
    address: 'Villa Lugano 7867',
    area: 90,
    id_User: '119e8569-22e7-47c2-9ae5-1eb87a5b317a',
    idCity: 386252,
    images: [
      'https://res.cloudinary.com/dtzesfyt1/image/upload/v1667930749/casa1_kplpkg.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 220,
    type: 'Casa',
    description: 'el color naranja conbina con el bronceado de mi cuerpo',
    modality: 'Alquiler',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'se queda sin agua en verano',
  },
  {
    id: 'd93f60b8-a92e-4c33-818b-33aa1f82f81c',
    address: 'Dorrego 26',
    area: 56,
    id_User: '325c1472-31fc-475f-8894-b12daf86b8ee',
    idCity: 820126,
    images: [
      'https://static.tokkobroker.com/pictures/65454231820129845418050324461425876196952416495608148255838924090644595951285.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 400,
    type: 'Casa',
    description: 'hermoso depto con puertas reforzadas',
    modality: 'Alquiler',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'de noche no se puede salir',
  },
  {
    id: '8434d897-cbdd-4ed8-9cec-d082400de081',
    address: 'Peron 23',
    area: 66,
    id_User: '325c1472-31fc-475f-8894-b12daf86b8ee',
    idCity: 820028,
    images: [
      'https://http2.mlstatic.com/D_NQ_NP_803598-MLA43877396262_102020-O.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 180,
    type: 'Casa',
    description: 'techos de tejas rojas',
    modality: 'Alquiler',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'Mucho calor en las habitaciones',
  },

  {
    id: 'facf0195-c195-4ad5-b479-bbcd56b9d70c',
    address: '9 de diciembre',
    area: 42,
    id_User: '119e8569-22e7-47c2-9ae5-1eb87a5b317a',
    idCity: 625168,
    images: [
      'https://www.soules.com.ar/V4/wp-content/uploads/2018/05/1-Frente-2.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 150000,
    type: 'Casa',
    description: 'casa amplia',
    modality: 'Venta',
    state_modality: 'Alquilado',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'Mucha humedad en el verano',
  },
  {
    id: '6d69c3fc-7633-47c4-90de-23c0a9781d45',
    address: 'la madrid 31',
    area: 36,
    id_User: '119e8569-22e7-47c2-9ae5-1eb87a5b317a',
    idCity: 420014,
    images: [
      'https://www.argencasas.com/motor/foto.php?inmob=66&nro=1795&id=2270253650&width=307&height=230&keep_ratio=True',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 140000,
    type: 'Casa',
    description: 'casa con patio grande',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'crece demasiado rapido el cesped',
  },
  {
    id: '6b37d878-1b55-4b0e-b415-b18383b7921c',
    address: 'gob crespo 164',
    area: 60,
    id_User: '119e8569-22e7-47c2-9ae5-1eb87a5b317a',
    idCity: 142168,
    images: [
      'https://images.homify.com/c_fill,f_auto,q_0,w_740/v1526137608/p/photo/image/2556416/DSC_0101.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 110000,
    type: 'Casa',
    description: 'casa victoriana',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'Mucho metal en la decoracion',
  },
  {
    id: '635173ce-c308-4913-a53f-f77f2c39d617',
    address: 'cordoba 7867',
    area: 51,
    id_User: '119e8569-22e7-47c2-9ae5-1eb87a5b317a',
    idCity: 140182,
    images: ['https://staticbp.com/img/prop_new_b/441/00441532-02.jpg'],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 90000,
    type: 'Casa',
    description: 'casa de techos altos',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'Mucho frio en inviero por la zona',
  },
  {
    id: '3b418ff3-6412-4eca-b336-389476cf5d50',
    address: 'Marcelo Gallardo 10',
    area: 31,
    id_User: '119e8569-22e7-47c2-9ae5-1eb87a5b317a',
    idCity: 700119,
    images: [
      'https://static.wixstatic.com/media/3c9dc4_26471941f6cc491c89d004518a83c1a4~mv2_d_1600_1200_s_2.jpg/v1/fill/w_740,h_555,al_c,q_90,usm_0.66_1.00_0.01/3c9dc4_26471941f6cc491c89d004518a83c1a4~mv2_d_1600_1200_s_2.webp',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 101000,
    type: 'Casa',
    description: 'las habiataciones  estan bien decoradas',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'se respira gloria por el barrio',
  },
  {
    id: '22e77e62-a2de-424d-b3b1-878b37b8cfc3',
    address: 'Diego Maradona 10',
    area: 86,
    id_User: '073fb7d0-ccc6-49bb-ad20-cb47f2e3ae29',
    idCity: 420357,
    images: [
      'https://www.cronista.com/files/image/416/416933/61ba1f9d00faf.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 250000,
    type: 'Casa',
    description: 'la entrada es muy angosta',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'tiene buenos colegios por la zona',
  },
  {
    id: '6cf6c895-7472-405b-8f71-fe704cb42058',
    address: 'Armando Diaz',
    area: 46,
    id_User: '073fb7d0-ccc6-49bb-ad20-cb47f2e3ae29',
    idCity: 60351,
    images: [
      'https://espaciohogar.com/wp-content/uploads/2016/08/fachadas-de-las-casas-mas-bonitas-y-modernas-colores-claros.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 150000,
    type: 'Casa',
    description: 'las ventanas estan restauradas',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'tiene vista a la cancha del General',
  },
  {
    id: '22d24856-cc13-4099-bbcf-fb96b654fd34',
    address: 'ruben dario 230',
    area: 56000,
    id_User: '073fb7d0-ccc6-49bb-ad20-cb47f2e3ae29',
    idCity: 386252,
    images: [
      'http://verfachadasdecasas.com/wp-content/uploads/2016/08/colores-para-frentes-de-casas-comunes.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 200,
    type: 'Casa',
    description: 'recien pintado',
    modality: 'Alquiler',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'tiene una comisaria a 2 cuadras',
  },
  {
    id: 'e81983c5-e9b3-409e-b648-96f2b34335d4',
    address: 'av pucara',
    area: 58,
    id_User: '073fb7d0-ccc6-49bb-ad20-cb47f2e3ae29',
    idCity: 386252,
    images: [
      'https://i.pinimg.com/550x/ff/8f/c7/ff8fc7fc770c988978f618910baf7cd6.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 150000,
    type: 'Casa',
    description: 'una casa muy segura ',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'un poco estrecha ',
  },
  {
    id: 'c59c1dc0-a597-4487-98d4-351365029a29',
    address: 'lavalle 767',
    area: 96,
    id_User: '073fb7d0-ccc6-49bb-ad20-cb47f2e3ae29',
    idCity: 386252,
    images: [
      'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 250000,
    type: 'Casa',
    description: 'casa con enorme patio',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'se dificulta llegar al domicilio',
  },
  {
    id: '6a32d38c-6c25-4250-b22d-1d814fb72a10',
    address: 'Saenz 45',
    area: 50,
    id_User: '073fb7d0-ccc6-49bb-ad20-cb47f2e3ae29',
    idCity: 386154,
    images: [
      'https://res.cloudinary.com/dg05pzjsq/image/upload/v1669053232/samples/casa3_hi5bef.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 80000,
    type: 'PH',
    description: 'buenos simientos',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'esta en frente de un parque',
  },
  {
    id: 'b8489941-74fe-469a-bfc8-51e8279dd21f',
    address: 'bv santa fe  867',
    area: 60,
    id_User: '073fb7d0-ccc6-49bb-ad20-cb47f2e3ae29',
    idCity: 386252,
    images: [
      'https://static1.sosiva451.com/93147021/263d036c-3fcc-41c2-8b12-2a076f069243_u_small.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 250000,
    type: 'Casa',
    description: 'casa con ehrmosas rejas',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation:
      'es bastante segura teniendo en cuenta la peligrosidad del barrio',
  },
  {
    id: 'a60ee218-be36-4b2e-98a0-e9a08f8c9c28',
    address: 'Marcos garcia 4587',
    area: 50,
    id_User: '073fb7d0-ccc6-49bb-ad20-cb47f2e3ae29',
    idCity: 380105,
    images: [
      'https://res.cloudinary.com/dg05pzjsq/image/upload/v1669052470/samples/departamento2_yfbu2k.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 250000,
    type: 'Departamento',
    description: 'Departamento lujoso',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'esta en un tercer piso y no tien ascensor',
  },
  {
    id: '7534a2c1-e1d0-4bad-bd3e-ca805cd2c5ab',
    address: 'las toscas 63',
    area: 106,
    id_User: '073fb7d0-ccc6-49bb-ad20-cb47f2e3ae29',
    idCity: 386252,
    images: [
      'https://imgar.zonapropcdn.com/avisos/1/00/47/92/42/21/720x532/1767513954.jpg',
    ],
    bathrooms: 1,
    environments: 3,
    antiquity: 15,
    floors: 2,
    rooms: 3,
    garage: 1,
    price: 250000,
    type: 'Casa',
    description: 'casa muy lujosa',
    modality: 'Venta',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: 'Departamento',
    state: 'true',
    observation: 'se encuentra en un barrio residencial',
  },
  {
    id: '27990073-a398-4df6-89dd-533d457c47e8',
    address: 'Villa del campo 4555',
    area: 50,
    id_User: '08f76aa7-5b8f-4b7a-94d4-672a6dcabc95',
    idCity: 386273,
    images: [
      'https://res.cloudinary.com/dg05pzjsq/image/upload/v1669052470/samples/duplex2_w22ydg.jpg',
    ],
    bathrooms: 2,
    environments: 2,
    antiquity: 2,
    floors: 1,
    rooms: 2,
    garage: 0,
    price: 530000,
    type: 'PH',
    description:
      'PH en muy buen ubicación. Primer piso por escalera Living comedor muy luminoso, con piso de madera. Salida a balcón con vista a la calle 1 dormitorio con placard y pisos de parquet. Linda cocina actualizada 1 Baño completo reciclado No tiene gastos de expensas. El ABL y Aguas esta incluido en el precio.',
    modality: 'Alquiler',
    state_modality: 'Pendiente',
    services: ['agua', 'luz'],
    published: 'Publicada',
    geolocation: '',
    state: 'true',
    observation: 'no tiene escuelas por la zona',
  },
]

const dataMembershipTypes = [
  {
    id_Membership_type: '27990073-a398-4df6-89dd-533d457c47e8',
    membership: 'Oro',
    price: 200,
    state: true,
  },
  {
    id_Membership_type: 'b8489941-74fe-469a-bfc8-51e8279dd21f',
    membership: 'Plata',
    price: 100,
    state: true,
  },
  {
    id_Membership_type: 'a60ee218-be36-4b2e-98a0-e9a08f8c9c28',
    membership: 'Bronce',
    price: 50,
    state: true,
  },
]

const dataMemberships = [
  {
    // id_Membership: "325c1472-31fc-475f-8894-b12daf86b8ee",
    id_User: '325c1472-31fc-475f-8894-b12daf86b8ee',
    id_Membership_type: '27990073-a398-4df6-89dd-533d457c47e8',
    payment: 100,
  },
  {
    // id_Membership: "2d1a39dd-2d9e-493e-a749-e7bcf26fb9f3",
    id_User: '119e8569-22e7-47c2-9ae5-1eb87a5b317a',
    id_Membership_type: 'b8489941-74fe-469a-bfc8-51e8279dd21f',
    payment: 200,
  },
  {
    // id_Membership: "aed4fe8e-e6a1-4358-b9eb-2fd88bd3e873",
    id_User: '08f76aa7-5b8f-4b7a-94d4-672a6dcabc95',
    id_Membership_type: '27990073-a398-4df6-89dd-533d457c47e8',
    payment: 50,
  },
]

const dataFeedback = [
  {
    id_User: '325c1472-31fc-475f-8894-b12daf86b8ee',
    id: '27990073-a398-4df6-89dd-533d457c47e8',
    questions: 'hay escuelas por la zona ? ',
    answer: ' no sabemos que es eso',
  },
  {
    id_User: '08f76aa7-5b8f-4b7a-94d4-672a6dcabc95',
    id: '27990073-a398-4df6-89dd-533d457c47e8',
    questions: 'hay escuelas por la zona ? ',
    answer: ' no sabemos que es eso',
  },
  {
    id_User: '119e8569-22e7-47c2-9ae5-1eb87a5b317a',
    id: '8577872e-49ae-41bc-9042-6b9d35e7add1',
    questions: 'hay escuelas por la zona ? ',
  },
  {
    id_User: '119e8569-22e7-47c2-9ae5-1eb87a5b317a',
    id: 'a60ee218-be36-4b2e-98a0-e9a08f8c9c28',
    questions: 'esta casa no tiene baños ? ',
    answer: ' no, pero tiene arboles',
  },
]

module.exports = {
  dataUsers,
  dataProperties,
  dataFavorites,
  dataMembershipTypes,
  dataMemberships,

  dataFeedback,
}
