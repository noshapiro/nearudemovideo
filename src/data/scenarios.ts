export const SCENARIOS = [
  {
    id: 0,
    name: "HR Onboarding",
    user: "Hi… I was told to reach out to you about the onboarding. It's my first day and... to be honest, I've been having a bit of a hard time adjusting to the new workflow. And I'm not sure if I'm doing something wrong or if I just need a bit more time to figure everything out.",
    emotion: { anxiety: 72, frustration: 24, confidence: 18, engagement: 45 },
    pillClass: "ep-anxious",
    pillLabel: "Anxious",
    confidence: "88% confidence",
    agentStatus: "Emotional state: ANXIOUS",
    intercept:
      "NearuVibe™: hesitant cadence + self-doubt markers + low confidence → ANXIETY / ADJUSTMENT STRESS detected. Activating reassurance mode.",
    stdResponse:
      "Welcome to the company! Here's how to complete your onboarding: Step 1 — Register your account at portal.company.com. Step 2 — Complete your compliance training modules. Step 3 — Submit your personal details via the HR form. Step 4 — Schedule your 1:1 with your manager. Let me know if you have questions!",
    smartResponse:
      "Hey — first days can feel overwhelming, and that's completely normal. You don't need to figure everything out today. I'm here to help you, and we can take it step by step. Let's start with just one thing: what would make you feel most settled right now?",
  },
  {
    id: 1,
    name: "CS Insurance",
    user: "I've been trying to get my claim approved for three weeks. Every time I call I get transferred to someone new and have to explain everything from scratch. I honestly don't know what else to do.",
    emotion: { anxiety: 68, frustration: 91, confidence: 12, engagement: 38 },
    pillClass: "ep-frustrated",
    pillLabel: "Exhausted",
    confidence: "94% confidence",
    agentStatus: "Emotional state: FRUSTRATED / EXHAUSTED",
    intercept:
      "NearuVibe™: flat affect + resignation markers + history of repeated friction → CHRONIC FRUSTRATION / LOW TRUST. Bypassing script. Prioritizing acknowledgment.",
    stdResponse:
      "I'm sorry to hear you've had difficulty with your claim. I can help you with that today. Could you please provide me with your claim number, policy number, date of birth, and a brief description of the claim so I can look into this for you?",
    smartResponse:
      "Three weeks of being transferred and starting over every single time — that's exhausting, and I'm genuinely sorry that happened. You shouldn't have to explain this again. I'm pulling up your full history right now so you don't have to repeat a word. I'm not transferring you anywhere. Let's get this resolved together, right now.",
  },
  {
    id: 2,
    name: "CS — Add Dependent",
    user: "Hi… It's actually my first week at this job. I wanted to add my mother as a dependent on my insurance. She's been really unwell lately — that's actually part of why I took this position, to be closer to her and make sure she's covered.",
    emotion: { anxiety: 71, frustration: 8, confidence: 24, engagement: 58 },
    pillClass: "ep-vulnerable",
    pillLabel: "Vulnerable",
    confidence: "86% confidence",
    agentStatus: "Emotional state: VULNERABLE",
    intercept:
      "NearuVibe™: voice tremor + hesitant cadence + personal disclosure → EMOTIONAL VULNERABILITY detected. Switching to care mode.",
    stdResponse:
      "Of course! To add a dependent you'll need to provide: their full legal name, date of birth, Social Security Number, and relationship type. You have 30 days from your hire date to complete enrollment. Please navigate to Benefits › Dependents › Add New and complete the form. Let me know if you need anything else!",
    smartResponse:
      "Thank you for sharing that with me — I can hear this really matters. Making sure your mother is covered is exactly the right thing to focus on right now, and I'm going to make sure we get this done properly today. You have 30 days from your start date, so there's no pressure. Let's go through it together, one step at a time. How are you feeling so far — is there anything you'd like to get right first?",
  },
  {
    id: 3,
    name: "Customer Support",
    user: "This is the THIRD time I've tried to reset my password today. It keeps failing. I have a board presentation in one hour and I cannot log in.",
    emotion: { anxiety: 88, frustration: 92, confidence: 14, engagement: 40 },
    pillClass: "ep-frustrated",
    pillLabel: "Frustrated",
    confidence: "97% confidence",
    agentStatus: "Emotional state: HIGH FRUSTRATION",
    intercept:
      "NearuVibe™: clipped speech + elevated pitch + rapid cadence → ACUTE FRUSTRATION / HIGH URGENCY. Bypassing standard script.",
    stdResponse:
      "I'm sorry you're experiencing login issues! Please try: 1) Clear browser cache. 2) Disable extensions. 3) Try a different browser. 4) Check spam folder for the reset email. If the issue persists, contact IT support.",
    smartResponse:
      "I hear you — board presentation in one hour, we need this fixed right now. I'm looking at your account directly. Your previous reset attempts went to an old email address. I'm sending a new link to your current address right now — it'll arrive in 30 seconds. Stay with me.",
  },
  {
    id: 4,
    name: "Sales Close",
    user: "I like what I'm seeing but… we had a bad vendor lock-in situation last year. Data portability and pricing transparency are really important before we can move forward.",
    emotion: { anxiety: 34, frustration: 26, confidence: 59, engagement: 67 },
    pillClass: "ep-cautious",
    pillLabel: "Cautious",
    confidence: "81% confidence",
    agentStatus: "Emotional state: CAUTIOUS INTEREST",
    intercept:
      "NearuVibe™: falling intonation + deliberate pacing → SKEPTICISM with HIGH ENGAGEMENT. Switching to transparency mode.",
    stdResponse:
      "Great question! Our company offers flexible pricing tiers and supports standard data export formats. Our enterprise contracts include SLA guarantees. Would you like me to send our pricing sheet and portability documentation?",
    smartResponse:
      "That experience sounds genuinely frustrating, and I want to earn your trust before we talk contracts. Let me show you our data export API — live, right now — so you can see exactly what you own. And I want to be direct: here's where our pricing gets complex. Let's look at it together rather than me just sending a PDF.",
  },
  {
    id: 5,
    name: "Sales — CX",
    user: "So I understand what your platform does… but what I'm really trying to figure out is how this would actually improve our customer experience?",
    emotion: { anxiety: 22, frustration: 18, confidence: 62, engagement: 78 },
    pillClass: "ep-cautious",
    pillLabel: "Evaluating",
    confidence: "77% confidence",
    agentStatus: "Emotional state: EVALUATING",
    intercept:
      "NearuVibe™: measured tone + high engagement markers → GENUINE CURIOSITY / DECISION MODE. Switching to concrete evidence mode.",
    stdResponse:
      "Great question! Kaltura's platform improves customer experience through AI-powered video agents available 24/7, multilingual support across 30+ languages, and seamless integration with your existing CRM and support tools. Our enterprise clients report significant improvements in resolution time and customer satisfaction scores.",
    smartResponse:
      "That's exactly the right question — and honestly, the answer is different for every team. Let me show you something concrete: one of our clients in financial services saw a 40% drop in escalations within 8 weeks — not because the AI got smarter, but because it finally learned to read when a customer was frustrated before they said so. That's what we'd be building for you. What does your current biggest CX pain point actually look like?",
  },
  {
    id: 6,
    name: "Training",
    user: "Okay… I completed module four. I guess I kind of get the compliance framework. Ready for the next one I suppose.",
    emotion: { anxiety: 18, frustration: 38, confidence: 28, engagement: 16 },
    pillClass: "ep-disengaged",
    pillLabel: "Disengaged",
    confidence: "79% confidence",
    agentStatus: "Emotional state: LOW ENGAGEMENT",
    intercept:
      "NearuVibe™: flat prosody + low vocal energy + hedged language → DISENGAGEMENT / LOW COMPREHENSION. Intervening before module 5.",
    stdResponse:
      "Great job completing Module 4! You're making excellent progress. Module 5 covers Advanced Compliance Reporting — 12 video lessons and a 20-question assessment. Click Next Module to begin!",
    smartResponse:
      "Hold on — before we move on, I want to make sure module 4 actually clicked. I heard some hesitation there. Let me give you the one real-world scenario that makes the whole framework finally make sense. Takes two minutes, and it's the reason most people suddenly get it. Can I show you?",
  },
];

export type Scenario = (typeof SCENARIOS)[number];

export const EMPATHY_WORDS = [
  "What does your current biggest",
  "exactly the right question",
  "different for every team",
  "finally learned to read",
  "building for you",
  "before they said so",
  "what would make you feel",
  "You shouldn't have to",
  "every single step",
  "earn your trust",
  "repeat a word",
  "fully covered",
  "means a lot",
  "that happened",
  "one step at a time",
  "I can hear this",
  "really matters",
  "step by step",
  "most settled",
  "overwhelming",
  "here to help",
  "I hear you",
  "I can hear",
  "stay with me",
  "no rush",
  "exhausting",
  "together",
  "no pressure",
  "genuinely sorry",
  "resolved together",
  "completely normal",
  "for you",
];
