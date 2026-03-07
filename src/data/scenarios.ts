export const SCENARIOS = [
  {
    id: 0,
    name: "HR Onboarding",
    user: "Hi… I'm Sarah. It's my first day. I need to add my mother as a dependent. She's been really unwell — I moved here partly to be closer to her care.",
    emotion: { anxiety: 76, frustration: 10, confidence: 22, engagement: 52 },
    pillClass: "ep-vulnerable",
    pillLabel: "Vulnerable",
    confidence: "84% confidence",
    agentStatus: "Emotional state: VULNERABLE",
    intercept:
      "NearuVibe™: voice tremor + hesitant cadence → EMOTIONAL VULNERABILITY detected. Adapting response.",
    stdResponse:
      "Of course! To add a dependent you'll need their date of birth, Social Security Number, and relationship type from the dropdown. You have 30 days from your start date to complete enrollment. Click Benefits › Dependents › Add New to begin.",
    smartResponse:
      "Thank you for sharing that with me, Sarah — I can hear this means a lot. Let's make sure your mother is fully covered today. I'm going to walk you through every single step, and there's absolutely no rush. How are you feeling so far — is there anything you'd like to get right first?",
  },
  {
    id: 1,
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
    id: 2,
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
      "Great question! Kaltura offers flexible pricing tiers and supports standard data export formats. Our enterprise contracts include SLA guarantees. Would you like me to send our pricing sheet and portability documentation?",
    smartResponse:
      "That experience sounds genuinely frustrating, and I want to earn your trust before we talk contracts. Let me show you our data export API — live, right now — so you can see exactly what you own. And I want to be direct: here's where our pricing gets complex. Let's look at it together rather than me just sending a PDF.",
  },
  {
    id: 3,
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
  "right now",
  "stay with me",
  "I hear you",
  "directly",
  "earn your trust",
  "show you",
  "no rush",
  "every single step",
  "I want to be direct",
];
