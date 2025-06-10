export interface SkinCondition {
  id: number;
  name: string;
  description: string;
  symptoms: string;
  treatment: string;
  image: string;
}

 const skinConditions: SkinCondition[] = [
  {
    id: 1,
    name: "Eczema",
    description: "Chronic inflammatory skin condition characterized by disrupted skin barrier function, often related to genetic and environmental factors. Commonly appears in flexural areas.",
    symptoms: "Intense itching, erythematous patches, dry scaly skin, lichenification in chronic cases, possible oozing or crusting in acute flares",
    treatment: "Regular emollients, topical corticosteroids for flares, calcineurin inhibitors for sensitive areas, wet wrap therapy for severe cases, antihistamines for pruritus",
    image: 'https://media-pierre-fabre.wedia-group.com/api/wedia/dam/transform/u5wa3z31qn5se9mger5maqqna7jpa7ygtfumwae/eczema-atopic-hand-woman?t=crop'
},
  {
    id: 2,
    name: "Psoriasis",
    description: "Immune-mediated chronic inflammatory disorder causing accelerated keratinocyte proliferation with characteristic well-demarcated plaques.",
    symptoms: "Erythematous plaques with silvery scale, nail pitting or onycholysis, possible joint involvement (psoriatic arthritis), Koebner phenomenon",
    treatment: "Topical vitamin D analogs and steroids, phototherapy, systemic medications (methotrexate, cyclosporine), biologics targeting TNF-α or IL-17/23 pathways",
    image:'https://www.danishskincare.com/cdn/shop/articles/skincare_blog_284283087-1.jpg?crop=center&height=1200&v=1736285653&width=1200'
},
  {
    id: 3,
    name: "Rosacea",
    description: "Chronic facial dermatosis with vascular and inflammatory components, often triggered by environmental factors in genetically predisposed individuals.",
    symptoms: "Persistent centrofacial erythema, telangiectasias, inflammatory papules/pustules, phymatous changes in late stages, ocular involvement possible",
    treatment: "Topical ivermectin/metronidazole, oral tetracyclines, vascular laser for telangiectasias, strict sun protection, avoidance of triggers (alcohol, spicy foods)",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rQoIQ0u9Q9Cwe_VnYxw67l3vyfpfZsimsQ&s'
},
  {
    id: 4,
    name: "Acne Vulgaris",
    description: "Multifactorial disorder of pilosebaceous units involving follicular hyperkeratinization, increased sebum production, bacterial colonization, and inflammation.",
    symptoms: "Open/closed comedones, inflammatory papules/pustules, nodules/cysts in severe cases, possible post-inflammatory hyperpigmentation or scarring",
    treatment: "Topical retinoids with benzoyl peroxide, oral antibiotics for moderate cases, isotretinoin for severe nodulocystic acne, hormonal therapy in females",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfrYfP6aQ8GGeLrdOoG_25SDaHc_oZYMRsg&s'
},
  {
    id: 5,
    name: "Melanoma",
    description: "Malignant tumor arising from melanocytes with significant metastatic potential, often related to UV exposure in genetically susceptible individuals.",
    symptoms: "New or changing pigmented lesion demonstrating ABCDE criteria (Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolution), possible ulceration or bleeding",
    treatment: "Surgical excision with appropriate margins, sentinel lymph node biopsy for staging, targeted therapy for BRAF mutations, immunotherapy for advanced disease",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJejRP_qpRNQArlpZJhct0ODbKnhhmIPZhQ&s'
},
  {
    id: 6,
    name: "Vitiligo",
    description: "Autoimmune-mediated depigmentation disorder causing selective destruction of melanocytes, resulting in acquired white macules/patches.",
    symptoms: "Sharply demarcated depigmented macules often symmetrical, possible Koebner phenomenon, may affect hair (leukotrichia), various distribution patterns",
    treatment: "Topical corticosteroids/calcineurin inhibitors, narrowband UVB phototherapy, excimer laser for localized disease, surgical options for stable cases",
    image:'https://my.clevelandclinic.org/-/scassets/images/org/health/articles/12419-vitiligo'
},
  {
    id: 7,
    name: "Urticaria",
    description: "Mast cell-mediated cutaneous hypersensitivity reaction characterized by transient wheals resulting from dermal edema.",
    symptoms: "Pruritic erythematous wheals with central pallor, individual lesions last <24 hours, possible angioedema (deeper swelling), dermatographism",
    treatment: "Second-generation H1 antihistamines (up to 4x standard dose), omalizumab for chronic cases, short course corticosteroids for acute severe episodes",
    image:'https://www.allergycliniclondon.co.uk/wp-content/uploads/2017/12/Screen-Shot-2017-12-05-at-16.43.46-1024x769.png'
},
  {
    id: 8,
    name: "Herpes Zoster",
    description: "Reactivation of varicella-zoster virus from dorsal root ganglia causing painful dermatomal vesicular eruption.",
    symptoms: "Prodromal pain/tingling followed by grouped vesicles on erythematous base in dermatomal distribution, possible postherpetic neuralgia",
    treatment: "Antivirals (valacyclovir/famciclovir) within 72 hours of rash onset, pain control, gabapentin for neuralgia, live zoster vaccine for prevention",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnL56BnJxfeJo4pGJygttG0gnENDhljKreQw&s"
},
  {
    id: 9,
    name: "Verruca Vulgaris",
    description: "Epidermal proliferation caused by human papillomavirus (HPV) infection, with characteristic hyperkeratosis and acanthosis.",
    symptoms: "Firm papules with rough hyperkeratotic surface, black dots (thrombosed capillaries), common on hands/feet, possible periungual involvement",
    treatment: "Salicylic acid preparations, cryotherapy, electrosurgery, intralesional immunotherapy (candida antigen), laser ablation for recalcitrant warts",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_dokkxltEM9z6UY6H00BI4P88bn_P0snmQ&s'
},
  {
    id: 10,
    name: "Impetigo",
    description: "Highly contagious superficial bacterial skin infection most commonly caused by S. aureus or S. pyogenes.",
    symptoms: "Honey-colored crusted erosions, fragile bullae in bullous variant, rapid spread, common in children, often perioral/perinasal",
    treatment: "Topical mupirocin for limited disease, oral cephalexin/dicloxacillin for extensive cases, hygiene measures to prevent spread",
    image:'https://www.arogapharmacy.co.uk/wp-content/uploads/2024/12/How-to-Identify-the-Early-Symptoms-of-Impetigo-scaled.jpg'
},
  {
    id: 11,
    name: "Atopic Dermatitis",
    description: "Chronic relapsing inflammatory skin disease associated with epidermal barrier dysfunction and immune dysregulation, often part of atopic triad.",
    symptoms: "Pruritic xerotic skin, flexural lichenification in adults, facial/extensor involvement in infants, Dennie-Morgan folds, keratosis pilaris",
    treatment: "Daily emollients, topical corticosteroids/calcineurin inhibitors, wet wrap therapy, dupilumab for moderate-severe cases, bleach baths for secondary infection",
    image:'https://www.apexhospitals.com/_next/image?url=https%3A%2F%2Fbed.apexhospitals.com%2Fuploads%2Fatopic_dermatitis_63017e8fbb.png&w=1920&q=75'
},
  {
    id: 12,
    name: "Seborrheic Dermatitis",
    description: "Chronic relapsing inflammatory dermatosis affecting sebum-rich areas, associated with Malassezia yeast overgrowth.",
    symptoms: "Erythematous patches with greasy yellow scales on scalp (dandruff), face (nasolabial folds, eyebrows), chest, pruritus variable",
    treatment: "Topical antifungals (ketoconazole), low-potency steroids, selenium sulfide/salicylic acid shampoos, calcineurin inhibitors for facial involvement",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOCQ6MOw0xiX-nR_QZWCeZTFwhkkvxTKOBw&s'
},
  {
    id: 13,
    name: "Tinea Corporis",
    description: "Superficial dermatophyte infection of glabrous skin causing annular scaly plaques with central clearing.",
    symptoms: "Pruritic annular plaques with advancing scaly border and central clearing, possible vesiculation in inflammatory cases, KOH positive",
    treatment: "Topical antifungals (terbinafine, clotrimazole) for limited disease, oral terbinafine/itraconazole for extensive or recalcitrant cases",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzsW1zJEpBBnaKSJWgZF-_qE7csZS5bBrlA&s'
},
  {
    id: 14,
    name: "Tinea Pedis",
    description: "Dermatophyte infection of feet with several clinical patterns, often chronic and recurrent.",
    symptoms: "Interdigital maceration/scaling (most common), moccasin-type scaling of soles, vesiculobullous variant, possible secondary bacterial infection",
    treatment: "Topical antifungals (preferably terbinafine), oral therapy for extensive cases, drying powders for prevention, footwear hygiene measures",
    image:'https://cefootandankle.com/wp-content/uploads/2021/05/IMG_0911-768x531-1.jpeg'
},
  {
    id: 15,
    name: "Cellulitis",
    description: "Acute bacterial infection of dermis/subcutaneous tissue, most commonly caused by β-hemolytic streptococci or S. aureus.",
    symptoms: "Erythema, warmth, tenderness, swelling with poorly demarcated borders, possible fever/chills, lymphangitic streaks in severe cases",
    treatment: "Oral antibiotics (cephalexin) for mild cases, IV therapy (vancomycin/cefazolin) for systemic symptoms, elevation of affected limb",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWPRhCvKrLfDjY_SPqeEBfiW7no9QmAEN9Ww&s' 
},
  {
    id: 16,
    name: "Cutaneous Lupus Erythematosus",
    description: "Autoimmune condition with various cutaneous manifestations, either isolated or as part of systemic lupus.",
    symptoms: "Photosensitive malar rash (butterfly), discoid plaques with scarring/alopecia, subacute annular/papulosquamous lesions, mucosal ulcers",
    treatment: "Strict sun protection, topical corticosteroids/calcineurin inhibitors, antimalarials (hydroxychloroquine), systemic immunosuppressants for severe cases",
    image:'https://www.netmeds.com/images/cms/wysiwyg/blog/2022/10/1664793701_Cutaneous-Lupus-Erythematosus_898x450.jpg'  
},
  {
    id: 17,
    name: "Scabies",
    description: "Infestation by Sarcoptes scabiei mite causing intense pruritus through hypersensitivity reaction to mite proteins.",
    symptoms: "Burrows (pathognomonic), excoriated papules in web spaces/wrists/axillae/genitalia, nodular variant in children, Norwegian scabies in immunocompromised",
    treatment: "Permethrin 5% cream applied overnight to all skin surfaces, ivermectin orally, simultaneous treatment of close contacts, environmental decontamination",
    image:'https://skinsurgeryclinic.co.uk/wp-content/uploads/2024/03/scabies-1.jpg'  
},
  {
    id: 18,
    name: "Keratosis Pilaris",
    description: "Common benign disorder of keratinization affecting hair follicles, often with autosomal dominant inheritance.",
    symptoms: "Asymptomatic or mildly pruritic follicular keratotic papules on extensor arms/thighs/buttocks, possible erythema, worsens in winter",
    treatment: "Emollients with urea/lactic acid, topical retinoids, keratolytics (salicylic acid), laser therapy for persistent erythema, generally self-limiting",
    image:'https://osmiaskincare.com/cdn/shop/articles/192663534_m.jpg?v=1673824086&width=1500' 
},
  {
    id: 19,
    name: "Actinic Keratosis",
    description: "Premalignant keratinocyte dysplasia resulting from chronic UV exposure, with potential progression to squamous cell carcinoma.",
    symptoms: "Rough scaly macules/papules on sun-exposed skin (face, scalp, dorsal hands), variable erythema, possible tenderness, 'sandpaper' texture on palpation",
    treatment: "Field treatment with topical 5-FU/imiquimod/diclofenac, cryotherapy for discrete lesions, photodynamic therapy, regular skin cancer surveillance",
    image:'https://www.pharcos.com/wp-content/uploads/2025/01/cheratosi-attinica.webp'  
},
  {
    id: 20,
    name: "Basal Cell Carcinoma",
    description: "Slow-growing, locally invasive malignant neoplasm of basal keratinocytes, rarely metastatic but can cause significant local destruction.",
    symptoms: "Pearly papule/nodule with telangiectasias, possible central ulceration (rodent ulcer), pigmented variants mimic melanoma, morpheaform type appears scar-like",
    treatment: "Surgical excision (Mohs for high-risk locations), electrodesiccation and curettage for low-risk lesions, vismodegib for advanced cases, regular follow-up",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCjeXKQbnvudtNfT-sh7hwT07nH9tTtzX4w&s'  
},
  {
    id: 21,
    name: "Squamous Cell Carcinoma",
    description: "Malignant proliferation of keratinocytes with metastatic potential, arising from actinic damage or chronic wounds.",
    symptoms: "Hyperkeratotic nodule/plaque with induration, possible ulceration/bleeding, rapid growth in high-risk locations (lip/ear), often tender",
    treatment: "Surgical excision with clear margins (Mohs for high-risk), radiation therapy for non-surgical candidates, systemic therapy for metastatic disease",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTResWgsDk2pjNTXopjz7svpZzr6o9X6QucKxCEqCOzrwmkX6JO9qyezsdy34-qqezGnLo&usqp=CAU'  
},
  {
    id: 22,
    name: "Herpes Simplex",
    description: "Recurrent viral infection caused by HSV-1 (orolabial) or HSV-2 (genital), establishing latency in sensory ganglia.",
    symptoms: "Grouped vesicles on erythematous base progressing to erosions/crusts, prodromal tingling/pain, possible systemic symptoms in primary infection",
    treatment: "Oral antivirals (acyclovir/valacyclovir) for treatment/prophylaxis, topical antivirals of limited benefit, pain control, education about viral shedding",
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Herpes%28PHIL_1573_lores%29.jpg/640px-Herpes%28PHIL_1573_lores%29.jpg'  
},
  {
    id: 23,
    name: "Pityriasis Rosea",
    description: "Self-limited exanthem of unknown etiology, possibly related to HHV-6/7 reactivation, with characteristic herald patch.",
    symptoms: "Solitary oval scaly plaque (herald patch) followed by similar smaller lesions along Langer's lines (Christmas tree pattern), mild pruritus",
    treatment: "Supportive care (emollients, antihistamines), UVB phototherapy for severe cases, reassurance about self-resolution (6-8 weeks), possible post-inflammatory hypopigmentation",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGpFERpNHFCtsTreXxZeNg3ZaRiBdma5YfqQ&s'  
},
  {
    id: 24,
    name: "Folliculitis",
    description: "Inflammation/infection of hair follicles with multiple potential etiologies (bacterial, fungal, viral, or irritative).",
    symptoms: "Perifollicular pustules/papules, possible pruritus/pain, pseudofolliculitis from ingrown hairs, hot tub folliculitis from Pseudomonas",
    treatment: "Topical antibiotics (mupirocin) for bacterial, antifungals for Candida/Pityrosporum, warm compresses, hair removal technique modification",
    image:'https://assets.mayoclinic.org/content/dam/media/global/images/2023/02/10/superficial-folliculitis.jpg'  
},
  {
    id: 25,
    name: "Furunculosis",
    description: "Deep staphylococcal infection of hair follicle progressing to abscess formation, often recurrent in carriers.",
    symptoms: "Painful erythematous nodule progressing to fluctuance/pustulation, possible systemic symptoms, common in axillae/buttocks/thighs",
    treatment: "Incision and drainage for fluctuant lesions, culture-directed antibiotics, decolonization protocols (mupirocin/bleach baths) for recurrent cases",
    image:'https://m4b6f3p8.delivery.rocketcdn.me/app/uploads/2021/04/furunculosisBoil_57314_lg.jpg'  
},
  {
    id: 26,
    name: "Carbuncle",
    description: "Coalescence of multiple infected follicles forming a deep abscess with multiple drainage points.",
    symptoms: "Large tender erythematous indurated plaque with multiple pustules, systemic symptoms common (fever/malaise), possible bacteremia",
    treatment: "Incision and drainage with packing, systemic antibiotics (covering MRSA if suspected), possible hospitalization for systemic illness/comorbidities",
    image:'https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/03/carbuncles-1296x728-slide3-300x169.jpg'  
},
  {
    id: 27,
    name: "Molluscum Contagiosum",
    description: "Poxvirus infection causing umbilicated papules, common in children and sexually active adults.",
    symptoms: "Flesh-colored dome-shaped papules with central umbilication, possible surrounding eczema, spontaneous resolution over months-years",
    treatment: "Observation in immunocompetent patients, cryotherapy/curettage for bothersome lesions, cantharidin application, imiquimod for extensive cases",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFx1NY-yDi8cGducZW-1DvZVyXVAxgO8QMSg&s' 
},
  {
    id: 28,
    name: "Tinea Versicolor",
    description: "Superficial fungal infection caused by Malassezia species causing hypo- or hyperpigmented macules.",
    symptoms: "Oval scaly macules on trunk/upper arms (hypopigmented in dark skin, hyperpigmented in light skin), mild pruritus, worsens in humidity",
    treatment: "Topical selenium sulfide/sodium sulfacetamide, oral antifungals (fluconazole/itraconazole) for extensive cases, high recurrence rate requiring maintenance",
    image:'https://www.health.com/thmb/5hOvdvLxfsR3njw3pxInA6xqZlc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-467639423-c466f0352fc741299410b31909b3d563.jpg'  
},
  {
    id: 29,
    name: "Perioral Dermatitis",
    description: "Inflammatory facial eruption often related to topical steroid use or cosmetic products.",
    symptoms: "Small papules/pustules on erythematous base around mouth (sparing vermillion border), possible periorbital involvement, burning sensation",
    treatment: "Discontinue topical steroids, tetracycline-class antibiotics (topical/oral), gentle skincare, slow taper of steroids if previously used long-term",
    image:'https://swissdermaclinic.ch/wp-content/uploads/2025/02/Perorale-Dermatitis-%E2%80%93-desktop.jpg'
},
  {
    id: 30,
    name: "Lichen Planus",
    description: "T-cell mediated inflammatory disorder affecting skin/mucous membranes with characteristic violaceous papules.",
    symptoms: "Pruritic polygonal violaceous flat-topped papules with Wickham striae, possible oral reticulate white plaques, nail dystrophy, scalp scarring alopecia",
    treatment: "Potent topical steroids first-line, intralesional steroids for hypertrophic lesions, systemic agents (retinoids/mycophenolate) for severe cases",
    image:'https://dermskinhealth.com/wp-content/uploads/2022/05/lichen-planus-hero.jpeg'  
},
  {
    id: 31,
    name: "Necrotizing Fasciitis",
    description: "Life-threatening soft tissue infection causing rapid tissue necrosis, requiring emergent surgical intervention.",
    symptoms: "Severe pain disproportionate to exam findings, erythema progressing to dusky discoloration, crepitus, systemic toxicity, rapid progression",
    treatment: "Emergent surgical debridement, broad-spectrum IV antibiotics (including MRSA/anaerobe coverage), ICU support, possible hyperbaric oxygen adjunct",
    image:'https://clinmedjournals.org/articles/ijfa/ijfa-6-072-004.jpg' 
},
  {
    id: 32,
    name: "Erythema Multiforme",
    description: "Acute hypersensitivity reaction often triggered by infections (especially HSV) or medications.",
    symptoms: "Targetoid lesions with three zones (dusky center, pale edema, erythematous rim), acral distribution, possible mucosal involvement, self-limited",
    treatment: "Identify/treat trigger (HSV suppression if recurrent), symptomatic care, systemic steroids controversial, ophthalmology consult for ocular involvement",
    image:'https://www.nidirect.gov.uk/sites/default/files/styles/nigov_float_x1/public/images/A-Z_erythema-multiforme-2_22012020.jpg?itok=pjtW-5gV'  
},
  {
    id: 33,
    name: "Granuloma Annulare",
    description: "Benign inflammatory dermatosis of unknown etiology with characteristic annular arrangement.",
    symptoms: "Asymptomatic flesh-colored or erythematous annular plaques with raised borders, common on dorsal hands/feet, generalized variant in children",
    treatment: "Observation often sufficient (50% resolve in 2 years), topical/intralesional steroids, phototherapy for disseminated cases, possible association with diabetes",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcS0sxMgLPBg7AqSF6MBv2eDf9G8KIunEBg&s'  
},
  {
    id: 34,
    name: "Dyshidrotic Eczema",
    description: "Recurrent vesicular eruption of palms/soles, often related to atopy or contact allergens.",
    symptoms: "Deep-seated 'tapioca-like' vesicles on palms/lateral fingers, intense pruritus, possible secondary infection, chronic cases cause fissuring",
    treatment: "Potent topical steroids under occlusion, cold compresses for acute flares, oral steroids for severe cases, patch testing to identify allergens",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadk6mp53A6vzJZroTdqXExvFbf4778767nw&s' 
},
  {
    id: 35,
    name: "Stevens-Johnson Syndrome",
    description: "Severe mucocutaneous reaction typically drug-induced, representing a spectrum with toxic epidermal necrolysis.",
    symptoms: "Prodromal fever/malaise followed by painful erythema progressing to necrosis, positive Nikolsky sign, extensive mucosal erosions, high mortality",
    treatment: "Immediate discontinuation of causative drug, ICU/burn unit care, fluid/electrolyte management, wound care, IVIG controversial, avoid systemic steroids",
    image:'https://images.ctfassets.net/4f3rgqwzdznj/38CHSsjZc0QOm67IajrqAB/9f0fa7e0eb9d11e18f681ddecbd54513/stevens_johnson_syndrome_3045632.jpg'  
},
  {
    id: 36,
    name: "Urticaria Pigmentosa",
    description: "Cutaneous manifestation of mastocytosis with characteristic Darier's sign (urtication upon rubbing).",
    symptoms: "Multiple tan-brown macules/papules that wheal when rubbed, possible systemic symptoms (flushing/hypotension), common in children",
    treatment: "H1/H2 antihistamines, mast cell stabilizers (cromolyn), strict avoidance of mast cell degranulators (alcohol/narcotics/NSAIDs), epinephrine for anaphylaxis",
    image:'https://metrobostoncp.com/wp-content/uploads/2024/11/urticaria-pigmentosa.jpg' 
},
  {
    id: 37,
    name: "Pyoderma Gangrenosum",
    description: "Neutrophilic dermatosis often associated with systemic disease (IBD, arthritis, hematologic disorders).",
    symptoms: "Painful ulcer with violaceous undermined borders, pathergy phenomenon, possible cribriform scarring, often on lower extremities",
    treatment: "High-potency topical/systemic steroids, cyclosporine, biologics (TNF inhibitors), wound care without aggressive debridement (worsens with pathergy)",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTts1vQTd_zOC40xkjA1AGhewLzhkTz_zZA1wMuB-qFPly_6tIcR9DjJvk90vsiDV66poM&usqp=CAU'  
},
  {
    id: 38,
    name: "Cutaneous T-cell Lymphoma",
    description: "Extranodal non-Hodgkin lymphoma primarily involving skin, with mycosis fungoides being most common variant.",
    symptoms: "Early patches/plaques resembling eczema/psoriasis, later tumors/erythroderma, possible Sézary syndrome (leukemic involvement with circulating cells)",
    treatment: "Topical nitrogen mustard/bexarotene, phototherapy (NBUVB/PUVA), systemic therapies (methotrexate/bexarotene), biologics, radiation for localized disease",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMOV9NlvCdcig6oqYjvd-8iJWRR2vyyCEOw&s'  
},
  {
    id: 39,
    name: "Epidermolysis Bullosa",
    description: "Group of genetic disorders causing mechanical fragility of skin/mucous membranes from defective anchoring proteins.",
    symptoms: "Blistering with minor trauma, varying severity by subtype (simplex/junctional/dystrophic), possible extracutaneous complications (strictures/squamous cell carcinoma)",
    treatment: "Wound care/protection, infection prevention, nutritional support, gene therapy under investigation, multidisciplinary management essential",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9To9pIucRAUakBOl9-IkVEiugZp6bCI7p3w&s'  
},
  {
    id: 40,
    name: "Hidradenitis Suppurativa",
    description: "Chronic inflammatory disorder of apocrine gland-bearing areas, part of follicular occlusion tetrad.",
    symptoms: "Recurrent painful nodules/abscesses in axillae/groin/inframammary areas, progressing to sinus tracts/scarring, possible malodorous drainage",
    treatment: "Topical clindamycin/resorcinol, oral antibiotics (doxycycline/clindamycin-rifampin), biologics (TNF inhibitors), wide surgical excision for severe cases",
    image:'https://www.senderrarx.com/hubfs/Hidradenitis%20Suppurativa%20ICD%2010%20%282%29.png'  
},
  {
    id: 41,
    name: "Dermatographism",
    description: "Exaggerated wheal-and-flare response to minor trauma or pressure, representing a form of physical urticaria.",
    symptoms: "Linear wheals appearing within minutes of stroking skin, pruritus variable, possible delayed pressure urticaria component, often idiopathic",
    treatment: "H1 antihistamines (non-sedating preferred), possible H2 blockers as adjunct, omalizumab for refractory cases, avoidance of triggering stimuli",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCvKH-oLksSqkS3zRWHLHRJa1hjOQJorWBA&s'  
},
  {
    id: 42,
    name: "Pemphigus Vulgaris",
    description: "Autoimmune blistering disorder targeting desmoglein 3 (mucosal) or 3+1 (mucocutaneous), requiring urgent treatment.",
    symptoms: "Painful mucosal erosions (often initial presentation), flaccid bullae on skin with positive Nikolsky sign, extensive erosions from ruptured blisters",
    treatment: "High-dose systemic steroids, steroid-sparing agents (azathioprine/mycophenolate), rituximab first-line in many centers, IVIG for refractory cases",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrxm0CtLtxRLXLcBlmySdAy6DadxoJGYuMYRe6698SUOQrA4ZYxt0W8P9Z5ecFKOWkHQ&usqp=CAU'  
},
  {
    id: 43,
    name: "Bullous Pemphigoid",
    description: "Autoimmune subepidermal blistering disorder more common in elderly, targeting BP180/BP230 antigens.",
    symptoms: "Intense pruritus preceding eruption, tense bullae on erythematous/urticarial base, lower abdomen/inner thighs common sites, mucosal involvement rare",
    treatment: "Potent topical steroids for limited disease, oral steroids with steroid-sparing agents for extensive, tetracycline/niacinamide as alternative in mild cases",
    image:'https://www.pcds.org.uk/imager/gallery/clinical/bullous-pemphigoid1/11783/Bull_pem_4_fee391183f15cb4d62773032fe0be92d.jpg'  
},
  {
    id: 44,
    name: "Varicella",
    description: "Primary infection by varicella-zoster virus (VZV) causing widespread vesicular eruption, highly contagious.",
    symptoms: "Prodromal fever/malaise followed by 'dew drop on rose petal' vesicles in successive crops, possible bacterial superinfection, more severe in adults",
    treatment: "Supportive care (calamine/antihistamines), acyclovir for high-risk patients (immunocompromised/adults), varicella vaccine for prevention",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfxHSmLMJPAHPJTa-ylEHUqhS5eeWkO2r7w&s'  
},
  {
    id: 45,
    name: "Rubeola",
    description: "Highly contagious viral exanthem caused by measles virus, with characteristic Koplik spots and cephalocaudal spread.",
    symptoms: "Prodromal fever/cough/coryza/conjunctivitis, pathognomonic enanthem (Koplik spots), erythematous maculopapular rash spreading head-to-toe",
    treatment: "Supportive care, vitamin A for all cases (reduces complications), post-exposure prophylaxis with vaccine/immunoglobulin, strict isolation precautions",
    image:'https://www.grxstatic.com/4f3rgqwzdznj/3z4eCVEHeiZGh3rFpu6N77/3d2646e8a00b9f9256cf5699897ca34d/closeup_neck_with_measles_rash_2152300024.jpg?format=pjpg&auto=webp&width=704'  
},
  {
    id: 46,
    name: "Rubella",
    description: "Mild viral illness with teratogenic potential in primary infection during pregnancy (congenital rubella syndrome).",
    symptoms: "Pink maculopapular rash beginning on face spreading downward, postauricular/suboccipital lymphadenopathy, arthralgias common in adults",
    treatment: "Supportive care, MMR vaccine for prevention, crucial to confirm immunity in women of childbearing age, isolation during infectious period",
    image:'https://www.cdc.gov/rubella/media/images/Rubella-rash-on-face_GettyImages-1214062216-1200x675-1.jpg'  
},
  {
    id: 47,
    name: "Erythema Infectiosum",
    description: "Viral exanthem caused by parvovirus B19 with characteristic 'slapped cheek' appearance.",
    symptoms: "Bright red malar erythema (slapped cheeks) followed by lacy reticular rash on extremities, possible arthralgias in adults, transient aplastic crisis in hemoglobinopathies",
    treatment: "Supportive care, awareness of fetal hydrops risk in pregnant women exposed to parvovirus B19, isolation unnecessary after rash appears",
    image:'https://m4b6f3p8.delivery.rocketcdn.me/app/uploads/2021/04/erythemaInfectiosumFifthDisease_4173_lg.jpg'  
},
  {
    id: 48,
    name: "Hand-Foot-Mouth Disease",
    description: "Common childhood viral illness caused by coxsackievirus A16 or enterovirus 71, with characteristic distribution.",
    symptoms: "Painful oral vesicles/ulcers, tender acral vesicles (hands/feet/buttocks), low-grade fever, possible nail changes (Beau lines/onychomadesis) weeks later",
    treatment: "Symptomatic care (oral analgesics, hydration), self-limited course (7-10 days), strict hygiene to prevent spread (highly contagious)",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfFONyg5JQVomPXhUNmDK-_Um95gCoJi6tQ&s'  
},
  {
    id: 49,
    name: "Cutaneous Larva Migrans",
    description: "Zoonotic infection caused by animal hookworm larvae migrating through skin, common in tropical areas.",
    symptoms: "Serpiginous erythematous track advancing several cm/day, intense pruritus, common on feet/buttocks from bare skin contact with contaminated soil",
    treatment: "Topical thiabendazole (if limited), oral ivermectin/albendazole for extensive disease, self-resolution possible but treatment reduces morbidity",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_am9cZzi3Y6cv_t9llwVCryBQu9YH_iKqjTUreffP16DfogRgklVaUSmDJk6LymgHvZk&usqp=CAU'  
},
  {
    id: 50,
    name: "Lyme Disease",
    description: "Tick-borne spirochetal infection caused by Borrelia burgdorferi, with characteristic early cutaneous manifestation.",
    symptoms: "Erythema migrans (expanding annular erythema with central clearing), possible flu-like symptoms, later manifestations (arthritis/neuro/cardiac) if untreated",
    treatment: "Doxycycline/amoxicillin/ceftriaxone depending on stage/age, prompt treatment prevents late complications, tick prevention strategies crucial",
    image:'https://harpendenmedical.com/wp-content/uploads/2024/06/Harpenden-Medical-Lyme-Disease.jpg'  
},
  {
    id: 51,
    name: "Rocky Mountain Spotted Fever",
    description: "Potentially fatal tick-borne rickettsial infection requiring prompt treatment to prevent complications.",
    symptoms: "High fever, severe headache, macular rash beginning on wrists/ankles spreading centripetally, possible petechiae, history of tick exposure",
    treatment: "Empiric doxycycline (all ages) when clinical suspicion exists, delay in treatment increases mortality, supportive care for complications",
    image:'https://img.medscapestatic.com/pi/meds/ckb/25/37425tn.jpg' 
},
  {
    id: 52,
    name: "Scarlet Fever",
    description: "Streptococcal pharyngitis with characteristic exanthem from erythrogenic toxin-producing strains.",
    symptoms: "Sandpaper-like erythematous rash with perioral pallor, strawberry tongue, pharyngitis/fever, Pastia's lines (accentuated rash in flexural creases)",
    treatment: "Penicillin or alternative for GAS pharyngitis, prevents rheumatic fever, supportive care, infectious until 24 hours of antibiotics completed",
    image:'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/176/176242/scarlet-fever-image-credit-estreya-2007.jpg?w=1155&h=1545'  
},
  {
    id: 53,
    name: "Toxic Epidermal Necrolysis",
    description: "Life-threatening mucocutaneous reaction with extensive epidermal detachment, most often drug-induced.",
    symptoms: "Painful erythema progressing to widespread necrosis/Nikolsky sign, >30% BSA involvement, severe mucosal erosions, high mortality from sepsis/fluid loss",
    treatment: "ICU/burn unit care, discontinuation of causative drug, fluid/electrolyte management, wound care similar to burns, IVIG/cyclosporine controversial",
    image:'https://www.dermacompass.net/secure-uploads/attachments/ckhomrbrg001yh75wtvevt8vf-g7584-k-00388.jpg'  
},
  {
    id: 54,
    name: "Erythroderma",
    description: "Generalized inflammatory skin condition involving >90% BSA, representing reaction pattern to various underlying etiologies.",
    symptoms: "Erythema/scale over entire body, possible exfoliation, thermoregulatory dysfunction (hypothermia/hyperthermia), high-output cardiac failure, lymphadenopathy",
    treatment: "Hospitalization for monitoring, identify/treat underlying cause (drugs/CTCL/psoriasis/eczema), supportive care, topical steroids, systemic therapy as needed",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ992AV88d-zbysnMKtqZRYhvgAsts_00Z1-UVO6LAFQuRDVwj5FsxukLbAy8VvovSoKbc&usqp=CAU' 
},
  {
    id: 55,
    name: "Paronychia",
    description: "Inflammation/infection of nail folds, acute (usually bacterial) or chronic (often Candida with contributing factors).",
    symptoms: "Acute: painful erythema/swelling/pus at nail fold; Chronic: tender erythema with absent cuticle, possible nail dystrophy, common in hand immersion",
    treatment: "Acute: warm soaks/incision if fluctuant, antibiotics if extensive; Chronic: keep dry, topical steroids/antifungals, address predisposing factors",
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Paronychia.jpg/640px-Paronychia.jpg'  
},
  {
    id: 56,
    name: "Onychomycosis",
    description: "Fungal infection of nail plate causing discoloration/thickening, most commonly caused by dermatophytes.",
    symptoms: "Distal/lateral subungual hyperkeratosis, yellow-white discoloration, onycholysis, possible total dystrophic involvement, often asymptomatic initially",
    treatment: "Confirm diagnosis before treatment (KOH/culture), oral terbinafine (dermatophytes) or itraconazole (Candida), topical efinaconazole/ciclopirox for limited disease",
    image:'https://thefootpractice.com/wp-content/uploads/210707-The-Foot-Practice-Prevent-Toenail-Fugus.jpg'  
},
  {
    id: 57,
    name: "Alopecia Areata",
    description: "Autoimmune non-scarring hair loss with characteristic 'exclamation point' hairs at periphery.",
    symptoms: "Well-circumscribed round patches of hair loss, possible nail pitting, may progress to totalis/universalis, spontaneous regrowth common but unpredictable",
    treatment: "Intralesional steroids first-line for patchy disease, topical steroids/anthralin, contact immunotherapy (DPCP), JAK inhibitors for extensive cases",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLSedBLF9QzyHcuUpqRKdA9KiF6TAw9Gvrrw&s' 
},
  {
    id: 58,
    name: "Telogen Effluvium",
    description: "Temporary hair shedding from premature shift of follicles into telogen phase, typically after physiologic stress.",
    symptoms: "Diffuse thinning 2-3 months after trigger (childbirth/surgery/fever/severe stress), positive hair pull test, no scarring, regrowth usually complete",
    treatment: "Identify/address underlying trigger, reassurance about self-resolution, possible iron/zinc supplementation if deficient, minoxidil may hasten recovery",
    image:'https://cdn-ilahign.nitrocdn.com/CPhYbAyvcMMpCDqFGnpvoFYDGNuysnvh/assets/images/optimized/rev-a755dac/fulhamscalphairclinic.com/wp-content/uploads/2022/05/Fulham-Telogen-Effluvium-1024x586.png'  
},
  {
    id: 59,
    name: "Keloid",
    description: "Excessive scar tissue extending beyond original wound boundaries, more common in darker skin types.",
    symptoms: "Firm raised scar expanding over time, possible pruritus/pain, common on ears/chest/shoulders, recurrence common after excision alone",
    treatment: "Intralesional steroids first-line, cryotherapy, pressure therapy, silicone sheets, combination approaches often needed, radiation post-excision for recalcitrant",
    image:'https://hudgensmd.com/wp-content/uploads/2016/12/keloids-1200x675.jpg'  
},
  {
    id: 60,
    name: "Cherry Angioma",
    description: "Common benign vascular proliferation of senescent endothelial cells, increasing with age.",
    symptoms: "Bright red dome-shaped papules 1-5mm, blanch with pressure, multiple lesions typical, trunk most common location, asymptomatic",
    treatment: "None required, pulsed dye laser/electrodessication for cosmetic concerns, possible association with certain chemical exposures (mustard gas/bromides)",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT25cHWYEFVgXxdB50mw8L-STceYUoIgcx6A&s'  
},
  {
    id: 61,
    name: "Sebaceous Hyperplasia",
    description: "Benign enlargement of sebaceous glands appearing as yellowish papules, common on face.",
    symptoms: "Soft yellowish umbilicated papules 2-4mm, central dell, common on forehead/cheeks, may be confused with basal cell carcinoma",
    treatment: "Electrodessication/curettage, laser ablation (CO2/pulsed dye), oral isotretinoin for numerous lesions, generally cosmetic concern only",
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sebaceous_hyperplasia.jpg/1200px-Sebaceous_hyperplasia.jpg'  
},
  {
    id: 62,
    name: "Dermatofibroma",
    description: "Common benign fibrous skin nodule often following minor trauma/insect bite.",
    symptoms: "Firm tan-brown papule/nodule, 'dimple sign' when laterally compressed, most on extremities, persistent but stable, occasionally pruritic",
    treatment: "Observation sufficient, excision if diagnostic uncertainty or bothersome, recurrence possible if not completely excised, no malignant potential",
    image:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/08/2404_pinch_test_header-1024x575.jpg?w=1155&h=1528'  
},
  {
    id: 63,
    name: "Pyogenic Granuloma",
    description: "Rapidly growing vascular lesion often following trauma or during pregnancy (granuloma gravidarum).",
    symptoms: "Friable erythematous papule/nodule that bleeds easily, rapid growth over weeks, common on fingers/face/mucosa, possible satellitosis",
    treatment: "Complete excision with histologic confirmation (can resemble amelanotic melanoma), pulsed dye laser, possible spontaneous regression after pregnancy",
    image:'https://www.news-medical.net/image-handler/picture/2017/5/shutterstock_182431502.jpg' 
},
  {
    id: 64,
    name: "Miliaria",
    description: "Obstruction of eccrine sweat ducts causing various clinical patterns based on level of obstruction.",
    symptoms: "Miliaria crystallina (superficial clear vesicles), rubra (erythematous papules/vesicles), profunda (flesh-colored deeper papules), pruritus common",
    treatment: "Cool environment, loose clothing, topical antipruritics (calamine), possible topical steroids for inflammation, prevention of sweating/occlusion",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR5dvh0DQqMPlSi7rkR-Fb1SH5H9f83VRZ3vcHnyYNiyA3APE9uZXFeYppSCKtgXuaXMI&usqp=CAU'  
},
  {
    id: 65,
    name: "Intertrigo",
    description: "Inflammation in body folds from friction/moisture with secondary infection (Candida/bacteria).",
    symptoms: "Erythema/maceration in axillae/inframammary/groin/abdominal folds, possible satellite pustules in candidal infection, malodor in bacterial cases",
    treatment: "Keep area dry (absorbent powders), low-potency topical steroids with antifungals/antibacterials as needed, weight loss if obesity-related",
    image:'https://dam.gesund.bund.de/assets/nummulaeres-ekzem-1-small.webp' 
},
  {
    id: 66,
    name: "Nummular Eczema",
    description: "Chronic pruritic dermatitis with coin-shaped plaques, often associated with xerosis.",
    symptoms: "Well-circumscribed coin-shaped erythematous plaques with scale, common on extremities, possible oozing/crusting in acute phase, worsens in winter",
    treatment: "Emollients, topical steroids (potency based on location/severity), wet wraps, possible oral antibiotics for secondary infection, UVB phototherapy",
    image:'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/10/Nummular-eczema-coin-shaped-lesions-of-dry-skin-body2.jpg?w=1155&h=1528'  
},
  {
    id: 67,
    name: "Prurigo Nodularis",
    description: "Chronic condition with intensely pruritic nodules from repeated scratching, often associated with underlying pruritic conditions.",
    symptoms: "Hyperkeratotic nodules with excoriations, common on extensor surfaces, 'picker's nodules', lichen simplex chronicus variant possible",
    treatment: "High-potency topical steroids under occlusion, intralesional steroids, gabapentin/pregabalin for neuropathic component, thalidomide/naltrexone for refractory",
    image:'https://images.everydayhealth.com/images/skin-beauty/what-is-prurigo-modularis-1440x810.jpg?sfvrsn=9a258c57_5'  
},
  {
    id: 68,
    name: "Xerosis",
    description: "Abnormal skin dryness from impaired barrier function, common in elderly/winter/low humidity.",
    symptoms: "Dry rough skin with fine scale, possible fissuring/pruritus, worsens with frequent bathing/harsh soaps, may progress to eczema craquelé",
    treatment: "Emollients (ointments > creams > lotions), humidifiers, short showers with lukewarm water, soap substitutes, topical urea/lactic acid for scale",
    image:'https://soteriskin.com/cdn/shop/articles/dry-skin-palm.jpg?crop=center&height=1000&v=1667960483&width=1000'  
},
  {
    id: 69,
    name: "Ichthyosis Vulgaris",
    description: "Common inherited disorder of keratinization with reduced filaggrin, often associated with atopy.",
    symptoms: "Fine white scale prominent on extensor surfaces, spared flexures, possible hyperlinear palms, keratosis pilaris often coexists, worsens in winter",
    treatment: "Regular emollients with urea/lactic acid, topical retinoids, bath oils, humidification, mild keratolytics (salicylic acid), genetic counseling",
    image:'https://www.pcds.org.uk/imager/gallery/clinical/ichthyosis/10665/Icht_100main1_fee391183f15cb4d62773032fe0be92d.jpg'  
},
  {
    id: 70,
    name: "Porphyria Cutanea Tarda",
    description: "Porphyrin metabolism disorder causing photosensitivity and blistering, often triggered by iron/alcohol/estrogens.",
    symptoms: "Fragility/blisters on sun-exposed areas (hands most common), milia/hyperpigmentation/scarring, possible hypertrichosis, associated with HCV/hemochromatosis",
    treatment: "Phlebotomy (reduce iron), low-dose antimalarials (hydroxychloroquine), sun protection, avoid alcohol/estrogens/iron supplements, screen for HCV/HIV",
    image:'https://ars.els-cdn.com/content/image/1-s2.0-S0190962298704645-gr1.jpg'  
},
  {
    id: 71,
    name: "Pseudofolliculitis Barbae",
    description: "Inflammatory condition from ingrown hairs, common in curly-haired individuals with close shaving.",
    symptoms: "Tender follicular papules/pustules in beard/neck areas, possible post-inflammatory hyperpigmentation, pseudokeloids in chronic cases",
    treatment: "Hair growth methods modification (electric razor/single blade), topical retinoids/antibiotics, laser hair removal definitive for many patients",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwOZKKABEzkWNGttAN_WpRxDgb2Iq-SoSINw&s'  
},
  {
    id: 72,
    name: "Acanthosis Nigricans",
    description: "Velvety hyperpigmented plaques in flexural areas, most commonly associated with insulin resistance.",
    symptoms: "Symmetrical velvety brown plaques in axillae/neck/groin, possible skin tags, malignant form has rapid onset with widespread involvement",
    treatment: "Address underlying insulin resistance (weight loss/metformin), topical retinoids/urea, laser therapy for cosmetic improvement, evaluate for malignancy if abrupt onset",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKUHmqVYCiL0g1kteLzaSbvvFbCDpcOJKlH4nk7IPHt7oXDiiuWLf24h5Y6UEtBtGHDQ&usqp=CAU'  
},
  {
    id: 73,
    name: "Erythema Nodosum",
    description: "Panniculitis presenting as tender nodules, often representing hypersensitivity reaction to various triggers.",
    symptoms: "Painful erythematous nodules typically on pretibial areas, no ulceration, possible fever/arthralgias, resolves with bruise-like discoloration",
    treatment: "Identify/treat underlying cause (streptococcal infection/sarcoidosis/medications), NSAIDs, potassium iodide, systemic steroids for severe cases",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKAUtMxFXriGd2T5W91oB135du24kFle6vWczswIdfspB897mY5JnlrycWpHjV9Eqn14&usqp=CAU'  
},
  {
    id: 74,
    name: "Lichen Simplex Chronicus",
    description: "Localized lichenified plaque from chronic rubbing/scratching, representing end-stage pruritic process.",
    symptoms: "Well-demarcated lichenified plaque with exaggerated skin markings, possible excoriations/hyperpigmentation, common in reachable areas (ankles/scalp)",
    treatment: "High-potency topical steroids under occlusion, intralesional steroids, behavioral modification to stop itch-scratch cycle, possible gabapentin for neuropathic itch",
    image:'https://metrobostoncp.com/wp-content/uploads/2024/06/lichen-simplex-chronicus.jpg' 
},
  {
    id: 75,
    name: "Behçet's Disease",
    description: "Multisystem vasculitis with characteristic oral/genital ulcers and ocular involvement.",
    symptoms: "Recurrent painful oral ulcers, genital ulcers, uveitis, possible pathergy, skin manifestations (erythema nodosum-like lesions/pseudofolliculitis)",
    treatment: "Topical steroids for mucosal ulcers, colchicine for mucocutaneous disease, azathioprine/anti-TNF for severe systemic/ocular involvement",
    image:'https://www.sedaerdogan.com.tr/files/behcet-hastaligi_446_1620641330.jpg' 
},
  {
    id: 76,
    name: "Darier's Disease",
    description: "Autosomal dominant genodermatosis with abnormal keratinization due to ATP2A2 mutation.",
    symptoms: "Greasy hyperkeratotic papules in seborrheic areas, nail longitudinal red/white streaks, palmar pits, worsens with heat/sun/infection",
    treatment: "Topical retinoids/steroids, oral retinoids for severe cases, antibiotics for secondary infection, genetic counseling, sun protection",
    image:'https://www.pcds.org.uk/imager/gallery/clinical/dariers-disease/10701/Dariers_6_fee391183f15cb4d62773032fe0be92d.jpg' 
},
  {
    id: 77,
    name: "Hailey-Hailey Disease",
    description: "Autosomal dominant acantholytic disorder causing recurrent erosions in intertriginous areas.",
    symptoms: "Painful erosions/vesicles in axillae/groin/inframammary areas, possible maceration/fissuring, worsens with heat/friction/infection",
    treatment: "Topical steroids/antibiotics/antifungals, botulinum toxin for sweating reduction, CO2 laser ablation for recalcitrant areas, genetic counseling",
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/HHD_R_Axilla.jpg/250px-HHD_R_Axilla.jpg'  
},
  {
    id: 78,
    name: "Pemphigus Foliaceus",
    description: "Autoimmune blistering disorder targeting desmoglein 1, causing superficial erosions.",
    symptoms: "Superficial erosions/crusting on seborrheic areas (scalp/face/chest), positive Nikolsky sign in perilesional skin, mucosal sparing",
    treatment: "Similar to pemphigus vulgaris but often requires less aggressive therapy (topical steroids/antiseptics initially), systemic steroids/immunosuppressants if extensive",
    image:'https://img.medscapestatic.com/pi/meds/ckb/68/27868tn.jpg'  
},
  {
    id: 79,
    name: "Linear IgA Disease",
    description: "Autoimmune blistering disorder with linear IgA deposition at basement membrane, drug-induced or idiopathic.",
    symptoms: "Annular plaques with peripheral vesicles ('cluster of jewels'), possible mucosal involvement, more common in children (chronic bullous disease of childhood)",
    treatment: "Dapsone first-line, sulfapyridine/sulfamethoxypyridazine alternatives, systemic steroids for severe cases, usually self-limited in children",
    image:'https://www.pcds.org.uk/imager/gallery/clinical/linear-iga-disease-syn-chronic-bullous-disease-of-childhood-linear-iga-bul/11762/Linear_IgA_1_fee391183f15cb4d62773032fe0be92d.jpg'  
},
  {
    id: 80,
    name: "Erythema Annulare Centrifugum",
    description: "Recurrent figurate erythema with characteristic trailing scale, often idiopathic.",
    symptoms: "Erythematous annular plaques with central clearing and trailing scale, slowly enlarges, possible mild pruritus, trunk/buttocks common locations",
    treatment: "Identify/treat underlying cause (infections/malignancy), topical steroids for symptomatic relief, possible spontaneous resolution over months-years",
    image:'https://www.pcds.org.uk/imager/gallery/clinical/annular-and-figurate-erythema/10891/EAC2_fee391183f15cb4d62773032fe0be92d.jpg'  
},
  {
    id: 81,
    name: "Lichen Sclerosus",
    description: "Chronic inflammatory condition commonly affecting anogenital skin, with significant morbidity if untreated.",
    symptoms: "Porcelain-white atrophic plaques, possible purpura/fissuring, pruritus/pain, vulvar/scrotal involvement may lead to scarring/phimosis",
    treatment: "Ultrapotent topical steroids first-line, topical calcineurin inhibitors as steroid-sparing, long-term monitoring for squamous cell carcinoma risk",
    image:'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/09/58/ds00725_im00471_ans7_lichensclerosus_jpg.jpg' 
},
  {
    id: 82,
    name: "Morphea",
    description: "Localized scleroderma causing fibrotic plaques without systemic involvement.",
    symptoms: "Ivory-colored indurated plaques with lilac border, possible linear variants (en coup de sabre), joint contractures if over joints",
    treatment: "Topical steroids/calcineurin inhibitors for limited disease, phototherapy/methotrexate for extensive, physical therapy to prevent contractures",
    image:'https://upload.wikimedia.org/wikipedia/commons/7/71/MercMorphea.JPG' 
},
  {
    id: 83,
    name: "Necrobiosis Lipoidica",
    description: "Granulomatous condition often associated with diabetes, causing characteristic pretibial plaques.",
    symptoms: "Yellow-brown atrophic plaques with telangiectasias and raised violaceous border, central ulceration possible, >60% have/precede diabetes",
    treatment: "Optimize glucose control, topical/intralesional steroids, antiplatelet therapy (aspirin/dipyridamole), biologics (TNF inhibitors) for ulcerative cases",
    image:'https://dbdermatologiabarcelona.com/wp-content/uploads/2014/07/necrobiosis-lipoidica.jpeg'  
},
  {
    id: 84,
    name: "Sweet's Syndrome",
    description: "Neutrophilic dermatosis characterized by painful plaques, often paraneoplastic or post-infection.",
    symptoms: "Tender erythematous plaques/papules with pseudovesiculation, fever/leukocytosis common, possible mucosal involvement, rapid onset",
    treatment: "Systemic steroids first-line (rapid response), potassium iodide/colchicine/dapsone alternatives, evaluate for underlying malignancy in appropriate patients",
    image:'https://www.netmeds.com/images/cms/wysiwyg/blog/2020/11/1606201864_Sweet_big_450.jpg' 
},
  {
    id: 85,
    name: "Lupus Pernio",
    description: "Chronic cutaneous sarcoidosis variant with characteristic violaceous facial plaques.",
    symptoms: "Indurated violaceous plaques on nose/cheeks/ears, possible nasal septum involvement, often associated with pulmonary/cardiac sarcoidosis",
    treatment: "Intralesional steroids, antimalarials, methotrexate, TNF inhibitors for refractory cases, systemic evaluation for extracutaneous sarcoidosis",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRwcVN8Z-kFejBxveQhJCE1GTRb_eF1ePUw&s'  
},
  {
    id: 86,
    name: "Erythema Gyratum Repens",
    description: "Figurate erythema with 'wood-grain' pattern, highly associated with internal malignancy.",
    symptoms: "Concentric erythematous rings with scale migrating daily, trunk most common, intense pruritus, nearly always paraneoplastic (lung cancer most common)",
    treatment: "Identify/treat underlying malignancy, skin lesions often resolve with tumor treatment, topical steroids for symptomatic relief",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IeVqKgCD-uWTFzRn8nWbrB1Mo64SseTf-w6Lj4cohJAjG-Z-8vgSsTOaU4fUi8cZcpM&usqp=CAU'  
},
  {
    id: 87,
    name: "Pityriasis Lichenoides",
    description: "Spectrum of cutaneous T-cell dyscrasias ranging from acute (PLEVA) to chronic (PLC) forms.",
    symptoms: "PLEVA: hemorrhagic papulovesicles; PLC: scaly pink-brown papules, possible post-inflammatory hypopigmentation, trunk/extremities common",
    treatment: "Phototherapy (NBUVB), oral antibiotics (erythromycin/tetracyclines), possible spontaneous resolution (especially in children), methotrexate for severe cases",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGqfZ8fBfLGsVgCoKgZgxsj_IFNzin2sPfvvy-JUGkluVqH1Qs1BiUMbqyI3PFdxG-AA&usqp=CAU' 
},
  {
    id: 88,
    name: "Langerhans Cell Histiocytosis",
    description: "Proliferative disorder of Langerhans cells with varying systemic involvement.",
    symptoms: "Scalp/seborrheic area erythema with yellow crust resembling 'cradle cap', possible petechiae, systemic variants involve bone/lungs/pituitary",
    treatment: "Topical steroids/chemotherapy for skin-limited disease, systemic chemotherapy for multisystem involvement, BRAF inhibitors for mutation-positive cases",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCNWyAxpMB994tW_Dy1agcT1GD3ZPq1nAtwlEJoynV1lMFw58PIcOn8NabR4Mw-JDosk&usqp=CAU'
},
  {
    id: 89,
    name: "Graft-Versus-Host Disease",
    description: "Immunologic reaction of donor cells against host tissues, occurring post-transplant.",
    symptoms: "Acute: erythematous maculopapular rash progressing to desquamation; Chronic: sclerotic changes/poikiloderma, possible mucosal/organ involvement",
    treatment: "Systemic immunosuppression (steroids/calcineurin inhibitors), phototherapy, extracorporeal photopheresis, prophylaxis crucial in at-risk transplants",
    image:'https://ascopost.com/media/6023/41287_fig2.jpg'  
},
  {
    id: 90,
    name: "Eosinophilic Fasciitis",
    description: "Rare fibrosing disorder affecting fascia, causing peau d'orange appearance.",
    symptoms: "Painful symmetric induration of extremities with peau d'orange appearance, sparing hands/feet, possible joint contractures, groove sign pathognomonic",
    treatment: "High-dose steroids, methotrexate/azathioprine steroid-sparing agents, physical therapy to maintain mobility, possible spontaneous improvement",
    image:'https://img.tfd.com/MosbyMD/eosinophilic-fasciitis.jpg'  
},
  {
    id: 91,
    name: "Relapsing Polychondritis",
    description: "Autoimmune condition targeting cartilage, with characteristic auricular involvement.",
    symptoms: "Painful erythema/swelling of ears sparing lobes, nasal chondritis, possible respiratory/audiovestibular/cardiac involvement",
    treatment: "NSAIDs for mild cases, systemic steroids/immunosuppressants for severe, monitor for airway compromise, possible surgical intervention for collapse",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFxjMzeMPRfAJFTNxaj6dH9cbt74G5vid7w&s'  
},
  {
    id: 92,
    name: "Scleromyxedema",
    description: "Rare fibromucinous disorder with widespread papules and sclerosis, often associated with paraproteinemia.",
    symptoms: "Waxy indurated papules in linear array on face/neck/hands, possible sclerodactyly, systemic involvement (neurologic/pulmonary/cardiac)",
    treatment: "IVIG first-line, thalidomide/lenalidomide, autologous stem cell transplant in refractory cases, screen/treat associated plasma cell dyscrasia",
    image:'https://static.elsevier.es/multimedia/03650596/0000009400000004/v1_202012021003/S0365059620306450/v1_202012021003/en/main.assets/gr4.jpeg'  
},
  {
    id: 93,
    name: "Nephrogenic Systemic Fibrosis",
    description: "Fibrosing disorder linked to gadolinium exposure in renal impairment.",
    symptoms: "Woody induration of skin with peau d'orange appearance, joint contractures, possible systemic fibrosis (lungs/heart/diaphragm)",
    treatment: "Prevention crucial (avoid gadolinium in renal impairment), limited treatment options (physical therapy, possible IV sodium thiosulfate), poor prognosis",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72qbJAJyUJRIaWSOdxIcEyA1oUFZ7IsXsJo7wN0YeWZOLC_oAi7TbXq1VMEb6_ZnaYVw&usqp=CAU'  
},
  {
    id: 94,
    name: "Eruptive Xanthomas",
    description: "Sudden eruption of yellow papules associated with hypertriglyceridemia.",
    symptoms: "Multiple yellow-red papules on buttocks/extensor surfaces, possible pruritus, often associated with uncontrolled diabetes/lipid disorders",
    treatment: "Aggressive triglyceride lowering (fibrates, omega-3s, glycemic control), lesions resolve with lipid normalization, evaluate for secondary causes",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqZRh7MO9_i_sHswpoqeMoF7oo8TeoRRHVw&s'  
},
  {
    id: 95,
    name: "Tuberous Sclerosis",
    description: "Autosomal dominant neurocutaneous disorder with characteristic skin and systemic findings.",
    symptoms: "Hypomelanotic macules, facial angiofibromas, shagreen patches, periungual fibromas, possible seizures/renal/cardiac involvement",
    treatment: "mTOR inhibitors (sirolimus/everolimus) for angiofibromas/renal AMLs, multidisciplinary management (neurology/cardiology/nephrology), genetic counseling",
    image:'https://media.sciencephoto.com/c0/54/25/26/c0542526-800px-wm.jpg'  
},
  {
    id: 96,
    name: "Neurofibromatosis Type 1",
    description: "Autosomal dominant disorder with cutaneous neurofibromas and systemic manifestations.",
    symptoms: "Café-au-lait macules (>6, >5mm prepubertal), axillary/inguinal freckling, cutaneous/plexiform neurofibromas, possible optic pathway gliomas",
    treatment: "Surgical excision of bothersome tumors, MEK inhibitors for plexiform neurofibromas, regular monitoring for complications (scoliosis/hypertension)",
    image:'https://www.verywellhealth.com/thmb/pi7YYKSPCAYdCmH6sK2obYkQz7U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cafe-au-lait-skin-spot-in-neurofibromatosis-680795071-599cf32c685fbe00100f00cf.jpg'  
},
  {
    id: 97,
    name: "Sturge-Weber Syndrome",
    description: "Neurocutaneous disorder with facial capillary malformation and CNS/ocular involvement.",
    symptoms: "Port-wine stain in V1 distribution, possible leptomeningeal angiomatasis (seizures/hemiparesis), glaucoma with eye involvement",
    treatment: "Pulsed dye laser for port-wine stain, anticonvulsants for seizures, regular ophthalmologic exams, possible surgical intervention for glaucoma",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWnSDMCPMDRRJNRUIEkwYCTJ6bCg_KltCA-JfK_rNRWgIiA-z7DFhe1FQoJXXc7etDvc&usqp=CAU'  
},
  {
    id: 98,
    name: "Incontinentia Pigmenti",
    description: "X-linked dominant disorder with characteristic skin findings and possible systemic involvement.",
    symptoms: "Stage 1: vesicular; Stage 2: verrucous; Stage 3: hyperpigmented whorls; Stage 4: hypopigmented atrophic, possible dental/ocular/CNS abnormalities",
    treatment: "Stage-specific skin care, multidisciplinary management (neurology/ophthalmology/dentistry), genetic counseling (male lethality in utero)",
    image:'https://cdn.altmeyers.org/media/W1siZiIsImltYWdlcy8yMDE3LzA3LzAxLzE0LzU4LzU2L2VmNmY5Mzg4LTI3MzktNDZhZS04ZDFhLWJlMmQ4YTU0YTgzYy8xNzIzMDg4LmpwZyJdLFsicCIsInRodW1iIiwiMTIwMHg5MDAjIl0sWyJwIiwiZW5jb2RlIiwianBnIl0sWyJwIiwianBlZ29wdGltIl1d/file.jpg?sha=56219f658c9ba452'  
},
  {
    id: 99,
    name: "Dermatomyositis",
    description: "Idiopathic inflammatory myopathy with characteristic cutaneous findings.",
    symptoms: "Gottron's papules/heliotrope rash, photodistributed poikiloderma, possible muscle weakness, increased malignancy risk in adults",
    treatment: "Systemic steroids first-line, steroid-sparing agents (methotrexate/azathioprine), IVIG for refractory skin disease, thorough malignancy screening",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLxyMDTJv8d8HAfXLBxo5eI4JO7qkkzHK3A&s'  
},
  {
    id: 100,
    name: "Scleroderma",
    description: "Autoimmune connective tissue disease with cutaneous and systemic fibrosis.",
    symptoms: "Limited: CREST syndrome (Calcinosis/Raynaud's/Esophageal/Sclerodactyly/Telangiectasias); Diffuse: widespread skin thickening with rapid progression",
    treatment: "Disease-modifying agents limited, calcium channel blockers for Raynaud's, PPIs for GERD, immunosuppressants for active disease, lung/kidney monitoring",
    image:'https://managearthritis.net/wp-content/uploads/2024/07/scleroderma.jpg' 
}
];

export default skinConditions;