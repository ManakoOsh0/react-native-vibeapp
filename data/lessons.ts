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
