import type { LanguageCode, Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ─── Spanish · Unit 1 ────────────────────────────────────────────────────

  {
    id: "es-u1-l1",
    unitId: "es-unit-1",
    languageId: "es",
    order: 1,
    title: "Hello & Goodbye",
    subtitle: "Your first Spanish greetings",
    description: "Learn to greet people and say goodbye in everyday situations.",
    imageKey: "palace",
    xpReward: 10,
    estimatedMinutes: 5,
    goal: {
      summary: "Greet someone and say goodbye politely in Spanish.",
      skills: ["greetings", "listening", "speaking"],
    },
    vocabulary: [
      { id: "es-hola", term: "Hola", translation: "Hello", pronunciation: "OH-lah" },
      { id: "es-adios", term: "Adiós", translation: "Goodbye", pronunciation: "ah-DYOHS" },
      { id: "es-buenos-dias", term: "Buenos días", translation: "Good morning", pronunciation: "BWEH-nohs DEE-ahs" },
      { id: "es-buenas-noches", term: "Buenas noches", translation: "Good night", pronunciation: "BWEH-nahs NOH-chehs" },
    ],
    phrases: [
      { id: "es-ph-1", text: "¡Hola! ¿Cómo estás?", translation: "Hello! How are you?", pronunciation: "OH-lah KOH-moh ehs-TAHS" },
      { id: "es-ph-2", text: "Hasta luego.", translation: "See you later.", pronunciation: "AHS-tah LWEH-goh" },
    ],
    activities: [
      { id: "es-u1-l1-a1", type: "vocabulary", title: "Learn the words", description: "Tap each card to hear and memorize the greetings." },
      { id: "es-u1-l1-a2", type: "matching", title: "Match the greeting", description: "Pair Spanish greetings with their English meanings." },
      { id: "es-u1-l1-a3", type: "speaking", title: "Say it out loud", description: "Practice pronouncing each greeting clearly." },
      { id: "es-u1-l1-a4", type: "ai-teacher", title: "Talk with your AI teacher", description: "Have a short greeting conversation with your teacher." },
    ],
    aiTeacher: {
      systemContext:
        "You are a warm, energetic Spanish teacher. Speak mostly in English. Teach only this lesson: basic greetings (hola, adiós, buenos días, buenas noches). Introduce one Spanish word at a time with its English meaning. Keep replies to one or two short sentences. Ask the student to repeat after you. Do not teach unrelated topics or other languages.",
      openingLine: "Hey! Ready for your first Spanish greetings? Let's start with an easy one — hola means hello. Can you say hola?",
      teachingNotes: [
        "Contrast formal morning greeting buenos días with casual hola.",
        "Practice hasta luego as a friendly goodbye.",
        "Celebrate small wins with short encouragement.",
      ],
    },
  },

  {
    id: "es-u1-l2",
    unitId: "es-unit-1",
    languageId: "es",
    order: 2,
    title: "Introducing Yourself",
    subtitle: "Share your name in Spanish",
    description: "Tell people your name and ask for theirs in a simple conversation.",
    imageKey: "treasure",
    xpReward: 10,
    estimatedMinutes: 6,
    goal: {
      summary: "Introduce yourself and ask someone their name.",
      skills: ["introductions", "speaking"],
    },
    vocabulary: [
      { id: "es-me-llamo", term: "Me llamo", translation: "My name is", pronunciation: "meh YAH-moh" },
      { id: "es-nombre", term: "nombre", translation: "name", pronunciation: "NOHM-breh" },
      { id: "es-mucho-gusto", term: "Mucho gusto", translation: "Nice to meet you", pronunciation: "MOO-choh GOOS-toh" },
      { id: "es-y-tu", term: "¿Y tú?", translation: "And you?", pronunciation: "ee TOO" },
    ],
    phrases: [
      { id: "es-ph-3", text: "Me llamo Ana.", translation: "My name is Ana." },
      { id: "es-ph-4", text: "¿Cómo te llamas?", translation: "What is your name?" },
    ],
    activities: [
      { id: "es-u1-l2-a1", type: "vocabulary", title: "Learn the words", description: "Study introduction vocabulary." },
      { id: "es-u1-l2-a2", type: "fill-blank", title: "Complete the sentence", description: "Fill in the missing word to introduce yourself." },
      { id: "es-u1-l2-a3", type: "ai-teacher", title: "Talk with your AI teacher", description: "Introduce yourself in a short role-play." },
    ],
    aiTeacher: {
      systemContext:
        "You are a friendly Spanish teacher. Speak mostly in English. Teach only introductions: me llamo, ¿cómo te llamas?, mucho gusto. Guide the student to say their name in Spanish. One or two sentences per reply. Ask them to repeat phrases. Stay on this lesson only.",
      openingLine: "Great job so far! Today we'll learn how to introduce yourself. In Spanish, me llamo means my name is. Try it — me llamo, then your name!",
      teachingNotes: [
        "Model a full exchange: greeting → name → mucho gusto.",
        "Encourage the student to ask ¿cómo te llamas?",
      ],
    },
  },

  // ─── Spanish · Unit 2 ────────────────────────────────────────────────────

  {
    id: "es-u2-l1",
    unitId: "es-unit-2",
    languageId: "es",
    order: 1,
    title: "Numbers 1–10",
    subtitle: "Count in Spanish",
    description: "Learn to count from one to ten and use numbers in simple phrases.",
    imageKey: "earth",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Count from 1 to 10 and recognize spoken numbers.",
      skills: ["numbers", "listening"],
    },
    vocabulary: [
      { id: "es-uno", term: "uno", translation: "one", pronunciation: "OO-noh" },
      { id: "es-dos", term: "dos", translation: "two", pronunciation: "dohs" },
      { id: "es-tres", term: "tres", translation: "three", pronunciation: "trehs" },
      { id: "es-cinco", term: "cinco", translation: "five", pronunciation: "SEEN-koh" },
      { id: "es-diez", term: "diez", translation: "ten", pronunciation: "dyehs" },
    ],
    phrases: [
      { id: "es-ph-5", text: "Tengo dos hermanos.", translation: "I have two siblings." },
      { id: "es-ph-6", text: "¿Cuántos años tienes?", translation: "How old are you?" },
    ],
    activities: [
      { id: "es-u2-l1-a1", type: "vocabulary", title: "Learn the numbers", description: "Memorize numbers 1 through 10." },
      { id: "es-u2-l1-a2", type: "listening", title: "Hear the number", description: "Listen and pick the correct number." },
      { id: "es-u2-l1-a3", type: "ai-teacher", title: "Count with your teacher", description: "Count aloud together from uno to diez." },
    ],
    aiTeacher: {
      systemContext:
        "You are an upbeat Spanish teacher. Teach only numbers uno through diez. Speak mostly in English, say each Spanish number slowly, then ask the student to repeat. Keep responses brief. Do not introduce numbers above ten or unrelated vocabulary.",
      openingLine: "Let's count in Spanish! We'll start easy — uno is one. Can you say uno?",
      teachingNotes: [
        "Count up in pairs: you say a number, student repeats.",
        "Quiz randomly: say a number in English, student answers in Spanish.",
      ],
    },
  },

  {
    id: "es-u2-l2",
    unitId: "es-unit-2",
    languageId: "es",
    order: 2,
    title: "At the Café",
    subtitle: "Order something simple",
    description: "Use polite phrases to order a drink or snack at a café.",
    imageKey: "mascotWelcome",
    xpReward: 15,
    estimatedMinutes: 8,
    goal: {
      summary: "Order a drink politely at a café.",
      skills: ["ordering", "speaking", "listening"],
    },
    vocabulary: [
      { id: "es-cafe", term: "café", translation: "coffee", pronunciation: "kah-FEH" },
      { id: "es-agua", term: "agua", translation: "water", pronunciation: "AH-gwah" },
      { id: "es-por-favor", term: "por favor", translation: "please", pronunciation: "por fah-VOR" },
      { id: "es-gracias", term: "gracias", translation: "thank you", pronunciation: "GRAH-syahs" },
    ],
    phrases: [
      { id: "es-ph-7", text: "Un café, por favor.", translation: "A coffee, please." },
      { id: "es-ph-8", text: "¿Cuánto cuesta?", translation: "How much does it cost?" },
    ],
    activities: [
      { id: "es-u2-l2-a1", type: "vocabulary", title: "Café words", description: "Learn essential café vocabulary." },
      { id: "es-u2-l2-a2", type: "speaking", title: "Place your order", description: "Practice ordering with por favor and gracias." },
      { id: "es-u2-l2-a3", type: "ai-teacher", title: "Café role-play", description: "Order from your AI teacher at a mock café." },
    ],
    aiTeacher: {
      systemContext:
        "You are a cheerful Spanish teacher playing a café barista. Teach only café ordering: café, agua, por favor, gracias, un café por favor. Speak mostly in English. Prompt the student to order politely. One or two sentences per turn. Stay in this café scenario.",
      openingLine: "Welcome to our little café! In Spanish you'd say un café, por favor to order coffee. What would you like to order?",
      teachingNotes: [
        "Always model por favor and gracias in the exchange.",
        "Accept any simple order using lesson vocabulary only.",
      ],
    },
  },

  {
    id: "es-u2-l3",
    unitId: "es-unit-2",
    languageId: "es",
    order: 3,
    title: "Travel & Directions",
    subtitle: "Ask where places are",
    description: "Ask for directions and understand simple answers.",
    imageKey: "palace",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Ask where something is and understand a simple answer.",
      skills: ["directions", "listening"],
    },
    vocabulary: [
      { id: "es-donde", term: "¿Dónde está?", translation: "Where is it?", pronunciation: "DOHN-deh ehs-TAH" },
      { id: "es-estacion", term: "la estación", translation: "the station", pronunciation: "lah ehs-tah-SYOHN" },
      { id: "es-aqui", term: "aquí", translation: "here", pronunciation: "ah-KEE" },
    ],
    phrases: [
      { id: "es-ph-9", text: "¿Dónde está la estación?", translation: "Where is the station?" },
      { id: "es-ph-10", text: "Está aquí.", translation: "It's here." },
    ],
    activities: [
      { id: "es-u2-l3-a1", type: "vocabulary", title: "Direction words", description: "Learn ¿dónde está? and aquí." },
      { id: "es-u2-l3-a2", type: "listening", title: "Find the place", description: "Listen and identify the location." },
      { id: "es-u2-l3-a3", type: "ai-teacher", title: "Ask for directions", description: "Ask your teacher where the station is." },
    ],
    aiTeacher: {
      systemContext: "You are a helpful Spanish teacher. Teach only ¿dónde está?, la estación, aquí. Speak mostly in English.",
      openingLine: "Let's ask where things are! ¿Dónde está? means where is it. Can you try it?",
      teachingNotes: ["Answer simply with está aquí."],
    },
  },

  {
    id: "es-u2-l4",
    unitId: "es-unit-2",
    languageId: "es",
    order: 4,
    title: "Shopping",
    subtitle: "Buy something simple",
    description: "Ask for items and understand basic prices.",
    imageKey: "treasure",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Ask for an item and understand a price.",
      skills: ["shopping", "speaking"],
    },
    vocabulary: [
      { id: "es-quiero", term: "Quiero", translation: "I want", pronunciation: "KYEH-roh" },
      { id: "es-pan", term: "el pan", translation: "bread", pronunciation: "el pahn" },
      { id: "es-euros", term: "euros", translation: "euros", pronunciation: "EH-wrohs" },
    ],
    phrases: [
      { id: "es-ph-11", text: "Quiero pan, por favor.", translation: "I want bread, please." },
      { id: "es-ph-12", text: "Son dos euros.", translation: "It's two euros." },
    ],
    activities: [
      { id: "es-u2-l4-a1", type: "vocabulary", title: "Shopping words", description: "Learn quiero and pan." },
      { id: "es-u2-l4-a2", type: "speaking", title: "Make a request", description: "Practice asking for an item." },
      { id: "es-u2-l4-a3", type: "ai-teacher", title: "Shop role-play", description: "Buy something from your teacher." },
    ],
    aiTeacher: {
      systemContext: "You are a friendly Spanish shop teacher. Teach quiero, pan, por favor. Speak mostly in English.",
      openingLine: "Shopping time! Quiero means I want. Try saying quiero pan, por favor.",
      teachingNotes: ["Use simple round prices like dos euros."],
    },
  },

  {
    id: "es-u2-l5",
    unitId: "es-unit-2",
    languageId: "es",
    order: 5,
    title: "Family & Friends",
    subtitle: "Talk about people you know",
    description: "Name family members and friends in simple phrases.",
    imageKey: "earth",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Name one family member in Spanish.",
      skills: ["family", "speaking"],
    },
    vocabulary: [
      { id: "es-mama", term: "mamá", translation: "mom", pronunciation: "mah-MAH" },
      { id: "es-papa", term: "papá", translation: "dad", pronunciation: "pah-PAH" },
      { id: "es-amigo", term: "amigo", translation: "friend", pronunciation: "ah-MEE-goh" },
    ],
    phrases: [
      { id: "es-ph-13", text: "Esta es mi mamá.", translation: "This is my mom." },
      { id: "es-ph-14", text: "Es mi amigo.", translation: "He is my friend." },
    ],
    activities: [
      { id: "es-u2-l5-a1", type: "vocabulary", title: "Family words", description: "Learn mamá, papá, and amigo." },
      { id: "es-u2-l5-a2", type: "matching", title: "Match the word", description: "Connect Spanish words to meanings." },
      { id: "es-u2-l5-a3", type: "ai-teacher", title: "Talk about family", description: "Introduce one family member." },
    ],
    aiTeacher: {
      systemContext: "You are a warm Spanish teacher. Teach mamá, papá, amigo. Speak mostly in English.",
      openingLine: "Mamá means mom. Can you say mamá?",
      teachingNotes: ["Ask the student to introduce one person they know."],
    },
  },

  {
    id: "es-u2-l6",
    unitId: "es-unit-2",
    languageId: "es",
    order: 6,
    title: "Daily Life",
    subtitle: "Talk about your routine",
    description: "Describe simple daily activities.",
    imageKey: "mascotWelcome",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Describe one daily activity in Spanish.",
      skills: ["routines", "speaking"],
    },
    vocabulary: [
      { id: "es-trabajo", term: "trabajo", translation: "work", pronunciation: "trah-BAH-hoh" },
      { id: "es-casa", term: "casa", translation: "home", pronunciation: "KAH-sah" },
      { id: "es-voy", term: "voy", translation: "I go", pronunciation: "boy" },
    ],
    phrases: [
      { id: "es-ph-15", text: "Voy a la escuela.", translation: "I go to school." },
      { id: "es-ph-16", text: "Voy a casa.", translation: "I go home." },
    ],
    activities: [
      { id: "es-u2-l6-a1", type: "vocabulary", title: "Routine words", description: "Learn voy, casa, and trabajo." },
      { id: "es-u2-l6-a2", type: "fill-blank", title: "Complete the routine", description: "Pick the right verb." },
      { id: "es-u2-l6-a3", type: "ai-teacher", title: "Talk about your day", description: "Share one daily activity." },
    ],
    aiTeacher: {
      systemContext: "You are an upbeat Spanish teacher. Teach voy, casa, escuela. Speak mostly in English.",
      openingLine: "Voy means I go. Can you say voy a casa — I go home?",
      teachingNotes: ["Keep sentences to one activity at a time."],
    },
  },

  // ─── Chinese · Unit 1 ────────────────────────────────────────────────────

  {
    id: "zh-u1-l1",
    unitId: "zh-unit-1",
    languageId: "zh",
    order: 1,
    title: "Basic Greetings",
    subtitle: "Say hello in Mandarin",
    description: "Learn ni hao and other common greetings for any time of day.",
    imageKey: "palace",
    xpReward: 10,
    estimatedMinutes: 5,
    goal: {
      summary: "Greet someone with 你好 and respond appropriately.",
      skills: ["greetings", "speaking"],
    },
    vocabulary: [
      { id: "zh-ni-hao", term: "你好", translation: "Hello", pronunciation: "nee how" },
      { id: "zh-zai-jian", term: "再见", translation: "Goodbye", pronunciation: "dzai jyen" },
      { id: "zh-zaoshang-hao", term: "早上好", translation: "Good morning", pronunciation: "dzaow-shahng how" },
      { id: "zh-wan-an", term: "晚安", translation: "Good night", pronunciation: "wahn ahn" },
    ],
    phrases: [
      { id: "zh-ph-1", text: "你好！你好吗？", translation: "Hello! How are you?", pronunciation: "nee how nee how ma" },
      { id: "zh-ph-2", text: "我很好，谢谢。", translation: "I'm fine, thank you.", pronunciation: "waw hen how shye shye" },
    ],
    activities: [
      { id: "zh-u1-l1-a1", type: "vocabulary", title: "Learn the characters", description: "Study each greeting with pinyin and meaning." },
      { id: "zh-u1-l1-a2", type: "matching", title: "Match the greeting", description: "Connect Chinese greetings to English meanings." },
      { id: "zh-u1-l1-a3", type: "ai-teacher", title: "Greeting practice", description: "Practice 你好 with your AI teacher." },
    ],
    aiTeacher: {
      systemContext:
        "You are a patient Mandarin teacher. Speak mostly in English. Teach only 你好, 再见, 早上好, 晚安. Give pinyin when introducing characters. Keep replies short. Ask the student to repeat 你好. Do not teach unrelated topics.",
      openingLine: "Hi! Let's learn your first Chinese greeting — 你好, pronounced nee how, means hello. Can you try saying 你好?",
      teachingNotes: [
        "Emphasize tone gently without overwhelming beginners.",
        "Use 你好吗 as a simple follow-up phrase.",
      ],
    },
  },

  {
    id: "zh-u1-l2",
    unitId: "zh-unit-1",
    languageId: "zh",
    order: 2,
    title: "Thank You & Goodbye",
    subtitle: "Polite essentials",
    description: "Express thanks and wrap up conversations politely.",
    imageKey: "treasure",
    xpReward: 10,
    estimatedMinutes: 5,
    goal: {
      summary: "Say thank you and goodbye in common situations.",
      skills: ["politeness", "speaking"],
    },
    vocabulary: [
      { id: "zh-xiexie", term: "谢谢", translation: "Thank you", pronunciation: "shye shye" },
      { id: "zh-bu-keqi", term: "不客气", translation: "You're welcome", pronunciation: "boo kuh chee" },
      { id: "zh-duibuqi", term: "对不起", translation: "Sorry", pronunciation: "dway boo chee" },
      { id: "zh-meiguanxi", term: "没关系", translation: "No problem", pronunciation: "may gwahn shee" },
    ],
    phrases: [
      { id: "zh-ph-3", text: "谢谢你的帮助。", translation: "Thank you for your help.", pronunciation: "shye shye nee duh bahng joo" },
      { id: "zh-ph-4", text: "再见，明天见！", translation: "Goodbye, see you tomorrow!", pronunciation: "dzai jyen ming-tyen jyen" },
    ],
    activities: [
      { id: "zh-u1-l2-a1", type: "vocabulary", title: "Polite words", description: "Learn 谢谢, 不客气, and more." },
      { id: "zh-u1-l2-a2", type: "speaking", title: "Say thank you", description: "Practice thanking someone in Mandarin." },
      { id: "zh-u1-l2-a3", type: "ai-teacher", title: "Polite exchange", description: "Role-play a short thank-you conversation." },
    ],
    aiTeacher: {
      systemContext:
        "You are a kind Mandarin teacher. Teach only 谢谢, 不客气, 对不起, 没关系, and 再见. Speak mostly in English with pinyin support. Short replies. Ask the student to say 谢谢. Stay on politeness phrases only.",
      openingLine: "Nice work! A super useful word is 谢谢 — shye shye — it means thank you. Can you say 谢谢?",
      teachingNotes: [
        "Pair 谢谢 with 不客气 in a mini dialogue.",
        "End with 再见 to reinforce goodbye from the previous lesson.",
      ],
    },
  },

  // ─── Chinese · Unit 2 ────────────────────────────────────────────────────

  {
    id: "zh-u2-l1",
    unitId: "zh-unit-2",
    languageId: "zh",
    order: 1,
    title: "Where Is…?",
    subtitle: "Ask simple location questions",
    description: "Ask where something is using 在哪里.",
    imageKey: "earth",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Ask where a place is and understand a simple answer.",
      skills: ["questions", "listening"],
    },
    vocabulary: [
      { id: "zh-zai-nali", term: "在哪里", translation: "Where is it?", pronunciation: "dzai nah lee" },
      { id: "zh-cezhan", term: "车站", translation: "station", pronunciation: "tsuh dzhahn" },
      { id: "zh-fandian", term: "饭店", translation: "restaurant / hotel", pronunciation: "fahn dyan" },
      { id: "zh-zheli", term: "这里", translation: "here", pronunciation: "juh lee" },
    ],
    phrases: [
      { id: "zh-ph-5", text: "车站在哪里？", translation: "Where is the station?", pronunciation: "tsuh dzhahn dzai nah lee" },
      { id: "zh-ph-6", text: "在这里。", translation: "It's here.", pronunciation: "dzai juh lee" },
    ],
    activities: [
      { id: "zh-u2-l1-a1", type: "vocabulary", title: "Location words", description: "Learn place words and 在哪里." },
      { id: "zh-u2-l1-a2", type: "listening", title: "Find the place", description: "Listen and identify the location being asked about." },
      { id: "zh-u2-l1-a3", type: "ai-teacher", title: "Ask for directions", description: "Ask your teacher where the station is." },
    ],
    aiTeacher: {
      systemContext:
        "You are a helpful Mandarin teacher. Teach only 在哪里, 车站, 饭店, 这里, and the phrase 车站在哪里. Speak mostly in English. Guide the student to ask where something is. Brief replies. No advanced grammar.",
      openingLine: "Let's ask where things are! 在哪里 means where is it. Try asking — 车站在哪里? That means where is the station?",
      teachingNotes: [
        "Answer simply with 在这里 to build confidence.",
        "Use only vocabulary from this lesson.",
      ],
    },
  },

  {
    id: "zh-u2-l2",
    unitId: "zh-unit-2",
    languageId: "zh",
    order: 2,
    title: "Simple Directions",
    subtitle: "Left, right, and straight",
    description: "Understand and use basic direction words.",
    imageKey: "mascotWelcome",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Understand left, right, and straight ahead.",
      skills: ["directions", "listening", "speaking"],
    },
    vocabulary: [
      { id: "zh-zuo", term: "左", translation: "left", pronunciation: "dzwaw" },
      { id: "zh-you", term: "右", translation: "right", pronunciation: "yo" },
      { id: "zh-zhijie", term: "直走", translation: "go straight", pronunciation: "jir dzo" },
      { id: "zh-jin", term: "近", translation: "near", pronunciation: "jin" },
    ],
    phrases: [
      { id: "zh-ph-7", text: "向左转。", translation: "Turn left.", pronunciation: "dzaw dzwaw dzhwahn" },
      { id: "zh-ph-8", text: "一直走。", translation: "Keep going straight.", pronunciation: "ee jir dzo" },
    ],
    activities: [
      { id: "zh-u2-l2-a1", type: "vocabulary", title: "Direction words", description: "Learn left, right, and straight." },
      { id: "zh-u2-l2-a2", type: "matching", title: "Pick the direction", description: "Match direction words to their meanings." },
      { id: "zh-u2-l2-a3", type: "ai-teacher", title: "Follow directions", description: "Listen and respond to simple directions." },
    ],
    aiTeacher: {
      systemContext:
        "You are a calm Mandarin teacher. Teach only 左, 右, 直走, 近 and direction phrases. Speak mostly in English. Give one direction at a time and ask the student to repeat. Stay within this lesson.",
      openingLine: "Directions time! 左 is left and 右 is right. Can you say 左?",
      teachingNotes: [
        "Combine with 在哪里 from the previous lesson for a mini scenario.",
        "Keep directions to one step at a time.",
      ],
    },
  },

  {
    id: "zh-u2-l3",
    unitId: "zh-unit-2",
    languageId: "zh",
    order: 3,
    title: "At the Café",
    subtitle: "Order something simple",
    description: "Use polite phrases to order a drink at a café.",
    imageKey: "palace",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Order a drink politely at a café.",
      skills: ["ordering", "speaking"],
    },
    vocabulary: [
      { id: "zh-kafei", term: "咖啡", translation: "coffee", pronunciation: "kah-fay" },
      { id: "zh-shui", term: "水", translation: "water", pronunciation: "shway" },
      { id: "zh-qing", term: "请", translation: "please", pronunciation: "ching" },
    ],
    phrases: [
      { id: "zh-ph-9", text: "请给我一杯咖啡。", translation: "A coffee, please." },
      { id: "zh-ph-10", text: "多少钱？", translation: "How much is it?" },
    ],
    activities: [
      { id: "zh-u2-l3-a1", type: "vocabulary", title: "Café words", description: "Learn 咖啡 and 请." },
      { id: "zh-u2-l3-a2", type: "speaking", title: "Place your order", description: "Practice ordering politely." },
      { id: "zh-u2-l3-a3", type: "ai-teacher", title: "Café role-play", description: "Order from your AI barista." },
    ],
    aiTeacher: {
      systemContext: "You are a cheerful Mandarin café teacher. Teach 咖啡 and 请. Speak mostly in English.",
      openingLine: "Welcome! 咖啡 means coffee. Try ordering with 请给我一杯咖啡.",
      teachingNotes: ["Always model 请 in orders."],
    },
  },

  {
    id: "zh-u2-l4",
    unitId: "zh-unit-2",
    languageId: "zh",
    order: 4,
    title: "Shopping",
    subtitle: "Buy something simple",
    description: "Ask for items and understand basic prices.",
    imageKey: "treasure",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Ask for an item and understand a price.",
      skills: ["shopping", "listening"],
    },
    vocabulary: [
      { id: "zh-zhege", term: "这个", translation: "this one", pronunciation: "juh-guh" },
      { id: "zh-duoshao", term: "多少", translation: "how much", pronunciation: "dwaw-show" },
      { id: "zh-yuan", term: "元", translation: "yuan", pronunciation: "ywen" },
    ],
    phrases: [
      { id: "zh-ph-11", text: "我要这个。", translation: "I want this one." },
      { id: "zh-ph-12", text: "十元。", translation: "Ten yuan." },
    ],
    activities: [
      { id: "zh-u2-l4-a1", type: "vocabulary", title: "Shopping words", description: "Learn 这个 and 多少." },
      { id: "zh-u2-l4-a2", type: "listening", title: "Hear the price", description: "Listen and pick the price." },
      { id: "zh-u2-l4-a3", type: "ai-teacher", title: "Shop role-play", description: "Buy something from your teacher." },
    ],
    aiTeacher: {
      systemContext: "You are a helpful Mandarin shop teacher. Teach 这个, 多少, 元. Speak mostly in English.",
      openingLine: "Shopping time! 这个 means this one. Can you say 我要这个?",
      teachingNotes: ["Use simple round prices like 十元."],
    },
  },

  {
    id: "zh-u2-l5",
    unitId: "zh-unit-2",
    languageId: "zh",
    order: 5,
    title: "Family & Friends",
    subtitle: "Talk about people you know",
    description: "Name family members and friends in simple phrases.",
    imageKey: "earth",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Name one family member in Mandarin.",
      skills: ["family", "speaking"],
    },
    vocabulary: [
      { id: "zh-mama", term: "妈妈", translation: "mom", pronunciation: "mah-mah" },
      { id: "zh-baba", term: "爸爸", translation: "dad", pronunciation: "bah-bah" },
      { id: "zh-pengyou", term: "朋友", translation: "friend", pronunciation: "pung-yoh" },
    ],
    phrases: [
      { id: "zh-ph-13", text: "这是我妈妈。", translation: "This is my mom." },
      { id: "zh-ph-14", text: "他是我的朋友。", translation: "He is my friend." },
    ],
    activities: [
      { id: "zh-u2-l5-a1", type: "vocabulary", title: "Family words", description: "Learn 妈妈, 爸爸, and 朋友." },
      { id: "zh-u2-l5-a2", type: "matching", title: "Match the word", description: "Connect words to meanings." },
      { id: "zh-u2-l5-a3", type: "ai-teacher", title: "Talk about family", description: "Introduce one family member." },
    ],
    aiTeacher: {
      systemContext: "You are a warm Mandarin teacher. Teach 妈妈, 爸爸, 朋友. Speak mostly in English.",
      openingLine: "妈妈 means mom. Can you say 妈妈?",
      teachingNotes: ["Ask the student to introduce one person they know."],
    },
  },

  {
    id: "zh-u2-l6",
    unitId: "zh-unit-2",
    languageId: "zh",
    order: 6,
    title: "Daily Life",
    subtitle: "Talk about your routine",
    description: "Describe simple daily activities.",
    imageKey: "mascotWelcome",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Describe one daily activity in Mandarin.",
      skills: ["routines", "speaking"],
    },
    vocabulary: [
      { id: "zh-shangban", term: "上班", translation: "to go to work", pronunciation: "shahng-bahn" },
      { id: "zh-huijia", term: "回家", translation: "to go home", pronunciation: "hway jyah" },
      { id: "zh-chifan", term: "吃饭", translation: "to eat a meal", pronunciation: "chr fahn" },
    ],
    phrases: [
      { id: "zh-ph-15", text: "我去上班。", translation: "I go to work." },
      { id: "zh-ph-16", text: "我回家。", translation: "I go home." },
    ],
    activities: [
      { id: "zh-u2-l6-a1", type: "vocabulary", title: "Routine words", description: "Learn 上班 and 回家." },
      { id: "zh-u2-l6-a2", type: "fill-blank", title: "Complete the routine", description: "Pick the right phrase." },
      { id: "zh-u2-l6-a3", type: "ai-teacher", title: "Talk about your day", description: "Share one daily activity." },
    ],
    aiTeacher: {
      systemContext: "You are an upbeat Mandarin teacher. Teach 上班, 回家, 吃饭. Speak mostly in English.",
      openingLine: "上班 means to go to work. Can you say 我去上班?",
      teachingNotes: ["Keep sentences to one activity at a time."],
    },
  },

  // ─── French · Unit 1 ─────────────────────────────────────────────────────

  {
    id: "fr-u1-l1",
    unitId: "fr-unit-1",
    languageId: "fr",
    order: 1,
    title: "Bonjour!",
    subtitle: "French greetings",
    description: "Start conversations with bonjour, salut, and au revoir.",
    imageKey: "palace",
    xpReward: 10,
    estimatedMinutes: 5,
    goal: {
      summary: "Greet someone and say goodbye in French.",
      skills: ["greetings", "speaking"],
    },
    vocabulary: [
      { id: "fr-bonjour", term: "Bonjour", translation: "Hello / Good day", pronunciation: "bohn-ZHOOR" },
      { id: "fr-salut", term: "Salut", translation: "Hi / Bye (informal)", pronunciation: "sah-LOO" },
      { id: "fr-au-revoir", term: "Au revoir", translation: "Goodbye", pronunciation: "oh ruh-VWAHR" },
      { id: "fr-bonsoir", term: "Bonsoir", translation: "Good evening", pronunciation: "bohn-SWAHR" },
    ],
    phrases: [
      { id: "fr-ph-1", text: "Bonjour! Comment allez-vous?", translation: "Hello! How are you? (formal)" },
      { id: "fr-ph-2", text: "Salut, à bientôt!", translation: "Hi, see you soon!" },
    ],
    activities: [
      { id: "fr-u1-l1-a1", type: "vocabulary", title: "Greeting words", description: "Learn bonjour, salut, and au revoir." },
      { id: "fr-u1-l1-a2", type: "speaking", title: "Say bonjour", description: "Practice greeting aloud." },
      { id: "fr-u1-l1-a3", type: "ai-teacher", title: "Greeting chat", description: "Exchange greetings with your AI teacher." },
    ],
    aiTeacher: {
      systemContext:
        "You are a lively French teacher. Teach only bonjour, salut, au revoir, bonsoir. Speak mostly in English. Introduce one French word at a time. Short, encouraging replies. Ask the student to repeat bonjour. Do not leave this lesson topic.",
      openingLine: "Bonjour! That's hello in French — bonjour. Give it a try — can you say bonjour?",
      teachingNotes: [
        "Explain salut is informal compared to bonjour.",
        "Close practice with au revoir.",
      ],
    },
  },

  {
    id: "fr-u1-l2",
    unitId: "fr-unit-1",
    languageId: "fr",
    order: 2,
    title: "How Are You?",
    subtitle: "Ask and answer ça va",
    description: "Check in on someone and share how you're feeling.",
    imageKey: "treasure",
    xpReward: 10,
    estimatedMinutes: 6,
    goal: {
      summary: "Ask how someone is and give a simple answer.",
      skills: ["conversation", "speaking"],
    },
    vocabulary: [
      { id: "fr-ca-va", term: "Ça va?", translation: "How are you? / I'm fine", pronunciation: "sah vah" },
      { id: "fr-tres-bien", term: "Très bien", translation: "Very well", pronunciation: "treh byan" },
      { id: "fr-comma-va", term: "Comment ça va?", translation: "How's it going?", pronunciation: "koh-mahn sah vah" },
      { id: "fr-et-toi", term: "Et toi?", translation: "And you?", pronunciation: "ay twah" },
    ],
    phrases: [
      { id: "fr-ph-3", text: "Ça va, merci. Et toi?", translation: "I'm fine, thanks. And you?" },
      { id: "fr-ph-4", text: "Très bien, merci!", translation: "Very well, thank you!" },
    ],
    activities: [
      { id: "fr-u1-l2-a1", type: "vocabulary", title: "Learn ça va", description: "Study how to ask and answer ça va." },
      { id: "fr-u1-l2-a2", type: "fill-blank", title: "Complete the reply", description: "Pick the right response to Comment ça va?" },
      { id: "fr-u1-l2-a3", type: "ai-teacher", title: "Check-in chat", description: "Ask and answer ça va with your teacher." },
    ],
    aiTeacher: {
      systemContext:
        "You are a warm French teacher. Teach only ça va, très bien, comment ça va, et toi. Speak mostly in English. Model a short check-in exchange. One or two sentences per reply. Ask the student to answer ça va. Stay on this lesson.",
      openingLine: "Let's check in! Ça va means how are you — or I'm fine. I'll ask you: ça va?",
      teachingNotes: [
        "Model: Comment ça va? → Ça va, merci. Et toi?",
        "Celebrate any attempt at très bien.",
      ],
    },
  },

  // ─── French · Unit 2 ─────────────────────────────────────────────────────

  {
    id: "fr-u2-l1",
    unitId: "fr-unit-2",
    languageId: "fr",
    order: 1,
    title: "Ordering Coffee",
    subtitle: "At a French café",
    description: "Order un café and use s'il vous plaît naturally.",
    imageKey: "earth",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Order a coffee politely at a café.",
      skills: ["ordering", "speaking"],
    },
    vocabulary: [
      { id: "fr-cafe", term: "café", translation: "coffee", pronunciation: "kah-FAY" },
      { id: "fr-the", term: "thé", translation: "tea", pronunciation: "tay" },
      { id: "fr-svp", term: "s'il vous plaît", translation: "please", pronunciation: "seel voo PLAY" },
      { id: "fr-merci", term: "merci", translation: "thank you", pronunciation: "mehr-SEE" },
    ],
    phrases: [
      { id: "fr-ph-5", text: "Un café, s'il vous plaît.", translation: "A coffee, please." },
      { id: "fr-ph-6", text: "L'addition, s'il vous plaît.", translation: "The check, please." },
    ],
    activities: [
      { id: "fr-u2-l1-a1", type: "vocabulary", title: "Café vocabulary", description: "Learn café, thé, and polite phrases." },
      { id: "fr-u2-l1-a2", type: "speaking", title: "Order aloud", description: "Practice ordering un café, s'il vous plaît." },
      { id: "fr-u2-l1-a3", type: "ai-teacher", title: "Café role-play", description: "Order from your AI barista." },
    ],
    aiTeacher: {
      systemContext:
        "You are a friendly French café teacher. Teach only café, thé, s'il vous plaît, merci, and un café s'il vous plaît. Speak mostly in English. Role-play a barista. Short replies. Stay in the café ordering lesson.",
      openingLine: "Welcome! To order coffee in French, say un café, s'il vous plaît. What would you like to order?",
      teachingNotes: [
        "Always acknowledge merci from the student.",
        "Accept café or thé orders only.",
      ],
    },
  },

  {
    id: "fr-u2-l2",
    unitId: "fr-unit-2",
    languageId: "fr",
    order: 2,
    title: "Likes & Dislikes",
    subtitle: "Say what you enjoy",
    description: "Share simple preferences using j'aime and je n'aime pas.",
    imageKey: "mascotWelcome",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Say what you like and don't like in French.",
      skills: ["preferences", "speaking"],
    },
    vocabulary: [
      { id: "fr-jaime", term: "J'aime", translation: "I like", pronunciation: "zhem" },
      { id: "fr-jaime-pas", term: "Je n'aime pas", translation: "I don't like", pronunciation: "zhuh nem pah" },
      { id: "fr-chocolat", term: "le chocolat", translation: "chocolate", pronunciation: "luh shoh-koh-LAH" },
      { id: "fr-fromage", term: "le fromage", translation: "cheese", pronunciation: "luh froh-MAHZH" },
    ],
    phrases: [
      { id: "fr-ph-7", text: "J'aime le chocolat.", translation: "I like chocolate." },
      { id: "fr-ph-8", text: "Je n'aime pas le fromage.", translation: "I don't like cheese." },
    ],
    activities: [
      { id: "fr-u2-l2-a1", type: "vocabulary", title: "Preference words", description: "Learn j'aime and je n'aime pas." },
      { id: "fr-u2-l2-a2", type: "matching", title: "Like or dislike?", description: "Match phrases to their meanings." },
      { id: "fr-u2-l2-a3", type: "ai-teacher", title: "Share preferences", description: "Tell your teacher what you like." },
    ],
    aiTeacher: {
      systemContext:
        "You are an encouraging French teacher. Teach only j'aime, je n'aime pas, le chocolat, le fromage. Speak mostly in English. Ask the student what they like using j'aime. Short replies. Stay on likes and dislikes only.",
      openingLine: "Let's talk about what you like! J'aime means I like. Can you say j'aime le chocolat — I like chocolate?",
      teachingNotes: [
        "Ask a simple either/or: chocolat or fromage?",
        "Model je n'aime pas gently if the student dislikes something.",
      ],
    },
  },

  {
    id: "fr-u2-l3",
    unitId: "fr-unit-2",
    languageId: "fr",
    order: 3,
    title: "Travel & Directions",
    subtitle: "Ask where places are",
    description: "Ask for directions and understand simple answers.",
    imageKey: "palace",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Ask where something is and understand a simple answer.",
      skills: ["directions", "listening"],
    },
    vocabulary: [
      { id: "fr-ou-est", term: "Où est", translation: "Where is", pronunciation: "oo ay" },
      { id: "fr-gare", term: "la gare", translation: "the station", pronunciation: "lah gahr" },
      { id: "fr-ici", term: "ici", translation: "here", pronunciation: "ee-SEE" },
    ],
    phrases: [
      { id: "fr-ph-9", text: "Où est la gare?", translation: "Where is the station?" },
      { id: "fr-ph-10", text: "C'est ici.", translation: "It's here." },
    ],
    activities: [
      { id: "fr-u2-l3-a1", type: "vocabulary", title: "Direction words", description: "Learn où est and ici." },
      { id: "fr-u2-l3-a2", type: "listening", title: "Find the place", description: "Listen and identify the location." },
      { id: "fr-u2-l3-a3", type: "ai-teacher", title: "Ask for directions", description: "Ask your teacher where the station is." },
    ],
    aiTeacher: {
      systemContext: "You are a helpful French teacher. Teach où est, la gare, ici. Speak mostly in English.",
      openingLine: "Let's ask where things are! Où est means where is. Can you try it?",
      teachingNotes: ["Answer simply with c'est ici."],
    },
  },

  {
    id: "fr-u2-l4",
    unitId: "fr-unit-2",
    languageId: "fr",
    order: 4,
    title: "Shopping",
    subtitle: "Buy something simple",
    description: "Ask for items and understand basic prices.",
    imageKey: "treasure",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Ask for an item and understand a price.",
      skills: ["shopping", "speaking"],
    },
    vocabulary: [
      { id: "fr-je-voudrais", term: "Je voudrais", translation: "I would like", pronunciation: "zhuh voo-DRAY" },
      { id: "fr-pain", term: "le pain", translation: "bread", pronunciation: "luh pan" },
      { id: "fr-euros", term: "euros", translation: "euros", pronunciation: "uh-ROH" },
    ],
    phrases: [
      { id: "fr-ph-11", text: "Je voudrais du pain.", translation: "I would like some bread." },
      { id: "fr-ph-12", text: "C'est deux euros.", translation: "It's two euros." },
    ],
    activities: [
      { id: "fr-u2-l4-a1", type: "vocabulary", title: "Shopping words", description: "Learn je voudrais and le pain." },
      { id: "fr-u2-l4-a2", type: "speaking", title: "Make a request", description: "Practice asking for an item." },
      { id: "fr-u2-l4-a3", type: "ai-teacher", title: "Shop role-play", description: "Buy something from your teacher." },
    ],
    aiTeacher: {
      systemContext: "You are a friendly French shop teacher. Teach je voudrais, le pain. Speak mostly in English.",
      openingLine: "Shopping time! Je voudrais means I would like. Try je voudrais du pain.",
      teachingNotes: ["Use simple round prices like deux euros."],
    },
  },

  {
    id: "fr-u2-l5",
    unitId: "fr-unit-2",
    languageId: "fr",
    order: 5,
    title: "Family & Friends",
    subtitle: "Talk about people you know",
    description: "Name family members and friends in simple phrases.",
    imageKey: "earth",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Name one family member in French.",
      skills: ["family", "speaking"],
    },
    vocabulary: [
      { id: "fr-maman", term: "maman", translation: "mom", pronunciation: "mah-MAHN" },
      { id: "fr-papa", term: "papa", translation: "dad", pronunciation: "pah-PAH" },
      { id: "fr-ami", term: "ami", translation: "friend", pronunciation: "ah-MEE" },
    ],
    phrases: [
      { id: "fr-ph-13", text: "Voici ma maman.", translation: "This is my mom." },
      { id: "fr-ph-14", text: "C'est mon ami.", translation: "He is my friend." },
    ],
    activities: [
      { id: "fr-u2-l5-a1", type: "vocabulary", title: "Family words", description: "Learn maman, papa, and ami." },
      { id: "fr-u2-l5-a2", type: "matching", title: "Match the word", description: "Connect French words to meanings." },
      { id: "fr-u2-l5-a3", type: "ai-teacher", title: "Talk about family", description: "Introduce one family member." },
    ],
    aiTeacher: {
      systemContext: "You are a warm French teacher. Teach maman, papa, ami. Speak mostly in English.",
      openingLine: "Maman means mom. Can you say maman?",
      teachingNotes: ["Ask the student to introduce one person they know."],
    },
  },

  {
    id: "fr-u2-l6",
    unitId: "fr-unit-2",
    languageId: "fr",
    order: 6,
    title: "Daily Life",
    subtitle: "Talk about your routine",
    description: "Describe simple daily activities.",
    imageKey: "mascotWelcome",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Describe one daily activity in French.",
      skills: ["routines", "speaking"],
    },
    vocabulary: [
      { id: "fr-travail", term: "travail", translation: "work", pronunciation: "trah-VAHY" },
      { id: "fr-maison", term: "maison", translation: "home", pronunciation: "may-ZOHN" },
      { id: "fr-vais", term: "je vais", translation: "I go", pronunciation: "zhuh vay" },
    ],
    phrases: [
      { id: "fr-ph-15", text: "Je vais à l'école.", translation: "I go to school." },
      { id: "fr-ph-16", text: "Je vais à la maison.", translation: "I go home." },
    ],
    activities: [
      { id: "fr-u2-l6-a1", type: "vocabulary", title: "Routine words", description: "Learn je vais, maison, and travail." },
      { id: "fr-u2-l6-a2", type: "fill-blank", title: "Complete the routine", description: "Pick the right verb." },
      { id: "fr-u2-l6-a3", type: "ai-teacher", title: "Talk about your day", description: "Share one daily activity." },
    ],
    aiTeacher: {
      systemContext: "You are an upbeat French teacher. Teach je vais, maison, école. Speak mostly in English.",
      openingLine: "Je vais means I go. Can you say je vais à la maison — I go home?",
      teachingNotes: ["Keep sentences to one activity at a time."],
    },
  },

  // ─── Japanese · Unit 1 ───────────────────────────────────────────────────

  {
    id: "ja-u1-l1",
    unitId: "ja-unit-1",
    languageId: "ja",
    order: 1,
    title: "Konnichiwa!",
    subtitle: "Your first Japanese greeting",
    description: "Learn to say hello and goodbye in everyday situations.",
    imageKey: "palace",
    xpReward: 10,
    estimatedMinutes: 5,
    goal: {
      summary: "Greet someone with こんにちは and say goodbye.",
      skills: ["greetings", "speaking"],
    },
    vocabulary: [
      { id: "ja-konnichiwa", term: "こんにちは", translation: "Hello", pronunciation: "kohn-nee-chee-wah" },
      { id: "ja-sayonara", term: "さようなら", translation: "Goodbye", pronunciation: "sah-yoh-nah-rah" },
      { id: "ja-ohayo", term: "おはよう", translation: "Good morning", pronunciation: "oh-hah-yoh" },
    ],
    phrases: [
      { id: "ja-ph-1", text: "こんにちは！", translation: "Hello!" },
      { id: "ja-ph-2", text: "さようなら。", translation: "Goodbye." },
    ],
    activities: [
      { id: "ja-u1-l1-a1", type: "vocabulary", title: "Learn the words", description: "Study basic greetings." },
      { id: "ja-u1-l1-a2", type: "speaking", title: "Say it aloud", description: "Practice pronouncing greetings." },
      { id: "ja-u1-l1-a3", type: "ai-teacher", title: "Greeting chat", description: "Practice with your AI teacher." },
    ],
    aiTeacher: {
      systemContext: "You are a friendly Japanese teacher. Teach only こんにちは, さようなら, おはよう. Speak mostly in English. Short replies.",
      openingLine: "Let's start with こんにちは — it means hello. Can you try saying it?",
      teachingNotes: ["Model one greeting at a time.", "Celebrate every attempt."],
    },
  },

  {
    id: "ja-u1-l2",
    unitId: "ja-unit-1",
    languageId: "ja",
    order: 2,
    title: "Introducing Yourself",
    subtitle: "Share your name",
    description: "Tell people your name and ask for theirs.",
    imageKey: "treasure",
    xpReward: 10,
    estimatedMinutes: 6,
    goal: {
      summary: "Introduce yourself and ask someone's name.",
      skills: ["introductions", "speaking"],
    },
    vocabulary: [
      { id: "ja-watashi", term: "私", translation: "I / me", pronunciation: "wah-tah-shee" },
      { id: "ja-namae", term: "名前", translation: "name", pronunciation: "nah-mah-eh" },
      { id: "ja-hajimemashite", term: "はじめまして", translation: "Nice to meet you", pronunciation: "hah-jee-meh-mah-she-teh" },
    ],
    phrases: [
      { id: "ja-ph-3", text: "私の名前はアレックスです。", translation: "My name is Alex." },
      { id: "ja-ph-4", text: "お名前は？", translation: "What is your name?" },
    ],
    activities: [
      { id: "ja-u1-l2-a1", type: "vocabulary", title: "Learn the words", description: "Study introduction vocabulary." },
      { id: "ja-u1-l2-a2", type: "fill-blank", title: "Complete the sentence", description: "Fill in your name in Japanese." },
      { id: "ja-u1-l2-a3", type: "ai-teacher", title: "Introduce yourself", description: "Role-play a short introduction." },
    ],
    aiTeacher: {
      systemContext: "You are a warm Japanese teacher. Teach はじめまして and simple self-introductions. Speak mostly in English.",
      openingLine: "Great! はじめまして means nice to meet you. Can you say it?",
      teachingNotes: ["Guide a greeting → name → はじめまして exchange."],
    },
  },

  {
    id: "ja-u1-l3",
    unitId: "ja-unit-1",
    languageId: "ja",
    order: 3,
    title: "Thank You & Please",
    subtitle: "Polite essentials",
    description: "Express thanks and make polite requests.",
    imageKey: "earth",
    xpReward: 10,
    estimatedMinutes: 5,
    goal: {
      summary: "Say thank you and please in common situations.",
      skills: ["politeness", "speaking"],
    },
    vocabulary: [
      { id: "ja-arigato", term: "ありがとう", translation: "Thank you", pronunciation: "ah-ree-gah-toh" },
      { id: "ja-kudasai", term: "ください", translation: "please", pronunciation: "koo-dah-sai" },
      { id: "ja-sumimasen", term: "すみません", translation: "Excuse me / Sorry", pronunciation: "soo-mee-mah-sen" },
    ],
    phrases: [
      { id: "ja-ph-5", text: "ありがとうございます。", translation: "Thank you very much." },
      { id: "ja-ph-6", text: "すみません。", translation: "Excuse me." },
    ],
    activities: [
      { id: "ja-u1-l3-a1", type: "vocabulary", title: "Polite words", description: "Learn ありがとう and ください." },
      { id: "ja-u1-l3-a2", type: "matching", title: "Match the phrase", description: "Pair phrases with meanings." },
      { id: "ja-u1-l3-a3", type: "ai-teacher", title: "Polite exchange", description: "Practice thanking your teacher." },
    ],
    aiTeacher: {
      systemContext: "You are a kind Japanese teacher. Teach ありがとう, ください, すみません. Speak mostly in English.",
      openingLine: "A very useful word is ありがとう — thank you. Can you say it?",
      teachingNotes: ["Pair ありがとう with a simple request using ください."],
    },
  },

  // ─── Japanese · Unit 2 ───────────────────────────────────────────────────

  {
    id: "ja-u2-l1",
    unitId: "ja-unit-2",
    languageId: "ja",
    order: 1,
    title: "At the Café",
    subtitle: "Order something simple",
    description: "Use polite phrases to order a drink at a café.",
    imageKey: "mascotWelcome",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Order a drink politely at a café.",
      skills: ["ordering", "speaking"],
    },
    vocabulary: [
      { id: "ja-koohii", term: "コーヒー", translation: "coffee", pronunciation: "koh-hee" },
      { id: "ja-mizu", term: "水", translation: "water", pronunciation: "mee-zoo" },
      { id: "ja-onegai", term: "お願いします", translation: "please", pronunciation: "oh-neh-guy shee-mahs" },
    ],
    phrases: [
      { id: "ja-ph-7", text: "コーヒーをお願いします。", translation: "A coffee, please." },
      { id: "ja-ph-8", text: "いくらですか？", translation: "How much is it?" },
    ],
    activities: [
      { id: "ja-u2-l1-a1", type: "vocabulary", title: "Café words", description: "Learn café vocabulary." },
      { id: "ja-u2-l1-a2", type: "speaking", title: "Place your order", description: "Practice ordering politely." },
      { id: "ja-u2-l1-a3", type: "ai-teacher", title: "Café role-play", description: "Order from your AI barista." },
    ],
    aiTeacher: {
      systemContext: "You are a cheerful Japanese café teacher. Teach ordering with お願いします. Speak mostly in English.",
      openingLine: "Welcome! To order coffee, say コーヒーをお願いします. What would you like?",
      teachingNotes: ["Always model お願いします in orders."],
    },
  },

  {
    id: "ja-u2-l2",
    unitId: "ja-unit-2",
    languageId: "ja",
    order: 2,
    title: "Daily Routines",
    subtitle: "Talk about your day",
    description: "Describe simple daily activities.",
    imageKey: "palace",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Describe one daily activity in Japanese.",
      skills: ["routines", "speaking"],
    },
    vocabulary: [
      { id: "ja-okiru", term: "起きる", translation: "to wake up", pronunciation: "oh-kee-roo" },
      { id: "ja-taberu", term: "食べる", translation: "to eat", pronunciation: "tah-beh-roo" },
      { id: "ja-iku", term: "行く", translation: "to go", pronunciation: "ee-koo" },
    ],
    phrases: [
      { id: "ja-ph-9", text: "朝ごはんを食べます。", translation: "I eat breakfast." },
      { id: "ja-ph-10", text: "学校に行きます。", translation: "I go to school." },
    ],
    activities: [
      { id: "ja-u2-l2-a1", type: "vocabulary", title: "Routine verbs", description: "Learn basic daily verbs." },
      { id: "ja-u2-l2-a2", type: "fill-blank", title: "Complete the routine", description: "Pick the right verb." },
      { id: "ja-u2-l2-a3", type: "ai-teacher", title: "Talk about your day", description: "Share one daily activity." },
    ],
    aiTeacher: {
      systemContext: "You are an upbeat Japanese teacher. Teach 起きる, 食べる, 行く in simple sentences. Speak mostly in English.",
      openingLine: "Let's talk routines! 食べる means to eat. What do you eat in the morning?",
      teachingNotes: ["Keep sentences to one activity at a time."],
    },
  },

  {
    id: "ja-u2-l3",
    unitId: "ja-unit-2",
    languageId: "ja",
    order: 3,
    title: "Shopping Basics",
    subtitle: "Buy something simple",
    description: "Ask for items and understand simple prices.",
    imageKey: "treasure",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Ask for an item and understand a price.",
      skills: ["shopping", "listening"],
    },
    vocabulary: [
      { id: "ja-kore", term: "これ", translation: "this", pronunciation: "koh-reh" },
      { id: "ja-kudasai-shop", term: "ください", translation: "please (give me)", pronunciation: "koo-dah-sai" },
      { id: "ja-en", term: "円", translation: "yen", pronunciation: "en" },
    ],
    phrases: [
      { id: "ja-ph-11", text: "これをください。", translation: "This one, please." },
      { id: "ja-ph-12", text: "五百円です。", translation: "It's 500 yen." },
    ],
    activities: [
      { id: "ja-u2-l3-a1", type: "vocabulary", title: "Shopping words", description: "Learn これ and 円." },
      { id: "ja-u2-l3-a2", type: "listening", title: "Hear the price", description: "Listen and pick the price." },
      { id: "ja-u2-l3-a3", type: "ai-teacher", title: "Shop role-play", description: "Buy something from your teacher." },
    ],
    aiTeacher: {
      systemContext: "You are a helpful Japanese shop clerk teacher. Teach これをください and simple prices. Speak mostly in English.",
      openingLine: "Shopping time! これ means this. Try saying これをください — this one, please.",
      teachingNotes: ["Use round numbers like 五百円 for prices."],
    },
  },

  // ─── German · Unit 1 ─────────────────────────────────────────────────────

  {
    id: "de-u1-l1",
    unitId: "de-unit-1",
    languageId: "de",
    order: 1,
    title: "Hallo!",
    subtitle: "German greetings",
    description: "Start conversations with hallo, guten Tag, and tschüss.",
    imageKey: "palace",
    xpReward: 10,
    estimatedMinutes: 5,
    goal: {
      summary: "Greet someone and say goodbye in German.",
      skills: ["greetings", "speaking"],
    },
    vocabulary: [
      { id: "de-hallo", term: "Hallo", translation: "Hello", pronunciation: "HAH-loh" },
      { id: "de-guten-tag", term: "Guten Tag", translation: "Good day", pronunciation: "GOO-ten tahk" },
      { id: "de-tschuss", term: "Tschüss", translation: "Bye", pronunciation: "chooss" },
    ],
    phrases: [
      { id: "de-ph-1", text: "Hallo! Wie geht's?", translation: "Hello! How are you?" },
      { id: "de-ph-2", text: "Tschüss!", translation: "Bye!" },
    ],
    activities: [
      { id: "de-u1-l1-a1", type: "vocabulary", title: "Greeting words", description: "Learn hallo and guten Tag." },
      { id: "de-u1-l1-a2", type: "speaking", title: "Say hallo", description: "Practice greeting aloud." },
      { id: "de-u1-l1-a3", type: "ai-teacher", title: "Greeting chat", description: "Exchange greetings with your teacher." },
    ],
    aiTeacher: {
      systemContext: "You are a lively German teacher. Teach hallo, guten Tag, tschüss. Speak mostly in English.",
      openingLine: "Hallo! That's hello in German. Can you say hallo?",
      teachingNotes: ["Contrast formal guten Tag with casual hallo."],
    },
  },

  {
    id: "de-u1-l2",
    unitId: "de-unit-1",
    languageId: "de",
    order: 2,
    title: "Introducing Yourself",
    subtitle: "Share your name",
    description: "Tell people your name and ask for theirs.",
    imageKey: "treasure",
    xpReward: 10,
    estimatedMinutes: 6,
    goal: {
      summary: "Introduce yourself and ask someone's name.",
      skills: ["introductions", "speaking"],
    },
    vocabulary: [
      { id: "de-ich-heisse", term: "Ich heiße", translation: "My name is", pronunciation: "ikh HY-suh" },
      { id: "de-name", term: "Name", translation: "name", pronunciation: "NAH-muh" },
      { id: "de-freut-mich", term: "Freut mich", translation: "Nice to meet you", pronunciation: "froyt mikh" },
    ],
    phrases: [
      { id: "de-ph-3", text: "Ich heiße Anna.", translation: "My name is Anna." },
      { id: "de-ph-4", text: "Wie heißt du?", translation: "What is your name?" },
    ],
    activities: [
      { id: "de-u1-l2-a1", type: "vocabulary", title: "Introduction words", description: "Study ich heiße and freut mich." },
      { id: "de-u1-l2-a2", type: "fill-blank", title: "Complete the intro", description: "Fill in the missing word." },
      { id: "de-u1-l2-a3", type: "ai-teacher", title: "Introduce yourself", description: "Role-play a short introduction." },
    ],
    aiTeacher: {
      systemContext: "You are a friendly German teacher. Teach ich heiße and wie heißt du. Speak mostly in English.",
      openingLine: "Let's introduce ourselves! Ich heiße means my name is. Try ich heiße plus your name!",
      teachingNotes: ["Model a full greeting → name → freut mich exchange."],
    },
  },

  {
    id: "de-u1-l3",
    unitId: "de-unit-1",
    languageId: "de",
    order: 3,
    title: "How Are You?",
    subtitle: "Ask and answer",
    description: "Check in on someone and share how you're feeling.",
    imageKey: "earth",
    xpReward: 10,
    estimatedMinutes: 6,
    goal: {
      summary: "Ask how someone is and give a simple answer.",
      skills: ["conversation", "speaking"],
    },
    vocabulary: [
      { id: "de-wie-gehts", term: "Wie geht's?", translation: "How are you?", pronunciation: "vee gates" },
      { id: "de-gut", term: "Gut", translation: "Good / well", pronunciation: "goot" },
      { id: "de-danke", term: "Danke", translation: "Thank you", pronunciation: "DAHN-kuh" },
    ],
    phrases: [
      { id: "de-ph-5", text: "Mir geht's gut, danke.", translation: "I'm fine, thanks." },
      { id: "de-ph-6", text: "Und dir?", translation: "And you?" },
    ],
    activities: [
      { id: "de-u1-l3-a1", type: "vocabulary", title: "Check-in words", description: "Learn wie geht's and gut." },
      { id: "de-u1-l3-a2", type: "matching", title: "Match the reply", description: "Pair questions with answers." },
      { id: "de-u1-l3-a3", type: "ai-teacher", title: "Check-in chat", description: "Ask and answer wie geht's." },
    ],
    aiTeacher: {
      systemContext: "You are a warm German teacher. Teach wie geht's, gut, danke. Speak mostly in English.",
      openingLine: "Wie geht's means how are you. I'll ask you — wie geht's?",
      teachingNotes: ["Model: Wie geht's? → Mir geht's gut, danke."],
    },
  },

  // ─── German · Unit 2 ─────────────────────────────────────────────────────

  {
    id: "de-u2-l1",
    unitId: "de-unit-2",
    languageId: "de",
    order: 1,
    title: "At the Café",
    subtitle: "Order something simple",
    description: "Use polite phrases to order a drink at a café.",
    imageKey: "mascotWelcome",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Order a drink politely at a café.",
      skills: ["ordering", "speaking"],
    },
    vocabulary: [
      { id: "de-kaffee", term: "Kaffee", translation: "coffee", pronunciation: "KAH-fay" },
      { id: "de-wasser", term: "Wasser", translation: "water", pronunciation: "VAH-ser" },
      { id: "de-bitte", term: "Bitte", translation: "please", pronunciation: "BIT-tuh" },
    ],
    phrases: [
      { id: "de-ph-7", text: "Einen Kaffee, bitte.", translation: "A coffee, please." },
      { id: "de-ph-8", text: "Was kostet das?", translation: "How much does it cost?" },
    ],
    activities: [
      { id: "de-u2-l1-a1", type: "vocabulary", title: "Café words", description: "Learn Kaffee and bitte." },
      { id: "de-u2-l1-a2", type: "speaking", title: "Place your order", description: "Practice ordering politely." },
      { id: "de-u2-l1-a3", type: "ai-teacher", title: "Café role-play", description: "Order from your AI barista." },
    ],
    aiTeacher: {
      systemContext: "You are a cheerful German café teacher. Teach einen Kaffee bitte. Speak mostly in English.",
      openingLine: "Welcome! Say einen Kaffee, bitte to order coffee. What would you like?",
      teachingNotes: ["Always acknowledge bitte and danke."],
    },
  },

  {
    id: "de-u2-l2",
    unitId: "de-unit-2",
    languageId: "de",
    order: 2,
    title: "Numbers 1–10",
    subtitle: "Count in German",
    description: "Learn to count from one to ten.",
    imageKey: "palace",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Count from 1 to 10 in German.",
      skills: ["numbers", "listening"],
    },
    vocabulary: [
      { id: "de-eins", term: "eins", translation: "one", pronunciation: "eyns" },
      { id: "de-zwei", term: "zwei", translation: "two", pronunciation: "tsvy" },
      { id: "de-funf", term: "fünf", translation: "five", pronunciation: "fuenf" },
      { id: "de-zehn", term: "zehn", translation: "ten", pronunciation: "tsayn" },
    ],
    phrases: [
      { id: "de-ph-9", text: "Ich habe zwei Brüder.", translation: "I have two brothers." },
      { id: "de-ph-10", text: "Wie alt bist du?", translation: "How old are you?" },
    ],
    activities: [
      { id: "de-u2-l2-a1", type: "vocabulary", title: "Learn the numbers", description: "Memorize numbers 1 through 10." },
      { id: "de-u2-l2-a2", type: "listening", title: "Hear the number", description: "Listen and pick the correct number." },
      { id: "de-u2-l2-a3", type: "ai-teacher", title: "Count together", description: "Count aloud from eins to zehn." },
    ],
    aiTeacher: {
      systemContext: "You are an upbeat German teacher. Teach numbers eins through zehn. Speak mostly in English.",
      openingLine: "Let's count! Eins is one. Can you say eins?",
      teachingNotes: ["Count up in pairs with the student."],
    },
  },

  {
    id: "de-u2-l3",
    unitId: "de-unit-2",
    languageId: "de",
    order: 3,
    title: "Likes & Dislikes",
    subtitle: "Say what you enjoy",
    description: "Share simple preferences using ich mag and ich mag nicht.",
    imageKey: "treasure",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Say what you like and don't like in German.",
      skills: ["preferences", "speaking"],
    },
    vocabulary: [
      { id: "de-ich-mag", term: "Ich mag", translation: "I like", pronunciation: "ikh mahk" },
      { id: "de-ich-mag-nicht", term: "Ich mag nicht", translation: "I don't like", pronunciation: "ikh mahk nikht" },
      { id: "de-schokolade", term: "Schokolade", translation: "chocolate", pronunciation: "shoh-koh-LAH-duh" },
    ],
    phrases: [
      { id: "de-ph-11", text: "Ich mag Schokolade.", translation: "I like chocolate." },
      { id: "de-ph-12", text: "Ich mag Kaffee nicht.", translation: "I don't like coffee." },
    ],
    activities: [
      { id: "de-u2-l3-a1", type: "vocabulary", title: "Preference words", description: "Learn ich mag and ich mag nicht." },
      { id: "de-u2-l3-a2", type: "matching", title: "Like or dislike?", description: "Match phrases to meanings." },
      { id: "de-u2-l3-a3", type: "ai-teacher", title: "Share preferences", description: "Tell your teacher what you like." },
    ],
    aiTeacher: {
      systemContext: "You are an encouraging German teacher. Teach ich mag and ich mag nicht. Speak mostly in English.",
      openingLine: "Ich mag means I like. Can you say ich mag Schokolade?",
      teachingNotes: ["Ask a simple either/or preference question."],
    },
  },

  // ─── Korean · Unit 1 ─────────────────────────────────────────────────────

  {
    id: "ko-u1-l1",
    unitId: "ko-unit-1",
    languageId: "ko",
    order: 1,
    title: "Annyeong!",
    subtitle: "Korean greetings",
    description: "Learn annyeong and other common greetings.",
    imageKey: "palace",
    xpReward: 10,
    estimatedMinutes: 5,
    goal: {
      summary: "Greet someone with 안녕하세요.",
      skills: ["greetings", "speaking"],
    },
    vocabulary: [
      { id: "ko-annyeong", term: "안녕하세요", translation: "Hello", pronunciation: "ahn-nyung-hah-seh-yo" },
      { id: "ko-annyeong-bye", term: "안녕", translation: "Hi / Bye (informal)", pronunciation: "ahn-nyung" },
      { id: "ko-annyeonghi", term: "안녕히 가세요", translation: "Goodbye (to someone leaving)", pronunciation: "ahn-nyung-hee gah-seh-yo" },
    ],
    phrases: [
      { id: "ko-ph-1", text: "안녕하세요!", translation: "Hello!" },
      { id: "ko-ph-2", text: "안녕히 가세요.", translation: "Goodbye." },
    ],
    activities: [
      { id: "ko-u1-l1-a1", type: "vocabulary", title: "Greeting words", description: "Learn 안녕하세요." },
      { id: "ko-u1-l1-a2", type: "speaking", title: "Say it aloud", description: "Practice greeting aloud." },
      { id: "ko-u1-l1-a3", type: "ai-teacher", title: "Greeting chat", description: "Practice with your AI teacher." },
    ],
    aiTeacher: {
      systemContext: "You are a friendly Korean teacher. Teach 안녕하세요 and 안녕히 가세요. Speak mostly in English.",
      openingLine: "Let's start with 안녕하세요 — hello. Can you try saying it?",
      teachingNotes: ["Explain 안녕 is informal compared to 안녕하세요."],
    },
  },

  {
    id: "ko-u1-l2",
    unitId: "ko-unit-1",
    languageId: "ko",
    order: 2,
    title: "Introducing Yourself",
    subtitle: "Share your name",
    description: "Tell people your name and ask for theirs.",
    imageKey: "treasure",
    xpReward: 10,
    estimatedMinutes: 6,
    goal: {
      summary: "Introduce yourself and ask someone's name.",
      skills: ["introductions", "speaking"],
    },
    vocabulary: [
      { id: "ko-jeo", term: "저", translation: "I (polite)", pronunciation: "juh" },
      { id: "ko-ireum", term: "이름", translation: "name", pronunciation: "ee-reum" },
      { id: "ko-mannaseo", term: "만나서 반가워요", translation: "Nice to meet you", pronunciation: "mahn-nah-suh bahn-gah-wuh-yo" },
    ],
    phrases: [
      { id: "ko-ph-3", text: "저는 알렉스예요.", translation: "I am Alex." },
      { id: "ko-ph-4", text: "이름이 뭐예요?", translation: "What is your name?" },
    ],
    activities: [
      { id: "ko-u1-l2-a1", type: "vocabulary", title: "Introduction words", description: "Study 저는 and 이름." },
      { id: "ko-u1-l2-a2", type: "fill-blank", title: "Complete the intro", description: "Fill in your name." },
      { id: "ko-u1-l2-a3", type: "ai-teacher", title: "Introduce yourself", description: "Role-play a short introduction." },
    ],
    aiTeacher: {
      systemContext: "You are a warm Korean teacher. Teach 저는 ... 예요 and 이름이 뭐예요. Speak mostly in English.",
      openingLine: "To introduce yourself, say 저는 plus your name plus 예요. Can you try?",
      teachingNotes: ["Model 만나서 반가워요 after introductions."],
    },
  },

  {
    id: "ko-u1-l3",
    unitId: "ko-unit-1",
    languageId: "ko",
    order: 3,
    title: "Thank You & Please",
    subtitle: "Polite essentials",
    description: "Express thanks and make polite requests.",
    imageKey: "earth",
    xpReward: 10,
    estimatedMinutes: 5,
    goal: {
      summary: "Say thank you and please in common situations.",
      skills: ["politeness", "speaking"],
    },
    vocabulary: [
      { id: "ko-gamsahamnida", term: "감사합니다", translation: "Thank you", pronunciation: "gahm-sah-hahm-nee-dah" },
      { id: "ko-juseyo", term: "주세요", translation: "please give me", pronunciation: "joo-seh-yo" },
      { id: "ko-mianhamnida", term: "미안합니다", translation: "I'm sorry", pronunciation: "mee-ahn-hahm-nee-dah" },
    ],
    phrases: [
      { id: "ko-ph-5", text: "정말 감사합니다.", translation: "Thank you very much." },
      { id: "ko-ph-6", text: "물 주세요.", translation: "Water, please." },
    ],
    activities: [
      { id: "ko-u1-l3-a1", type: "vocabulary", title: "Polite words", description: "Learn 감사합니다 and 주세요." },
      { id: "ko-u1-l3-a2", type: "matching", title: "Match the phrase", description: "Pair phrases with meanings." },
      { id: "ko-u1-l3-a3", type: "ai-teacher", title: "Polite exchange", description: "Practice thanking your teacher." },
    ],
    aiTeacher: {
      systemContext: "You are a kind Korean teacher. Teach 감사합니다 and 주세요. Speak mostly in English.",
      openingLine: "감사합니다 means thank you. Can you say it?",
      teachingNotes: ["Pair 감사합니다 with a simple request using 주세요."],
    },
  },

  // ─── Korean · Unit 2 ─────────────────────────────────────────────────────

  {
    id: "ko-u2-l1",
    unitId: "ko-unit-2",
    languageId: "ko",
    order: 1,
    title: "At the Café",
    subtitle: "Order something simple",
    description: "Use polite phrases to order a drink at a café.",
    imageKey: "mascotWelcome",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Order a drink politely at a café.",
      skills: ["ordering", "speaking"],
    },
    vocabulary: [
      { id: "ko-keopi", term: "커피", translation: "coffee", pronunciation: "kuh-pee" },
      { id: "ko-mul", term: "물", translation: "water", pronunciation: "mool" },
      { id: "ko-juseyo-cafe", term: "주세요", translation: "please", pronunciation: "joo-seh-yo" },
    ],
    phrases: [
      { id: "ko-ph-7", text: "커피 주세요.", translation: "A coffee, please." },
      { id: "ko-ph-8", text: "얼마예요?", translation: "How much is it?" },
    ],
    activities: [
      { id: "ko-u2-l1-a1", type: "vocabulary", title: "Café words", description: "Learn 커피 and 주세요." },
      { id: "ko-u2-l1-a2", type: "speaking", title: "Place your order", description: "Practice ordering politely." },
      { id: "ko-u2-l1-a3", type: "ai-teacher", title: "Café role-play", description: "Order from your AI barista." },
    ],
    aiTeacher: {
      systemContext: "You are a cheerful Korean café teacher. Teach 커피 주세요. Speak mostly in English.",
      openingLine: "Welcome! Say 커피 주세요 to order coffee. What would you like?",
      teachingNotes: ["Always model 주세요 in orders."],
    },
  },

  {
    id: "ko-u2-l2",
    unitId: "ko-unit-2",
    languageId: "ko",
    order: 2,
    title: "Daily Routines",
    subtitle: "Talk about your day",
    description: "Describe simple daily activities.",
    imageKey: "palace",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Describe one daily activity in Korean.",
      skills: ["routines", "speaking"],
    },
    vocabulary: [
      { id: "ko-il-eonnada", term: "일어나다", translation: "to wake up", pronunciation: "ee-ruh-nah-dah" },
      { id: "ko-meokda", term: "먹다", translation: "to eat", pronunciation: "muhk-dah" },
      { id: "ko-gada", term: "가다", translation: "to go", pronunciation: "gah-dah" },
    ],
    phrases: [
      { id: "ko-ph-9", text: "아침을 먹어요.", translation: "I eat breakfast." },
      { id: "ko-ph-10", text: "학교에 가요.", translation: "I go to school." },
    ],
    activities: [
      { id: "ko-u2-l2-a1", type: "vocabulary", title: "Routine verbs", description: "Learn basic daily verbs." },
      { id: "ko-u2-l2-a2", type: "fill-blank", title: "Complete the routine", description: "Pick the right verb." },
      { id: "ko-u2-l2-a3", type: "ai-teacher", title: "Talk about your day", description: "Share one daily activity." },
    ],
    aiTeacher: {
      systemContext: "You are an upbeat Korean teacher. Teach 먹다 and 가다 in simple sentences. Speak mostly in English.",
      openingLine: "Let's talk routines! 먹다 means to eat. What do you eat in the morning?",
      teachingNotes: ["Keep sentences to one activity at a time."],
    },
  },

  {
    id: "ko-u2-l3",
    unitId: "ko-unit-2",
    languageId: "ko",
    order: 3,
    title: "Family & Friends",
    subtitle: "Talk about people you know",
    description: "Name family members and friends in simple phrases.",
    imageKey: "treasure",
    xpReward: 12,
    estimatedMinutes: 7,
    goal: {
      summary: "Name one family member in Korean.",
      skills: ["family", "speaking"],
    },
    vocabulary: [
      { id: "ko-eomma", term: "엄마", translation: "mom", pronunciation: "um-mah" },
      { id: "ko-appa", term: "아빠", translation: "dad", pronunciation: "ah-pah" },
      { id: "ko-chingu", term: "친구", translation: "friend", pronunciation: "cheen-goo" },
    ],
    phrases: [
      { id: "ko-ph-11", text: "이분은 제 엄마예요.", translation: "This is my mom." },
      { id: "ko-ph-12", text: "제 친구예요.", translation: "This is my friend." },
    ],
    activities: [
      { id: "ko-u2-l3-a1", type: "vocabulary", title: "Family words", description: "Learn 엄마, 아빠, and 친구." },
      { id: "ko-u2-l3-a2", type: "matching", title: "Match the word", description: "Connect Korean words to meanings." },
      { id: "ko-u2-l3-a3", type: "ai-teacher", title: "Talk about family", description: "Introduce one family member." },
    ],
    aiTeacher: {
      systemContext: "You are a warm Korean teacher. Teach 엄마, 아빠, 친구. Speak mostly in English.",
      openingLine: "엄마 means mom. Can you say 엄마?",
      teachingNotes: ["Ask the student to introduce one person they know."],
    },
  },
];

export function getLessonsByLanguage(languageId: LanguageCode): Lesson[] {
  return lessons
    .filter((lesson) => lesson.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
