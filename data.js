// Prayer texts. Each section holds verses of { n, lines, meaning }.
// Devanagari text is traditional and public domain; English meanings are original to this project.
const PRAYERS = [
  {
    id: "ram-raksha",
    tab: "Ram Raksha Stotram",
    title: "श्री राम रक्षा स्तोत्रम्",
    author: "Budha Kaushika",
    language: "Sanskrit",
    video: { id: "3wZrXQJbqbU", source: "Devotional", embed: true },
    intro:
      "A hymn of protection. Tradition says Shiva recited it to the sage Budha Kaushika in a dream, and he wrote it down on waking. Its central verses ask Rama, under a different name each time, to guard each part of the body.",
    sections: [
      {
        heading: "Invocation",
        verses: [
          {
            n: "",
            lines: [
              "ॐ श्रीगणेशाय नमः ।",
              "अस्य श्रीरामरक्षास्तोत्रमन्त्रस्य । बुधकौशिक ऋषिः ।",
              "श्रीसीतारामचन्द्रो देवता । अनुष्टुप् छन्दः ।",
              "सीता शक्तिः । श्रीमद्हनुमान् कीलकम् ।",
              "श्रीरामचन्द्रप्रीत्यर्थे जपे विनियोगः ॥",
            ],
            meaning:
              "Om, salutations to Lord Ganesha. Of this Ram Raksha hymn-mantra, the seer is Budha Kaushika, the deities are Sita and Ramachandra, and the metre is Anushtup. Sita is its power and Hanuman its keystone. It is recited to please Lord Ramachandra.",
          },
        ],
      },
      {
        heading: "Meditation (Dhyanam)",
        verses: [
          {
            n: "",
            lines: [
              "ध्यायेदाजानुबाहुं धृतशरधनुषं बद्धपद्मासनस्थं",
              "पीतं वासो वसानं नवकमलदलस्पर्धिनेत्रं प्रसन्नम् ।",
              "वामाङ्कारूढसीतामुखकमलमिलल्लोचनं नीरदाभं",
              "नानालङ्कारदीप्तं दधतमुरुजटामण्डनं रामचन्द्रम् ॥",
            ],
            meaning:
              "Meditate on Ramachandra: arms reaching to his knees, holding bow and arrows, seated in the lotus posture, dressed in yellow. His serene eyes rival fresh lotus petals. Sita sits on his left thigh and his gaze meets her lotus face. He is dark as a rain cloud, radiant with ornaments, and crowned with a great mass of matted hair.",
          },
        ],
      },
      {
        heading: "The Stotram",
        verses: [
          {
            n: "१",
            lines: ["चरितं रघुनाथस्य शतकोटिप्रविस्तरम् ।", "एकैकमक्षरं पुंसां महापातकनाशनम् ॥१॥"],
            meaning:
              "The story of Rama, lord of the Raghus, extends to a hundred crore verses, and every single syllable of it destroys even the gravest sins.",
          },
          {
            n: "२",
            lines: ["ध्यात्वा नीलोत्पलश्यामं रामं राजीवलोचनम् ।", "जानकीलक्ष्मणोपेतं जटामुकुटमण्डितम् ॥२॥"],
            meaning:
              "Meditating on Rama, dark as a blue lotus, lotus-eyed, accompanied by Janaki and Lakshmana, adorned with a crown of matted hair,",
          },
          {
            n: "३",
            lines: ["सासितूणधनुर्बाणपाणिं नक्तंचरान्तकम् ।", "स्वलीलया जगत्त्रातुमाविर्भूतमजं विभुम् ॥३॥"],
            meaning:
              "holding sword, quiver, bow and arrow, ender of the night-roaming demons, the unborn all-pervading Lord who appeared by his own divine play to protect the world,",
          },
          {
            n: "४",
            lines: ["रामरक्षां पठेत्प्राज्ञः पापघ्नीं सर्वकामदाम् ।", "शिरो मे राघवः पातु भालं दशरथात्मजः ॥४॥"],
            meaning:
              "the wise should recite this Ram Raksha, which removes sin and fulfils every wish. May Raghava protect my head, and the son of Dasharatha my forehead.",
          },
          {
            n: "५",
            lines: ["कौसल्येयो दृशौ पातु विश्वामित्रप्रियः श्रुती ।", "घ्राणं पातु मखत्राता मुखं सौमित्रिवत्सलः ॥५॥"],
            meaning:
              "May Kausalya's son protect my eyes, and Vishvamitra's beloved my ears. May the guardian of the sacrifice protect my nose, and he who is affectionate to Lakshmana my mouth.",
          },
          {
            n: "६",
            lines: ["जिह्वां विद्यानिधिः पातु कण्ठं भरतवन्दितः ।", "स्कन्धौ दिव्यायुधः पातु भुजौ भग्नेशकार्मुकः ॥६॥"],
            meaning:
              "May the treasury of knowledge protect my tongue, and he whom Bharata reveres my throat. May the bearer of divine weapons protect my shoulders, and the breaker of Shiva's bow my arms.",
          },
          {
            n: "७",
            lines: ["करौ सीतापतिः पातु हृदयं जामदग्न्यजित् ।", "मध्यं पातु खरध्वंसी नाभिं जाम्बवदाश्रयः ॥७॥"],
            meaning:
              "May Sita's husband protect my hands, and the victor over Parashurama my heart. May the destroyer of Khara protect my waist, and Jambavan's refuge my navel.",
          },
          {
            n: "८",
            lines: ["सुग्रीवेशः कटी पातु सक्थिनी हनुमत्प्रभुः ।", "ऊरू रघूत्तमः पातु रक्षःकुलविनाशकृत् ॥८॥"],
            meaning:
              "May Sugriva's lord protect my hips, and Hanuman's master my thigh joints. May the best of the Raghus, destroyer of the demon clans, protect my thighs.",
          },
          {
            n: "९",
            lines: ["जानुनी सेतुकृत्पातु जङ्घे दशमुखान्तकः ।", "पादौ बिभीषणश्रीदः पातु रामोऽखिलं वपुः ॥९॥"],
            meaning:
              "May the builder of the bridge protect my knees, and the slayer of ten-headed Ravana my shins. May he who gave Vibhishana his kingdom protect my feet, and may Rama protect my entire body.",
          },
          {
            n: "१०",
            lines: ["एतां रामबलोपेतां रक्षां यः सुकृती पठेत् ।", "स चिरायुः सुखी पुत्री विजयी विनयी भवेत् ॥१०॥"],
            meaning:
              "The virtuous person who recites this protection, filled with Rama's strength, will be long-lived, happy, blessed with children, victorious and humble.",
          },
          {
            n: "११",
            lines: ["पातालभूतलव्योमचारिणश्छद्मचारिणः ।", "न द्रष्टुमपि शक्तास्ते रक्षितं रामनामभिः ॥११॥"],
            meaning:
              "Those who roam the underworld, the earth or the sky, and those who move in disguise, cannot even look upon one protected by Rama's names.",
          },
          {
            n: "१२",
            lines: ["रामेति रामभद्रेति रामचन्द्रेति वा स्मरन् ।", "नरो न लिप्यते पापैर्भुक्तिं मुक्तिं च विन्दति ॥१२॥"],
            meaning:
              "One who remembers him as Rama, Ramabhadra or Ramachandra is not stained by sin, and gains both worldly joy and liberation.",
          },
          {
            n: "१३",
            lines: ["जगज्जैत्रैकमन्त्रेण रामनाम्नाभिरक्षितम् ।", "यः कण्ठे धारयेत्तस्य करस्थाः सर्वसिद्धयः ॥१३॥"],
            meaning:
              "Whoever holds in the throat this hymn, guarded by Rama's name, the one mantra that conquers the world, has every spiritual attainment within reach of the hand.",
          },
          {
            n: "१४",
            lines: ["वज्रपञ्जरनामेदं यो रामकवचं स्मरेत् ।", "अव्याहताज्ञः सर्वत्र लभते जयमङ्गलम् ॥१४॥"],
            meaning:
              "Whoever remembers this armour of Rama, called the Diamond Cage, is obeyed without hindrance everywhere and gains victory and good fortune.",
          },
          {
            n: "१५",
            lines: ["आदिष्टवान्यथा स्वप्ने रामरक्षामिमां हरः ।", "तथा लिखितवान्प्रातः प्रबुद्धो बुधकौशिकः ॥१५॥"],
            meaning:
              "Just as Hara (Shiva) taught this Ram Raksha in a dream, so Budha Kaushika, waking at dawn, wrote it down.",
          },
          {
            n: "१६",
            lines: ["आरामः कल्पवृक्षाणां विरामः सकलापदाम् ।", "अभिरामस्त्रिलोकानां रामः श्रीमान्स नः प्रभुः ॥१६॥"],
            meaning:
              "He is a garden of wish-granting trees, the end of all calamity, and the delight of the three worlds. Glorious Rama is our Lord.",
          },
          {
            n: "१७",
            lines: ["तरुणौ रूपसम्पन्नौ सुकुमारौ महाबलौ ।", "पुण्डरीकविशालाक्षौ चीरकृष्णाजिनाम्बरौ ॥१७॥"],
            meaning:
              "Young, handsome, tender yet immensely strong, with wide eyes like white lotuses, dressed in bark cloth and black antelope skin,",
          },
          {
            n: "१८",
            lines: ["फलमूलाशिनौ दान्तौ तापसौ ब्रह्मचारिणौ ।", "पुत्रौ दशरथस्यैतौ भ्रातरौ रामलक्ष्मणौ ॥१८॥"],
            meaning:
              "living on fruits and roots, self-controlled, ascetic and celibate: these two sons of Dasharatha, the brothers Rama and Lakshmana,",
          },
          {
            n: "१९",
            lines: ["शरण्यौ सर्वसत्त्वानां श्रेष्ठौ सर्वधनुष्मताम् ।", "रक्षःकुलनिहन्तारौ त्रायेतां नो रघूत्तमौ ॥१९॥"],
            meaning:
              "refuge of all beings, foremost of all archers, slayers of the demon clans: may these two best of the Raghus protect us.",
          },
          {
            n: "२०",
            lines: ["आत्तसज्यधनुषाविषुस्पृशावक्षयाशुगनिषङ्गसङ्गिनौ ।", "रक्षणाय मम रामलक्ष्मणावग्रतः पथि सदैव गच्छताम् ॥२०॥"],
            meaning:
              "With bows strung, hands touching their arrows, and quivers that never run empty, may Rama and Lakshmana always walk ahead of me on the path to protect me.",
          },
          {
            n: "२१",
            lines: ["सन्नद्धः कवची खड्गी चापबाणधरो युवा ।", "गच्छन्मनोरथोऽस्माकं रामः पातु सलक्ष्मणः ॥२१॥"],
            meaning:
              "Ready for battle, armoured, carrying sword, bow and arrows, ever youthful, moving as swiftly as our own wishes: may Rama, with Lakshmana, protect us.",
          },
          {
            n: "२२",
            lines: ["रामो दाशरथिः शूरो लक्ष्मणानुचरो बली ।", "काकुत्स्थः पुरुषः पूर्णः कौसल्येयो रघूत्तमः ॥२२॥"],
            meaning:
              "Rama, son of Dasharatha, the valiant, the mighty one followed by Lakshmana; descendant of Kakutstha, the complete being, son of Kausalya, best of the Raghus,",
          },
          {
            n: "२३",
            lines: ["वेदान्तवेद्यो यज्ञेशः पुराणपुरुषोत्तमः ।", "जानकीवल्लभः श्रीमानप्रमेयपराक्रमः ॥२३॥"],
            meaning:
              "known through Vedanta, lord of sacrifice, the ancient Supreme Person, beloved of Janaki, the glorious one of immeasurable valour.",
          },
          {
            n: "२४",
            lines: ["इत्येतानि जपन्नित्यं मद्भक्तः श्रद्धयान्वितः ।", "अश्वमेधाधिकं पुण्यं सम्प्राप्नोति न संशयः ॥२४॥"],
            meaning:
              "My devotee who, full of faith, chants these names daily gains merit greater than the great horse sacrifice. Of this there is no doubt.",
          },
          {
            n: "२५",
            lines: ["रामं दूर्वादलश्यामं पद्माक्षं पीतवाससम् ।", "स्तुवन्ति नामभिर्दिव्यैर्न ते संसारिणो नराः ॥२५॥"],
            meaning:
              "Those who praise with divine names Rama, dark as a blade of durva grass, lotus-eyed and clothed in yellow, are no longer bound to the cycle of worldly life.",
          },
          {
            n: "२६",
            lines: [
              "रामं लक्ष्मणपूर्वजं रघुवरं सीतापतिं सुन्दरं",
              "काकुत्स्थं करुणार्णवं गुणनिधिं विप्रप्रियं धार्मिकम् ।",
              "राजेन्द्रं सत्यसन्धं दशरथतनयं श्यामलं शान्तमूर्तिं",
              "वन्दे लोकाभिरामं रघुकुलतिलकं राघवं रावणारिम् ॥२६॥",
            ],
            meaning:
              "I bow to Rama: Lakshmana's elder brother, best of the Raghus, Sita's handsome husband, descendant of Kakutstha, ocean of compassion, treasury of virtues, dear to the learned, and righteous; king of kings, true to his word, Dasharatha's dark-hued son of peaceful form; delight of the world, jewel of the Raghu clan, Raghava, enemy of Ravana.",
          },
          {
            n: "२७",
            lines: ["रामाय रामभद्राय रामचन्द्राय वेधसे ।", "रघुनाथाय नाथाय सीतायाः पतये नमः ॥२७॥"],
            meaning:
              "Salutations to Rama, to Ramabhadra, to Ramachandra, the Creator; to the lord of the Raghus, our Master, the husband of Sita.",
          },
          {
            n: "२८",
            lines: [
              "श्रीराम राम रघुनन्दन राम राम",
              "श्रीराम राम भरताग्रज राम राम ।",
              "श्रीराम राम रणकर्कश राम राम",
              "श्रीराम राम शरणं भव राम राम ॥२८॥",
            ],
            meaning:
              "Shri Rama, Rama, joy of the Raghus; Shri Rama, Rama, elder brother of Bharata; Shri Rama, Rama, fierce in battle; Shri Rama, Rama, be my refuge.",
          },
          {
            n: "२९",
            lines: [
              "श्रीरामचन्द्रचरणौ मनसा स्मरामि",
              "श्रीरामचन्द्रचरणौ वचसा गृणामि ।",
              "श्रीरामचन्द्रचरणौ शिरसा नमामि",
              "श्रीरामचन्द्रचरणौ शरणं प्रपद्ये ॥२९॥",
            ],
            meaning:
              "I remember the feet of Shri Ramachandra with my mind, praise them with my speech, bow to them with my head, and take refuge in them.",
          },
          {
            n: "३०",
            lines: [
              "माता रामो मत्पिता रामचन्द्रः",
              "स्वामी रामो मत्सखा रामचन्द्रः ।",
              "सर्वस्वं मे रामचन्द्रो दयालु-",
              "र्नान्यं जाने नैव जाने न जाने ॥३०॥",
            ],
            meaning:
              "Rama is my mother, Ramachandra my father; Rama is my master, Ramachandra my friend. Compassionate Ramachandra is my everything. I know no other, truly none, none at all.",
          },
          {
            n: "३१",
            lines: ["दक्षिणे लक्ष्मणो यस्य वामे तु जनकात्मजा ।", "पुरतो मारुतिर्यस्य तं वन्दे रघुनन्दनम् ॥३१॥"],
            meaning:
              "I bow to the joy of the Raghus, with Lakshmana on his right, Janaka's daughter on his left, and Hanuman before him.",
          },
          {
            n: "३२",
            lines: ["लोकाभिरामं रणरङ्गधीरं राजीवनेत्रं रघुवंशनाथम् ।", "कारुण्यरूपं करुणाकरं तं श्रीरामचन्द्रं शरणं प्रपद्ये ॥३२॥"],
            meaning:
              "I take refuge in Shri Ramachandra, delight of the world, steadfast on the battlefield, lotus-eyed lord of the Raghu line, the very form of mercy and its source.",
          },
          {
            n: "३३",
            lines: ["मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम् ।", "वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये ॥३३॥"],
            meaning:
              "I take refuge in Rama's messenger Hanuman, swift as the mind, fast as the wind, master of his senses, foremost of the wise, son of the Wind, and chief of the monkey hosts.",
          },
          {
            n: "३४",
            lines: ["कूजन्तं रामरामेति मधुरं मधुराक्षरम् ।", "आरुह्य कविताशाखां वन्दे वाल्मीकिकोकिलम् ॥३४॥"],
            meaning:
              "I bow to Valmiki, the koel bird who, perched on the branch of poetry, sweetly sings the sweet syllables “Rama, Rama”.",
          },
          {
            n: "३५",
            lines: ["आपदामपहर्तारं दातारं सर्वसम्पदाम् ।", "लोकाभिरामं श्रीरामं भूयो भूयो नमाम्यहम् ॥३५॥"],
            meaning:
              "Again and again I bow to Shri Rama, remover of calamities, giver of all prosperity, delight of the world.",
          },
          {
            n: "३६",
            lines: ["भर्जनं भवबीजानामर्जनं सुखसम्पदाम् ।", "तर्जनं यमदूतानां रामरामेति गर्जनम् ॥३६॥"],
            meaning:
              "The roar of “Rama, Rama” burns up the seeds of rebirth, earns happiness and prosperity, and frightens away the messengers of Death.",
          },
          {
            n: "३७",
            lines: [
              "रामो राजमणिः सदा विजयते रामं रमेशं भजे",
              "रामेणाभिहता निशाचरचमू रामाय तस्मै नमः ।",
              "रामान्नास्ति परायणं परतरं रामस्य दासोऽस्म्यहं",
              "रामे चित्तलयः सदा भवतु मे भो राम मामुद्धर ॥३७॥",
            ],
            meaning:
              "Rama, jewel among kings, is ever victorious. I worship Rama, lord of Lakshmi. By Rama the demon armies were struck down; salutations to that Rama. There is no refuge higher than Rama. I am Rama's servant. May my mind always dissolve in Rama. O Rama, lift me up.",
          },
          {
            n: "३८",
            lines: ["राम रामेति रामेति रमे रामे मनोरमे ।", "सहस्रनाम तत्तुल्यं रामनाम वरानने ॥३८॥"],
            meaning:
              "(Shiva to Parvati:) O fair-faced one, I take delight in Rama, chanting “Rama, Rama, Rama”, the enchanting one. The single name of Rama equals a thousand names of the Lord.",
          },
          {
            n: "",
            lines: ["इति श्रीबुधकौशिकविरचितं श्रीरामरक्षास्तोत्रं सम्पूर्णम् ।", "श्रीसीतारामचन्द्रार्पणमस्तु ॥"],
            meaning:
              "Thus ends the Shri Ram Raksha Stotram composed by Budha Kaushika. May it be offered to Sita and Ramachandra.",
          },
        ],
      },
    ],
  },
  {
    id: "hanuman-chalisa",
    tab: "Hanuman Chalisa",
    title: "श्री हनुमान चालीसा",
    author: "Goswami Tulsidas",
    language: "Awadhi (a form of Hindi)",
    hindi: true,
    video: { id: "AETFvQonfV8", source: "T-Series Bhakti Sagar", embed: true },
    intro:
      "Forty verses (“chalisa” means forty) in praise of Hanuman, the devoted servant of Rama, framed by couplets called dohas. Tulsidas, the author of the Ramcharitmanas, composed it in the 16th century.",
    sections: [
      {
        heading: "Opening Doha",
        verses: [
          {
            n: "",
            lines: ["श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ।", "बरनउँ रघुबर बिमल जसु जो दायकु फल चारि ॥"],
            meaning:
              "Cleaning the mirror of my mind with the dust of my Guru's lotus feet, I describe the pure glory of Rama, which grants life's four fruits: righteousness, prosperity, fulfilment and liberation.",
          },
          {
            n: "",
            lines: ["बुद्धिहीन तनु जानिके सुमिरौं पवन कुमार ।", "बल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार ॥"],
            meaning:
              "Knowing myself to be lacking in understanding, I remember you, son of the Wind. Give me strength, wisdom and knowledge, and take away my sorrows and flaws.",
          },
        ],
      },
      {
        heading: "Chaupai",
        verses: [
          { n: "१", lines: ["जय हनुमान ज्ञान गुन सागर ।", "जय कपीस तिहुँ लोक उजागर ॥१॥"], meaning: "Victory to Hanuman, ocean of wisdom and virtue. Victory to the lord of monkeys, who lights up the three worlds." },
          { n: "२", lines: ["राम दूत अतुलित बल धामा ।", "अंजनि पुत्र पवनसुत नामा ॥२॥"], meaning: "You are Rama's messenger, home of matchless strength, known as Anjani's son and the son of the Wind." },
          { n: "३", lines: ["महाबीर बिक्रम बजरंगी ।", "कुमति निवार सुमति के संगी ॥३॥"], meaning: "Great hero, mighty one with a body like a thunderbolt, you drive away bad thinking and stand beside those of good sense." },
          { n: "४", lines: ["कंचन बरन बिराज सुबेसा ।", "कानन कुंडल कुंचित केसा ॥४॥"], meaning: "Golden in colour and finely dressed, you shine with earrings in your ears and curling hair." },
          { n: "५", lines: ["हाथ बज्र औ ध्वजा बिराजै ।", "काँधे मूँज जनेऊ साजै ॥५॥"], meaning: "In your hands shine a thunderbolt and a banner, and a sacred thread of munja grass rests on your shoulder." },
          { n: "६", lines: ["संकर सुवन केसरीनंदन ।", "तेज प्रताप महा जग बंदन ॥६॥"], meaning: "Son of Shankara and joy of Kesari, your brilliance and might are honoured by the whole world." },
          { n: "७", lines: ["बिद्यावान गुनी अति चातुर ।", "राम काज करिबे को आतुर ॥७॥"], meaning: "Learned, virtuous and very clever, you are always eager to do Rama's work." },
          { n: "८", lines: ["प्रभु चरित्र सुनिबे को रसिया ।", "राम लखन सीता मन बसिया ॥८॥"], meaning: "You delight in hearing the Lord's story, and Rama, Lakshmana and Sita live in your heart." },
          { n: "९", lines: ["सूक्ष्म रूप धरि सियहिं दिखावा ।", "बिकट रूप धरि लंक जरावा ॥९॥"], meaning: "Taking a tiny form you appeared before Sita, and taking a terrifying form you burned Lanka." },
          { n: "१०", lines: ["भीम रूप धरि असुर सँहारे ।", "रामचंद्र के काज सँवारे ॥१०॥"], meaning: "Taking a fearsome form you destroyed the demons and brought Ramachandra's tasks to completion." },
          { n: "११", lines: ["लाय सजीवन लखन जियाये ।", "श्रीरघुबीर हरषि उर लाये ॥११॥"], meaning: "You brought the sanjivani herb and revived Lakshmana, and Rama joyfully held you to his heart." },
          { n: "१२", lines: ["रघुपति कीन्ही बहुत बड़ाई ।", "तुम मम प्रिय भरतहि सम भाई ॥१२॥"], meaning: "Rama praised you greatly, saying: “You are as dear to me as my brother Bharata.”" },
          { n: "१३", lines: ["सहस बदन तुम्हरो जस गावैं ।", "अस कहि श्रीपति कंठ लगावैं ॥१३॥"], meaning: "“May a thousand mouths sing your glory,” said the Lord, and drew you into his embrace." },
          { n: "१४", lines: ["सनकादिक ब्रह्मादि मुनीसा ।", "नारद सारद सहित अहीसा ॥१४॥"], meaning: "Sanaka and the sages, Brahma and the great seers, Narada, Saraswati and Shesha, king of serpents," },
          { n: "१५", lines: ["जम कुबेर दिगपाल जहाँ ते ।", "कबि कोबिद कहि सके कहाँ ते ॥१५॥"], meaning: "Yama, Kubera and the guardians of the directions cannot describe your glory, so how could any poet or scholar?" },
          { n: "१६", lines: ["तुम उपकार सुग्रीवहिं कीन्हा ।", "राम मिलाय राज पद दीन्हा ॥१६॥"], meaning: "You did Sugriva a great kindness: you brought him to Rama and gave him back his throne." },
          { n: "१७", lines: ["तुम्हरो मंत्र बिभीषन माना ।", "लंकेस्वर भए सब जग जाना ॥१७॥"], meaning: "Vibhishana heeded your counsel and became king of Lanka, as the whole world knows." },
          { n: "१८", lines: ["जुग सहस्र जोजन पर भानू ।", "लील्यो ताहि मधुर फल जानू ॥१८॥"], meaning: "You swallowed the sun, thousands of yojanas away, thinking it a sweet fruit." },
          { n: "१९", lines: ["प्रभु मुद्रिका मेलि मुख माहीं ।", "जलधि लाँघि गये अचरज नाहीं ॥१९॥"], meaning: "With the Lord's ring in your mouth you leapt across the ocean, and it is no wonder." },
          { n: "२०", lines: ["दुर्गम काज जगत के जेते ।", "सुगम अनुग्रह तुम्हरे तेते ॥२०॥"], meaning: "Every difficult task in this world becomes easy by your grace." },
          { n: "२१", lines: ["राम दुआरे तुम रखवारे ।", "होत न आज्ञा बिनु पैसारे ॥२१॥"], meaning: "You guard Rama's door, and no one enters without your leave." },
          { n: "२२", lines: ["सब सुख लहै तुम्हारी सरना ।", "तुम रच्छक काहू को डर ना ॥२२॥"], meaning: "All happiness comes to those who seek your shelter. With you as protector, there is nothing to fear." },
          { n: "२३", lines: ["आपन तेज सम्हारो आपै ।", "तीनों लोक हाँक तें काँपै ॥२३॥"], meaning: "You alone can contain your own power, and the three worlds tremble at your roar." },
          { n: "२४", lines: ["भूत पिसाच निकट नहिं आवै ।", "महाबीर जब नाम सुनावै ॥२४॥"], meaning: "Ghosts and evil spirits do not come near when the name of Mahavir is spoken." },
          { n: "२५", lines: ["नासै रोग हरै सब पीरा ।", "जपत निरंतर हनुमत बीरा ॥२५॥"], meaning: "Disease is destroyed and all pain removed by constantly chanting the name of brave Hanuman." },
          { n: "२६", lines: ["संकट तें हनुमान छुड़ावै ।", "मन क्रम बचन ध्यान जो लावै ॥२६॥"], meaning: "Hanuman frees from trouble those who fix on him in thought, deed and word." },
          { n: "२७", lines: ["सब पर राम तपस्वी राजा ।", "तिन के काज सकल तुम साजा ॥२७॥"], meaning: "Rama, the ascetic king, stands above all, and you carried out all his work." },
          { n: "२८", lines: ["और मनोरथ जो कोई लावै ।", "सोई अमित जीवन फल पावै ॥२८॥"], meaning: "Whoever brings any other wish to you receives the boundless fruit of life." },
          { n: "२९", lines: ["चारों जुग परताप तुम्हारा ।", "है परसिद्ध जगत उजियारा ॥२९॥"], meaning: "Your glory spans all four ages, and your fame lights up the world." },
          { n: "३०", lines: ["साधु संत के तुम रखवारे ।", "असुर निकंदन राम दुलारे ॥३०॥"], meaning: "You protect the saints and the holy, destroy the demons, and are dear to Rama." },
          { n: "३१", lines: ["अष्ट सिद्धि नौ निधि के दाता ।", "अस बर दीन जानकी माता ॥३१॥"], meaning: "You can grant the eight powers and nine treasures, a boon given to you by Mother Janaki." },
          { n: "३२", lines: ["राम रसायन तुम्हरे पासा ।", "सदा रहो रघुपति के दासा ॥३२॥"], meaning: "You hold the elixir of devotion to Rama, and you remain forever his servant." },
          { n: "३३", lines: ["तुम्हरे भजन राम को पावै ।", "जनम जनम के दुख बिसरावै ॥३३॥"], meaning: "Through devotion to you one reaches Rama and leaves behind the sorrows of many lifetimes." },
          { n: "३४", lines: ["अंत काल रघुबर पुर जाई ।", "जहाँ जन्म हरिभक्त कहाई ॥३४॥"], meaning: "At life's end such a person goes to Rama's abode, and wherever born again is known as a devotee of Hari." },
          { n: "३५", lines: ["और देवता चित्त न धरई ।", "हनुमत सेइ सर्ब सुख करई ॥३५॥"], meaning: "Even one who holds no other deity in mind finds every happiness by serving Hanuman." },
          { n: "३६", lines: ["संकट कटै मिटै सब पीरा ।", "जो सुमिरै हनुमत बलबीरा ॥३६॥"], meaning: "Troubles are cut away and all pain ends for whoever remembers mighty Hanuman." },
          { n: "३७", lines: ["जय जय जय हनुमान गोसाईं ।", "कृपा करहु गुरुदेव की नाईं ॥३७॥"], meaning: "Victory, victory, victory to Lord Hanuman. Bless me as a Guru would." },
          { n: "३८", lines: ["जो सत बार पाठ कर कोई ।", "छूटहि बंदि महा सुख होई ॥३८॥"], meaning: "Whoever recites this a hundred times is freed from bondage and gains great joy." },
          { n: "३९", lines: ["जो यह पढ़ै हनुमान चालीसा ।", "होय सिद्धि साखी गौरीसा ॥३९॥"], meaning: "Whoever reads this Hanuman Chalisa attains fulfilment. Shiva, lord of Gauri, is witness." },
          { n: "४०", lines: ["तुलसीदास सदा हरि चेरा ।", "कीजै नाथ हृदय महँ डेरा ॥४०॥"], meaning: "Tulsidas, forever a servant of Hari, prays: Lord, make your home in my heart." },
        ],
      },
      {
        heading: "Closing Doha",
        verses: [
          {
            n: "",
            lines: ["पवनतनय संकट हरन मंगल मूरति रूप ।", "राम लखन सीता सहित हृदय बसहु सुर भूप ॥"],
            meaning:
              "Son of the Wind, remover of troubles, embodiment of all that is auspicious: king of the gods, live in my heart together with Rama, Lakshmana and Sita.",
          },
        ],
      },
    ],
  },
  {
    id: "kal-bhairav",
    tab: "Kal Bhairav Ashtakam",
    title: "श्री कालभैरवाष्टकम्",
    author: "Attributed to Adi Shankaracharya",
    language: "Sanskrit",
    // The uploader has turned off embedding, so this one opens on YouTube.
    video: { id: "BsEqI1NZA-E", embed: false },
    intro:
      "Eight verses (“ashtakam”) to Kala Bhairava, the fierce form of Shiva who rules over time and guards the holy city of Kashi (Varanasi). Each verse closes with the same refrain: “I worship Kala Bhairava, lord of the city of Kashi.”",
    sections: [
      {
        heading: "The Ashtakam",
        verses: [
          {
            n: "१",
            lines: ["देवराजसेव्यमानपावनाङ्घ्रिपङ्कजं", "व्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम् ।", "नारदादियोगिवृन्दवन्दितं दिगम्बरं", "काशिकापुराधिनाथकालभैरवं भजे ॥१॥"],
            meaning:
              "His sacred lotus feet are served by Indra, king of the gods. He wears a serpent as his sacred thread and the moon on his head, and he is the source of mercy. Narada and hosts of yogis bow to him, and the sky is his only garment. I worship Kala Bhairava, lord of the city of Kashi.",
          },
          {
            n: "२",
            lines: ["भानुकोटिभास्वरं भवाब्धितारकं परं", "नीलकण्ठमीप्सितार्थदायकं त्रिलोचनम् ।", "कालकालमम्बुजाक्षमक्षशूलमक्षरं", "काशिकापुराधिनाथकालभैरवं भजे ॥२॥"],
            meaning:
              "Bright as ten million suns, he is the supreme one who carries us across the ocean of worldly existence. Blue-throated and three-eyed, he grants what we desire. He is Death to Death itself, lotus-eyed, bearer of the rosary and trident, the imperishable. I worship Kala Bhairava, lord of the city of Kashi.",
          },
          {
            n: "३",
            lines: ["शूलटङ्कपाशदण्डपाणिमादिकारणं", "श्यामकायमादिदेवमक्षरं निरामयम् ।", "भीमविक्रमं प्रभुं विचित्रताण्डवप्रियं", "काशिकापुराधिनाथकालभैरवं भजे ॥३॥"],
            meaning:
              "In his hands are trident, axe, noose and staff. He is the first cause, dark-bodied, the primal god, imperishable and free of all affliction. He is the Lord of terrible valour who loves the wondrous tandava dance. I worship Kala Bhairava, lord of the city of Kashi.",
          },
          {
            n: "४",
            lines: ["भुक्तिमुक्तिदायकं प्रशस्तचारुविग्रहं", "भक्तवत्सलं स्थितं समस्तलोकविग्रहम् ।", "विनिक्वणन्मनोज्ञहेमकिङ्किणीलसत्कटिं", "काशिकापुराधिनाथकालभैरवं भजे ॥४॥"],
            meaning:
              "He grants both worldly joy and liberation, and his form is praiseworthy and beautiful. Loving to his devotees, he abides as the form of all the worlds. Charming golden bells tinkle at his shining waist. I worship Kala Bhairava, lord of the city of Kashi.",
          },
          {
            n: "५",
            lines: ["धर्मसेतुपालकं त्वधर्ममार्गनाशकं", "कर्मपाशमोचकं सुशर्मदायकं विभुम् ।", "स्वर्णवर्णशेषपाशशोभिताङ्गमण्डलं", "काशिकापुराधिनाथकालभैरवं भजे ॥५॥"],
            meaning:
              "He guards the bridge of dharma and destroys the path of unrighteousness. He frees us from the noose of karma and gives true happiness, the all-pervading Lord. His body shines, encircled by golden-hued serpent coils. I worship Kala Bhairava, lord of the city of Kashi.",
          },
          {
            n: "६",
            lines: ["रत्नपादुकाप्रभाभिरामपादयुग्मकं", "नित्यमद्वितीयमिष्टदैवतं निरञ्जनम् ।", "मृत्युदर्पनाशनं करालदंष्ट्रमोक्षणं", "काशिकापुराधिनाथकालभैरवं भजे ॥६॥"],
            meaning:
              "His two feet glow with the light of jewelled sandals. He is eternal, without a second, the beloved deity, and spotless. He crushes the pride of Death, and his terrible fangs bring release. I worship Kala Bhairava, lord of the city of Kashi.",
          },
          {
            n: "७",
            lines: ["अट्टहासभिन्नपद्मजाण्डकोशसन्ततिं", "दृष्टिपातनष्टपापजालमुग्रशासनम् ।", "अष्टसिद्धिदायकं कपालमालिकाधरं", "काशिकापुराधिनाथकालभैरवं भजे ॥७॥"],
            meaning:
              "His great laugh shatters the shells of creation born of the lotus-born Brahma. His glance destroys the web of sin, and his rule is fierce. He grants the eight powers and wears a garland of skulls. I worship Kala Bhairava, lord of the city of Kashi.",
          },
          {
            n: "८",
            lines: ["भूतसङ्घनायकं विशालकीर्तिदायकं", "काशिवासलोकपुण्यपापशोधकं विभुम् ।", "नीतिमार्गकोविदं पुरातनं जगत्पतिं", "काशिकापुराधिनाथकालभैरवं भजे ॥८॥"],
            meaning:
              "Leader of the hosts of spirits, giver of wide renown, he is the all-pervading Lord who purifies the merit and sin of those who live in Kashi. Wise in the path of right conduct, he is the ancient lord of the universe. I worship Kala Bhairava, lord of the city of Kashi.",
          },
        ],
      },
      {
        heading: "Fruit of Recitation (Phalashruti)",
        verses: [
          {
            n: "",
            lines: ["कालभैरवाष्टकं पठन्ति ये मनोहरं", "ज्ञानमुक्तिसाधनं विचित्रपुण्यवर्धनम् ।", "शोकमोहदैन्यलोभकोपतापनाशनं", "प्रयान्ति कालभैरवाङ्घ्रिसन्निधिं नरा ध्रुवम् ॥"],
            meaning:
              "Those who recite this enchanting Kala Bhairava Ashtakam, a means to knowledge and liberation that increases merit of many kinds and destroys grief, delusion, poverty, greed, anger and suffering, surely reach the presence of Kala Bhairava's feet.",
          },
        ],
      },
    ],
  },
];

if (typeof module !== "undefined") module.exports = PRAYERS;
