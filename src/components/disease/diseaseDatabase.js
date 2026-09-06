// Agricultural crop disease database for Kisan Alert AI Vision Doctor

export const SAMPLE_DISEASES = [
  {
    id: 'tomato-early-blight',
    crop: 'Tomato',
    cropHindi: 'टमाटर',
    diseaseName: 'Early Blight',
    diseaseHindi: 'अगेती झुलसा (अल्टरनेरिया)',
    pathogen: 'Fungus (Alternaria solani)',
    pathogenHindi: 'फफूंद (कवक जनित)',
    severity: 'High',
    severityHindi: 'गंभीर (High Risk)',
    confidence: 96,
    icon: '🍅',
    leafVisualColor: 'from-amber-600 to-rose-700',
    svgType: 'concentric-spots',
    summary: 'Dark brown concentric rings with yellow halo appear on older lower leaves. Rapidly spreads in warm, humid weather (24-29°C).',
    summaryHindi: 'निचली पत्तियों पर गोल भूरे-काले छल्ले (कंसेंट्रिक रिंग्स) बनते हैं जिनके चारों ओर पीला घेरा होता है। बारिश या नमी में यह तेजी से फैलता है।',
    audioText: 'आपके टमाटर के पौधे में अर्ली ब्लाइट यानी अगेती झुलसा के लक्षण पाए गए हैं। फफूंद रोकने के लिए मैन्कोजेब या कॉपर ऑक्सीक्लोराइड 2 ग्राम प्रति लीटर पानी में मिलाकर तुरंत छिड़काव करें। जैविक रूप से 5 मिलीलीटर नीम का तेल प्रति लीटर पानी में स्प्रे करें।',
    symptoms: [
      'Circular dark brown spots resembling "bullseye" concentric rings',
      'Yellowing (chlorosis) of leaf margins surrounding spots',
      'Lower foliage withers and drops prematurely',
      'Stem lesions that can cause collar rot in severe cases'
    ],
    symptomsHindi: [
      'पत्तियों पर गोल गहरे भूरे-काले छल्ले (बुलआई कंसेंट्रिक रिंग्स) बनना',
      'धब्बों के चारों तरफ पत्ती का पीला पड़ना (क्लोरोसिस)',
      'पौधे की निचली पुरानी पत्तियां सूखकर समय से पहले गिरना',
      'तने और शाखाओं पर गहरे घाव बनना जिससे पौधा कमजोर होना'
    ],
    organicRemedy: {
      title: 'जैविक / देसी उपचार (Organic Remedy)',
      items: [
        { name: 'Neem Oil Spray', dose: '5 ml / Liter water', desc: 'Add 2 ml liquid soap for emulsification. Spray every 5 days in morning.' },
        { name: 'Trichoderma Viride', dose: '10 gm / Liter water', desc: 'Natural bio-fungicide that attacks Alternaria fungal spores on soil and leaves.' },
        { name: 'Fermented Buttermilk (खट्टी छाछ)', dose: '50 ml / Liter water', desc: 'Traditional spray containing lactic acid bacteria that suppress fungal hyphae.' }
      ]
    },
    chemicalRemedy: {
      title: 'रासायनिक उपचार (Chemical Formulation & Dosage)',
      items: [
        { name: 'Mancozeb 75% WP (Dithane M-45)', dose: '2.5 g / Liter water (500g / Acre)', timing: 'Immediate foliar spray' },
        { name: 'Azoxystrobin 18.2% + Difenoconazole 11.4% SC (Amistar Top)', dose: '1 ml / Liter water', timing: 'Repeat after 10-12 days if spots persist' },
        { name: 'Copper Oxychloride 50% WP (Blitox)', dose: '2.5 g / Liter water', timing: 'Preventive protective spray' }
      ]
    },
    prevention: [
      'Always water at the base of plants; avoid overhead sprinkling on leaves.',
      'Pluck and safely burn or bury heavily infected bottom leaves.',
      'Maintain 60 cm row-to-row spacing for proper air circulation.',
      'Rotate crop with non-solanaceous crops (avoid planting after potato or chili).'
    ]
  },
  {
    id: 'wheat-yellow-rust',
    crop: 'Wheat',
    cropHindi: 'गेहूं',
    diseaseName: 'Yellow Rust / Stripe Rust',
    diseaseHindi: 'पीला रतुआ (स्ट्राइप रस्ट)',
    pathogen: 'Fungus (Puccinia striiformis)',
    pathogenHindi: 'फफूंद (पक्सीनिया स्ट्राइफोर्मिस)',
    severity: 'Critical',
    severityHindi: 'अत्यंत गंभीर (Emergency)',
    confidence: 94,
    icon: '🌾',
    leafVisualColor: 'from-amber-400 to-yellow-600',
    svgType: 'yellow-stripes',
    summary: 'Yellow or bright orange pustules arranged in linear stripes along the leaf veins. If touched, yellow powder rubs off on fingers.',
    summaryHindi: 'पत्तियों की नसों के समानांतर पीली और नारंगी धारियों में दाने बनते हैं। छूने पर अंगुलियों पर पीला पाउडर चिपक जाता है।',
    audioText: 'गेहूं में पीला रतुआ बीमारी के लक्षण हैं। यह बहुत तेजी से हवा के साथ पूरे खेत में फैलती है। तुरंत प्रोपिकोनाजोल 25 ईसी का 1 मिलीलीटर प्रति लीटर पानी में मिलाकर 200 लीटर पानी प्रति एकड़ छिड़काव करें।',
    symptoms: [
      'Bright yellow to orange-yellow powdery pustules formed in narrow linear stripes',
      'Chlorotic yellowing spreading quickly along the entire leaf length',
      'Reduced photosynthesis leading to shriveled grains and severe yield crash (up to 40-70%)',
      'Leaves dry up prematurely and take on a scorched appearance'
    ],
    symptomsHindi: [
      'पत्तियों की नसों के समानांतर चमकीली पीली व नारंगी धारियां बनना',
      'छूने पर उंगलियों पर पीला पाउडर चिपकना (फफूंद के बीजाणु)',
      'पूरी पत्ती तेजी से पीली पड़कर झुलसी हुई दिखाई देना',
      'बालियों में दाने सिकुड़ना और पैदावार में 40-70% तक भारी नुकसान'
    ],
    organicRemedy: {
      title: 'जैविक / देसी उपचार (Organic Remedy)',
      items: [
        { name: 'Dashaparni Ark (दशपर्णी अर्क)', dose: '20 ml / Liter water', desc: 'Herbal concoction that boosts plant systemic acquired resistance.' },
        { name: 'Pseudomonas fluorescens', dose: '10 g / Liter water', desc: 'Bio-agent producing antagonistic phenazine compounds against rust pustules.' }
      ]
    },
    chemicalRemedy: {
      title: 'रासायनिक उपचार (Chemical Formulation & Dosage)',
      items: [
        { name: 'Propiconazole 25% EC (Tilt / Bumper)', dose: '1.0 ml / Liter water (200 ml in 200L water / Acre)', timing: 'Spray immediately upon spotting first yellow stripes' },
        { name: 'Tebuconazole 25.9% EC (Folicur)', dose: '1.25 ml / Liter water', timing: 'Effective curative systemic action' }
      ]
    },
    prevention: [
      'Regular scouting of north-facing fields and areas with high humidity during cool mornings.',
      'Sow rust-resistant varieties like HD-3086, DBW-187, or PBW-725 in next cycle.',
      'Avoid excess application of nitrogen (Urea) which favors rust spore multiplication.'
    ]
  },
  {
    id: 'cotton-leaf-curl',
    crop: 'Cotton',
    cropHindi: 'कपास',
    diseaseName: 'Cotton Leaf Curl Virus (CLCuV)',
    diseaseHindi: 'पत्ता मरोड़ रोग (मरोड़िया)',
    pathogen: 'Virus (Geminivirus transmitted by Whitefly)',
    pathogenHindi: 'विषाणु (सफेद मक्खी द्वारा प्रसारित)',
    severity: 'High',
    severityHindi: 'गंभीर (High Risk)',
    confidence: 91,
    icon: '☁️',
    leafVisualColor: 'from-emerald-600 to-lime-500',
    svgType: 'curled-margins',
    summary: 'Upward or downward curling of leaf margins, thick green veins (enations), and stunted bushy plant growth.',
    summaryHindi: 'पत्तियों के किनारे ऊपर या नीचे की तरफ मुड़ जाते हैं, नसें मोटी और गहरे हरे रंग की हो जाती हैं और पौधे की बढ़वार रुक जाती है।',
    audioText: 'कपास की फसल में पत्ता मरोड़ वायरस का असर है जो सफेद मक्खी के कारण फैलता है। वायरस को रोकने के लिए सबसे पहले सफेद मक्खी को नियंत्रित करें। डायफेनथियूरॉन या एसिटामिप्रिड का तुरंत छिड़काव करें।',
    symptoms: [
      'Leaves curl upward or cup downward into spoon shapes',
      'Vein thickening, swelling, and cup-like leaf outgrowths (enations) under leaves',
      'Stunted internodes producing a bonsai-like stunted cotton bush',
      'Square shedding and boll development drastically reduced'
    ],
    symptomsHindi: [
      'पत्तियों के किनारे ऊपर या नीचे की तरफ चम्मच की तरह मुड़ना',
      'निचली सतह पर नसें मोटी, उभरी हुई और गहरे हरे रंग की होना',
      'पौधे की बढ़वार रुकना और झाड़ी जैसा बौना (स्टंटेड) दिखना',
      'फूल और टिंडे (Bolls) झड़ने लगना व उत्पादन घटना'
    ],
    organicRemedy: {
      title: 'जैविक / देसी उपचार (Organic Remedy)',
      items: [
        { name: 'Yellow Sticky Traps (पीले चिपचिपे ट्रैप)', dose: '8 - 10 traps / Acre', desc: 'Captures adult whiteflies and thrips before they transmit virus.' },
        { name: 'Neem Seed Kernel Extract (NSKE 5%)', dose: '50 g / Liter water', desc: 'Repels vector pests and disrupts whitefly nymph molting.' },
        { name: 'Verticillium lecanii', dose: '5 g / Liter water', desc: 'Entomopathogenic fungus that kills whitefly nymphs safely.' }
      ]
    },
    chemicalRemedy: {
      title: 'रासायनिक उपचार (Chemical Formulation & Dosage)',
      items: [
        { name: 'Diafenthiuron 50% WP (Pegasus)', dose: '1.2 g / Liter water (240g / Acre)', timing: 'Kills adult and nymph whiteflies' },
        { name: 'Acetamiprid 20% SP (Pride / Rekord)', dose: '0.4 g / Liter water', timing: 'Systemic insecticide for sucking pests' },
        { name: 'Pyriproxyfen 10% + Fenpropathrin 15% EC', dose: '1.5 ml / Liter water', timing: 'Breaks reproductive egg cycle of whitefly' }
      ]
    },
    prevention: [
      'Eradicate weed hosts like Kanghi buti (Abutilon) and Congress grass along field borders.',
      'Use certified CLCuV-tolerant hybrid cotton seeds.',
      'Avoid late sowing; plant border crops like Maize or Bajra as a physical barrier.'
    ]
  },
  {
    id: 'rice-bacterial-blight',
    crop: 'Rice / Paddy',
    cropHindi: 'धान / चावल',
    diseaseName: 'Bacterial Leaf Blight (BLB)',
    diseaseHindi: 'जीवाणु झुलसा (बैक्टीरियल ब्लाइट)',
    pathogen: 'Bacteria (Xanthomonas oryzae)',
    pathogenHindi: 'जीवाणु (बैक्टीरिया जनित)',
    severity: 'Moderate',
    severityHindi: 'मध्यम (Moderate)',
    confidence: 89,
    icon: '🌾',
    leafVisualColor: 'from-yellow-500 to-amber-700',
    svgType: 'wavy-margins',
    summary: 'Water-soaked translucent stripes starting from leaf tips and margins, later turning straw-yellow with wavy wavy edges.',
    summaryHindi: 'पत्तियों के किनारों से शुरू होकर पानी से भीगे जैसे पीले-भूरे धब्बे बनते हैं, जो आगे चलकर भूसे जैसे सूख जाते हैं।',
    audioText: 'धान की फसल में जीवाणु झुलसा का प्रकोप है। यूरिया खाद देना तुरंत बंद करें। स्ट्रेप्टोसाइक्लिन 6 ग्राम और कॉपर ऑक्सीक्लोराइड 500 ग्राम को 200 लीटर पानी में मिलाकर प्रति एकड़ छिड़कें।',
    symptoms: [
      'Water-soaked lesions along leaf margins originating from the leaf tip',
      'Lesions enlarge with undulating wavy edges turning yellow to grayish-white',
      'Milky bacterial ooze beads on young lesions early in the morning',
      'Severe seedling wilting stage known as "Kresek"'
    ],
    symptomsHindi: [
      'पत्तियों के ऊपरी सिरे (Tip) से किनारों की तरफ भीगे हुए पीले धब्बे बनना',
      'धब्बों के किनारे लहरदार (Wavy) होना और भूसे जैसे सूख जाना',
      'सुबह के समय पत्तियों पर जीवाणुओं की दूधिया बूंदें दिखाई देना',
      'पौधे का पीला पड़कर सूखना व दाने खोखले रह जाना'
    ],
    organicRemedy: {
      title: 'जैविक / देसी उपचार (Organic Remedy)',
      items: [
        { name: 'Fresh Cow Dung Slurry Spray', dose: '20 kg cow dung in 200L water', desc: 'Filter well and spray. Contains beneficial microbes antagonistic to Xanthomonas.' },
        { name: 'Pseudomonas fluorescens seed / root dip', dose: '10 g / Liter water', desc: 'Inoculate seedlings before transplanting.' }
      ]
    },
    chemicalRemedy: {
      title: 'रासायनिक उपचार (Chemical Formulation & Dosage)',
      items: [
        { name: 'Streptocycline (Streptomycin sulphate + Tetracycline)', dose: '6 g in 200 Liters water / Acre', timing: 'Combine with Copper Oxychloride' },
        { name: 'Copper Oxychloride 50% WP', dose: '2.5 g / Liter water (500g / Acre)', timing: 'Spray twice at 10-day intervals' }
      ]
    },
    prevention: [
      'Drain stagnant standing water from the field for 2-3 days to dry out moisture.',
      'STOP any top-dressing of Nitrogen/Urea fertilizer until disease subsides.',
      'Apply Muriate of Potash (MOP) 20kg/acre to strengthen cell wall resistance.'
    ]
  },
  {
    id: 'potato-late-blight',
    crop: 'Potato',
    cropHindi: 'आलू',
    diseaseName: 'Late Blight',
    diseaseHindi: 'पछेती झुलसा (फाइटोफ्थोरा)',
    pathogen: 'Oomycete / Water mold (Phytophthora infestans)',
    pathogenHindi: 'फफूंद सदृश (फाइटोफ्थोरा इन्फेस्टन्स)',
    severity: 'Critical',
    severityHindi: 'अत्यंत गंभीर (High Threat)',
    confidence: 97,
    icon: '🥔',
    leafVisualColor: 'from-stone-700 to-slate-900',
    svgType: 'dark-water-soaked',
    summary: 'Dark, water-soaked necrotic patches with faint white cottony mold underneath the leaf in damp foggy mornings. Can wipe out crops in 4-7 days.',
    summaryHindi: 'पत्तियों पर काले-भूरे भीगे हुए धब्बे बनते हैं और निचली सतह पर सफेद रुई जैसा फफूंद दिखता है। कोहरे या नम मौसम में यह 5 दिनों में फसल नष्ट कर सकता है।',
    audioText: 'आलू में पछेती झुलसा का गंभीर संक्रमण है। देर न करें, साइमोक्सानिल और मैन्कोजेब (कर्जेट) 3 ग्राम प्रति लीटर या मेटलैक्ट्सिल का छिड़काव तुरंत करें। रोगी पौधों को तुरंत उखाड़कर नष्ट करें।',
    symptoms: [
      'Irregular greenish-black water-soaked lesions that turn necrotic dark brown rapidly',
      'Delicate white fungal downy mildew visible on underside of leaves under high humidity',
      'Rotting foul-smelling foliage in continuous cloudy/foggy weather',
      'Tuber rot in soil showing brown discoloration under the potato skin'
    ],
    symptomsHindi: [
      'पत्तियों पर गहरे हरे-काले पानी से भीगे जैसे सड़न वाले धब्बे बनना',
      'नम या कोहरे वाले मौसम में पत्ती की निचली सतह पर सफेद रुई जैसी फफूंद दिखना',
      'पौधों से सड़ी हुई गंध आना और 4-7 दिनों में पूरी फसल नष्ट होने का खतरा',
      'जमीन के अंदर आलू के कंदों (Tubers) पर भूरापन और सड़न आना'
    ],
    organicRemedy: {
      title: 'जैविक / देसी उपचार (Organic Remedy)',
      items: [
        { name: 'Copper Sulphate + Lime (Bordeaux Mixture 1%)', dose: '10 g copper sulphate + 10 g lime in 1L water', desc: 'Classic preventative bio-protective barrier.' },
        { name: 'Horsetail / Bio-Silicon Extract', dose: '15 ml / Liter water', desc: 'Strengthens leaf cuticle against mycelium penetration.' }
      ]
    },
    chemicalRemedy: {
      title: 'रासायनिक उपचार (Chemical Formulation & Dosage)',
      items: [
        { name: 'Cymoxanil 8% + Mancozeb 64% WP (Curzate / Sectin)', dose: '3.0 g / Liter water (600g / Acre)', timing: 'Strong curative translaminar action' },
        { name: 'Metalaxyl-M 4% + Mancozeb 64% WP (Ridomil Gold)', dose: '2.5 g / Liter water', timing: 'Systemic uptake within 30 minutes' },
        { name: 'Dimethomorph 50% WP (Acrobat)', dose: '1.0 g / Liter water', timing: 'For anti-sporulant spore suppression' }
      ]
    },
    prevention: [
      'Earthing up soil (मिट्टी चढ़ाना) high over potato tubers so spores cannot wash down.',
      'Stop irrigation when temperatures drop below 15°C and fog persists.',
      'Destroy haulms (cut vines) 10 days before harvest to prevent tuber contamination.'
    ]
  }
]

// Fallback for custom uploads that match generic pattern
export const GENERIC_DISEASE = {
  id: 'generic-leaf-spot',
  crop: 'Diagnosed Plant',
  cropHindi: 'पौधा',
  diseaseName: 'Cercospora Leaf Spot & Blight',
  diseaseHindi: 'पत्ती धब्बा रोग (सर्कोस्पोरा)',
  pathogen: 'Fungal Pathogen',
  pathogenHindi: 'फफूंद जनित',
  severity: 'Moderate',
  severityHindi: 'मध्यम स्तर (Moderate)',
  confidence: 88,
  icon: '🌿',
  summary: 'Visible necrotic spotting and chlorosis detected on foliage surface with partial loss of chlorophyll.',
  summaryHindi: 'पत्तियों पर धब्बे और क्लोरोफिल की कमी पाई गई है। समय पर दवा का छिड़काव करने से फसल पूरी तरह सुरक्षित हो जाएगी।',
  audioText: 'आपकी फसल की पत्ती में फफूंद जनित धब्बा रोग पाया गया है। कार्बेन्डाजिम या मैन्कोजेब 2 ग्राम प्रति लीटर पानी में मिलाकर छिड़काव करें। नीम का तेल 5 मिलीलीटर प्रति लीटर मिलाकर भी उपयोगी रहेगा।',
  symptoms: [
    'Small circular to irregular brown spots with grayish centers',
    'Premature yellowing and leaf shedding under high moisture',
    'Reduced photosynthetic efficiency'
  ],
  symptomsHindi: [
    'पत्तियों पर गोल या अनियमित भूरे धब्बे बनना जिनका केंद्र हल्का धूसर होता है',
    'नमी बढ़ने पर पत्तियां पीली पड़कर तेजी से नीचे गिरना',
    'पत्तियों का हरापन कम होना और पौधे का कमजोर दिखना'
  ],
  organicRemedy: {
    title: 'जैविक / देसी उपचार (Organic Remedy)',
    items: [
      { name: 'Neem Oil Spray (10,000 PPM)', dose: '5 ml / Liter water', desc: 'Spray on both sides of leaves in late afternoon.' },
      { name: 'Bio-Fungicide (Trichoderma)', dose: '5 g / Liter water', desc: 'Suppresses soil-borne and foliar fungi.' }
    ]
  },
  chemicalRemedy: {
    title: 'रासायनिक उपचार (Chemical Formulation & Dosage)',
    items: [
      { name: 'Carbendazim 12% + Mancozeb 63% WP (Saaf)', dose: '2.0 g / Liter water (400g / Acre)', timing: 'Dual-action systemic and contact spray' },
      { name: 'Hexaconazole 5% SC (Contaf)', dose: '2 ml / Liter water', timing: 'Broad spectrum curative' }
    ]
  },
  prevention: [
    'Remove infected dead leaves and destroy them away from field.',
    'Avoid overhead sprinkling to keep leaf foliage dry.',
    'Ensure proper field drainage and balanced NPK fertilization.'
  ]
}

export const CROPS_LIST = [
  'All Crops (Auto Detect)',
  'Tomato (टमाटर)',
  'Wheat (गेहूं)',
  'Cotton (कपास)',
  'Rice / Paddy (धान)',
  'Potato (आलू)',
  'Chili (मिर्च)',
  'Soybean (सोयाबीन)',
  'Mustard (सरसों)'
]
