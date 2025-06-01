export interface SkinCondition {
  id: number;
  name: string;
  description: string;
  symptoms: string;
  treatment: string;
  images: string[];
}

export const skinConditions: SkinCondition[] = [
  {
    id: 1,
    name: "Eczema",
    description: "Chronic condition that makes the skin red, dry, and itchy.",
    symptoms: "Dryness, redness, itching, inflammation",
    treatment: "Moisturizers, corticosteroid creams, avoiding irritants",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dermatitis2015.jpg/640px-Dermatitis2015.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/ContactDermatitis.jpg/640px-ContactDermatitis.jpg'
    ]
  },
  {
    id: 2,
    name: "Psoriasis",
    description: "An autoimmune condition that causes rapid skin cell growth.",
    symptoms: "Scaly patches, redness, itchiness",
    treatment: "Topical ointments, light therapy, medications",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Psoriasis_on_back.jpg/640px-Psoriasis_on_back.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Fastway4you.com-psoraisis-pictures.png/640px-Fastway4you.com-psoraisis-pictures.png'
    ]
  },
  {
    id: 3,
    name: "Rosacea",
    description: "Common skin condition causing redness and visible blood vessels.",
    symptoms: "Redness, swelling, acne-like breakouts",
    treatment: "Topical antibiotics, laser therapy, gentle skincare",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rosacea_01.jpg/640px-Rosacea_01.jpg',

    ]
  },
  {
    id: 4,
    name: "Acne",
    description: "Skin condition caused by clogged hair follicles and oil glands.",
    symptoms: "Pimples, blackheads, whiteheads, cysts",
    treatment: "Cleansers, topical retinoids, antibiotics, isotretinoin",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/%C3%9Czd%C9%99_d%C3%BCy%C3%BCnl%C3%BC_v%C9%99_kistik_s%C4%B1zanaqlar_%28Acne_Vulgaris%29_15.jpg/640px-%C3%9Czd%C9%99_d%C3%BCy%C3%BCnl%C3%BC_v%C9%99_kistik_s%C4%B1zanaqlar_%28Acne_Vulgaris%29_15.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/%C3%9Czd%C9%99_d%C3%BCy%C3%BCnl%C3%BC_v%C9%99_kistik_s%C4%B1zanaqlar_%28Acne_Vulgaris%29_11.jpg/640px-%C3%9Czd%C9%99_d%C3%BCy%C3%BCnl%C3%BC_v%C9%99_kistik_s%C4%B1zanaqlar_%28Acne_Vulgaris%29_11.jpg'
    ]
  },
  {
    id: 5,
    name: "Melanoma",
    description: "A type of skin cancer that can spread to other parts of the body.",
    symptoms: "New or changing moles, asymmetry, irregular borders",
    treatment: "Surgery, immunotherapy, targeted therapy",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Melanoma.jpg/640px-Melanoma.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Malignant_Melanoma_right_medial_thigh.jpg/640px-Malignant_Melanoma_right_medial_thigh.jpg'
    ]
  },
  {
    id: 6,
    name: "Vitiligo",
    description: "A disorder that causes the loss of skin color in patches.",
    symptoms: "White patches on the skin",
    treatment: "Light therapy, corticosteroid creams, depigmentation",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Vitiligo_on_hand.jpg/640px-Vitiligo_on_hand.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Vitiligo_misto.jpg/640px-Vitiligo_misto.jpg'
    ]
  },
  {
    id: 7,
    name: "Hives (Urticaria)",
    description: "Red, itchy welts that result from a skin reaction.",
    symptoms: "Itchy welts, swelling",
    treatment: "Antihistamines, avoiding triggers",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Rash.jpg/640px-Rash.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hives_urticaria.jpg/640px-Hives_urticaria.jpg'
    ]
  },
  {
    id: 8,
    name: "Shingles (Herpes Zoster)",
    description: "Painful rash caused by the varicella-zoster virus.",
    symptoms: "Painful blisters, burning sensation, itching",
    treatment: "Antiviral medications, pain relief",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Shingles_rash%2C_thigh._Caused_by_the_herpes_zoster_virus.jpg/640px-Shingles_rash%2C_thigh._Caused_by_the_herpes_zoster_virus.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/%E0%B0%AE%E0%B1%87%E0%B0%96%E0%B0%B2_%E0%B0%B5%E0%B0%BF%E0%B0%B8%E0%B0%B0%E0%B1%8D%E0%B0%AA%E0%B0%BF%E0%B0%A3%E0%B0%BF_%28Herpes_Zoster%29.jpeg/640px-%E0%B0%AE%E0%B1%87%E0%B0%96%E0%B0%B2_%E0%B0%B5%E0%B0%BF%E0%B0%B8%E0%B0%B0%E0%B1%8D%E0%B0%AA%E0%B0%BF%E0%B0%A3%E0%B0%BF_%28Herpes_Zoster%29.jpeg'
    ]
  },
  {
    id: 9,
    name: "Warts",
    description: "Small growths on the skin caused by the human papillomavirus (HPV).",
    symptoms: "Rough, raised bumps on skin",
    treatment: "Cryotherapy, salicylic acid, laser treatment",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Verruca_filiformis_01.JPG/640px-Verruca_filiformis_01.JPG',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Dornwarzen.jpg/640px-Dornwarzen.jpg'
    ]
  },
  {
    id: 10,
    name: "Impetigo",
    description: "Highly contagious bacterial skin infection.",
    symptoms: "Red sores, blisters, honey-colored crusts",
    treatment: "Antibiotic creams or oral antibiotics",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Impetigo_elbow.jpg/640px-Impetigo_elbow.jpg',
    ]
  },
  {
    id: 11,
    name: "Dermatitis",
    description: "General inflammation of the skin with various causes.",
    symptoms: "Redness, swelling, itching",
    treatment: "Anti-inflammatory creams, identifying triggers",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dermatitis2015.jpg/640px-Dermatitis2015.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Atopic_dermatitis_child.JPG/640px-Atopic_dermatitis_child.JPG'
    ]
  },
  {
    id: 12,
    name: "Seborrheic Dermatitis",
    description: "Common skin condition affecting oily areas of the body.",
    symptoms: "Scaly patches, red skin, dandruff",
    treatment: "Medicated shampoos, antifungal creams",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Seborrhoeic_dermatitis_head.jpg/640px-Seborrhoeic_dermatitis_head.jpg',
    ]
  },
  {
    id: 13,
    name: "Tinea (Ringworm)",
    description: "Fungal infection that forms ring-shaped patches.",
    symptoms: "Circular rash, itching, redness",
    treatment: "Antifungal creams, oral antifungals",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Tinea_barbae_4807_lores.jpg/640px-Tinea_barbae_4807_lores.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Tinea_incognito.jpg/640px-Tinea_incognito.jpg'
    ]
  },
  {
    id: 14,
    name: "Athlete's Foot",
    description: "Fungal infection of the feet.",
    symptoms: "Itching, burning, peeling skin",
    treatment: "Antifungal sprays, powders",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Athlete%27s_foot.JPG/640px-Athlete%27s_foot.JPG',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Athlete%E2%80%99s_foot_%28Tinea_pedis%29.jpg/640px-Athlete%E2%80%99s_foot_%28Tinea_pedis%29.jpg'
    ]
  },
  {
    id: 15,
    name: "Cellulitis",
    description: "Bacterial infection of the deeper layers of skin.",
    symptoms: "Red, swollen, painful area, fever",
    treatment: "Oral or intravenous antibiotics",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Left_cellulitis_of_leg.jpg/640px-Left_cellulitis_of_leg.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Cellulitis_Left_Leg.JPG/640px-Cellulitis_Left_Leg.JPG'
    ]
  },
  {
    id: 16,
    name: "Lupus Erythematosus",
    description: "Autoimmune disease that can affect the skin.",
    symptoms: "Butterfly rash, photosensitivity",
    treatment: "Immunosuppressants, sun protection",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Subacute_cutaneous_lupus_erythematosus.jpg/640px-Subacute_cutaneous_lupus_erythematosus.jpg'
    ]
  },
  {
    id: 17,
    name: "Scabies",
    description: "Contagious skin infestation by the Sarcoptes scabiei mite.",
    symptoms: "Intense itching, burrow tracks, rash",
    treatment: "Permethrin cream, ivermectin",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Scabies_hand_and_fingers_1.jpg/640px-Scabies_hand_and_fingers_1.jpg'
    ]
  },
  {
    id: 18,
    name: "Keratosis Pilaris",
    description: "Common condition causing rough bumps on skin.",
    symptoms: "Small, rough bumps on arms/thighs",
    treatment: "Exfoliation, moisturizers",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Keratosis_pilaris_arm.jpg/640px-Keratosis_pilaris_arm.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Keratosis_Pilaris_on_Back.jpg/640px-Keratosis_Pilaris_on_Back.jpg'
    ]
  },
  {
    id: 19,
    name: "Actinic Keratosis",
    description: "Precancerous skin lesions from sun damage.",
    symptoms: "Rough, scaly patches",
    treatment: "Cryotherapy, topical treatments",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Aktinische_Keratosen_am_Handr%C3%BCcken%2C_sog._Feldkanzerisierung%2C_%C2%A9WIKIDERM.jpg/640px-Aktinische_Keratosen_am_Handr%C3%BCcken%2C_sog._Feldkanzerisierung%2C_%C2%A9WIKIDERM.jpg'
    ]
  },
  {
    id: 20,
    name: "Basal Cell Carcinoma",
    description: "Most common type of skin cancer.",
    symptoms: "Pearly bump, bleeding sore",
    treatment: "Surgical excision, Mohs surgery",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Superficial_basal_cell_carcinoma.jpg/640px-Superficial_basal_cell_carcinoma.jpg'
    ]
  },
  {
    id: 21,
    name: "Squamous Cell Carcinoma",
    description: "Type of skin cancer in squamous cells.",
    symptoms: "Red nodule, scaly patch",
    treatment: "Surgery, radiation therapy",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Squamous_Cell_Carcinoma_Left_Ventral_Forearm.jpg/640px-Squamous_Cell_Carcinoma_Left_Ventral_Forearm.jpg'
    ]
  },
  {
    id: 22,
    name: "Cold Sores (Herpes Simplex)",
    description: "Viral infection causing blisters around mouth.",
    symptoms: "Painful blisters, tingling",
    treatment: "Antiviral creams, oral antivirals",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Herpes%28PHIL_1573_lores%29.jpg/640px-Herpes%28PHIL_1573_lores%29.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Herpes_labialis_-_opryszczka_wargowa.jpg/640px-Herpes_labialis_-_opryszczka_wargowa.jpg'
    ]
  },
  {
    id: 23,
    name: "Pityriasis Rosea",
    description: "Temporary rash appearing as scaly patches.",
    symptoms: "Herald patch, Christmas tree pattern",
    treatment: "Usually self-resolving, anti-itch creams",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Pityriasis_rosea-2.jpg/640px-Pityriasis_rosea-2.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pityriasis_rosea-4.jpg/640px-Pityriasis_rosea-4.jpg'
    ]
  },
  {
    id: 24,
    name: "Folliculitis",
    description: "Inflammation of hair follicles.",
    symptoms: "Pimple-like bumps, itching",
    treatment: "Antibacterial washes, antibiotics",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Folliculitis-1.jpg/640px-Folliculitis-1.jpg'
    ]
  },
  {
    id: 25,
    name: "Boils (Furuncles)",
    description: "Deep infection of hair follicles.",
    symptoms: "Painful red lump, pus",
    treatment: "Warm compresses, drainage",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bluttschwier--w.jpg/640px-Bluttschwier--w.jpg'
    ]
  },
  {
    id: 26,
    name: "Carbuncle",
    description: "Cluster of boils forming a connected area.",
    symptoms: "Multiple heads, severe infection",
    treatment: "Antibiotics, surgical drainage",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Siebert_21.jpg/640px-Siebert_21.jpg'
    ]
  },
  {
    id: 27,
    name: "Molluscum Contagiosum",
    description: "Viral infection causing small raised bumps.",
    symptoms: "Flesh-colored dome-shaped bumps",
    treatment: "Cryotherapy, curettage",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Molluscum_bumps.jpg/640px-Molluscum_bumps.jpg'
    ]
  },
  {
    id: 28,
    name: "Tinea Versicolor",
    description: "Fungal infection causing discolored patches.",
    symptoms: "Light or dark patches on skin",
    treatment: "Antifungal shampoos, creams",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Pityriasis_versicolor_frontal_retouche.jpg/640px-Pityriasis_versicolor_frontal_retouche.jpg'
    ]
  },
  {
    id: 29,
    name: "Perioral Dermatitis",
    description: "Facial rash around the mouth.",
    symptoms: "Red bumps around mouth",
    treatment: "Avoiding steroids, antibiotics",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Periorale_Dermatitis_am_Auge_01_%28fcm%29.jpg/640px-Periorale_Dermatitis_am_Auge_01_%28fcm%29.jpg'
    ]
  },
  {
    id: 30,
    name: "Lichen Planus",
    description: "Inflammatory condition affecting skin and mucous membranes.",
    symptoms: "Purple, itchy flat-topped bumps",
    treatment: "Corticosteroids, light therapy",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Lichen_Planus_%282%29.JPG/640px-Lichen_Planus_%282%29.JPG'
    ]
  },
  {
    id: 31,
    name: "Necrotizing Fasciitis",
    description: "Rare but serious bacterial infection.",
    symptoms: "Severe pain, fever, rapidly spreading redness",
    treatment: "Emergency surgery, IV antibiotics",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Beginning_of_Necrotizing_Fasciitis_01.jpg/640px-Beginning_of_Necrotizing_Fasciitis_01.jpg'
    ]
  },
  {
    id: 32,
    name: "Erythema Multiforme",
    description: "Hypersensitivity reaction affecting skin.",
    symptoms: "Target-like lesions, may involve mucous membranes",
    treatment: "Identify and treat cause, supportive care",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Erythema_multiforme_EM_02.jpg/640px-Erythema_multiforme_EM_02.jpg'
    ]
  },
  {
    id: 33,
    name: "Granuloma Annulare",
    description: "Chronic skin condition with ring-shaped lesions.",
    symptoms: "Firm reddish bumps in rings",
    treatment: "Often self-limiting, topical steroids",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Granuloma_annulare.jpg/640px-Granuloma_annulare.jpg'
    ]
  },
  {
    id: 34,
    name: "Dyshidrotic Eczema",
    description: "Type of eczema causing small blisters.",
    symptoms: "Tiny blisters on hands/feet, itching",
    treatment: "Moisturizers, steroid creams",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/DyshidroticDermatitisOnHandsLateStage.jpg/640px-DyshidroticDermatitisOnHandsLateStage.jpg'
    ]
  },
  {
    id: 35,
    name: "Stevens-Johnson Syndrome",
    description: "Serious disorder of skin and mucous membranes.",
    symptoms: "Fever, skin pain, red/purple rash",
    treatment: "Hospitalization, supportive care",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Steven_Johnsons_Syndrome.jpg/640px-Steven_Johnsons_Syndrome.jpg'
    ]
  },
  {
    id: 36,
    name: "Urticaria Pigmentosa",
    description: "Form of mastocytosis causing brown patches.",
    symptoms: "Brown patches that itch when rubbed",
    treatment: "Antihistamines, avoiding triggers",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Sequeira_Plate_35.jpg/640px-Sequeira_Plate_35.jpg'
    ]
  },
  {
    id: 37,
    name: "Pyoderma Gangrenosum",
    description: "Rare ulcerating skin condition.",
    symptoms: "Painful ulcers with purple edges",
    treatment: "Immunosuppressants, wound care",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Crohnie_Pyoderma_gangrenosum.jpg/640px-Crohnie_Pyoderma_gangrenosum.jpg'
    ]
  },
  {
    id: 38,
    name: "Cutaneous T-cell Lymphoma",
    description: "Type of non-Hodgkin lymphoma affecting skin.",
    symptoms: "Rash, plaques, tumors",
    treatment: "Topical chemotherapy, light therapy",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Mycosis_fungoides_knee.JPG/640px-Mycosis_fungoides_knee.JPG'
    ]
  },
  {
    id: 39,
    name: "Epidermolysis Bullosa",
    description: "Group of rare conditions causing fragile skin.",
    symptoms: "Blisters from minor trauma",
    treatment: "Wound care, pain management",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Epidermolysis_bullosa_in_Iran-_Kerman_province_%26_Balochistan_-_Photo_by_Mustafa_Meraji-_Wikipedia_free_photos_02.jpg/640px-Epidermolysis_bullosa_in_Iran-_Kerman_province_%26_Balochistan_-_Photo_by_Mustafa_Meraji-_Wikipedia_free_photos_02.jpg'
    ]
  },
  {
    id: 40,
    name: "Hidradenitis Suppurativa",
    description: "Chronic condition of inflamed sweat glands.",
    symptoms: "Painful lumps under skin, abscesses",
    treatment: "Antibiotics, biologics, surgery",
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Lesions_from_hidradenitis_suppurativa.jpg/640px-Lesions_from_hidradenitis_suppurativa.jpg'
    ]
  },
  {
    id: 41,
    name: "Dermatographia",
    description: "Condition where lightly scratching the skin causes raised red lines.",
    symptoms: "Raised marks, itching, swelling",
    treatment: "Antihistamines, avoiding triggers",
    images: [
        'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/06/642x361__BODY_Dermatographia.jpeg?w=1155&h=762'
    ]
  },
  {
    id: 42,
    name: "Pemphigus Vulgaris",
    description: "Rare autoimmune disorder causing blisters on skin and mucous membranes.",
    symptoms: "Painful blisters, mouth sores",
    treatment: "Corticosteroids, immunosuppressants",
    images: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Permphigus.jpg/640px-Permphigus.jpg'
    ]
  },
  {
    id: 43,
    name: "Bullous Pemphigoid",
    description: "Autoimmune blistering disorder more common in elderly.",
    symptoms: "Large fluid-filled blisters, itching",
    treatment: "Topical steroids, immunosuppressants",
    images: [
        'https://assets.nhs.uk/nhsuk-cms/images/S_0318_Bullous_pemphigoid_lesions_C0372849.o.max-600x600.jpg'
    ]
  },
  {
    id: 44,
    name: "Chickenpox (Varicella)",
    description: "Highly contagious viral infection causing itchy rash.",
    symptoms: "Itchy blisters, fever, fatigue",
    treatment: "Antiviral drugs, calamine lotion",
    images: [
        'https://my.clevelandclinic.org/-/scassets/images/org/health/articles/chickenpox'
    ]
  },
  {
    id: 45,
    name: "Measles (Rubeola)",
    description: "Viral infection with characteristic skin rash.",
    symptoms: "Red rash, fever, cough",
    treatment: "Supportive care, vaccination prevention",
    images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCLeKZGrqm30kyGcednoZMr6Lo86zpVHybQ&s'
    ]
  },
  {
    id: 46,
    name: "Rubella (German Measles)",
    description: "Viral infection with mild rash and fever.",
    symptoms: "Pink rash, swollen lymph nodes",
    treatment: "Rest, fluids, vaccination prevention",
    images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYM4LjX6zZQDG1755IpC0bH4_hDmhX97T6JQ&s'
    ]
  },
  {
    id: 47,
    name: "Fifth Disease (Erythema Infectiosum)",
    description: "Viral illness causing 'slapped cheek' rash.",
    symptoms: "Red cheeks, lacy rash on body",
    treatment: "Supportive care, usually mild",
    images: [
        'https://m4b6f3p8.delivery.rocketcdn.me/app/uploads/2021/04/erythemaInfectiosumFifthDisease_4173_lg.jpg'
    ]
  },
  {
    id: 48,
    name: "Hand, Foot and Mouth Disease",
    description: "Common viral illness in children.",
    symptoms: "Mouth sores, rash on hands/feet",
    treatment: "Pain relief, fluids",
    images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvi3ozJUhbJgaXEdqjyvAoIRLfzMxRN0QvcA&s'
    ]
  },
  {
    id: 49,
    name: "Cutaneous Larva Migrans",
    description: "Skin infection caused by hookworm larvae.",
    symptoms: "Itchy serpentine rash",
    treatment: "Antiparasitic medications",
    images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4ESJDuqmTaxnFUY7kqmrGbDBohQ-NQjsbA&s'
    ]
  },
  {
    id: 50,
    name: "Lyme Disease",
    description: "Tick-borne illness with characteristic rash.",
    symptoms: "Bull's-eye rash, fever, fatigue",
    treatment: "Antibiotics",
    images: [
        'https://ichef.bbci.co.uk/news/480/cpsprodpb/BF47/production/_109176984_lyme.jpg.webp'
    ]
  },
  {
    id: 51,
    name: "Rocky Mountain Spotted Fever",
    description: "Serious tick-borne illness with rash.",
    symptoms: "Spotted rash, high fever, headache",
    treatment: "Antibiotics (doxycycline)",
    images: [
        'https://www.dermatologyadvisor.com/wp-content/uploads/sites/20/2019/03/ch1396.fig1_.jpg'
    ]
  },
  {
    id: 52,
    name: "Scarlet Fever",
    description: "Bacterial illness with characteristic rash.",
    symptoms: "Red rash, strawberry tongue, fever",
    treatment: "Antibiotics",
    images: [
        'https://assets.mayoclinic.org/content/dam/media/global/images/2023/02/09/scarlet-fever.jpg'
    ]
  },
  {
    id: 53,
    name: "Toxic Epidermal Necrolysis",
    description: "Life-threatening skin condition often drug-induced.",
    symptoms: "Widespread skin peeling, pain",
    treatment: "Hospitalization, ICU care",
    images: [
      'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/09/blister-shoulder-header-1024x575.jpg?w=1155&h=1528'
    ]
  },
  {
    id: 54,
    name: "Erythroderma",
    description: "Severe skin inflammation affecting most of body.",
    symptoms: "Redness, scaling, skin shedding",
    treatment: "Treat underlying cause, supportive care",
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTi2acyP3Iha7kiZyuX4yXOolCwZhIy5vrDw&s'
    ]
  },
  {
    id: 55,
    name: "Paronychia",
    description: "Infection of the nail fold.",
    symptoms: "Redness, swelling, pus",
    treatment: "Warm soaks, antibiotics",
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdBbf9LuWLTRLCdpXc8L7WjF-i_SHyMEzVA&s'
    ]
  },
  {
    id: 56,
    name: "Onychomycosis",
    description: "Fungal infection of the nails.",
    symptoms: "Thickened, discolored nails",
    treatment: "Antifungal medications",
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW9UyaujD9KsMO3tERcGTrxcseOh4OyqbKw&s'
    ]
  },
  {
    id: 57,
    name: "Alopecia Areata",
    description: "Autoimmune condition causing hair loss.",
    symptoms: "Round bald patches",
    treatment: "Corticosteroids, immunotherapy",
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIuvE9hNH7PdoxQfg6gD_-mUmA6vtHQb24w&s'
    ]
  },
  {
    id: 58,
    name: "Telogen Effluvium",
    description: "Temporary hair shedding after stress.",
    symptoms: "Diffuse hair thinning",
    treatment: "Address underlying cause",
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTFmMxZOsmeZ3z-wwvLEzHU7qavJhtoxqjQ&s'
    ]
  },
  {
    id: 59,
    name: "Keloid",
    description: "Overgrowth of scar tissue.",
    symptoms: "Raised, firm scars beyond wound",
    treatment: "Steroid injections, silicone sheets",
    images: [
      'https://clini-derma.com/wp-content/uploads/2025/02/keloid-scars.jpg'
    ]
  },
  {
    id: 60,
    name: "Cherry Angioma",
    description: "Common benign skin growths.",
    symptoms: "Small red bumps",
    treatment: "Usually none, can be removed",
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT25cHWYEFVgXxdB50mw8L-STceYUoIgcx6A&s'
    ]
  },
  {
    id: 61,
    name: "Sebaceous Hyperplasia",
    description: "Enlarged oil glands.",
    symptoms: "Yellowish bumps on face",
    treatment: "Electrodesiccation, laser",
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0D-J_aRiD6pKwsbqpr4XjI_MFGcQX-F_uQ&s'
    ]
  },
  {
    id: 62,
    name: "Dermatofibroma",
    description: "Common benign skin nodule.",
    symptoms: "Firm brownish bump",
    treatment: "Usually none, can be excised",
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cg5aBHTly5nz6neC7fwFU5GibQVbTmZa3w&s'
    ]
  },
  {
    id: 63,
    name: "Pyogenic Granuloma",
    description: "Rapidly growing vascular lesion.",
    symptoms: "Red bleeding bump",
    treatment: "Surgical removal",
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAAVnK_clvj-JJXSOAB7LIBtnesmyGHCHwQ&s'
    ]
  },
  {
    id: 64,
    name: "Miliaria (Heat Rash)",
    description: "Blocked sweat ducts causing rash.",
    symptoms: "Small red bumps, itching",
    treatment: "Cool environment, loose clothing",
    images: [
      'https://m4b6f3p8.delivery.rocketcdn.me/app/uploads/2021/04/miliariaRubra_31832_lg.jpg'
    ]
  },
  {
    id: 65,
    name: "Intertrigo",
    description: "Inflammation in skin folds.",
    symptoms: "Redness, itching, odor",
    treatment: "Keep area dry, antifungal creams",
    images: [
      'https://www.dermatologyadvisor.com/wp-content/uploads/sites/20/2019/03/ch1105.fig2_.jpg'
    ]
  },
  {
    id: 66,
    name: "Nummular Eczema",
    description: "Coin-shaped eczema patches.",
    symptoms: "Round itchy lesions",
    treatment: "Moisturizers, topical steroids",
    images: [
      'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019_5/Ringworm-1296x728-gallery_slide1.jpg?w=1155'
    ]
  },
  {
    id: 67,
    name: "Prurigo Nodularis",
    description: "Chronic itchy nodules.",
    symptoms: "Firm itchy bumps",
    treatment: "Steroid injections, antihistamines",
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqpbwzhrUsRb9kqG3EUNpQXVT8QQiRRHSNA&s'
    ]
  },
  {
    id: 68,
    name: "Xerosis",
    description: "Abnormally dry skin.",
    symptoms: "Dry, rough, flaky skin",
    treatment: "Moisturizers, humidifiers",
    images: [
      'https://soteriskin.com/cdn/shop/articles/dry-skin-palm.jpg?crop=center&height=1000&v=1667960483&width=1000'
    ]
  },
  {
    id: 69,
    name: "Ichthyosis Vulgaris",
    description: "Genetic skin scaling disorder.",
    symptoms: "Dry, scaly skin",
    treatment: "Emollients, keratolytics",
    images: [
      'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/Image-Galleries/Ichthyosis-Vulgaris/642x361_Gallery_1_Ichthyosis_Vulgaris.jpg?w=1155'
    ]
  },
  {
    id: 70,
    name: "Porphyria Cutanea Tarda",
    description: "Photosensitivity disorder.",
    symptoms: "Blisters on sun-exposed skin",
    treatment: "Phlebotomy, antimalarials",
    images: [
      'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/galleries/porphyria-cutanea-tarda/1003-Porphyria_cutanea_tarda-642x361-slide_1.jpg?w=1155'
    ]
  }
];