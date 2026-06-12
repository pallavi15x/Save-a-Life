export const organs = [
  {
    id: 'heart',
    name: 'Heart',
    icon: 'Heart',
    color: '#E24B4A',
    bgColor: '#FCEBEB',
    borderColor: '#E24B4A',
    livesSaved: 1,
    description: 'A donated heart can give someone a second chance at life.',
    medicalName: 'Cardiac Transplant',
    survivalRateImprovement: '85% 1-year survival rate',
    ageRestriction: 'No specific age limit',
    position: { x: 50, y: 30 }
  },
  {
    id: 'lungs',
    name: 'Lungs',
    icon: 'Wind',
    color: '#378ADD',
    bgColor: '#E6F1FB',
    borderColor: '#378ADD',
    livesSaved: 2,
    description: 'Lung donation can help patients with chronic respiratory diseases.',
    medicalName: 'Pulmonary Transplant',
    survivalRateImprovement: '80% 1-year survival rate',
    ageRestriction: 'Generally under 65',
    position: { x: 50, y: 35 }
  },
  {
    id: 'liver',
    name: 'Liver',
    icon: 'Droplet',
    color: '#EF9F27',
    bgColor: '#FEF3E6',
    borderColor: '#EF9F27',
    livesSaved: 1,
    description: 'Liver can be split to save two lives - one adult and one child.',
    medicalName: 'Hepatic Transplant',
    survivalRateImprovement: '90% 1-year survival rate',
    ageRestriction: 'No specific age limit',
    position: { x: 40, y: 40 }
  },
  {
    id: 'kidneys',
    name: 'Kidneys',
    icon: 'Activity',
    color: '#7F77DD',
    bgColor: '#F3F1FE',
    borderColor: '#7F77DD',
    livesSaved: 2,
    description: 'Kidneys are the most commonly transplanted organs.',
    medicalName: 'Renal Transplant',
    survivalRateImprovement: '95% 1-year survival rate',
    ageRestriction: 'No specific age limit',
    position: { x: 45, y: 50 }
  },
  {
    id: 'eyes',
    name: 'Eyes',
    icon: 'Eye',
    color: '#1D9E75',
    bgColor: '#E1F5EE',
    borderColor: '#1D9E75',
    livesSaved: 2,
    description: 'Corneal transplants can restore sight to the blind.',
    medicalName: 'Corneal Transplant',
    survivalRateImprovement: '90% graft survival rate',
    ageRestriction: 'No age restriction',
    position: { x: 50, y: 10 }
  },
  {
    id: 'skin',
    name: 'Skin',
    icon: 'Hand',
    color: '#F59E6B',
    bgColor: '#FEF5E8',
    borderColor: '#F59E6B',
    livesSaved: 4,
    description: 'Skin donations help burn victims heal.',
    medicalName: 'Skin Allograft',
    survivalRateImprovement: 'Life-saving for severe burns',
    ageRestriction: 'No specific age limit',
    position: { x: 50, y: 60 }
  },
  {
    id: 'pancreas',
    name: 'Pancreas',
    icon: 'Activity',
    color: '#EC4899',
    bgColor: '#FCE7F3',
    borderColor: '#EC4899',
    livesSaved: 1,
    description: 'Pancreas donation can cure diabetes in recipients.',
    medicalName: 'Pancreatic Transplant',
    survivalRateImprovement: '80% 1-year survival rate',
    ageRestriction: 'Generally under 50',
    position: { x: 55, y: 45 }
  },
  {
    id: 'intestines',
    name: 'Intestines',
    icon: 'GitBranch',
    color: '#14B8A6',
    bgColor: '#E6FAF7',
    borderColor: '#14B8A6',
    livesSaved: 1,
    description: 'Intestinal transplants help patients with intestinal failure.',
    medicalName: 'Intestinal Transplant',
    survivalRateImprovement: '70% 1-year survival rate',
    ageRestriction: 'Case by case basis',
    position: { x: 50, y: 55 }
  },
  {
    id: 'bone-marrow',
    name: 'Bone Marrow',
    icon: 'Bone',
    color: '#8B5CF6',
    bgColor: '#F3EFFF',
    borderColor: '#8B5CF6',
    livesSaved: 1,
    description: 'Bone marrow donation can cure blood cancers.',
    medicalName: 'Stem Cell Transplant',
    survivalRateImprovement: '60-80% cure rate for leukemia',
    ageRestriction: 'Generally 18-60 for donors',
    position: { x: 50, y: 50 }
  }
];

export const mythsAndFacts = [
  { id: 1, myth: "Doctors won't try to save me if I'm a donor", fact: "Saving your life is always the priority. Donation is only considered after all efforts fail and death is declared." },
  { id: 2, myth: "I'm too old to donate", fact: "There is no age limit. Even 80-year-olds have donated organs successfully." },
  { id: 3, myth: "My religion doesn't allow it", fact: "All major religions support organ donation as an act of compassion and giving." },
  { id: 4, myth: "Rich patients get organs faster", fact: "Organs are matched by medical need, blood type, and compatibility. Wealth plays no role." },
  { id: 5, myth: "My body will be disfigured", fact: "Donation surgery is performed with utmost respect. The body looks normal for viewing." },
  { id: 6, myth: "My family will be charged for donation", fact: "Donation costs nothing to the donor's family. All expenses are covered." },
  { id: 7, myth: "I'm too sick to donate", fact: "The medical team decides suitability. Don't rule yourself out prematurely." },
  { id: 8, myth: "I can donate only after death", fact: "Living donors can give a kidney, part of a liver, bone marrow, and more." },
  { id: 9, myth: "Donors don't get the same medical care", fact: "Donor status has zero effect on emergency treatment decisions." },
  { id: 10, myth: "It will delay my funeral", fact: "Donation takes a few hours and does not delay funeral arrangements." },
  { id: 11, myth: "Organ donation is illegal in India", fact: "It is fully legal and regulated under the Transplantation of Human Organs Act, 1994." },
  { id: 12, myth: "It's painful for the donor", fact: "Deceased donation is performed post-death. Living donors receive full anesthesia and pain management." }
];

export const testimonials = [
  { id: 1, quote: "When my husband passed, we honored his wish to donate. He saved 5 lives that day. His legacy lives on.", name: "Priya Sharma", city: "Mumbai", role: "Donor Family", organ: "Multiple Organs" },
  { id: 2, quote: "After my heart transplant, I got to see my daughter's wedding. I owe my second life to an unknown hero.", name: "Rajesh Kumar", city: "Delhi", role: "Recipient", organ: "Heart" },
  { id: 3, quote: "As a living kidney donor, I gave my brother the gift of life. We both live healthy, normal lives now.", name: "Ananya Patel", city: "Ahmedabad", role: "Living Donor", organ: "Kidney" }
];

export const successStories = [
  { id: 1, name: "Rahul Verma", age: 35, city: "Bangalore", role: "Heart Recipient", organ: "Heart", quote: "Three years ago, I was given 6 months to live. Today, I run marathons. My donor is my hero.", fullStory: "Rahul was diagnosed with end-stage heart failure at 32. After waiting 8 months for a matching heart, he received the call that would change his life. Today, he runs marathons and advocates for organ donation across India.", image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { id: 2, name: "Meera Krishnan", age: 28, city: "Chennai", role: "Living Donor", organ: "Kidney", quote: "I donated a kidney to my mother. The surgery was simple, and I've never regretted it.", fullStory: "When Meera's mother needed dialysis three times a week, Meera didn't hesitate. She was a perfect match. The laparoscopic surgery was minimally invasive, and she was back to her IT job within weeks. Both mother and daughter are thriving.", image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { id: 3, name: "The Joseph Family", age: 0, city: "Kochi", role: "Donor Family", organ: "Multiple", quote: "Our son lives on in 8 people today. That is his legacy, and that brings us peace.", fullStory: "When 19-year-old Arav was in a tragic accident, his family made the courageous decision to donate his organs. His heart, liver, kidneys, eyes, and skin went to 8 different recipients. The family now runs an NGO promoting organ donation.", image: "https://images.pexels.com/photos/1129985/pexels-photo-1129985.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { id: 4, name: "Sanjay Gupta", age: 45, city: "Kolkata", role: "Liver Recipient", organ: "Liver", quote: "I can watch my children grow up because someone chose to donate. I am forever grateful.", fullStory: "Sanjay's liver was failing due to cirrhosis. A split-liver transplant from a deceased donor saved his life. The living donor portion also saved a child's life. Sanjay now mentors other transplant patients.", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { id: 5, name: "Fatima Khan", age: 22, city: "Hyderabad", role: "Cornea Recipient", organ: "Eyes", quote: "After 10 years of blindness, I can finally see my mother's face again.", fullStory: "Fatima lost her vision at 12 due to a rare corneal condition. After waiting 4 years for donor corneas, she received a bilateral transplant. Now she's studying to become a doctor herself.", image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { id: 6, name: "Vikram Singh", age: 52, city: "Jaipur", role: "Bone Marrow Donor", organ: "Bone Marrow", quote: "A simple procedure saved a child's life. Most decisions are hard. This one was easy.", fullStory: "Vikram registered as a bone marrow donor on a whim. Two years later, he was matched with a 7-year-old boy with leukemia. The donation was non-surgical and took just a few hours. That boy is now a healthy teenager.", image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=150" }
];

export const faqs = [
  { question: "What organs can I donate?", answer: "You can donate heart, lungs, liver, kidneys, pancreas, intestines, eyes (corneas), skin, and bone marrow. Living donors can donate one kidney, part of the liver, or bone marrow." },
  { question: "Does my religion allow organ donation?", answer: "All major religions including Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism support organ donation as an act of compassion and charity." },
  { question: "Will my family have to pay for the donation?", answer: "No. The donor's family never bears any cost for organ donation. All medical expenses related to the donation are covered by the hospital or organ allocation organization." },
  { question: "Will donation affect my funeral arrangements?", answer: "No. Organ donation does not delay funeral arrangements. The body is treated with respect and released to the family within 24-48 hours." },
  { question: "Can I donate if I have a medical condition?", answer: "Many medical conditions do not prevent organ donation. The medical team evaluates each case at the time of death. Only a few conditions like active cancer or HIV infection might rule out donation." },
  { question: "How is the donor's identity protected?", answer: "Donor and recipient identities are kept confidential. However, families can choose to exchange anonymous messages through the transplant coordination center." },
  { question: "Can my family override my donation decision?", answer: "In India, hospital authorities consult the next of kin before proceeding with organ retrieval. It is important to discuss your wishes with your family." },
  { question: "How do I register as an organ donor?", answer: "You can register on this platform by filling out the donor pledge form. You will receive a donor card. It is equally important to inform your family about your decision." },
  { question: "What is brain death?", answer: "Brain death is the irreversible loss of all brain function. The heart can still beat with life support, but the person is legally dead. This is when deceased organ donation becomes possible." },
  { question: "Can I choose which organs to donate?", answer: "Yes. When you register, you can specify exactly which organs and tissues you wish to donate. This preference will be honored." }
];

export const campaigns = [
  { id: 1, name: "Gift of Life Marathon", date: "2024-03-15", time: "06:00", city: "Mumbai", state: "Maharashtra", address: "Marine Drive Promenade", organization: "Save a Life Foundation", description: "A 10K run to raise awareness about organ donation. Register and pledge your organs at the event.", maxVolunteers: 100, image: "https://images.pexels.com/photos/2409044/pexels-photo-2409044.jpeg?auto=compress&cs=tinysrgb&w=400", coordinates: [19.0760, 72.8777] },
  { id: 2, name: "Organ Donation Awareness Week", date: "2024-03-20", time: "10:00", city: "Delhi", state: "Delhi", address: "India Gate Lawns", organization: "NOTTO", description: "Government-organized awareness camp with free health checkups and donor registration.", maxVolunteers: 200, image: "https://images.pexels.com/photos/2661252/pexels-photo-2661252.jpeg?auto=compress&cs=tinysrgb&w=400", coordinates: [28.6129, 77.2295] },
  { id: 3, name: "Cyclothon for Life", date: "2024-04-05", time: "05:30", city: "Bangalore", state: "Karnataka", address: "Cubbon Park", organization: "Green Riders Club", description: "A 25KM cycling event promoting organ donation and healthy living.", maxVolunteers: 150, image: "https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=400", coordinates: [12.9716, 77.5946] },
  { id: 4, name: "Camp Hope", date: "2024-02-28", time: "09:00", city: "Chennai", state: "Tamil Nadu", address: "Marina Beach", organization: "TANSO", description: "Beach awareness camp with donor registration and cultural events.", maxVolunteers: 120, image: "https://images.pexels.com/photos/2106170/pexels-photo-2106170.jpeg?auto=compress&cs=tinysrgb&w=400", coordinates: [13.0827, 80.2707], completed: true }
];

export const processSteps = [
  { step: 1, title: "Register", description: "Fill out the online donor registration form to pledge your organs.", icon: "FileText" },
  { step: 2, title: "Carry Your Card", description: "Download and carry your donor card. Share your decision with family.", icon: "CreditCard" },
  { step: 3, title: "Hospital Declaration", description: "If hospitalized, inform the medical staff about your donor status.", icon: "Building2" },
  { step: 4, title: "Medical Evaluation", description: "A team evaluates organ suitability and matches with recipients.", icon: "Stethoscope" },
  { step: 5, title: "Surgery", description: "Organ retrieval is performed with dignity and respect.", icon: "HeartPulse" },
  { step: 6, title: "Recovery", description: "Your body is returned to your family for funeral rites.", icon: "HandHeart" }
];

export const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal"
];

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const bloodCompatibility = {
  "A+": { canDonateTo: ["A+", "AB+"], canReceiveFrom: ["A+", "A-", "O+", "O-"] },
  "A-": { canDonateTo: ["A+", "A-", "AB+", "AB-"], canReceiveFrom: ["A-", "O-"] },
  "B+": { canDonateTo: ["B+", "AB+"], canReceiveFrom: ["B+", "B-", "O+", "O-"] },
  "B-": { canDonateTo: ["B+", "B-", "AB+", "AB-"], canReceiveFrom: ["B-", "O-"] },
  "AB+": { canDonateTo: ["AB+"], canReceiveFrom: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
  "AB-": { canDonateTo: ["AB+", "AB-"], canReceiveFrom: ["A-", "B-", "AB-", "O-"] },
  "O+": { canDonateTo: ["O+", "A+", "B+", "AB+"], canReceiveFrom: ["O+", "O-"] },
  "O-": { canDonateTo: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], canReceiveFrom: ["O-"] }
};

export const stateDonorData = [
  { state: "Maharashtra", donors: 85000, code: "MH" },
  { state: "Delhi", donors: 72000, code: "DL" },
  { state: "Tamil Nadu", donors: 68000, code: "TN" },
  { state: "Karnataka", donors: 65000, code: "KA" },
  { state: "Gujarat", donors: 58000, code: "GJ" },
  { state: "Kerala", donors: 52000, code: "KL" },
  { state: "West Bengal", donors: 48000, code: "WB" },
  { state: "Telangana", donors: 45000, code: "TS" },
  { state: "Uttar Pradesh", donors: 42000, code: "UP" },
  { state: "Rajasthan", donors: 38000, code: "RJ" },
  { state: "Andhra Pradesh", donors: 35000, code: "AP" },
  { state: "Madhya Pradesh", donors: 32000, code: "MP" },
  { state: "Haryana", donors: 28000, code: "HR" },
  { state: "Punjab", donors: 25000, code: "PB" },
  { state: "Odisha", donors: 22000, code: "OD" }
];

export const quizQuestions = [
  { id: 1, question: "How many lives can one organ donor save?", options: ["Up to 8 lives", "Up to 2 lives", "Up to 5 lives", "Only 1 life"], correct: 0, fact: "One donor can save up to 8 lives by donating heart, lungs, liver, kidneys, pancreas, and intestines." },
  { id: 2, question: "Is there an age limit for organ donation?", options: ["Yes, under 65 only", "Yes, under 50 only", "No, there's no age limit", "Yes, under 80 only"], correct: 2, fact: "There is no age limit for organ donation. Even people over 80 have successfully donated organs." },
  { id: 3, question: "Can living donors donate organs?", options: ["No, never", "Only kidneys", "Yes - kidney, part of liver, bone marrow", "Only blood"], correct: 2, fact: "Living donors can donate one kidney, part of their liver, or bone marrow while alive." },
  { id: 4, question: "Does organ donation disfigure the body?", options: ["Yes, significantly", "No, the body is treated with respect", "Only for some organs", "Yes, but it's hidden"], correct: 1, fact: "Organ donation surgery is performed with utmost respect. The body looks normal for open casket funerals." },
  { id: 5, question: "Who pays for organ donation costs?", options: ["The donor's family", "The recipient", "The hospital/government", "Insurance companies"], correct: 2, fact: "All costs related to organ donation are covered by the hospital or organ allocation organization, not the donor's family." },
  { id: 6, question: "What is brain death?", options: ["Coma state", "Irreversible loss of brain function", "Heart stopped", "Temporary unconsciousness"], correct: 1, fact: "Brain death is the irreversible loss of all brain function. The person is legally dead, even if the heart is still beating with life support." },
  { id: 7, question: "Do major religions support organ donation?", options: ["No, most oppose it", "Only Christianity", "Yes, all major religions support it", "It varies by region"], correct: 2, fact: "All major religions including Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism support organ donation." },
  { id: 8, question: "Can a donor choose which organs to donate?", options: ["No", "Yes, specific organs can be chosen", "Only in some countries", "Only living donors"], correct: 1, fact: "Yes, donors can specify exactly which organs and tissues they wish to donate when registering." },
  { id: 9, question: "Will being a donor affect my medical treatment?", options: ["Yes, doctors won't try as hard", "No, treatment is never affected", "Only in emergencies", "Only in some hospitals"], correct: 1, fact: "Donor status has zero effect on emergency treatment. Medical teams are separate from transplant teams." },
  { id: 10, question: "Is organ donation legal in India?", options: ["No", "Yes, fully legal", "Only in some states", "Only for living donation"], correct: 1, fact: "Organ donation is fully legal in India and regulated under the Transplantation of Human Organs Act, 1994." }
];

export const translations = {
  "en": {
    "nav": {
      "home": "Home",
      "learn": "Learn",
      "myths": "Myths",
      "register": "Register",
      "stories": "Stories",
      "campaigns": "Campaigns",
      "login": "Login",
      "donateNow": "Donate Now"
    },
    "hero": {
      "title": "Give the Gift That Lasts Forever",
      "subtitle": "One donor can save up to 8 lives. Your decision today can give someone a tomorrow.",
      "cta": "Become a Donor",
      "learnHow": "Learn How It Works",
      "joinDonors": "Join 5,00,000+ registered donors across India",
      "pledgedToday": "people have pledged today",
      "scroll": "Scroll to explore"
    },
    "common": {
      "learnMore": "Learn More",
      "submit": "Submit",
      "cancel": "Cancel",
      "close": "Close"
    },
    "stats": {
      "registered": "Registered Donors",
      "livesSaved": "Lives One Donor Can Save",
      "organsDonatable": "Organs & Tissues Donatable",
      "awaitingTransplant": "Patients Awaiting Transplant"
    },
    "organs": {
      "title": "Organs You Can Donate",
      "subtitle": "Every organ has the potential to save or transform lives. Learn about each one.",
      "helps": "Helps",
      "patient": "patient",
      "patients": "patients",
      "list": {
        "heart": {
          "name": "Heart",
          "description": "A donated heart can give someone a second chance at life.",
          "medicalName": "Cardiac Transplant",
          "survivalRateImprovement": "85% 1-year survival rate",
          "ageRestriction": "No specific age limit"
        },
        "lungs": {
          "name": "Lungs",
          "description": "Lung donation can help patients with chronic respiratory diseases.",
          "medicalName": "Pulmonary Transplant",
          "survivalRateImprovement": "80% 1-year survival rate",
          "ageRestriction": "Generally under 65"
        },
        "liver": {
          "name": "Liver",
          "description": "Liver can be split to save two lives - one adult and one child.",
          "medicalName": "Hepatic Transplant",
          "survivalRateImprovement": "90% 1-year survival rate",
          "ageRestriction": "No specific age limit"
        },
        "kidneys": {
          "name": "Kidneys",
          "description": "Kidneys are the most commonly transplanted organs.",
          "medicalName": "Renal Transplant",
          "survivalRateImprovement": "95% 1-year survival rate",
          "ageRestriction": "No specific age limit"
        },
        "eyes": {
          "name": "Eyes",
          "description": "Corneal transplants can restore sight to the blind.",
          "medicalName": "Corneal Transplant",
          "survivalRateImprovement": "90% graft survival rate",
          "ageRestriction": "No age restriction"
        },
        "skin": {
          "name": "Skin",
          "description": "Skin donations help burn victims heal.",
          "medicalName": "Skin Allograft",
          "survivalRateImprovement": "Life-saving for severe burns",
          "ageRestriction": "No specific age limit"
        },
        "pancreas": {
          "name": "Pancreas",
          "description": "Pancreas donation can cure diabetes in recipients.",
          "medicalName": "Pancreatic Transplant",
          "survivalRateImprovement": "80% 1-year survival rate",
          "ageRestriction": "Generally under 50"
        },
        "intestines": {
          "name": "Intestines",
          "description": "Intestinal transplants help patients with intestinal failure.",
          "medicalName": "Intestinal Transplant",
          "survivalRateImprovement": "70% 1-year survival rate",
          "ageRestriction": "Case by case basis"
        },
        "bone-marrow": {
          "name": "Bone Marrow",
          "description": "Bone marrow donation can cure blood cancers.",
          "medicalName": "Stem Cell Transplant",
          "survivalRateImprovement": "60-80% cure rate for leukemia",
          "ageRestriction": "Generally 18-60 for donors"
        }
      }
    },
    "map": {
      "title": "Donor Distribution Across India",
      "subtitle": "See how donors are distributed across different states. Darker green indicates more registered donors.",
      "donors": "donors",
      "states": {
        "MH": "Maharashtra",
        "DL": "Delhi",
        "TN": "Tamil Nadu",
        "KA": "Karnataka",
        "GJ": "Gujarat",
        "KL": "Kerala",
        "WB": "West Bengal",
        "TS": "Telangana",
        "UP": "Uttar Pradesh",
        "RJ": "Rajasthan",
        "AP": "Andhra Pradesh",
        "MP": "Madhya Pradesh",
        "HR": "Haryana",
        "PB": "Punjab",
        "OD": "Odisha"
      }
    },
    "myths": {
      "title": "Myths vs Facts",
      "subtitle": "Many misconceptions prevent people from registering as organ donors. Click each card to reveal the truth.",
      "busted": "You have busted",
      "allBusted": "All myths busted!",
      "of": "of",
      "mythLabel": "MYTH",
      "factLabel": "FACT",
      "clickReveal": "Click to reveal the fact",
      "mythBusted": "Myth Busted!",
      "knowledge": "Knowledge is Power",
      "knowledgeSub": "Now that you know the facts, take the next step and register as an organ donor. Your decision can save up to 8 lives.",
      "registerCTA": "Register as a Donor"
    },
    "learn": {
      "title": "Learn About Organ Donation",
      "subtitle": "Understanding organ donation is the first step toward making an informed decision.",
      "bloodChecker": "Blood Group Compatibility Checker",
      "bloodSub": "Select your blood group to see compatibility for organ and blood donation.",
      "types": "Types of Donation",
      "living": "Living Donation",
      "living1": "Donate one kidney or part of your liver",
      "living2": "Bone marrow and stem cells",
      "living3": "Donor lives a healthy life after recovery",
      "deceased": "Deceased Donation",
      "deceased1": "Occurs after brain death is declared",
      "deceased2": "Heart, lungs, liver, kidneys, pancreas, intestines",
      "deceased3": "One donor can save up to 8 lives",
      "process": "Step-by-Step Process",
      "organQuestion": "Which Organs Can Be Donated?",
      "faqTitle": "Frequently Asked Questions",
      "medName": "Medical Name",
      "canHelp": "Can Help",
      "survival": "Survival Rate"
    },
    "footer": {
      "tagline": "One donor can save up to 8 lives. Join our mission to create awareness about organ donation in India.",
      "tollFree": "Toll Free",
      "quickLinks": "Quick Links",
      "followUs": "Follow Us",
      "stayUpdated": "Stay Updated",
      "newsletterSub": "Subscribe for latest updates and success stories.",
      "emailPlaceholder": "Enter your email",
      "subscribe": "Subscribe",
      "rights": "All rights reserved.",
      "madeWith": "Made with"
    },
    "testimonials": {
      "title": "Voices of Hope",
      "subtitle": "Real stories from donors, recipients, and families.",
      "list": {
        "1": {
          "quote": "When my husband passed, we honored his wish to donate. He saved 5 lives that day. His legacy lives on.",
          "name": "Priya Sharma",
          "city": "Mumbai",
          "role": "Donor Family",
          "organ": "Multiple Organs"
        },
        "2": {
          "quote": "After my heart transplant, I got to see my daughter's wedding. I owe my second life to an unknown hero.",
          "name": "Rajesh Kumar",
          "city": "Delhi",
          "role": "Recipient",
          "organ": "Heart"
        },
        "3": {
          "quote": "As a living kidney donor, I gave my brother the gift of life. We both live healthy, normal lives now.",
          "name": "Ananya Patel",
          "city": "Ahmedabad",
          "role": "Living Donor",
          "organ": "Kidney"
        }
      }
    },
    "bodyDiagram": {
      "title": "Every Organ Is a Gift",
      "subtitle": "Hover to explore what you can donate and how many lives each organ can save.",
      "clickToLearn": "Click to learn more",
      "saves": "Saves",
      "lives": "lives",
      "life": "life",
      "canSave": "Can save"
    },
    "loader": {
      "title": "Save a Life",
      "subtitle": "Organ Donation Awareness Platform"
    }
  },
  "hi": {
    "nav": {
      "home": "होम",
      "learn": "जानें",
      "myths": "मिथक",
      "register": "रजिस्टर करें",
      "stories": "कहानियां",
      "campaigns": "अभियान",
      "login": "लॉगिन",
      "donateNow": "अभी दान करें"
    },
    "hero": {
      "title": "वह उपहार दें जो हमेशा के लिए बना रहे",
      "subtitle": "एक दानकर्ता 8 लोगों की जान बचा सकता है। आपका आज का निर्णय किसी को कल दे सकता है।",
      "cta": "दाता बनें",
      "learnHow": "सीखें कि यह कैसे काम करता है",
      "joinDonors": "भारत भर में 5,00,000 से अधिक पंजीकृत दाताओं से जुड़ें",
      "pledgedToday": "लोगों ने आज प्रतिज्ञा की है",
      "scroll": "स्क्रॉल करें"
    },
    "common": {
      "learnMore": "अधिक जानें",
      "submit": "सबमिट करें",
      "cancel": "रद्द करें",
      "close": "बंद करें"
    },
    "stats": {
      "registered": "पंजीकृत दाता",
      "livesSaved": "एक दाता जीवन बचा सकता है",
      "organsDonatable": "दान करने योग्य अंग और ऊतक",
      "awaitingTransplant": "प्रत्यारोपण की प्रतीक्षा कर रहे मरीज़"
    },
    "organs": {
      "title": "अंग आप दान कर सकते हैं",
      "subtitle": "हर अंग के पास है जीवन को बचाने या बदलने की क्षमता। प्रत्येक के बारे में जानें.",
      "helps": "मदद करता है",
      "patient": "रोगी",
      "patients": "रोगी",
      "list": {
        "heart": {
          "name": "हृदय",
          "description": "दान किया गया हृदय किसी को जीवन का दूसरा मौका दे सकता है।",
          "medicalName": "हृदय प्रत्यारोपण",
          "survivalRateImprovement": "85% 1 वर्ष की जीवित रहने की दर",
          "ageRestriction": "कोई विशिष्ट आयु सीमा नहीं"
        },
        "lungs": {
          "name": "फेफड़े",
          "description": "फेफड़े के दान से पुरानी श्वसन संबंधी बीमारियों वाले रोगियों को मदद मिल सकती है।",
          "medicalName": "पल्मोनरी ट्रांसप्लांट",
          "survivalRateImprovement": "80% 1-वर्ष जीवित रहने की दर",
          "ageRestriction": "आम तौर पर 65 से कम"
        },
        "liver": {
          "name": "लिवर",
          "description": "दो जिंदगियों को बचाने के लिए लिवर को विभाजित किया जा सकता है - एक वयस्क और एक बच्चा।",
          "medicalName": "यकृत प्रत्यारोपण",
          "survivalRateImprovement": "90% 1 वर्ष की जीवित रहने की दर",
          "ageRestriction": "कोई विशिष्ट आयु सीमा नहीं"
        },
        "kidneys": {
          "name": "गुर्दे",
          "description": "गुर्दे सबसे अधिक प्रत्यारोपित अंग हैं।",
          "medicalName": "गुर्दे का प्रत्यारोपण",
          "survivalRateImprovement": "95% 1 वर्ष की जीवित रहने की दर",
          "ageRestriction": "कोई विशिष्ट आयु सीमा नहीं"
        },
        "eyes": {
          "name": "आंखें",
          "description": "कॉर्निया प्रत्यारोपण अंधे को दृष्टि बहाल कर सकता है।",
          "medicalName": "कॉर्नियल ट्रांसप्लांट",
          "survivalRateImprovement": "90% ग्राफ्ट सर्वाइवल रेट",
          "ageRestriction": "कोई उम्र प्रतिबंध नहीं"
        },
        "skin": {
          "name": "त्वचा",
          "description": "त्वचा दान से जले हुए पीड़ितों को ठीक होने में मदद मिलती है।",
          "medicalName": "त्वचा एलोग्राफ़्ट",
          "survivalRateImprovement": "गंभीर जलने के लिए जीवनरक्षक",
          "ageRestriction": "कोई विशिष्ट आयु सीमा नहीं"
        },
        "pancreas": {
          "name": "अग्न्याशय",
          "description": "अग्न्याशय दान प्राप्तकर्ताओं में मधुमेह का इलाज कर सकता है।",
          "medicalName": "अग्न्याशय प्रत्यारोपण",
          "survivalRateImprovement": "80% 1 वर्ष की जीवित रहने की दर",
          "ageRestriction": "आम तौर पर 50 से कम"
        },
        "intestines": {
          "name": "आंत",
          "description": "आंत प्रत्यारोपण से आंतों की विफलता वाले रोगियों को मदद मिलती है।",
          "medicalName": "आंत प्रत्यारोपण",
          "survivalRateImprovement": "70% 1 वर्ष की जीवित रहने की दर",
          "ageRestriction": "मामले दर मामले के आधार पर"
        },
        "bone-marrow": {
          "name": "अस्थि मज्जा",
          "description": "अस्थि मज्जा दान से रक्त कैंसर ठीक हो सकता है।",
          "medicalName": "स्टेम सेल ट्रांसप्लांट",
          "survivalRateImprovement": "ल्यूकेमिया के लिए 60-80% इलाज दर",
          "ageRestriction": "आम तौर पर दाताओं के लिए 18-60"
        }
      }
    },
    "map": {
      "title": "पूरे भारत में दाता वितरण",
      "subtitle": "देखें कि विभिन्न राज्यों में दाताओं को कैसे वितरित किया जाता है। गहरा हरा रंग अधिक पंजीकृत दाताओं को दर्शाता है।",
      "donors": "दाताओं",
      "states": {
        "MH": "महाराष्ट्र",
        "DL": "दिल्ली",
        "TN": "तमिलनाडु",
        "KA": "कर्नाटक",
        "GJ": "गुजरात",
        "KL": "केरल",
        "WB": "पश्चिम बंगाल",
        "TS": "तेलंगाना",
        "UP": "उत्तर प्रदेश",
        "RJ": "राजस्थान",
        "AP": "आंध्र प्रदेश",
        "MP": "मध्य प्रदेश",
        "HR": "हरियाणा",
        "PB": "पंजाब",
        "OD": "ओडिशा"
      }
    },
    "myths": {
      "title": "मिथक बनाम तथ्य",
      "subtitle": "कई गलत धारणाएं लोगों को अंग दाताओं के रूप में पंजीकृत होने से रोकती हैं। सच्चाई उजागर करने के लिए प्रत्येक कार्ड पर क्लिक करें।",
      "busted": "आपने तोड़ दिया",
      "allBusted": "सभी मिथक टूट गए!",
      "of": "का",
      "mythLabel": "मिथक",
      "factLabel": "तथ्य",
      "clickReveal": "तथ्य को उजागर करने के लिए क्लिक करें",
      "mythBusted": "मिथक का भंडाफोड़!",
      "knowledge": "ज्ञान ही शक्ति है",
      "knowledgeSub": "अब जब आप तथ्य जान गए हैं, तो अगला कदम उठाएं और अंग दाता के रूप में पंजीकरण कराएं। आपका निर्णय 8 लोगों की जान बचा सकता है।",
      "registerCTA": "दाता के रूप में पंजीकरण करें"
    },
    "learn": {
      "title": "अंग दान के बारे में जानें",
      "subtitle": "अंग दान को समझना एक सूचित निर्णय लेने की दिशा में पहला कदम है।",
      "bloodChecker": "रक्त समूह अनुकूलता परीक्षक",
      "bloodSub": "अंग और रक्तदान के लिए अनुकूलता देखने के लिए अपना रक्त समूह चुनें।",
      "types": "दान के प्रकार",
      "living": "जीवित दान",
      "living1": "एक किडनी या अपने जिगर का हिस्सा दान करें",
      "living2": "अस्थि मज्जा और स्टेम कोशिकाएं",
      "living3": "दाता ठीक होने के बाद स्वस्थ जीवन जीता है",
      "deceased": "मृतक दान",
      "deceased1": "मस्तिष्क की मृत्यु घोषित होने के बाद होता है",
      "deceased2": "हृदय, फेफड़े, यकृत, गुर्दे, अग्न्याशय, आंत",
      "deceased3": "एक दाता 8 लोगों की जान बचा सकता है",
      "process": "चरण-दर-चरण प्रक्रिया",
      "organQuestion": "कौन से अंग हो सकते हैं दान दिया?",
      "faqTitle": "अक्सर पूछे जाने वाले प्रश्न",
      "medName": "चिकित्सा का नाम",
      "canHelp": "मदद कर सकता है",
      "survival": "उत्तरजीविता दर"
    },
    "footer": {
      "tagline": "एक दाता 8 लोगों की जान बचा सकता है। भारत में अंग दान के बारे में जागरूकता पैदा करने के हमारे मिशन में शामिल हों।",
      "tollFree": "टोल फ्री",
      "quickLinks": "त्वरित लिंक",
      "followUs": "हमें फॉलो करें",
      "stayUpdated": "अपडेट रहें",
      "newsletterSub": "नवीनतम अपडेट और सफलता की कहानियों के लिए सदस्यता लें।",
      "emailPlaceholder": "अपना ईमेल दर्ज करें",
      "subscribe": "सदस्यता लें",
      "rights": "सर्वाधिकार सुरक्षित।",
      "madeWith": "Made with"
    },
    "testimonials": {
      "title": "आशा की आवाज़ों के साथ निर्मित",
      "subtitle": "दाताओं, प्राप्तकर्ताओं और परिवारों की वास्तविक कहानियाँ।",
      "list": {
        "1": {
          "quote": "जब मेरे पति गुजर गए, तो हमने दान करने की उनकी इच्छा का सम्मान किया। उन्होंने उस दिन 5 लोगों की जान बचाई। उनकी विरासत जीवित है।",
          "name": "प्रिया शर्मा",
          "city": "मुंबई",
          "role": "दाता परिवार",
          "organ": "एकाधिक अंग"
        },
        "2": {
          "quote": "मेरे हृदय प्रत्यारोपण के बाद, मुझे अपनी बेटी की शादी देखने को मिली। मैं अपने दूसरे जीवन का श्रेय एक अज्ञात नायक को देता हूँ।",
          "name": "राजेश कुमार",
          "city": "दिल्ली",
          "role": "प्राप्तकर्ता",
          "organ": "हृदय"
        },
        "3": {
          "quote": "एक जीवित किडनी दाता के रूप में, मैंने अपने भाई को जीवन का उपहार दिया। हम दोनों अब स्वस्थ, सामान्य जीवन जीते हैं।",
          "name": "अनन्या पटेल",
          "city": "अहमदाबाद",
          "role": "लिविंग डोनर",
          "organ": "किडनी"
        }
      }
    },
    "bodyDiagram": {
      "title": "प्रत्येक अंग एक उपहार है",
      "subtitle": "यह पता लगाने के लिए घूमें कि आप क्या दान कर सकते हैं और प्रत्येक अंग कितने लोगों की जान बचा सकता है।",
      "clickToLearn": "अधिक जानने के लिए क्लिक करें",
      "saves": "बचाता है",
      "lives": "जीवन",
      "life": "जीवन",
      "canSave": "बचा सकता है"
    },
    "loader": {
      "title": "एक जीवन बचा सकता है",
      "subtitle": "अंग दान जागरूकता मंच"
    }
  },
  "ta": {
    "nav": {
      "home": "முகப்பு",
      "learn": "அறிக",
      "myths": "கட்டுக்கதைகள்",
      "register": "பதிவு",
      "stories": "கதைகள்",
      "campaigns": "பிரச்சாரங்கள்",
      "login": "புகுபதிகை",
      "donateNow": "நன்கொடை இப்போது"
    },
    "hero": {
      "title": "என்றென்றும் நிலைத்திருக்கும் பரிசை கொடுங்கள்",
      "subtitle": "ஒரு நன்கொடையாளர் 8 உயிர்களை காப்பாற்ற முடியும். இன்று நீங்கள் எடுக்கும் முடிவு ஒருவருக்கு நாளைய நாளை கொடுக்கலாம்.",
      "cta": "நன்கொடையாளர் ஆகுங்கள்",
      "learnHow": "இது எவ்வாறு செயல்படுகிறது என்பதை அறியவும்",
      "joinDonors": "இந்தியா முழுவதும் 5,00,000+ பதிவு செய்யப்பட்ட நன்கொடையாளர்களுடன் இணையுங்கள்",
      "pledgedToday": "மக்கள் இன்று உறுதிமொழி எடுத்துள்ளனர் மாற்று அறுவை சிகிச்சைக்காக காத்திருக்கும் நோயாளிகள்",
      "scroll": "ஸ்க்ரோல் செய்யவும்"
    },
    "common": {
      "learnMore": "உறுப்புகள் நீங்கள் தானம் செய்யலாம்",
      "submit": "ஒவ்வொரு உறுப்புக்கும் உயிரைக் காப்பாற்ற அல்லது மாற்றும் ஆற்றல் உள்ளது. ஒவ்வொன்றையும் பற்றி அறிந்து கொள்ளுங்கள்.",
      "cancel": "நோயாளிக்கு",
      "close": "உதவுகிறது"
    },
    "stats": {
      "registered": "நோயாளிகளுக்கு",
      "livesSaved": "இதயம்",
      "organsDonatable": "தானம் செய்யப்பட்ட இதயம் ஒருவருக்கு வாழ்க்கையில் இரண்டாவது வாய்ப்பை அளிக்கும்.",
      "awaitingTransplant": "இதய மாற்று அறுவை சிகிச்சை"
    },
    "organs": {
      "title": "85% 1 ஆண்டு உயிர் பிழைப்பு விகிதம்",
      "subtitle": "குறிப்பிட்ட வயது வரம்பு இல்லை",
      "helps": "நுரையீரல்",
      "patient": "நுரையீரல் தானம் நாள்பட்ட சுவாச நோய்களால் பாதிக்கப்பட்ட நோயாளிகளுக்கு உதவும்.",
      "patients": "நுரையீரல் மாற்று அறுவை சிகிச்சை",
      "list": {
        "heart": {
          "name": "80% 1 ஆண்டு உயிர் பிழைப்பு விகிதம்",
          "description": "பொதுவாக 65 வயதுக்கு கீழ்",
          "medicalName": "கல்லீரல்",
          "survivalRateImprovement": "கல்லீரலைப் பிரித்து இரண்டு உயிர்களைக் காப்பாற்றலாம் - ஒரு பெரியவர் மற்றும் ஒரு குழந்தை.",
          "ageRestriction": "கல்லீரல் மாற்று அறுவை சிகிச்சை"
        },
        "lungs": {
          "name": "90% 1 வருட உயிர்வாழ்வு விகிதம்",
          "description": "குறிப்பிட்ட வயது வரம்பு இல்லை",
          "medicalName": "சிறுநீரகங்கள்",
          "survivalRateImprovement": "சிறுநீரகங்கள் பொதுவாக மாற்று உறுப்புகளாகும்.",
          "ageRestriction": "சிறுநீரக மாற்று அறுவை சிகிச்சை"
        },
        "liver": {
          "name": "95% 1 ஆண்டு உயிர் பிழைப்பு விகிதம்",
          "description": "குறிப்பிட்ட வயது வரம்பு இல்லை",
          "medicalName": "கண்கள்",
          "survivalRateImprovement": "கருவிழி மாற்று அறுவை சிகிச்சை மூலம் பார்வையற்றவர்களுக்கு பார்வையை மீட்டெடுக்க முடியும்.",
          "ageRestriction": "கருவிழி மாற்று அறுவை சிகிச்சை"
        },
        "kidneys": {
          "name": "90% கிராஃப்ட் உயிர் பிழைப்பு விகிதம்",
          "description": "வயது கட்டுப்பாடு இல்லை",
          "medicalName": "தோல்",
          "survivalRateImprovement": "தோல் தானம் தீக்காயத்தால் பாதிக்கப்பட்டவர்கள் குணமடைய உதவுகிறது.",
          "ageRestriction": "தோல் அலோகிராஃப்ட்"
        },
        "eyes": {
          "name": "கடுமையான தீக்காயங்களுக்கு உயிர் காக்கும்",
          "description": "குறிப்பிட்ட வயது வரம்பு இல்லை",
          "medicalName": "கணையம்",
          "survivalRateImprovement": "கணைய தானம் பெறுபவர்களின் நீரிழிவு நோயை குணப்படுத்தும்.",
          "ageRestriction": "கணைய மாற்று அறுவை சிகிச்சை"
        },
        "skin": {
          "name": "80% 1 ஆண்டு உயிர்வாழ்வு விகிதம்",
          "description": "பொதுவாக 50",
          "medicalName": "குடல்கள்",
          "survivalRateImprovement": "குடல் மாற்று அறுவை சிகிச்சைகள் குடல் செயலிழப்பு நோயாளிகளுக்கு உதவுகின்றன.",
          "ageRestriction": "குடல் மாற்று அறுவை சிகிச்சை"
        },
        "pancreas": {
          "name": "70% 1 ஆண்டு உயிர் பிழைப்பு விகிதம்",
          "description": "வழக்கு அடிப்படையில்",
          "medicalName": "எலும்பு மஜ்ஜை",
          "survivalRateImprovement": "எலும்பு மஜ்ஜை தானம் இரத்த புற்றுநோய்களை குணப்படுத்தும்.",
          "ageRestriction": "ஸ்டெம் செல் மாற்று அறுவை சிகிச்சை"
        },
        "intestines": {
          "name": "லுகேமியாவுக்கு 60-80% சிகிச்சை விகிதம்",
          "description": "பொதுவாக 18-60 நன்கொடையாளர்களுக்கு அடர் பச்சை என்பது அதிக பதிவு செய்யப்பட்ட நன்கொடையாளர்களைக் குறிக்கிறது.",
          "medicalName": "தானம் செய்பவர்கள்",
          "survivalRateImprovement": "கட்டுக்கதைகள் மற்றும் உண்மைகள் உண்மையை வெளிப்படுத்த ஒவ்வொரு அட்டையையும் கிளிக் செய்யவும்.",
          "ageRestriction": "நீங்கள் உடைத்து விட்டீர்கள்"
        },
        "bone-marrow": {
          "name": "அனைத்து கட்டுக்கதைகளும் முறியடிக்கப்பட்டன!",
          "description": "புராணத்தின்",
          "medicalName": "Stem Cell Transplant",
          "survivalRateImprovement": "உண்மை",
          "ageRestriction": "உண்மையை வெளிப்படுத்த கிளிக் செய்யவும்"
        }
      }
    },
    "map": {
      "title": "கட்டுக்கதை முறியடிக்கப்பட்டது!",
      "subtitle": "அறிவே சக்தி",
      "donors": "இப்போது உங்களுக்கு உண்மைகள் தெரியும், அடுத்த கட்டத்தை எடுத்து உறுப்பு தானம் செய்பவராக பதிவு செய்யுங்கள். உங்கள் முடிவு 8 உயிர்களைக் காப்பாற்றும்.",
      "states": {
        "MH": "மகாராஷ்டிரா",
        "DL": "டெல்லி",
        "TN": "தமிழ்நாடு",
        "KA": "கர்நாடகா",
        "GJ": "குஜராத்",
        "KL": "கேரளா",
        "WB": "மேற்கு வங்கம்",
        "TS": "தெலுங்கானா",
        "UP": "உத்திரப் பிரதேசம்",
        "RJ": "ராஜஸ்தான்",
        "AP": "ஆந்திரா",
        "MP": "மத்தியப் பிரதேசம்",
        "HR": "ஹரியானா",
        "PB": "பஞ்சாப்",
        "OD": "ஒடிசா"
      }
    },
    "myths": {
      "title": "நன்கொடையாளராகப் பதிவு செய்யுங்கள்",
      "subtitle": "உறுப்பு தானம் பற்றி அறிக",
      "busted": "உறுப்பு தானத்தைப் புரிந்துகொள்வது தகவலறிந்த முடிவெடுப்பதற்கான முதல் படியாகும்.",
      "allBusted": "இரத்தக் குழு இணக்கத்தன்மை சரிபார்ப்பு",
      "of": "உறுப்பு மற்றும் இரத்த தானத்திற்கான இணக்கத்தன்மையைக் காண உங்கள் இரத்தக் குழுவைத் தேர்ந்தெடுக்கவும்.",
      "mythLabel": "நன்கொடையின் வகைகள்",
      "factLabel": "உயிர் தானம்",
      "clickReveal": "ஒரு சிறுநீரகம் அல்லது உங்கள் கல்லீரலின் ஒரு பகுதியை தானம் செய்யுங்கள்",
      "mythBusted": "எலும்பு மஜ்ஜை மற்றும் ஸ்டெம் செல்கள்",
      "knowledge": "நன்கொடையாளர் குணமடைந்த பிறகு ஆரோக்கியமாக வாழ்கிறார்",
      "knowledgeSub": "இறந்த தானம்",
      "registerCTA": "மூளை மரணம் அறிவிக்கப்பட்ட பிறகு நிகழ்கிறது உயிர்கள்"
    },
    "learn": {
      "title": "படிப்படியான செயல்முறை",
      "subtitle": "எந்த உறுப்புகளை தானம் செய்யலாம்?",
      "bloodChecker": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      "bloodSub": "மருத்துவப் பெயர்",
      "types": "உதவும்",
      "living": "உயிர் பிழைப்பு விகிதம்",
      "living1": "ஒரு கொடையாளி 8 உயிர்களைக் காப்பாற்ற முடியும் இந்தியாவில் உறுப்பு தானம் பற்றிய விழிப்புணர்வை ஏற்படுத்த எங்கள் பணியில் சேரவும்.",
      "living2": "கட்டணமில்லா",
      "living3": "விரைவு இணைப்புகள்",
      "deceased": "எங்களைப் பின்தொடரவும்",
      "deceased1": "புதுப்பித்த நிலையில் இருங்கள்",
      "deceased2": "சமீபத்திய புதுப்பிப்புகள் மற்றும் வெற்றிக் கதைகளுக்கு குழுசேரவும்.",
      "deceased3": "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
      "process": "குழுசேர்",
      "organQuestion": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      "faqTitle": "Frequently Asked Questions",
      "medName": "நம்பிக்கையின் குரல்களால் உருவாக்கப்பட்டது",
      "canHelp": "நன்கொடையாளர்கள், பெறுநர்கள் மற்றும் குடும்பங்களின் உண்மையான கதைகள்.",
      "survival": "ஒவ்வொரு உறுப்பும் ஒரு பரிசு"
    },
    "footer": {
      "tagline": "நீங்கள் என்ன தானம் செய்யலாம் மற்றும் ஒவ்வொரு உறுப்பும் எத்தனை உயிர்களைக் காப்பாற்ற முடியும் என்பதை ஆராய வட்டமிடுங்கள்.",
      "tollFree": "மேலும் அறிய கிளிக் செய்யவும்",
      "quickLinks": "Quick Links",
      "followUs": "உயிர்களை காப்பாற்றுகிறது",
      "stayUpdated": "உயிரை",
      "newsletterSub": "காப்பாற்ற முடியும்",
      "emailPlaceholder": "ஒரு உயிரை காப்பாற்ற",
      "subscribe": "உறுப்பு தான விழிப்புணர்வு மேடை",
      "rights": "All rights reserved.",
      "madeWith": "Made with"
    },
    "testimonials": {
      "title": "Voices of Hope",
      "subtitle": "Real stories from donors, recipients, and families.",
      "list": {
        "1": {
          "quote": "தேர்ச்சி பெற்றபோது, ​​அவரது விருப்பத்திற்கு மதிப்பளித்தோம். அன்று 5 உயிர்களைக் காப்பாற்றினார். அவரது மரபு வாழ்கிறது.",
          "name": "பிரியா ஷர்மா",
          "city": "மும்பை",
          "role": "நன்கொடையாளர் குடும்பம்",
          "organ": "பல உறுப்புகள்"
        },
        "2": {
          "quote": "என் இதய மாற்று அறுவை சிகிச்சைக்குப் பிறகு, என் மகளின் திருமணத்தைப் பார்க்க வந்தேன். என் இரண்டாவது வாழ்க்கை அறியப்படாத ஹீரோவுக்கு நான் கடமைப்பட்டிருக்கிறேன்.",
          "name": "ராஜேஷ் குமார்",
          "city": "டெல்லி",
          "role": "பெற்றவர்",
          "organ": "இதயம்"
        },
        "3": {
          "quote": "உயிருள்ள சிறுநீரக தானம் செய்பவராக, என் சகோதரனுக்கு உயிர்ப் பரிசை அளித்தேன். நாங்கள் இருவரும் இப்போது ஆரோக்கியமான, இயல்பான வாழ்க்கையை வாழ்கிறோம்.",
          "name": "அனன்யா படேல்",
          "city": "அகமதாபாத்",
          "role": "வாழும் கொடையாளர்",
          "organ": "சிறுநீரகம்"
        }
      }
    },
    "bodyDiagram": {
      "title": "Every Organ Is a Gift",
      "subtitle": "Hover to explore what you can donate and how many lives each organ can save.",
      "clickToLearn": "Click to learn more",
      "saves": "Saves",
      "lives": "lives",
      "life": "life",
      "canSave": "Can save"
    },
    "loader": {
      "title": "Save a Life",
      "subtitle": "Organ Donation Awareness Platform"
    }
  },
  "te": {
    "nav": {
      "home": "హోమ్",
      "learn": "నేర్చుకోండి",
      "myths": "అపోహలు",
      "register": "రిజిస్టర్",
      "stories": "కథలు",
      "campaigns": "ప్రచారాలు",
      "login": "లాగిన్",
      "donateNow": "ఇప్పుడే విరాళం ఇవ్వండి"
    },
    "hero": {
      "title": "ఎప్పటికీ ఉండే బహుమతిని ఇవ్వండి",
      "subtitle": "ఒక దాత గరిష్టంగా 8 మంది ప్రాణాలను కాపాడగలరు. ఈరోజు మీ నిర్ణయం ఎవరికైనా రేపటిని అందించగలదు.",
      "cta": "దాతగా అవ్వండి",
      "learnHow": "ఇది ఎలా పనిచేస్తుందో తెలుసుకోండి",
      "joinDonors": "భారతదేశం అంతటా 5,00,000+ నమోదిత దాతలతో చేరండి",
      "pledgedToday": "ప్రజలు ఈరోజు ప్రతిజ్ఞ చేశారు",
      "scroll": "స్క్రోల్ చేయండి"
    },
    "common": {
      "learnMore": "మరింత తెలుసుకోండి",
      "submit": "సమర్పించండి",
      "cancel": "రద్దు చేయండి",
      "close": "మూసివేయండి"
    },
    "stats": {
      "registered": "రిజిస్టర్డ్ దాతలు",
      "livesSaved": "జీవించగలరు~ మార్పిడి కోసం ఎదురుచూస్తున్న రోగులు",
      "organsDonatable": "మీరు దానం చేయగల అవయవాలు",
      "awaitingTransplant": "ప్రతి అవయవానికి జీవితాలను రక్షించే లేదా మార్చే అవకాశం ఉంది. ఒక్కొక్కరి గురించి తెలుసుకోండి."
    },
    "organs": {
      "title": "రోగికి",
      "subtitle": "సహాయం చేస్తుంది",
      "helps": "రోగులకు",
      "patient": "గుండె",
      "patients": "దానం చేసిన గుండె ఎవరికైనా జీవితంలో రెండవ అవకాశాన్ని ఇస్తుంది.",
      "list": {
        "heart": {
          "name": "కార్డియాక్ ట్రాన్స్‌ప్లాంట్",
          "description": "85% 1-సంవత్సరం మనుగడ రేటు",
          "medicalName": "నిర్దిష్ట వయోపరిమితి లేదు",
          "survivalRateImprovement": "ఊపిరితిత్తులు",
          "ageRestriction": "ఊపిరితిత్తుల దానం దీర్ఘకాలిక శ్వాసకోశ వ్యాధులతో బాధపడుతున్న రోగులకు సహాయపడుతుంది."
        },
        "lungs": {
          "name": "పల్మనరీ ట్రాన్స్‌ప్లాంట్",
          "description": "80% 1-సంవత్సరం మనుగడ రేటు",
          "medicalName": "సాధారణంగా 65 ఏళ్లలోపు",
          "survivalRateImprovement": "కాలేయం",
          "ageRestriction": "రెండు ప్రాణాలను రక్షించడానికి కాలేయాన్ని విభజించవచ్చు - ఒక వయోజన మరియు ఒక బిడ్డ."
        },
        "liver": {
          "name": "హెపాటిక్ ట్రాన్స్‌ప్లాంట్",
          "description": "90% 1-సంవత్సరం మనుగడ రేటు",
          "medicalName": "నిర్దిష్ట వయోపరిమితి లేదు",
          "survivalRateImprovement": "మూత్రపిండాలు",
          "ageRestriction": "మూత్రపిండాలు సాధారణంగా మార్పిడి చేయబడిన అవయవాలు."
        },
        "kidneys": {
          "name": "మూత్రపిండ మార్పిడి",
          "description": "95% 1-సంవత్సరం మనుగడ రేటు",
          "medicalName": "నిర్దిష్ట వయోపరిమితి లేదు",
          "survivalRateImprovement": "కళ్ళు",
          "ageRestriction": "కార్నియా మార్పిడి అంధులకు చూపును పునరుద్ధరించగలదు."
        },
        "eyes": {
          "name": "కార్నియల్ ట్రాన్స్‌ప్లాంట్",
          "description": "90% గ్రాఫ్ట్ సర్వైవల్ రేట్",
          "medicalName": "వయస్సు పరిమితి లేదు",
          "survivalRateImprovement": "చర్మం",
          "ageRestriction": "చర్మ విరాళాలు కాలిన బాధితులను నయం చేయడంలో సహాయపడతాయి."
        },
        "skin": {
          "name": "స్కిన్ అల్లోగ్రాఫ్ట్",
          "description": "తీవ్రమైన కాలిన గాయాలకు ప్రాణాపాయం",
          "medicalName": "నిర్దిష్ట వయోపరిమితి లేదు",
          "survivalRateImprovement": "ప్యాంక్రియాస్",
          "ageRestriction": "ప్యాంక్రియాస్ దానం గ్రహీతలలో మధుమేహాన్ని నయం చేస్తుంది."
        },
        "pancreas": {
          "name": "ప్యాంక్రియాటిక్ ట్రాన్స్‌ప్లాంట్",
          "description": "80% 1-సంవత్సరం మనుగడ రేటు",
          "medicalName": "సాధారణంగా 50",
          "survivalRateImprovement": "ప్రేగులు",
          "ageRestriction": "పేగు మార్పిడి పేగు వైఫల్యం ఉన్న రోగులకు సహాయం చేస్తుంది."
        },
        "intestines": {
          "name": "పేగు మార్పిడి",
          "description": "70% 1-సంవత్సరం మనుగడ రేటు",
          "medicalName": "కేసు ఆధారంగా",
          "survivalRateImprovement": "ఎముక మజ్జ",
          "ageRestriction": "ఎముక మజ్జ దానం రక్త క్యాన్సర్లను నయం చేస్తుంది."
        },
        "bone-marrow": {
          "name": "స్టెమ్ సెల్ ట్రాన్స్‌ప్లాంట్",
          "description": "లుకేమియాకు 60-80% నివారణ రేటు",
          "medicalName": "సాధారణంగా దాతలకు 18-60",
          "survivalRateImprovement": "భారతదేశం అంతటా దాతల పంపిణీ",
          "ageRestriction": "వివిధ రాష్ట్రాలలో దాతలు ఎలా పంపిణీ చేయబడుతున్నారో చూడండి. ముదురు ఆకుపచ్చ రంగు ఎక్కువ మంది నమోదిత దాతలను సూచిస్తుంది."
        }
      }
    },
    "map": {
      "title": "దాతలు",
      "subtitle": "అపోహలు vs వాస్తవాలు",
      "donors": "అనేక అపోహలు ప్రజలు అవయవ దాతలుగా నమోదు చేసుకోకుండా నిరోధిస్తాయి. నిజాన్ని బహిర్గతం చేయడానికి ప్రతి కార్డ్‌ని క్లిక్ చేయండి.",
      "states": {
        "MH": "మహారాష్ట్ర",
        "DL": "ఢిల్లీ",
        "TN": "తమిళనాడు",
        "KA": "కర్నాటక",
        "GJ": "గుజరాత్",
        "KL": "కేరళ",
        "WB": "పశ్చిమ బెంగాల్",
        "TS": "తెలంగాణ",
        "UP": "ఉత్తర ప్రదేశ్",
        "RJ": "రాజస్థాన్",
        "AP": "ఆంధ్రప్రదేశ్",
        "MP": "మధ్యప్రదేశ్",
        "HR": "హర్యానా",
        "PB": "పంజాబ్",
        "OD": "ఒడిశా"
      }
    },
    "myths": {
      "title": "మీరు ఛేదించారు",
      "subtitle": "అన్ని అపోహలు ఛేదించబడ్డాయి!",
      "busted": "యొక్క",
      "allBusted": "పురాణం",
      "of": "వాస్తవం",
      "mythLabel": "వాస్తవాన్ని బహిర్గతం చేయడానికి క్లిక్ చేయండి",
      "factLabel": "పురాణం ఛేదించబడింది!",
      "clickReveal": "జ్ఞానమే శక్తి",
      "mythBusted": "ఇప్పుడు మీకు వాస్తవాలు తెలుసు కాబట్టి, తదుపరి చర్య తీసుకోండి మరియు అవయవ దాతగా నమోదు చేసుకోండి. మీ నిర్ణయం 8 మంది జీవితాలను కాపాడుతుంది.",
      "knowledge": "దాతగా నమోదు చేసుకోండి",
      "knowledgeSub": "అవయవ దానం గురించి తెలుసుకోండి",
      "registerCTA": "అవయవ దానం గురించి అవగాహన చేసుకోవడం అనేది సమాచారంతో కూడిన నిర్ణయం తీసుకోవడానికి మొదటి అడుగు."
    },
    "learn": {
      "title": "బ్లడ్ గ్రూప్ కాంపాటిబిలిటీ చెకర్",
      "subtitle": "అవయవ మరియు రక్తదానం కోసం అనుకూలతను చూడటానికి మీ బ్లడ్ గ్రూప్‌ను ఎంచుకోండి.",
      "bloodChecker": "విరాళం రకాలు",
      "bloodSub": "సజీవ విరాళం",
      "types": "ఒక కిడ్నీ లేదా మీ కాలేయంలో కొంత భాగాన్ని దానం చేయండి",
      "living": "ఎముక మజ్జ మరియు మూలకణాలు",
      "living1": "దాత కోలుకున్న తర్వాత ఆరోగ్యకరమైన జీవితాన్ని గడుపుతాడు",
      "living2": "మరణించిన విరాళం",
      "living3": "బ్రెయిన్ డెత్ ప్రకటించిన తర్వాత సంభవిస్తుంది",
      "deceased": "గుండె, ఊపిరితిత్తులు, కాలేయం, మూత్రపిండాలు, మూత్రపిండాలు, మూత్రపిండాలు, మూత్రపిండాలు, మూత్రపిండాలు, మూత్రపిండాలు, 8 వరకు రక్షించవచ్చు. జీవితాలు",
      "deceased1": "దశల వారీ ప్రక్రియ",
      "deceased2": "ఏ అవయవాలను దానం చేయవచ్చు?",
      "deceased3": "తరచుగా అడిగే ప్రశ్నలు",
      "process": "వైద్య పేరు",
      "organQuestion": "Which Organs Can Be Donated?",
      "faqTitle": "సర్వైవల్ రేట్",
      "medName": "సహాయం చేయగలదు",
      "canHelp": "ఒక దాత గరిష్టంగా 8 మంది ప్రాణాలను కాపాడగలరు. భారతదేశంలో అవయవ దానం గురించి అవగాహన కల్పించడానికి మా మిషన్‌లో చేరండి.",
      "survival": "టోల్ ఫ్రీ"
    },
    "footer": {
      "tagline": "త్వరిత లింక్‌లు",
      "tollFree": "మమ్మల్ని అనుసరించండి",
      "quickLinks": "నవీకరించబడుతూ ఉండండి",
      "followUs": "తాజా నవీకరణలు మరియు విజయ కథనాల కోసం సభ్యత్వాన్ని పొందండి.",
      "stayUpdated": "మీ ఇమెయిల్‌ను నమోదు చేయండి",
      "newsletterSub": "సబ్‌స్క్రైబ్ చేయండి",
      "emailPlaceholder": "అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.",
      "subscribe": "Subscribe",
      "rights": "ఆశల స్వరాలతో రూపొందించబడింది",
      "madeWith": "దాతలు, గ్రహీతలు మరియు కుటుంబాల నుండి నిజమైన కథలు."
    },
    "testimonials": {
      "title": "ప్రతి అవయవం ఒక బహుమతి",
      "subtitle": "మీరు ఏమి దానం చేయవచ్చు మరియు ప్రతి అవయవం ఎంతమంది ప్రాణాలను రక్షించగలదో అన్వేషించడానికి హోవర్ చేయండి.",
      "list": {
        "1": {
          "quote": "ఉత్తీర్ణత సాధించినప్పుడు, నా భర్త విరాళం ఇవ్వాలనే కోరికను గౌరవించాము. ఆ రోజు 5 మంది ప్రాణాలు కాపాడాడు. అతని వారసత్వం కొనసాగుతుంది.",
          "name": "ప్రియా శర్మ",
          "city": "ముంబై",
          "role": "దాతల కుటుంబం",
          "organ": "బహుళ అవయవాలు"
        },
        "2": {
          "quote": "నా గుండె మార్పిడి తర్వాత, నేను నా కుమార్తె పెళ్లిని చూడవలసి వచ్చింది. నా రెండో జీవితం తెలియని హీరోకి రుణపడి ఉంటాను.",
          "name": "రాజేష్ కుమార్",
          "city": "ఢిల్లీ",
          "role": "గ్రహీత",
          "organ": "హృదయం"
        },
        "3": {
          "quote": "సజీవ కిడ్నీ దాతగా, నేను నా సోదరుడికి జీవితాన్ని బహుమతిగా ఇచ్చాను. మేమిద్దరం ఇప్పుడు ఆరోగ్యంగా, సాధారణ జీవితాన్ని గడుపుతున్నాం.",
          "name": "అనన్య పటేల్",
          "city": "అహ్మదాబాద్",
          "role": "సజీవ దాత",
          "organ": "కిడ్నీ"
        }
      }
    },
    "bodyDiagram": {
      "title": "మరింత తెలుసుకోవడానికి క్లిక్ చేయండి",
      "subtitle": "Hover to explore what you can donate and how many lives each organ can save.",
      "clickToLearn": "ప్రాణాలను కాపాడుతుంది",
      "saves": "జీవితాన్ని",
      "lives": "కాపాడుతుంది",
      "life": "ఒక ప్రాణాన్ని కాపాడుతుంది",
      "canSave": "అవయవ దాన అవగాహన వేదిక"
    },
    "loader": {
      "title": "Save a Life",
      "subtitle": "Organ Donation Awareness Platform"
    }
  },
  "mr": {
    "nav": {
      "home": "मुख्यपृष्ठ",
      "learn": "शिका",
      "myths": "मिथकं",
      "register": "नोंदणी करा",
      "stories": "कथा",
      "campaigns": "मोहिमा",
      "login": "लॉगिन करा",
      "donateNow": "आताच देणगी द्या"
    },
    "hero": {
      "title": "देणगी द्या जी कायम टिकते",
      "subtitle": "एक दाता सुमारे 8 जीव वाचवू शकतो. तुमचा आजचा निर्णय उद्या कोणालातरी देऊ शकतो.",
      "cta": "देणगीदार व्हा",
      "learnHow": "हे कसे कार्य करते ते जाणून घ्या",
      "joinDonors": "भारतभरातील 5,00,000+ नोंदणीकृत देणगीदारांमध्ये सामील व्हा",
      "pledgedToday": "लोकांनी आज वचन दिले आहे",
      "scroll": "स्क्रोल करा"
    },
    "common": {
      "learnMore": "अधिक जाणून घ्या",
      "submit": "सबमिट करा",
      "cancel": "रद्द करा",
      "close": "बंद करा"
    },
    "stats": {
      "registered": "नोंदणीकृत देणगीदार",
      "livesSaved": "एक डोनर जगू शकतो किंवा ते वाचवू शकतो प्रत्यारोपणाच्या प्रतीक्षेत असलेले रुग्ण",
      "organsDonatable": "तुम्ही दान करू शकता असे अवयव",
      "awaitingTransplant": "प्रत्येक अवयवामध्ये जीव वाचवण्याची किंवा परिवर्तन करण्याची क्षमता असते. प्रत्येकाबद्दल जाणून घ्या."
    },
    "organs": {
      "title": "रुग्णांना मदत करते",
      "subtitle": "रुग्ण",
      "helps": "हृदय",
      "patient": "दान केलेले हृदय एखाद्याला आयुष्यात दुसरी संधी देऊ शकते.",
      "patients": "ह्रदय प्रत्यारोपण",
      "list": {
        "heart": {
          "name": "८५% 1-वर्ष जगण्याचा दर",
          "description": "विशिष्ट वयोमर्यादा नाही",
          "medicalName": "फुफ्फुसे",
          "survivalRateImprovement": "फुफ्फुसांचे दान दीर्घकालीन श्वसन रोग असलेल्या रुग्णांना मदत करू शकते.",
          "ageRestriction": "पल्मोनरी ट्रान्सप्लांट"
        },
        "lungs": {
          "name": "80% 1-वर्ष जगण्याचा दर",
          "description": "साधारणपणे 65 वर्षांपेक्षा कमी",
          "medicalName": "यकृत",
          "survivalRateImprovement": "दोन जीव वाचवण्यासाठी यकृत विभाजित केले जाऊ शकते - एक प्रौढ आणि एक मूल.",
          "ageRestriction": "यकृत प्रत्यारोपण"
        },
        "liver": {
          "name": "90% 1-वर्ष जगण्याचा दर",
          "description": "विशिष्ट वयोमर्यादा नाही",
          "medicalName": "मूत्रपिंड",
          "survivalRateImprovement": "मूत्रपिंड हे सर्वात सामान्यपणे प्रत्यारोपित केलेले अवयव आहेत.",
          "ageRestriction": "रेनल ट्रान्सप्लांट"
        },
        "kidneys": {
          "name": "95% 1-वर्ष जगण्याचा दर",
          "description": "कोणतीही विशिष्ट वयोमर्यादा नाही",
          "medicalName": "डोळे",
          "survivalRateImprovement": "कॉर्नियल प्रत्यारोपण अंधांना दृष्टी परत आणू शकते.",
          "ageRestriction": "कॉर्नियल ट्रान्सप्लांट"
        },
        "eyes": {
          "name": "90% कलम जगण्याची दर",
          "description": "वयाचे कोणतेही बंधन नाही",
          "medicalName": "त्वचा",
          "survivalRateImprovement": "त्वचा दान जळलेल्यांना बरे करण्यास मदत करते.",
          "ageRestriction": "त्वचा ॲलोग्राफ्ट"
        },
        "skin": {
          "name": "गंभीर भाजण्यासाठी जीवनरक्षक",
          "description": "विशिष्ट वयोमर्यादा नाही",
          "medicalName": "स्वादुपिंड",
          "survivalRateImprovement": "स्वादुपिंड दान प्राप्तकर्त्यांमध्ये मधुमेह बरा करू शकतो.",
          "ageRestriction": "स्वादुपिंड प्रत्यारोपण"
        },
        "pancreas": {
          "name": "80% 1-वर्ष जगण्याचा दर",
          "description": "साधारणपणे 50 पेक्षा कमी",
          "medicalName": "आतडे",
          "survivalRateImprovement": "आतड्यांसंबंधी प्रत्यारोपण आतड्यांसंबंधी निकामी झालेल्या रुग्णांना मदत करते.",
          "ageRestriction": "आतड्यांसंबंधी प्रत्यारोपण"
        },
        "intestines": {
          "name": "70% 1-वर्ष जगण्याचा दर",
          "description": "केस आधारावर",
          "medicalName": "बोन मॅरो",
          "survivalRateImprovement": "बोन मॅरो दान रक्त कर्करोग बरा करू शकतो.",
          "ageRestriction": "स्टेम सेल प्रत्यारोपण"
        },
        "bone-marrow": {
          "name": "ल्युकेमियासाठी 60-80% बरा होण्याचा दर",
          "description": "रक्तदात्यांसाठी साधारणपणे 18-60",
          "medicalName": "संपूर्ण भारतभर दातांचे वितरण",
          "survivalRateImprovement": "विविध राज्यांमध्ये रक्तदात्यांचे वितरण कसे केले जाते ते पहा. गडद हिरवा अधिक नोंदणीकृत दात्यांना सूचित करतो. दाते सत्य उघड करण्यासाठी प्रत्येक कार्डावर क्लिक करा.",
          "ageRestriction": "तुझा भंडाफोड केलास"
        }
      }
    },
    "map": {
      "title": "सर्व मिथकांचा भंडाफोड!",
      "subtitle": "See how donors are distributed across different states. Darker green indicates more registered donors.",
      "donors": "MYTH",
      "states": {
        "MH": "महाराष्ट्र",
        "DL": "दिल्ली",
        "TN": "तामिळनाडू",
        "KA": "कर्नाटक",
        "GJ": "गुजरात",
        "KL": "केरळ",
        "WB": "पश्चिम बंगाल",
        "TS": "तेलंगणा",
        "UP": "उत्तर प्रदेश",
        "RJ": "राजस्थान",
        "AP": "आंध्र प्रदेश",
        "MP": "मध्य प्रदेश",
        "HR": "हरियाणा",
        "PB": "पंजाब",
        "OD": "माझ्या पतीला ओडिशा पास करू इच्छितो. त्या दिवशी त्याने 5 जीव वाचवले. त्याचा वारसा चालू आहे."
      }
    },
    "myths": {
      "title": "FACT",
      "subtitle": "वस्तुस्थिती उघड करण्यासाठी क्लिक करा",
      "busted": "मिथकचा पर्दाफाश!",
      "allBusted": "ज्ञान ही शक्ती आहे",
      "of": "आता तुम्हाला वस्तुस्थिती कळली आहे, पुढचे पाऊल उचला आणि अवयव दाता म्हणून नोंदणी करा. तुमचा निर्णय 8 पर्यंत जीव वाचवू शकतो.",
      "mythLabel": "देणगीदार म्हणून नोंदणी करा",
      "factLabel": "अवयव दानाबद्दल जाणून घ्या",
      "clickReveal": "अवयव दान समजून घेणे ही माहितीपूर्ण निर्णय घेण्याच्या दिशेने पहिले पाऊल आहे.",
      "mythBusted": "रक्त गट सुसंगतता तपासक",
      "knowledge": "अवयव आणि रक्तदानासाठी सुसंगतता पाहण्यासाठी तुमचा रक्तगट निवडा.",
      "knowledgeSub": "देणगीचे प्रकार",
      "registerCTA": "जिवंत देणगी"
    },
    "learn": {
      "title": "एक किडनी किंवा तुमच्या यकृताचा काही भाग दान करा",
      "subtitle": "बोन मॅरो आणि स्टेम सेल",
      "bloodChecker": "दाता बरे झाल्यानंतर निरोगी आयुष्य जगतो",
      "bloodSub": "मृत देणगी",
      "types": "Types of Donation",
      "living": "हृदय, फुफ्फुस, मेंदूचा मृत्यू घोषित झाल्यानंतर घडते दाता 8 जीव वाचवू शकतो",
      "living1": "चरण-दर-चरण प्रक्रिया",
      "living2": "कोणते अवयव दान केले जाऊ शकतात?",
      "living3": "वारंवार विचारले जाणारे प्रश्न",
      "deceased": "वैद्यकीय नाव",
      "deceased1": "मदत करू शकते",
      "deceased2": "जगण्याची दर",
      "deceased3": "एक दाता 8 पर्यंत जीव वाचवू शकतो. भारतात अवयवदानाबद्दल जागरूकता निर्माण करण्याच्या आमच्या मिशनमध्ये सामील व्हा.",
      "process": "टोल फ्री",
      "organQuestion": "द्रुत लिंक्स",
      "faqTitle": "आमचे अनुसरण करा",
      "medName": "अपडेटेड रहा",
      "canHelp": "नवीनतम अद्यतनांसाठी आणि यशोगाथांसाठी सदस्यता घ्या.",
      "survival": "तुमचा ईमेल प्रविष्ट करा"
    },
    "footer": {
      "tagline": "सदस्यता घ्या",
      "tollFree": "सर्व हक्क राखीव.",
      "quickLinks": "Quick Links",
      "followUs": "आशांच्या आवाजासह बनविलेले",
      "stayUpdated": "देणगीदार, प्राप्तकर्ते आणि कुटुंबांच्या वास्तविक कथा.",
      "newsletterSub": "प्रत्येक अवयव ही एक भेट आहे",
      "emailPlaceholder": "तुम्ही काय दान करू शकता आणि प्रत्येक अवयव किती जीव वाचवू शकतो हे शोधण्यासाठी फिरा.",
      "subscribe": "अधिक जाणून घेण्यासाठी क्लिक करा",
      "rights": "वाचवते",
      "madeWith": "जीवन"
    },
    "testimonials": {
      "title": "जीवन",
      "subtitle": "वाचवू शकते",
      "list": {
        "1": {
          "quote": "प्रिया शर्मा",
          "name": "मुंबई",
          "city": "दात्याचे कुटुंब",
          "role": "अनेक अवयव",
          "organ": "माझ्या हृदय प्रत्यारोपणानंतर मला माझ्या मुलीचे लग्न बघायला मिळाले. मी माझे दुसरे आयुष्य एका अज्ञात नायकाचे ऋणी आहे."
        },
        "2": {
          "quote": "राजेश कुमार",
          "name": "दिल्ली",
          "city": "प्राप्तकर्ता",
          "role": "हृदय",
          "organ": "जिवंत किडनी दाता म्हणून मी माझ्या भावाला जीवनाची भेट दिली. आम्ही दोघे आता निरोगी, सामान्य जीवन जगत आहोत."
        },
        "3": {
          "quote": "अनन्या पटेल",
          "name": "अहमदाबाद",
          "city": "जिवंत दाता",
          "role": "किडनी",
          "organ": "Kidney"
        }
      }
    },
    "bodyDiagram": {
      "title": "जीवन वाचवू शकते",
      "subtitle": "अवयव दान जनजागृती प्लॅटफॉर्म",
      "clickToLearn": "Click to learn more",
      "saves": "Saves",
      "lives": "lives",
      "life": "life",
      "canSave": "Can save"
    },
    "loader": {
      "title": "Save a Life",
      "subtitle": "Organ Donation Awareness Platform"
    }
  },
  "es": {
    "nav": {
      "home": "Inicio",
      "learn": "Aprende",
      "myths": "Mitos",
      "register": "Regístrate",
      "stories": "Historias",
      "campaigns": "Campañas",
      "login": "Inicia sesión",
      "donateNow": "Dona ahora"
    },
    "hero": {
      "title": "Da el regalo que dura para siempre",
      "subtitle": "Un donante puede salvar hasta 8 vidas. Tu decisión de hoy puede darle a alguien un mañana.",
      "cta": "Conviértase en donante",
      "learnHow": "Aprenda cómo funciona",
      "joinDonors": "Únase a más de 500 000 donantes registrados en toda la India",
      "pledgedToday": "personas se han comprometido hoy",
      "scroll": "Desplácese para explorar"
    },
    "common": {
      "learnMore": "Más información",
      "submit": "Enviar",
      "cancel": "Cancelar",
      "close": "Cerrar"
    },
    "stats": {
      "registered": "Donantes registrados",
      "livesSaved": "Vidas que un donante puede salvar",
      "organsDonatable": "Órganos y tejidos donables",
      "awaitingTransplant": "Pacientes en espera de trasplante"
    },
    "organs": {
      "title": "Órganos que puede donar",
      "subtitle": "Cada órgano tiene el potencial para salvar o transformar vidas. Aprende sobre cada uno.",
      "helps": "Ayuda",
      "patient": "paciente",
      "patients": "pacientes",
      "list": {
        "heart": {
          "name": "Corazón",
          "description": "Un corazón donado puede darle a alguien una segunda oportunidad en la vida.",
          "medicalName": "Trasplante cardíaco",
          "survivalRateImprovement": "85% Tasa de supervivencia a 1 año",
          "ageRestriction": "Sin límite de edad específico"
        },
        "lungs": {
          "name": "Pulmones",
          "description": "La donación de pulmones puede ayudar a pacientes con enfermedades respiratorias crónicas.",
          "medicalName": "Trasplante pulmonar",
          "survivalRateImprovement": "Tasa de supervivencia de 80% a 1 año",
          "ageRestriction": "Generalmente menores de 65 años"
        },
        "liver": {
          "name": "Hígado",
          "description": "El hígado se puede dividir para salvar dos vidas: un adulto y un niño.",
          "medicalName": "Trasplante hepático",
          "survivalRateImprovement": "Tasa de supervivencia de 1 año del 90%",
          "ageRestriction": "Sin límite de edad específico"
        },
        "kidneys": {
          "name": "Riñones",
          "description": "Los riñones son los órganos más comúnmente trasplantados.",
          "medicalName": "Trasplante renal",
          "survivalRateImprovement": "Tasa de supervivencia de 1 año del 95%",
          "ageRestriction": "Sin límite de edad específico"
        },
        "eyes": {
          "name": "Ojos",
          "description": "Los trasplantes de córnea pueden devolver la vista a los ciegos.",
          "medicalName": "Trasplante de córnea",
          "survivalRateImprovement": "Tasa de supervivencia del injerto del 90%",
          "ageRestriction": "Sin restricción de edad"
        },
        "skin": {
          "name": "Piel",
          "description": "Las donaciones de piel ayudan a curar a las víctimas de quemaduras.",
          "medicalName": "Aloinjerto de piel",
          "survivalRateImprovement": "Salva vidas en quemaduras graves",
          "ageRestriction": "Sin límite de edad específico"
        },
        "pancreas": {
          "name": "Páncreas",
          "description": "La donación de páncreas puede curar la diabetes en los receptores.",
          "medicalName": "Trasplante de páncreas",
          "survivalRateImprovement": "Tasa de supervivencia de 1 año del 80%",
          "ageRestriction": "Generalmente menores de 50 años"
        },
        "intestines": {
          "name": "Intestinos",
          "description": "Los trasplantes intestinales ayudan a los pacientes con insuficiencia intestinal.",
          "medicalName": "Trasplante intestinal",
          "survivalRateImprovement": "Tasa de supervivencia de 70% a 1 año",
          "ageRestriction": "Caso por caso"
        },
        "bone-marrow": {
          "name": "Médula ósea",
          "description": "La donación de médula ósea puede curar los cánceres de sangre.",
          "medicalName": "Trasplante de células madre",
          "survivalRateImprovement": "Tasa de curación del 60-80% para la leucemia",
          "ageRestriction": "Generalmente 18-60 para los donantes"
        }
      }
    },
    "map": {
      "title": "Distribución de donantes en toda la India",
      "subtitle": "Vea cómo se distribuyen los donantes en los diferentes estados. El verde más oscuro indica más donantes registrados.",
      "donors": "donantes",
      "states": {
        "MH": "Maharashtra",
        "DL": "Delhi",
        "TN": "Tamil Nadu",
        "KA": "Karnataka",
        "GJ": "Gujarat",
        "KL": "Kerala",
        "WB": "Bengala Occidental",
        "TS": "Telangana",
        "UP": "Uttar Pradesh",
        "RJ": "Rajasthan",
        "AP": "Andhra Pradesh",
        "MP": "Madhya Pradesh",
        "HR": "Haryana",
        "PB": "Punjab",
        "OD": "Odisha"
      }
    },
    "myths": {
      "title": "Mitos versus hechos",
      "subtitle": "Muchos conceptos erróneos impiden que las personas se registren como donantes de órganos. Haz clic en cada tarjeta para revelar la verdad.",
      "busted": "Has reventado",
      "allBusted": "¡Todos los mitos reventados!",
      "of": "de",
      "mythLabel": "MITO",
      "factLabel": "REALIDAD",
      "clickReveal": "Haz clic para revelar el hecho",
      "mythBusted": "¡Mito destruido!",
      "knowledge": "El conocimiento es poder",
      "knowledgeSub": "Ahora que conoce los hechos, dé el siguiente paso y regístrese como donante de órganos. Tu decisión puede salvar hasta 8 vidas.",
      "registerCTA": "Regístrese como donante"
    },
    "learn": {
      "title": "Aprenda sobre la donación de órganos",
      "subtitle": "Comprender la donación de órganos es el primer paso para tomar una decisión informada.",
      "bloodChecker": "Comprobador de compatibilidad de grupos sanguíneos",
      "bloodSub": "Seleccione su grupo sanguíneo para ver la compatibilidad para la donación de órganos y sangre.",
      "types": "Tipos de donación",
      "living": "Donación en vida",
      "living1": "Done un riñón o parte de su hígado",
      "living2": "Médula ósea y células madre",
      "living3": "El donante vive una vida saludable después de la recuperación",
      "deceased": "Donación de fallecidos",
      "deceased1": "Ocurre después de declararse la muerte cerebral",
      "deceased2": "Corazón, pulmones, hígado, riñones, páncreas, intestinos",
      "deceased3": "Un donante puede salvar hasta 8 vidas",
      "process": "Proceso paso a paso",
      "organQuestion": "Qué órganos pueden ser ¿Donado?",
      "faqTitle": "Preguntas frecuentes",
      "medName": "Nombre médico",
      "canHelp": "Puede ayudar",
      "survival": "Tasa de supervivencia"
    },
    "footer": {
      "tagline": "Un donante puede salvar hasta 8 vidas. Únase a nuestra misión de crear conciencia sobre la donación de órganos en la India.",
      "tollFree": "Número gratuito",
      "quickLinks": "Enlaces rápidos",
      "followUs": "Síganos",
      "stayUpdated": "Manténgase actualizado",
      "newsletterSub": "Suscríbase para recibir las últimas actualizaciones e historias de éxito.",
      "emailPlaceholder": "Introduce tu correo electrónico",
      "subscribe": "Suscríbete",
      "rights": "Todos los derechos reservados.",
      "madeWith": "Hecho con"
    },
    "testimonials": {
      "title": "Voces de Esperanza",
      "subtitle": "Historias reales de donantes, beneficiarios y familias.",
      "list": {
        "1": {
          "quote": "Cuando mi esposo falleció, honramos su deseo de donar. Salvó 5 vidas ese día. Su legado sigue vivo.",
          "name": "Priya Sharma",
          "city": "Mumbai",
          "role": "Familia de donantes",
          "organ": "Órganos múltiples"
        },
        "2": {
          "quote": "Después de mi trasplante de corazón, pude ver la boda de mi hija. Debo mi segunda vida a un héroe desconocido.",
          "name": "Rajesh Kumar",
          "city": "Delhi",
          "role": "Destinatario",
          "organ": "Corazón"
        },
        "3": {
          "quote": "Como donante vivo de riñón, le di a mi hermano el regalo de la vida. Ahora ambos vivimos una vida sana y normal.",
          "name": "Ananya Patel",
          "city": "Ahmedabad",
          "role": "Donante vivo",
          "organ": "Riñón"
        }
      }
    },
    "bodyDiagram": {
      "title": "Cada órgano es un regalo",
      "subtitle": "Coloca el cursor para explorar qué puedes donar y cuántas vidas puede salvar cada órgano.",
      "clickToLearn": "Haga clic para obtener más información",
      "saves": "Salva",
      "lives": "vidas",
      "life": "vida",
      "canSave": "Puede salvar"
    },
    "loader": {
      "title": "Salva una vida",
      "subtitle": "Plataforma de concientización sobre la donación de órganos"
    }
  },
  "fr": {
    "nav": {
      "home": "Accueil",
      "learn": "Apprendre",
      "myths": "Mythes",
      "register": "S'inscrire",
      "stories": "Histoires",
      "campaigns": "Campagnes",
      "login": "Connexion",
      "donateNow": "Faire un don maintenant"
    },
    "hero": {
      "title": "Offrez un cadeau qui dure pour toujours",
      "subtitle": "Un donateur peut sauver jusqu'à 8 vies. Votre décision d’aujourd’hui peut donner un avenir à quelqu’un.",
      "cta": "Devenez donneur",
      "learnHow": "Découvrez comment cela fonctionne",
      "joinDonors": "Rejoignez plus de 5 00 000 donneurs enregistrés à travers l'Inde",
      "pledgedToday": "des personnes se sont engagées aujourd'hui",
      "scroll": "Faites défiler pour explorer"
    },
    "common": {
      "learnMore": "En savoir plus",
      "submit": "Soumettre",
      "cancel": "Annuler",
      "close": "Fermer"
    },
    "stats": {
      "registered": "Donateurs enregistrés",
      "livesSaved": "Des vies qu'un donneur peut sauver",
      "organsDonatable": "Organes et tissus pouvant être donnés",
      "awaitingTransplant": "Patients en attente de transplantation"
    },
    "organs": {
      "title": "Organes que vous pouvez donner",
      "subtitle": "Chaque organe a le potentiel pour sauver ou transformer des vies. Apprenez-en davantage sur chacun.",
      "helps": "Aide",
      "patient": "patient",
      "patients": "patients",
      "list": {
        "heart": {
          "name": "Cœur",
          "description": "Un don de cœur peut donner à quelqu'un une seconde chance dans la vie.",
          "medicalName": "Transplantation cardiaque",
          "survivalRateImprovement": "Taux de survie à 1 an de 85 %",
          "ageRestriction": "Aucune limite d'âge spécifique"
        },
        "lungs": {
          "name": "Poumons",
          "description": "Le don de poumons peut aider les patients atteints de maladies respiratoires chroniques.",
          "medicalName": "Transplantation pulmonaire",
          "survivalRateImprovement": "Taux de survie à 1 an de 80 %",
          "ageRestriction": "Généralement moins de 65 ans"
        },
        "liver": {
          "name": "Foie",
          "description": "Le foie peut être divisé pour sauver deux vies - un adulte et un enfant.",
          "medicalName": "Transplantation hépatique",
          "survivalRateImprovement": "Taux de survie à 1 an de 90 %",
          "ageRestriction": "Aucune limite d'âge spécifique"
        },
        "kidneys": {
          "name": "Reins",
          "description": "Les reins sont les organes les plus couramment transplantés.",
          "medicalName": "Transplantation rénale",
          "survivalRateImprovement": "Taux de survie à 1 an de 95 %",
          "ageRestriction": "Aucune limite d'âge spécifique"
        },
        "eyes": {
          "name": "Yeux",
          "description": "Les greffes de cornée peuvent redonner la vue aux aveugles.",
          "medicalName": "Greffe de cornée",
          "survivalRateImprovement": "Taux de survie du greffon de 90 %",
          "ageRestriction": "Aucune restriction d'âge"
        },
        "skin": {
          "name": "Peau",
          "description": "Les dons de peau aident les brûlés à guérir.",
          "medicalName": "Allogreffe de peau",
          "survivalRateImprovement": "Sauvetage en cas de brûlures graves",
          "ageRestriction": "Aucune limite d'âge spécifique"
        },
        "pancreas": {
          "name": "Pancréas",
          "description": "Le don de pancréas peut guérir le diabète chez les receveurs.",
          "medicalName": "Transplantation pancréatique",
          "survivalRateImprovement": "Taux de survie à 1 an de 80 %",
          "ageRestriction": "Généralement moins de 50 ans"
        },
        "intestines": {
          "name": "Intestins",
          "description": "Les transplantations intestinales aident les patients souffrant d'insuffisance intestinale.",
          "medicalName": "Transplantation intestinale",
          "survivalRateImprovement": "Taux de survie à 1 an de 70 %",
          "ageRestriction": "Au cas par cas"
        },
        "bone-marrow": {
          "name": "Moelle osseuse",
          "description": "Le don de moelle osseuse peut guérir les cancers du sang.",
          "medicalName": "Greffe de cellules souches",
          "survivalRateImprovement": "Taux de guérison de la leucémie de 60 à 80 %",
          "ageRestriction": "Généralement de 18 à 60 ans pour les donneurs"
        }
      }
    },
    "map": {
      "title": "Répartition des donneurs à travers l'Inde",
      "subtitle": "Découvrez comment les donneurs sont répartis dans les différents États. Un vert plus foncé indique un plus grand nombre de donneurs enregistrés.",
      "donors": "donneurs",
      "states": {
        "MH": "Maharashtra",
        "DL": "Delhi",
        "TN": "Tamil Nadu",
        "KA": "Karnataka",
        "GJ": "Gujarat",
        "KL": "Kerala",
        "WB": "Bengale occidental",
        "TS": "Telangana",
        "UP": "Uttar Pradesh",
        "RJ": "Rajasthan",
        "AP": "Andhra Pradesh",
        "MP": "Madhya Pradesh",
        "HR": "Haryana",
        "PB": "Punjab",
        "OD": "Odisha"
      }
    },
    "myths": {
      "title": "Mythes et faits",
      "subtitle": "De nombreuses idées fausses empêchent les gens de s'inscrire comme donneurs d'organes. Cliquez sur chaque carte pour révéler la vérité.",
      "busted": "Vous avez brisé",
      "allBusted": "Tous les mythes brisés !",
      "of": "de",
      "mythLabel": "MYTHE",
      "factLabel": "FAIT",
      "clickReveal": "Cliquez pour révéler le fait",
      "mythBusted": "Mythe brisé !",
      "knowledge": "La connaissance, c'est le pouvoir",
      "knowledgeSub": "Maintenant que vous connaissez les faits, passez à l'étape suivante et inscrivez-vous comme donneur d'organes. Votre décision peut sauver jusqu’à 8 vies.",
      "registerCTA": "S'inscrire comme donneur"
    },
    "learn": {
      "title": "En savoir plus sur le don d'organes",
      "subtitle": "Comprendre le don d'organes est la première étape pour prendre une décision éclairée.",
      "bloodChecker": "Vérificateur de compatibilité des groupes sanguins",
      "bloodSub": "Sélectionnez votre groupe sanguin pour voir la compatibilité pour le don d'organes et de sang.",
      "types": "Types de don",
      "living": "Don vivant",
      "living1": "Faites don d'un rein ou d'une partie de votre foie",
      "living2": "Moelle osseuse et cellules souches",
      "living3": "Le donneur mène une vie saine après sa guérison",
      "deceased": "Don décédé",
      "deceased1": "Se produit après la déclaration d'une mort cérébrale",
      "deceased2": "Cœur, poumons, foie, reins, pancréas, intestins",
      "deceased3": "Un donneur peut sauver jusqu'à 8 vies",
      "process": "Processus étape par étape",
      "organQuestion": "Quels organes peuvent être Donné ?",
      "faqTitle": "Questions fréquemment posées",
      "medName": "Nom médical",
      "canHelp": "Peut aider",
      "survival": "Taux de survie"
    },
    "footer": {
      "tagline": "Un donneur peut sauver jusqu'à 8 vies. Rejoignez notre mission de sensibilisation au don d'organes en Inde.",
      "tollFree": "Sans frais",
      "quickLinks": "Liens rapides",
      "followUs": "Suivez-nous",
      "stayUpdated": "Restez à jour",
      "newsletterSub": "Abonnez-vous pour les dernières mises à jour et les réussites.",
      "emailPlaceholder": "Entrez votre email",
      "subscribe": "Abonnez-vous",
      "rights": "Tous droits réservés.",
      "madeWith": "Réalisé avec"
    },
    "testimonials": {
      "title": "Voices of Hope",
      "subtitle": "Histoires vraies de donateurs, de bénéficiaires et de familles.",
      "list": {
        "1": {
          "quote": "Lorsque mon mari est décédé, nous avons honoré son souhait de faire un don. Il a sauvé 5 vies ce jour-là. Son héritage perdure.",
          "name": "Priya Sharma",
          "city": "Mumbai",
          "role": "Famille de donneurs",
          "organ": "Organes multiples"
        },
        "2": {
          "quote": "Après ma transplantation cardiaque, j'ai pu assister au mariage de ma fille. Je dois ma seconde vie à un héros inconnu.",
          "name": "Rajesh Kumar",
          "city": "Delhi",
          "role": "Destinataire",
          "organ": "Cœur"
        },
        "3": {
          "quote": "En tant que donneur de rein vivant, j'ai fait à mon frère le don de la vie. Nous vivons tous les deux une vie saine et normale maintenant.",
          "name": "Ananya Patel",
          "city": "Ahmedabad",
          "role": "Donateur vivant",
          "organ": "Rein"
        }
      }
    },
    "bodyDiagram": {
      "title": "Chaque organe est un cadeau",
      "subtitle": "Passez la souris pour découvrir ce que vous pouvez donner et combien de vies chaque organe peut sauver.",
      "clickToLearn": "Cliquez pour en savoir plus",
      "saves": "Sauve",
      "lives": "vies",
      "life": "vie",
      "canSave": "Peut sauver"
    },
    "loader": {
      "title": "Sauver une vie",
      "subtitle": "Plateforme de sensibilisation au don d'organes"
    }
  },
  "de": {
    "nav": {
      "home": "Startseite",
      "learn": "Lernen",
      "myths": "Mythen",
      "register": "Registrieren",
      "stories": "Geschichten",
      "campaigns": "Kampagnen",
      "login": "Anmelden",
      "donateNow": "Jetzt spenden"
    },
    "hero": {
      "title": "Schenken Sie das Geschenk, das für immer währt",
      "subtitle": "Ein Spender kann bis zu 8 Leben retten. Ihre heutige Entscheidung kann jemandem ein Morgen bescheren.",
      "cta": "Werden Sie Spender",
      "learnHow": "Erfahren Sie, wie es funktioniert",
      "joinDonors": "Schließen Sie sich über 5.000.000 registrierten Spendern in ganz Indien an",
      "pledgedToday": "Menschen haben sich heute verpflichtet",
      "scroll": "Scrollen Sie, um zu erkunden"
    },
    "common": {
      "learnMore": "Mehr erfahren",
      "submit": "Senden",
      "cancel": "Abbrechen",
      "close": "Schließen"
    },
    "stats": {
      "registered": "Registrierte Spender",
      "livesSaved": "Leben, die ein Spender retten kann",
      "organsDonatable": "Organe und Gewebe, die gespendet werden können",
      "awaitingTransplant": "Patienten, die auf eine Transplantation warten"
    },
    "organs": {
      "title": "Organe, die Sie spenden können",
      "subtitle": "Jedes Organ hat die Potenzial, Leben zu retten oder zu verändern. Erfahren Sie mehr über jeden einzelnen.",
      "helps": "Hilft",
      "patient": "Patienten",
      "patients": "Patienten",
      "list": {
        "heart": {
          "name": "Herz",
          "description": "Ein gespendetes Herz kann jemandem eine zweite Chance im Leben geben.",
          "medicalName": "Herztransplantation",
          "survivalRateImprovement": "85 % 1-Jahres-Überlebensrate",
          "ageRestriction": "Keine spezifische Altersgrenze"
        },
        "lungs": {
          "name": "Lunge",
          "description": "Eine Lungenspende kann Patienten mit chronischen Atemwegserkrankungen helfen.",
          "medicalName": "Lungentransplantation",
          "survivalRateImprovement": "80 % 1-Jahres-Überlebensrate",
          "ageRestriction": "Im Allgemeinen unter 65 Jahren"
        },
        "liver": {
          "name": "Leber",
          "description": "Die Leber kann geteilt werden, um zwei Leben zu retten – ein Erwachsenes und ein Kind.",
          "medicalName": "Lebertransplantation",
          "survivalRateImprovement": "90 % 1-Jahres-Überlebensrate",
          "ageRestriction": "Keine spezifische Altersgrenze"
        },
        "kidneys": {
          "name": "Nieren",
          "description": "Nieren sind die am häufigsten transplantierten Organe.",
          "medicalName": "Nierentransplantation",
          "survivalRateImprovement": "95 % 1-Jahres-Überlebensrate",
          "ageRestriction": "Keine spezifische Altersgrenze"
        },
        "eyes": {
          "name": "Augen",
          "description": "Hornhauttransplantationen können Blinden das Sehvermögen wiederherstellen.",
          "medicalName": "Hornhauttransplantation",
          "survivalRateImprovement": "90 % Transplantat-Überlebensrate",
          "ageRestriction": "Keine Altersbeschränkung"
        },
        "skin": {
          "name": "Haut",
          "description": "Hautspenden unterstützen die Heilung von Verbrennungsopfern.",
          "medicalName": "Haut-Allotransplantat",
          "survivalRateImprovement": "Lebensrettend bei schweren Verbrennungen",
          "ageRestriction": "Keine spezifische Altersgrenze"
        },
        "pancreas": {
          "name": "Bauchspeicheldrüse",
          "description": "Eine Bauchspeicheldrüsenspende kann Diabetes bei Empfängern heilen.",
          "medicalName": "Pankreastransplantation",
          "survivalRateImprovement": "80 % 1-Jahres-Überlebensrate",
          "ageRestriction": "Im Allgemeinen unter 50"
        },
        "intestines": {
          "name": "Darm",
          "description": "Darmtransplantationen helfen Patienten mit Darmversagen.",
          "medicalName": "Darmtransplantation",
          "survivalRateImprovement": "70 % 1-Jahres-Überlebensrate",
          "ageRestriction": "Von Fall zu Fall"
        },
        "bone-marrow": {
          "name": "Knochenmark",
          "description": "Eine Knochenmarkspende kann Blutkrebs heilen.",
          "medicalName": "Stammzelltransplantation",
          "survivalRateImprovement": "60-80 % Heilungsrate bei Leukämie",
          "ageRestriction": "Im Allgemeinen 18-60 für Spender"
        }
      }
    },
    "map": {
      "title": "Spenderverteilung in ganz Indien",
      "subtitle": "Sehen Sie, wie Spender auf verschiedene Bundesstaaten verteilt sind. Dunkleres Grün weist auf mehr registrierte Spender hin.",
      "donors": "Spender",
      "states": {
        "MH": "Maharashtra",
        "DL": "Delhi",
        "TN": "Tamil Nadu",
        "KA": "Karnataka",
        "GJ": "Gujarat",
        "KL": "Kerala",
        "WB": "Westbengalen",
        "TS": "Telangana",
        "UP": "Uttar Pradesh",
        "RJ": "Rajasthan",
        "AP": "Andhra Pradesh",
        "MP": "Madhya Pradesh",
        "HR": "Haryana",
        "PB": "Punjab",
        "OD": "Odisha"
      }
    },
    "myths": {
      "title": "Mythen vs. Fakten",
      "subtitle": "Viele Missverständnisse hindern Menschen daran, sich als Organspender zu registrieren. Klicken Sie auf jede Karte, um die Wahrheit zu enthüllen.",
      "busted": "Du bist kaputt gegangen",
      "allBusted": "Alle Mythen sind kaputt!",
      "of": "von",
      "mythLabel": "MYTHOS",
      "factLabel": "FAKT",
      "clickReveal": "Klicken Sie hier, um die Tatsache zu enthüllen",
      "mythBusted": "Mythos zerstört!",
      "knowledge": "Wissen ist Macht",
      "knowledgeSub": "Jetzt, da Sie die Fakten kennen, machen Sie den nächsten Schritt und registrieren Sie sich als Organspender. Ihre Entscheidung kann bis zu 8 Leben retten.",
      "registerCTA": "Als Spender registrieren"
    },
    "learn": {
      "title": "Erfahren Sie mehr über Organspende",
      "subtitle": "Das Verständnis der Organspende ist der erste Schritt zu einer fundierten Entscheidung.",
      "bloodChecker": "Blutgruppen-Kompatibilitätsprüfer",
      "bloodSub": "Wählen Sie Ihre Blutgruppe aus, um die Kompatibilität für Organ- und Blutspenden anzuzeigen.",
      "types": "Arten der Spende",
      "living": "Lebendspende",
      "living1": "Spenden Sie eine Niere oder einen Teil Ihrer Leber",
      "living2": "Knochenmark und Stammzellen",
      "living3": "Der Spender lebt nach der Genesung ein gesundes Leben",
      "deceased": "Die Spende des Verstorbenen",
      "deceased1": "Erfolgt, nachdem der Hirntod festgestellt wurde",
      "deceased2": "Herz, Lunge, Leber, Nieren, Bauchspeicheldrüse, Darm",
      "deceased3": "Ein Spender kann bis zu 8 Leben retten",
      "process": "Schritt-für-Schritt-Prozess",
      "organQuestion": "Welche Organe können sein Gespendet?",
      "faqTitle": "Häufig gestellte Fragen",
      "medName": "Medizinischer Name",
      "canHelp": "Kann helfen",
      "survival": "Überlebensrate"
    },
    "footer": {
      "tagline": "Ein Spender kann bis zu 8 Leben retten. Schließen Sie sich unserer Mission an, das Bewusstsein für Organspende in Indien zu schärfen.",
      "tollFree": "Gebührenfrei",
      "quickLinks": "Quick Links",
      "followUs": "Folgen Sie uns",
      "stayUpdated": "Bleiben Sie auf dem Laufenden",
      "newsletterSub": "Abonnieren Sie die neuesten Updates und Erfolgsgeschichten.",
      "emailPlaceholder": "Geben Sie Ihre E-Mail-Adresse ein",
      "subscribe": "Abonnieren",
      "rights": "Alle Rechte vorbehalten.",
      "madeWith": "Hergestellt mit"
    },
    "testimonials": {
      "title": "Stimmen der Hoffnung",
      "subtitle": "Echte Geschichten von Spendern, Empfängern und Familien.",
      "list": {
        "1": {
          "quote": "Als mein Mann starb, kamen wir seinem Spendenwunsch nach. Er rettete an diesem Tag fünf Leben. Sein Erbe lebt weiter.",
          "name": "Priya Sharma",
          "city": "Mumbai",
          "role": "Spenderfamilie",
          "organ": "Mehrere Organe"
        },
        "2": {
          "quote": "Nach meiner Herztransplantation durfte ich die Hochzeit meiner Tochter sehen. Ich verdanke mein zweites Leben einem unbekannten Helden.",
          "name": "Rajesh Kumar",
          "city": "Delhi",
          "role": "Empfänger",
          "organ": "Herz"
        },
        "3": {
          "quote": "Als lebender Nierenspender habe ich meinem Bruder das Geschenk des Lebens gemacht. Wir führen jetzt beide ein gesundes, normales Leben.",
          "name": "Ananya Patel",
          "city": "Ahmedabad",
          "role": "Lebendspender",
          "organ": "Niere"
        }
      }
    },
    "bodyDiagram": {
      "title": "Jedes Organ ist ein Geschenk",
      "subtitle": "Bewegen Sie den Mauszeiger, um herauszufinden, was Sie spenden können und wie viele Leben jedes Organ retten kann.",
      "clickToLearn": "Klicken Sie hier, um mehr zu erfahren",
      "saves": "Rettet",
      "lives": "Leben",
      "life": "Leben",
      "canSave": "Kann retten"
    },
    "loader": {
      "title": "Rette ein Leben",
      "subtitle": "Aufklärungsplattform für Organspende"
    }
  },
  "zh-CN": {
    "nav": {
      "home": "主页",
      "learn": "学习",
      "myths": "神话",
      "register": "注册",
      "stories": "故事",
      "campaigns": "活动",
      "login": "登录",
      "donateNow": "立即捐赠"
    },
    "hero": {
      "title": "赠送永久的礼物",
      "subtitle": "一名捐赠者最多可以挽救 8 条生命。你今天的决定可以给某人一个明天。",
      "cta": "成为捐赠者",
      "learnHow": "了解如何运作",
      "joinDonors": "加入印度各地超过 5,00,000 名注册捐赠者",
      "pledgedToday": "今天人们已做出承诺",
      "scroll": "滚动探索"
    },
    "common": {
      "learnMore": "了解更多",
      "submit": "提交",
      "cancel": "取消",
      "close": "关闭"
    },
    "stats": {
      "registered": "注册捐赠者",
      "livesSaved": "一个捐赠者可以挽救生命",
      "organsDonatable": "器官和组织可捐赠",
      "awaitingTransplant": "等待移植的患者"
    },
    "organs": {
      "title": "您可以捐赠的器官",
      "subtitle": "每个器官都有拯救或改变生命的潜力。了解每一项。",
      "helps": "帮助",
      "patient": "病人",
      "patients": "病人",
      "list": {
        "heart": {
          "name": "心脏",
          "description": "捐赠的心脏可以给某人第二次生命的机会。",
          "medicalName": "心脏移植",
          "survivalRateImprovement": "85% 1 年生存率",
          "ageRestriction": "无具体年龄限制"
        },
        "lungs": {
          "name": "肺",
          "description": "肺捐献可以帮助患有慢性呼吸道疾病的患者。",
          "medicalName": "肺移植",
          "survivalRateImprovement": "80% 1 年生存率",
          "ageRestriction": "一般在 65 岁以下"
        },
        "liver": {
          "name": "肝脏",
          "description": "肝脏可以分割以挽救两个生命 - 一名成人和一名儿童。",
          "medicalName": "肝移植",
          "survivalRateImprovement": "90% 1 年生存率",
          "ageRestriction": "无具体年龄限制"
        },
        "kidneys": {
          "name": "肾脏",
          "description": "肾脏是最常见的移植器官。",
          "medicalName": "肾移植",
          "survivalRateImprovement": "95% 1年生存率",
          "ageRestriction": "无具体年龄限制"
        },
        "eyes": {
          "name": "眼睛",
          "description": "角膜移植可以让盲人恢复视力。",
          "medicalName": "角膜移植",
          "survivalRateImprovement": "90% 移植存活率",
          "ageRestriction": "无年龄限制"
        },
        "skin": {
          "name": "皮肤",
          "description": "皮肤捐赠帮助烧伤患者康复。",
          "medicalName": "皮肤同种异体移植",
          "survivalRateImprovement": "严重烧伤时挽救生命",
          "ageRestriction": "无特定年龄限制"
        },
        "pancreas": {
          "name": "胰腺",
          "description": "胰腺捐赠可以治愈受者的糖尿病。",
          "medicalName": "胰腺移植",
          "survivalRateImprovement": "80% 1 年生存率",
          "ageRestriction": "一般在 50 岁以下"
        },
        "intestines": {
          "name": "肠道",
          "description": "肠道移植帮助肠衰竭患者。",
          "medicalName": "肠移植",
          "survivalRateImprovement": "70% 1 年生存率",
          "ageRestriction": "个案基础"
        },
        "bone-marrow": {
          "name": "骨髓",
          "description": "骨髓捐赠可以治愈血癌。",
          "medicalName": "干细胞移植",
          "survivalRateImprovement": "白血病治愈率 60-80%",
          "ageRestriction": "捐赠者一般为 18-60"
        }
      }
    },
    "map": {
      "title": "印度各地的捐赠者分布",
      "subtitle": "了解捐赠者在不同邦的分布情况。深绿色表示注册捐赠者较多。",
      "donors": "捐赠者",
      "states": {
        "MH": "马哈拉施特拉邦",
        "DL": "德里",
        "TN": "泰米尔纳德邦",
        "KA": "卡纳塔克邦",
        "GJ": "古吉拉特邦",
        "KL": "喀拉拉邦",
        "WB": "西孟加拉邦",
        "TS": "特伦甘纳邦",
        "UP": "北方邦",
        "RJ": "拉贾斯坦邦",
        "AP": "安得拉邦",
        "MP": "中央邦",
        "HR": "哈里亚纳邦",
        "PB": "旁遮普邦",
        "OD": "奥里萨邦"
      }
    },
    "myths": {
      "title": "神话与事实",
      "subtitle": "许多误解阻止人们注册为器官捐赠者。单击每张卡片以揭示真相。",
      "busted": "你已经破灭了",
      "allBusted": "所有的神话都破灭了！",
      "of": "of",
      "mythLabel": "神话",
      "factLabel": "事实",
      "clickReveal": "点击揭示事实",
      "mythBusted": "神话破灭！",
      "knowledge": "知识就是力量",
      "knowledgeSub": "既然你知道了事实，就下一步吧，注册成为器官捐献者。您的决定最多可以挽救 8 条生命。",
      "registerCTA": "注册成为捐赠者"
    },
    "learn": {
      "title": "了解器官捐赠",
      "subtitle": "了解器官捐赠是做出明智决定的第一步。",
      "bloodChecker": "血型兼容性检查器",
      "bloodSub": "选择您的血型以查看器官和献血的兼容性。",
      "types": "捐献类型",
      "living": "活体捐献",
      "living1": "捐献一个肾脏或部分肝脏",
      "living2": "骨髓和干细胞",
      "living3": "捐献者康复后过着健康的生活",
      "deceased": "死者捐献",
      "deceased1": "宣布脑死亡后发生",
      "deceased2": "心脏、肺、肝脏、肾脏、胰腺、肠",
      "deceased3": "一名捐献者最多可挽救8条生命",
      "process": "分步流程",
      "organQuestion": "可以捐献哪些器官？",
      "faqTitle": "常见问题",
      "medName": "医学名称",
      "canHelp": "可以提供帮助",
      "survival": "存活率"
    },
    "footer": {
      "tagline": "一名捐献者最多可挽救 8 条生命。加入我们的使命，提高印度对器官捐赠的认识。",
      "tollFree": "免费电话",
      "quickLinks": "快速链接",
      "followUs": "关注我们",
      "stayUpdated": "保持更新",
      "newsletterSub": "订阅最新更新和成功案例。",
      "emailPlaceholder": "输入您的电子邮件",
      "subscribe": "订阅",
      "rights": "保留所有权利。",
      "madeWith": "制作者"
    },
    "testimonials": {
      "title": "希望之声",
      "subtitle": "来自捐赠者、接受者和家庭的真实故事。",
      "list": {
        "1": {
          "quote": "当我丈夫去世时，我们兑现了他捐赠的愿望。那天他拯救了 5 条生命。他的遗产继续存在。",
          "name": "Priya Sharma",
          "city": "孟买",
          "role": "捐赠者家庭",
          "organ": "多器官"
        },
        "2": {
          "quote": "心脏移植后，我看到了我女儿的婚礼。我的第二次生命归功于一位无名英雄。",
          "name": "Rajesh Kumar",
          "city": "德里",
          "role": "接受者",
          "organ": "心脏"
        },
        "3": {
          "quote": "作为活体肾脏捐赠者，我给了我兄弟生命的礼物。我们现在都过着健康、正常的生活。",
          "name": "阿纳尼亚·帕特尔",
          "city": "艾哈迈达巴德",
          "role": "活体捐赠者",
          "organ": "肾脏"
        }
      }
    },
    "bodyDiagram": {
      "title": "每个器官都是一份礼物",
      "subtitle": "将鼠标悬停即可探索您可以捐赠什么以及每个器官可以挽救多少生命。",
      "clickToLearn": "点击了解更多",
      "saves": "拯救",
      "lives": "生命",
      "life": "生命",
      "canSave": "可以拯救"
    },
    "loader": {
      "title": "拯救生命",
      "subtitle": "器官捐献意识平台"
    }
  },
  "ru": {
    "nav": {
      "home": "Главная",
      "learn": "Узнайте",
      "myths": "Мифы",
      "register": "Регистрация",
      "stories": "Истории",
      "campaigns": "Кампании",
      "login": "Вход в систему",
      "donateNow": "Сделайте пожертвование сейчас"
    },
    "hero": {
      "title": "Подарите подарок, который останется навсегда",
      "subtitle": "Один донор может спасти до 8 жизней. Ваше сегодняшнее решение может дать кому-то будущее.",
      "cta": "Стать донором",
      "learnHow": "Узнайте, как это работает",
      "joinDonors": "Присоединяйтесь к более чем 5 000 000 зарегистрированных доноров по всей Индии",
      "pledgedToday": "люди дали обещание сегодня",
      "scroll": "Прокрутите для изучения"
    },
    "common": {
      "learnMore": "Узнать больше",
      "submit": "Отправить",
      "cancel": "Отмена",
      "close": "Закрыть"
    },
    "stats": {
      "registered": "Зарегистрированные доноры",
      "livesSaved": "Жизни, которые может спасти один донор",
      "organsDonatable": "Органы и ткани, пригодные для донорства",
      "awaitingTransplant": "Пациенты, ожидающие трансплантации"
    },
    "organs": {
      "title": "Органы, которые вы можете пожертвовать",
      "subtitle": "Каждый орган имеет потенциал спасти или изменить жизни. Узнайте о каждом из них.",
      "helps": "Помогает",
      "patient": "пациенту",
      "patients": "пациентам",
      "list": {
        "heart": {
          "name": "Сердце",
          "description": "Пожертвованное сердце может дать кому-то второй шанс на жизнь.",
          "medicalName": "Трансплантация сердца",
          "survivalRateImprovement": "85% выживаемость в течение 1 года",
          "ageRestriction": "Нет конкретных возрастных ограничений"
        },
        "lungs": {
          "name": "Легкие",
          "description": "Донорство легких может помочь пациентам с хроническими респираторными заболеваниями.",
          "medicalName": "Легочная трансплантация",
          "survivalRateImprovement": "80% выживаемость в течение 1 года",
          "ageRestriction": "Обычно до 65 лет"
        },
        "liver": {
          "name": "Печень",
          "description": "Печень можно разделить, чтобы спасти две жизни - одного взрослого и одного ребенка.",
          "medicalName": "Трансплантация печени",
          "survivalRateImprovement": "90% выживаемость в течение 1 года",
          "ageRestriction": "Нет конкретных возрастных ограничений"
        },
        "kidneys": {
          "name": "Почки",
          "description": "Почки являются наиболее часто трансплантируемыми органами.",
          "medicalName": "Трансплантация почки",
          "survivalRateImprovement": "95% выживаемость в течение 1 года",
          "ageRestriction": "Нет конкретных возрастных ограничений"
        },
        "eyes": {
          "name": "Глаза",
          "description": "Трансплантация роговицы может вернуть зрение слепым.",
          "medicalName": "Трансплантация роговицы",
          "survivalRateImprovement": "90% приживаемости трансплантата",
          "ageRestriction": "Возрастных ограничений нет"
        },
        "skin": {
          "name": "Кожа",
          "description": "Пожертвования кожи помогают жертвам ожогов исцелиться.",
          "medicalName": "Аллотрансплантат кожи",
          "survivalRateImprovement": "Спасение жизни при тяжелых ожогах",
          "ageRestriction": "Нет конкретных возрастных ограничений"
        },
        "pancreas": {
          "name": "Поджелудочная железа",
          "description": "Донорство поджелудочной железы может вылечить диабет у реципиентов.",
          "medicalName": "Трансплантация поджелудочной железы",
          "survivalRateImprovement": "80% выживаемость в течение 1 года",
          "ageRestriction": "Обычно моложе 50 лет"
        },
        "intestines": {
          "name": "Кишечник",
          "description": "Трансплантация кишечника помогает пациентам с кишечной недостаточностью.",
          "medicalName": "Кишечная трансплантация",
          "survivalRateImprovement": "70% выживаемость в течение 1 года",
          "ageRestriction": "Индивидуальный подход"
        },
        "bone-marrow": {
          "name": "Костный мозг",
          "description": "Донорство костного мозга может вылечить рак крови.",
          "medicalName": "Трансплантация стволовых клеток",
          "survivalRateImprovement": "60-80% излечения от лейкемии",
          "ageRestriction": "Обычно 18-60 для доноров"
        }
      }
    },
    "map": {
      "title": "Распределение доноров по Индии",
      "subtitle": "Посмотрите, как доноры распределяются по разным штатам. Более темный зеленый цвет указывает на большее количество зарегистрированных доноров.",
      "donors": "доноры",
      "states": {
        "MH": "Махараштра",
        "DL": "Дели",
        "TN": "Тамил Наду",
        "KA": "Карнатака",
        "GJ": "Гуджарат",
        "KL": "Керала",
        "WB": "Западная Бенгалия",
        "TS": "Телангана",
        "UP": "Уттар-Прадеш",
        "RJ": "Раджастан",
        "AP": "Андхра-Прадеш",
        "MP": "Мадхья-Прадеш",
        "HR": "Харьяна",
        "PB": "Пенджаб",
        "OD": "Одиша"
      }
    },
    "myths": {
      "title": "Мифы против фактов",
      "subtitle": "Многие заблуждения мешают людям зарегистрироваться в качестве доноров органов. Нажмите на каждую карту, чтобы раскрыть правду.",
      "busted": "Вы развенчали",
      "allBusted": "Все мифы развенчаны!",
      "of": "из",
      "mythLabel": "МИФ",
      "factLabel": "ФАКТ",
      "clickReveal": "Нажмите, чтобы раскрыть факт",
      "mythBusted": "Миф развенчан!",
      "knowledge": "Знание – сила",
      "knowledgeSub": "Теперь, когда вы знаете факты, сделайте следующий шаг и зарегистрируйтесь в качестве донора органов. Ваше решение может спасти до 8 жизней.",
      "registerCTA": "Зарегистрируйтесь в качестве донора"
    },
    "learn": {
      "title": "Узнайте о донорстве органов",
      "subtitle": "Понимание того, что такое донорство органов, – это первый шаг к принятию осознанного решения.",
      "bloodChecker": "Проверка совместимости групп крови",
      "bloodSub": "Выберите свою группу крови, чтобы увидеть совместимость при донорстве органов и крови.",
      "types": "Виды донорства",
      "living": "Живое донорство",
      "living1": "Пожертвуйте одну почку или часть печени",
      "living2": "Костный мозг и стволовые клетки",
      "living3": "Донор живет здоровой жизнью после выздоровления",
      "deceased": "Пожертвование умершего",
      "deceased1": "Происходит после того, как объявлена ​​смерть мозга",
      "deceased2": "Сердце, легкие, печень, почки, поджелудочная железа, кишечник",
      "deceased3": "Один донор может спасти до 8 жизней",
      "process": "Пошаговый процесс",
      "organQuestion": "Какие органы могут быть Пожертвовано?",
      "faqTitle": "Часто задаваемые вопросы",
      "medName": "Медицинское имя",
      "canHelp": "Может помочь",
      "survival": "Выживаемость"
    },
    "footer": {
      "tagline": "Один донор может спасти до 8 жизней. Присоединяйтесь к нашей миссии по повышению осведомленности о донорстве органов в Индии.",
      "tollFree": "Бесплатный звонок",
      "quickLinks": "Быстрые ссылки",
      "followUs": "Следуйте за нами",
      "stayUpdated": "Оставайтесь в курсе",
      "newsletterSub": "Подпишитесь на последние обновления и истории успеха.",
      "emailPlaceholder": "Введите адрес электронной почты",
      "subscribe": "Подпишитесь",
      "rights": "Все права защищены.",
      "madeWith": "Сделано с помощью"
    },
    "testimonials": {
      "title": "Голоса надежды",
      "subtitle": "Реальные истории доноров, реципиентов и семей.",
      "list": {
        "1": {
          "quote": "Когда мой муж скончался, мы выполнили его желание сделать пожертвование. В тот день он спас 5 жизней. Его наследие живет.",
          "name": "Прия Шарма",
          "city": "Мумбаи",
          "role": "Семья доноров",
          "organ": "Несколько органов"
        },
        "2": {
          "quote": "После трансплантации сердца мне удалось увидеть свадьбу дочери. Своей второй жизнью я обязан неизвестному герою.",
          "name": "Раджеш Кумар",
          "city": "Дели",
          "role": "Получатель",
          "organ": "Сердце"
        },
        "3": {
          "quote": "Как живой донор почки, я подарил своему брату жизнь. Сейчас мы оба живем здоровой, нормальной жизнью.",
          "name": "Ананья Патель",
          "city": "Ахмедабад",
          "role": "Живой донор",
          "organ": "Почка"
        }
      }
    },
    "bodyDiagram": {
      "title": "Каждый орган – это дар",
      "subtitle": "Наведите указатель мыши, чтобы узнать, что вы можете пожертвовать и сколько жизней может спасти каждый орган.",
      "clickToLearn": "Нажмите, чтобы узнать больше",
      "saves": "Спасает",
      "lives": "жизни",
      "life": "жизнь",
      "canSave": "Может спасти"
    },
    "loader": {
      "title": "Спасите жизнь",
      "subtitle": "Платформа по повышению осведомленности о донорстве органов"
    }
  },
  "ja": {
    "nav": {
      "home": "ホーム",
      "learn": "学ぶ",
      "myths": "神話",
      "register": "登録",
      "stories": "ストーリー",
      "campaigns": "キャンペーン",
      "login": "ログイン",
      "donateNow": "今すぐ寄付"
    },
    "hero": {
      "title": "永遠に残るギフトを贈ろう",
      "subtitle": "1 人の寄付者が最大 8 人の命を救うことができます。今日のあなたの決断が誰かに明日を与える可能性があります。",
      "cta": "ドナーになる",
      "learnHow": "仕組みを学ぶ",
      "joinDonors": "インド全土で 5,00,000 人以上の登録ドナーに加わりましょう",
      "pledgedToday": "今日、人々が誓約しました",
      "scroll": "スクロールして探索する"
    },
    "common": {
      "learnMore": "詳細はこちら",
      "submit": "送信",
      "cancel": "キャンセル",
      "close": "閉じる"
    },
    "stats": {
      "registered": "登録ドナー",
      "livesSaved": "1 人のドナーが救える命",
      "organsDonatable": "提供可能な臓器と組織",
      "awaitingTransplant": "移植を待つ患者"
    },
    "organs": {
      "title": "提供できる臓器",
      "subtitle": "すべての臓器命を救ったり、変えたりする可能性を秘めています。それぞれについて学びましょう。",
      "helps": "助けます",
      "patient": "患者",
      "patients": "患者",
      "list": {
        "heart": {
          "name": "心臓",
          "description": "寄付された心臓は、誰かに人生の二度目のチャンスを与えることができます。",
          "medicalName": "心臓移植",
          "survivalRateImprovement": "1 年生存率 85%",
          "ageRestriction": "特定の年齢制限なし"
        },
        "lungs": {
          "name": "肺",
          "description": "肺の寄付は慢性呼吸器疾患の患者を助けることができます。",
          "medicalName": "肺移植",
          "survivalRateImprovement": "1年生存率 80%",
          "ageRestriction": "一般に 65 歳未満"
        },
        "liver": {
          "name": "肝臓",
          "description": "肝臓を分割すると、大人 1 名と子供 1 名の 2 人の命を救うことができます。",
          "medicalName": "肝臓移植",
          "survivalRateImprovement": "1 年生存率 90%",
          "ageRestriction": "特に年齢制限なし"
        },
        "kidneys": {
          "name": "腎臓",
          "description": "腎臓は最も一般的に移植される臓器です。",
          "medicalName": "腎移植",
          "survivalRateImprovement": "1 年生存率 95%",
          "ageRestriction": "特に年齢制限なし"
        },
        "eyes": {
          "name": "目",
          "description": "角膜移植は視覚障害者の視力を回復することができます。",
          "medicalName": "角膜移植",
          "survivalRateImprovement": "移植片生着率 90%",
          "ageRestriction": "年齢制限なし"
        },
        "skin": {
          "name": "皮膚",
          "description": "皮膚の寄付は火傷患者の治癒に役立ちます。",
          "medicalName": "皮膚同種移植",
          "survivalRateImprovement": "重度の火傷の救命",
          "ageRestriction": "特定の年齢制限なし"
        },
        "pancreas": {
          "name": "膵臓",
          "description": "膵臓の提供により、レシピエントの糖尿病を治療できる可能性があります。",
          "medicalName": "膵臓移植",
          "survivalRateImprovement": "80% 1年生存率",
          "ageRestriction": "一般に50歳未満"
        },
        "intestines": {
          "name": "腸",
          "description": "腸移植は、腸不全の患者を助けます。",
          "medicalName": "腸移植",
          "survivalRateImprovement": "70% 1年生存率",
          "ageRestriction": "ケースバイケース"
        },
        "bone-marrow": {
          "name": "骨髄",
          "description": "骨髄の提供により、血液がんを治療することができます。",
          "medicalName": "幹細胞移植",
          "survivalRateImprovement": "白血病の治癒率は 60 ～ 80%",
          "ageRestriction": "ドナーの治癒率は通常 18 ～ 60%"
        }
      }
    },
    "map": {
      "title": "インド全土のドナー分布",
      "subtitle": "ドナーが各州にどのように分布しているかをご覧ください。濃い緑色は登録ドナーが多いことを示します。",
      "donors": "ドナー",
      "states": {
        "MH": "マハラシュトラ州",
        "DL": "デリー",
        "TN": "タミル・ナードゥ州",
        "KA": "カルナータカ州",
        "GJ": "グジャラート州",
        "KL": "ケーララ州",
        "WB": "西ベンガル州",
        "TS": "テランガーナ",
        "UP": "ウッタル・プラデーシュ州",
        "RJ": "ラジャスタン州",
        "AP": "アーンドラ・プラデーシュ州",
        "MP": "マディヤ・プラデーシュ州",
        "HR": "ハリヤナ州",
        "PB": "パンジャブ州",
        "OD": "オリッサ州"
      }
    },
    "myths": {
      "title": "神話と事実",
      "subtitle": "多くの誤解が臓器提供者としての登録を妨げています。各カードをクリックして真実を明らかにします。",
      "busted": "あなたは破りました",
      "allBusted": "すべての神話は破られました!",
      "of": "の",
      "mythLabel": "神話",
      "factLabel": "事実",
      "clickReveal": "クリックして事実を明らかにする",
      "mythBusted": "神話は崩壊しました!",
      "knowledge": "知識は力です",
      "knowledgeSub": "事実を知ったところで、次のステップに進み、臓器提供者として登録してください。あなたの決断により、最大 8 人の命が救われます。",
      "registerCTA": "ドナーとして登録する"
    },
    "learn": {
      "title": "臓器提供について学ぶ",
      "subtitle": "臓器提供について理解することは、情報に基づいた意思決定を行うための第一歩です。",
      "bloodChecker": "血液型互換性チェッカー",
      "bloodSub": "血液型を選択して、臓器と献血の互換性を確認します。",
      "types": "寄付の種類",
      "living": "生体寄付",
      "living1": "1 つの腎臓または肝臓の一部を寄付",
      "living2": "骨髄および幹細胞",
      "living3": "ドナーは回復後も健康な生活を送る",
      "deceased": "死亡者による寄付",
      "deceased1": "脳死が宣告された後に発生する",
      "deceased2": "心臓、肺、肝臓、腎臓、膵臓、腸",
      "deceased3": "1 人のドナーが最大 8 人の命を救うことができます",
      "process": "ステップバイステップのプロセス",
      "organQuestion": "どの臓器ができるか寄付されますか？",
      "faqTitle": "よくある質問",
      "medName": "医療名",
      "canHelp": "助けることができます",
      "survival": "生存率"
    },
    "footer": {
      "tagline": "1 人のドナーは最大 8 人の命を救うことができます。インドにおける臓器提供に関する意識を高めるという私たちの使命に参加してください。",
      "tollFree": "フリーダイヤル",
      "quickLinks": "クイックリンク",
      "followUs": "フォローしてください",
      "stayUpdated": "最新情報を入手",
      "newsletterSub": "最新の更新情報や成功事例を購読してください。",
      "emailPlaceholder": "メールアドレスを入力してください",
      "subscribe": "購読する",
      "rights": "すべての著作権は留保されています。",
      "madeWith": "Made with"
    },
    "testimonials": {
      "title": "希望の声",
      "subtitle": "寄付者、寄付者、家族から寄せられた実話。",
      "list": {
        "1": {
          "quote": "夫が亡くなったとき、私たちは寄付をしたいという彼の願いを尊重しました。彼はその日、5人の命を救いました。彼の遺産は生き続けています。",
          "name": "プリヤ・シャルマ",
          "city": "ムンバイ",
          "role": "ドナー家族",
          "organ": "複数の臓器"
        },
        "2": {
          "quote": "心臓移植後、私は娘の結婚式に立ち会うことになりました。私の第二の人生は、無名の英雄のおかげです。",
          "name": "ラジェシュ・クマール",
          "city": "デリー",
          "role": "レシピエント",
          "organ": "心臓"
        },
        "3": {
          "quote": "生体腎臓ドナーとして、私は弟に命の贈り物を与えました。私たちは今、二人とも健康で普通の生活を送っています。",
          "name": "アナンヤ・パテル",
          "city": "アーメダバード",
          "role": "生体ドナー",
          "organ": "腎臓"
        }
      }
    },
    "bodyDiagram": {
      "title": "すべての臓器は贈り物",
      "subtitle": "マウスを移動して、何を寄付できるか、各臓器がどれだけの命を救えるかを調べてください。",
      "clickToLearn": "クリックして詳細を確認",
      "saves": "Saves",
      "lives": "の命を救う",
      "life": "命",
      "canSave": "救うことができる"
    },
    "loader": {
      "title": "命を救う",
      "subtitle": "臓器提供啓発プラットフォーム"
    }
  },
  "bn": {
    "nav": {
      "home": "হোম",
      "learn": "জানুন",
      "myths": "মিথ",
      "register": "নিবন্ধন করুন",
      "stories": "গল্প",
      "campaigns": "প্রচারাভিযান",
      "login": "লগইন করুন",
      "donateNow": "এখনই দান করুন"
    },
    "hero": {
      "title": "উপহার দিন যা চিরকাল স্থায়ী হয়",
      "subtitle": "একজন দাতা 8 জন পর্যন্ত জীবন বাঁচাতে পারে৷ আপনার আজকের সিদ্ধান্ত আগামীকাল কাউকে দিতে পারে।",
      "cta": "একজন দাতা হয়ে উঠুন",
      "learnHow": "জানুন এটি কীভাবে কাজ করে",
      "joinDonors": "ভারত জুড়ে 5,00,000+ নিবন্ধিত দাতাদের সাথে যোগ দিন",
      "pledgedToday": "মানুষ আজ প্রতিশ্রুতি দিয়েছে",
      "scroll": "অন্বেষণ করতে স্ক্রোল করুন"
    },
    "common": {
      "learnMore": "আরও জানুন",
      "submit": "জমা দিন",
      "cancel": "বাতিল করুন",
      "close": "বন্ধ করুন"
    },
    "stats": {
      "registered": "নিবন্ধিত দাতা",
      "livesSaved": "লাইভস ওয়ান ডোনার বা দান করতে পারেন বা বাঁচাতে পারেন",
      "organsDonatable": "ট্রান্সপ্লান্টের অপেক্ষায় থাকা রোগীরা",
      "awaitingTransplant": "আপনি যে অঙ্গগুলি দান করতে পারেন"
    },
    "organs": {
      "title": "প্রতিটি অঙ্গের জীবন বাঁচানোর বা রূপান্তর করার ক্ষমতা রয়েছে৷ প্রতিটি সম্পর্কে জানুন.",
      "subtitle": "রোগী",
      "helps": "রোগীদের সাহায্য করে",
      "patient": "হার্ট",
      "patients": "একটি দান করা হার্ট কাউকে জীবনে দ্বিতীয়বার সুযোগ দিতে পারে।",
      "list": {
        "heart": {
          "name": "কার্ডিয়াক ট্রান্সপ্ল্যান্ট",
          "description": "85% 1 বছরের বেঁচে থাকার হার",
          "medicalName": "কোনো নির্দিষ্ট বয়স সীমা নেই",
          "survivalRateImprovement": "ফুসফুস",
          "ageRestriction": "ফুসফুস দান দীর্ঘস্থায়ী শ্বাসযন্ত্রের রোগে আক্রান্ত রোগীদের সাহায্য করতে পারে।"
        },
        "lungs": {
          "name": "পালমোনারি ট্রান্সপ্ল্যান্ট",
          "description": "80% 1 বছরের বেঁচে থাকার হার",
          "medicalName": "সাধারণত 65 বছরের কম",
          "survivalRateImprovement": "লিভার",
          "ageRestriction": "লিভার দুটি জীবন বাঁচাতে বিভক্ত হতে পারে - একজন প্রাপ্তবয়স্ক এবং একটি শিশু।"
        },
        "liver": {
          "name": "হেপাটিক ট্রান্সপ্ল্যান্ট",
          "description": "90% 1 বছরের বেঁচে থাকার হার",
          "medicalName": "কোনো নির্দিষ্ট বয়স সীমা নেই",
          "survivalRateImprovement": "কিডনি",
          "ageRestriction": "কিডনি হল সবচেয়ে বেশি প্রতিস্থাপিত অঙ্গ।"
        },
        "kidneys": {
          "name": "রেনাল ট্রান্সপ্লান্ট",
          "description": "95% 1 বছরের বেঁচে থাকার হার",
          "medicalName": "কোনো নির্দিষ্ট বয়স সীমা নেই",
          "survivalRateImprovement": "চোখ",
          "ageRestriction": "কর্নিয়াল ট্রান্সপ্ল্যান্ট অন্ধদের দৃষ্টিশক্তি ফিরিয়ে দিতে পারে।"
        },
        "eyes": {
          "name": "কর্নিয়াল ট্রান্সপ্লান্ট",
          "description": "90% গ্রাফ্ট বেঁচে থাকার হার",
          "medicalName": "বয়সের সীমাবদ্ধতা নেই",
          "survivalRateImprovement": "ত্বক",
          "ageRestriction": "ত্বক দান পোড়া আক্রান্তদের নিরাময় করতে সহায়তা করে৷"
        },
        "skin": {
          "name": "ত্বকের অ্যালোগ্রাফ্ট",
          "description": "মারাত্মক পোড়ার জন্য জীবন রক্ষাকারী",
          "medicalName": "কোনো নির্দিষ্ট বয়সের সীমা নেই",
          "survivalRateImprovement": "অগ্ন্যাশয়",
          "ageRestriction": "অগ্ন্যাশয় দান প্রাপকদের ডায়াবেটিস নিরাময় করতে পারে৷"
        },
        "pancreas": {
          "name": "অগ্ন্যাশয় প্রতিস্থাপন",
          "description": "80% 1 বছরের বেঁচে থাকার হার",
          "medicalName": "সাধারণত 50",
          "survivalRateImprovement": "অন্ত্রের নিচে",
          "ageRestriction": "অন্ত্রের প্রতিস্থাপন অন্ত্রের ব্যর্থতা রোগীদের সাহায্য করে।"
        },
        "intestines": {
          "name": "অন্ত্রের প্রতিস্থাপন",
          "description": "70% 1 বছরের বেঁচে থাকার হার",
          "medicalName": "কেস বাই কেস বেসিস",
          "survivalRateImprovement": "অস্থি মজ্জা",
          "ageRestriction": "অস্থি মজ্জা দান রক্তের ক্যান্সার নিরাময় করতে পারে।"
        },
        "bone-marrow": {
          "name": "স্টেম সেল ট্রান্সপ্লান্ট",
          "description": "60-80% লিউকেমিয়া নিরাময়ের হার",
          "medicalName": "দাতাদের জন্য সাধারণত 18-60",
          "survivalRateImprovement": "ভারত জুড়ে দাতা বিতরণ",
          "ageRestriction": "দেখুন কিভাবে বিভিন্ন রাজ্যে দাতাদের বিতরণ করা হয়। গাঢ় সবুজ আরও নিবন্ধিত দাতাদের নির্দেশ করে।"
        }
      }
    },
    "map": {
      "title": "দাতা",
      "subtitle": "মিথ বনাম ঘটনা",
      "donors": "অনেক ভুল ধারণা মানুষকে অঙ্গ দাতা হিসেবে নিবন্ধন করতে বাধা দেয়। সত্য প্রকাশ করতে প্রতিটি কার্ড ক্লিক করুন.",
      "states": {
        "MH": "মহারাষ্ট্র",
        "DL": "দিল্লি",
        "TN": "তামিলনাড়ু",
        "KA": "কর্ণাটক",
        "GJ": "গুজরাট",
        "KL": "কেরালা",
        "WB": "পশ্চিমবঙ্গ",
        "TS": "তেলেঙ্গানা",
        "UP": "উত্তরপ্রদেশ",
        "RJ": "রাজস্থান",
        "AP": "অন্ধ্রপ্রদেশ",
        "MP": "মধ্যপ্রদেশ",
        "HR": "হরিয়ানা",
        "PB": "পাঞ্জাব",
        "OD": "আমার স্বামীকে সম্মান জানাতে চাইলে"
      }
    },
    "myths": {
      "title": "তুমি তো ফাটিয়ে দিয়েছ",
      "subtitle": "সব মিথ ফাটিয়ে!",
      "busted": "You have busted",
      "allBusted": "মিথ",
      "of": "FACT",
      "mythLabel": "সত্য প্রকাশ করতে ক্লিক করুন",
      "factLabel": "মিথ ভাঙ্গা!",
      "clickReveal": "জ্ঞানই শক্তি",
      "mythBusted": "এখন যেহেতু আপনি ঘটনাগুলি জানেন, পরবর্তী পদক্ষেপ নিন এবং একটি অঙ্গ দাতা হিসাবে নিবন্ধন করুন৷ আপনার সিদ্ধান্ত 8 জন পর্যন্ত জীবন বাঁচাতে পারে।",
      "knowledge": "একজন দাতা হিসাবে নিবন্ধন করুন",
      "knowledgeSub": "অঙ্গ দান সম্পর্কে জানুন",
      "registerCTA": "অঙ্গ দান বোঝা একটি জ্ঞাত সিদ্ধান্ত নেওয়ার প্রথম পদক্ষেপ।"
    },
    "learn": {
      "title": "রক্তের গ্রুপ সামঞ্জস্যতা পরীক্ষক",
      "subtitle": "অঙ্গ এবং রক্তদানের সামঞ্জস্য দেখতে আপনার রক্তের গ্রুপ নির্বাচন করুন।",
      "bloodChecker": "দানের প্রকারগুলি",
      "bloodSub": "জীবন্ত দান",
      "types": "একটি কিডনি বা আপনার লিভারের অংশ দান করুন",
      "living": "অস্থি মজ্জা এবং স্টেম সেল",
      "living1": "দাতা সুস্থ হওয়ার পরে সুস্থ জীবনযাপন করেন",
      "living2": "মৃত দান",
      "living3": "মস্তিষ্কের মৃত্যু ঘোষণা করার পরে ঘটে দাতা 8টি জীবন বাঁচাতে পারে",
      "deceased": "ধাপে ধাপে প্রক্রিয়া",
      "deceased1": "কোন অঙ্গ দান করা যেতে পারে?",
      "deceased2": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
      "deceased3": "চিকিৎসার নাম",
      "process": "সাহায্য করতে পারে",
      "organQuestion": "বেঁচে থাকার হার",
      "faqTitle": "একজন দাতা 8 জন পর্যন্ত জীবন বাঁচাতে পারে। ভারতে অঙ্গ দান সম্পর্কে সচেতনতা তৈরি করতে আমাদের মিশনে যোগ দিন।",
      "medName": "টোল ফ্রি",
      "canHelp": "দ্রুত লিঙ্ক",
      "survival": "আমাদের অনুসরণ করুন"
    },
    "footer": {
      "tagline": "আপডেটেড থাকুন",
      "tollFree": "সর্বশেষ আপডেট এবং সাফল্যের গল্পের জন্য সদস্যতা নিন।",
      "quickLinks": "আপনার ইমেল লিখুন",
      "followUs": "সদস্যতা",
      "stayUpdated": "সর্বস্বত্ব সংরক্ষিত৷",
      "newsletterSub": "আশার কণ্ঠস্বর দিয়ে তৈরি",
      "emailPlaceholder": "দাতা, প্রাপক এবং পরিবারের কাছ থেকে বাস্তব গল্প।",
      "subscribe": "প্রতিটি অঙ্গ একটি উপহার",
      "rights": "আপনি কী দান করতে পারেন এবং প্রতিটি অঙ্গ কতগুলি জীবন বাঁচাতে পারে তা অন্বেষণ করতে ঘুরুন৷",
      "madeWith": "আরও জানতে ক্লিক করুন"
    },
    "testimonials": {
      "title": "বাঁচায়",
      "subtitle": "জীবন",
      "list": {
        "1": {
          "quote": "উড়িষ্যাকে দান করি। সেদিন তিনি ৫টি জীবন বাঁচিয়েছিলেন। তার উত্তরাধিকার বেঁচে আছে।",
          "name": "প্রিয়া শর্মা",
          "city": "মুম্বাই",
          "role": "দাতা পরিবার",
          "organ": "একাধিক অঙ্গ"
        },
        "2": {
          "quote": "আমার হার্ট প্রতিস্থাপনের পর, আমি আমার মেয়ের বিয়ে দেখতে পেয়েছি। আমি আমার দ্বিতীয় জীবন একজন অজানা নায়কের কাছে ঋণী।",
          "name": "রাজেশ কুমার",
          "city": "দিল্লি",
          "role": "প্রাপক",
          "organ": "হৃদয়"
        },
        "3": {
          "quote": "একজন জীবিত কিডনি দাতা হিসাবে, আমি আমার ভাইকে জীবনের উপহার দিয়েছি। আমরা দুজনেই এখন সুস্থ, স্বাভাবিক জীবনযাপন করি।",
          "name": "অনন্যা প্যাটেল",
          "city": "আহমেদাবাদ",
          "role": "জীবিত দাতা",
          "organ": "কিডনি"
        }
      }
    },
    "bodyDiagram": {
      "title": "জীবন",
      "subtitle": "বাঁচাতে পারে",
      "clickToLearn": "জীবন বাঁচাতে",
      "saves": "অঙ্গ দান সচেতনতা প্ল্যাটফর্ম",
      "lives": "lives",
      "life": "life",
      "canSave": "Can save"
    },
    "loader": {
      "title": "Save a Life",
      "subtitle": "Organ Donation Awareness Platform"
    }
  },
  "gu": {
    "nav": {
      "home": "હોમ",
      "learn": "જાણો",
      "myths": "માન્યતાઓ",
      "register": "નોંધણી કરો",
      "stories": "વાર્તાઓ",
      "campaigns": "ઝુંબેશ",
      "login": "લૉગિન કરો",
      "donateNow": "હમણાં દાન કરો"
    },
    "hero": {
      "title": "એવી ભેટ આપો જે કાયમ રહે",
      "subtitle": "એક દાતા 8 લોકો સુધી જીવ બચાવી શકે છે. તમારો આજનો નિર્ણય કાલે કોઈને આપી શકે છે.",
      "cta": "દાતા બનો",
      "learnHow": "જાણો તે કેવી રીતે કાર્ય કરે છે",
      "joinDonors": "ભારતભરમાં 5,00,000+ નોંધાયેલા દાતાઓ સાથે જોડાઓ",
      "pledgedToday": "લોકોએ આજે વચન આપ્યું છે",
      "scroll": "અન્વેષણ કરવા માટે સ્ક્રોલ કરો"
    },
    "common": {
      "learnMore": "વધુ જાણો",
      "submit": "સબમિટ કરો",
      "cancel": "રદ કરો",
      "close": "બંધ કરો"
    },
    "stats": {
      "registered": "નોંધાયેલા દાતાઓ",
      "livesSaved": "જીવે છે એક દાતા જીવી શકે છે અથવા બચાવી શકે છે. ટ્રાન્સપ્લાન્ટની રાહ જોઈ રહેલા દર્દીઓ",
      "organsDonatable": "તમે દાન કરી શકો તેવા અંગો",
      "awaitingTransplant": "દરેક અંગમાં જીવન બચાવવા અથવા પરિવર્તન કરવાની ક્ષમતા હોય છે. દરેક વિશે જાણો."
    },
    "organs": {
      "title": "મદદ કરે છે",
      "subtitle": "દર્દી",
      "helps": "દર્દીઓ",
      "patient": "હૃદય",
      "patients": "દાન કરેલું હૃદય કોઈને જીવનમાં બીજી તક આપી શકે છે.",
      "list": {
        "heart": {
          "name": "કાર્ડિયાક ટ્રાન્સપ્લાન્ટ",
          "description": "85% 1-વર્ષનો જીવિત રહેવાનો દર",
          "medicalName": "કોઈ ચોક્કસ વય મર્યાદા નથી",
          "survivalRateImprovement": "ફેફસાં",
          "ageRestriction": "ફેફસાંનું દાન ક્રોનિક શ્વસન રોગોવાળા દર્દીઓને મદદ કરી શકે છે."
        },
        "lungs": {
          "name": "પલ્મોનરી ટ્રાન્સપ્લાન્ટ",
          "description": "80% 1-વર્ષનો જીવિત રહેવાનો દર",
          "medicalName": "સામાન્ય રીતે 65 વર્ષથી ઓછી",
          "survivalRateImprovement": "લિવર",
          "ageRestriction": "લિવરને બે જીવન બચાવવા માટે વિભાજિત કરી શકાય છે - એક પુખ્ત અને એક બાળક."
        },
        "liver": {
          "name": "હિપેટિક ટ્રાન્સપ્લાન્ટ",
          "description": "90% 1-વર્ષનો જીવિત રહેવાનો દર",
          "medicalName": "કોઈ ચોક્કસ વય મર્યાદા નથી",
          "survivalRateImprovement": "કિડની",
          "ageRestriction": "કિડની એ સૌથી સામાન્ય રીતે ટ્રાન્સપ્લાન્ટ કરાયેલા અંગો છે."
        },
        "kidneys": {
          "name": "રેનલ ટ્રાન્સપ્લાન્ટ",
          "description": "95% 1-વર્ષનો જીવિત રહેવાનો દર",
          "medicalName": "કોઈ ચોક્કસ વય મર્યાદા નથી",
          "survivalRateImprovement": "આંખો",
          "ageRestriction": "કોર્નિયલ ટ્રાન્સપ્લાન્ટ અંધ લોકોને દૃષ્ટિ પુનઃસ્થાપિત કરી શકે છે."
        },
        "eyes": {
          "name": "કોર્નિયલ ટ્રાન્સપ્લાન્ટ",
          "description": "90% ગ્રાફ્ટ સર્વાઇવલ રેટ",
          "medicalName": "કોઈ વય પ્રતિબંધ નથી",
          "survivalRateImprovement": "ત્વચા",
          "ageRestriction": "ત્વચાનું દાન બળેલા પીડિતોને સાજા કરવામાં મદદ કરે છે."
        },
        "skin": {
          "name": "ત્વચા એલોગ્રાફ્ટ",
          "description": "ગંભીર દાઝવા માટે જીવન-રક્ષક",
          "medicalName": "કોઈ ચોક્કસ વય મર્યાદા નથી",
          "survivalRateImprovement": "સ્વાદુપિંડ",
          "ageRestriction": "સ્વાદુપિંડનું દાન પ્રાપ્તકર્તાઓમાં ડાયાબિટીસનો ઉપચાર કરી શકે છે."
        },
        "pancreas": {
          "name": "સ્વાદુપિંડનું પ્રત્યારોપણ",
          "description": "80% 1-વર્ષનો જીવિત રહેવાનો દર",
          "medicalName": "સામાન્ય રીતે 50",
          "survivalRateImprovement": "આંતરડાં",
          "ageRestriction": "આંતરડાના પ્રત્યારોપણ આંતરડાની નિષ્ફળતાવાળા દર્દીઓને મદદ કરે છે."
        },
        "intestines": {
          "name": "આંતરડા ટ્રાન્સપ્લાન્ટ",
          "description": "70% 1-વર્ષનો જીવિત રહેવાનો દર",
          "medicalName": "કેસ આધારે કેસ",
          "survivalRateImprovement": "અસ્થિ મજ્જા",
          "ageRestriction": "અસ્થિ મજ્જા દાન રક્ત કેન્સરનો ઇલાજ કરી શકે છે."
        },
        "bone-marrow": {
          "name": "સ્ટેમ સેલ ટ્રાન્સપ્લાન્ટ",
          "description": "લ્યુકેમિયા માટે 60-80% ઉપચાર દર",
          "medicalName": "દાતાઓ માટે સામાન્ય રીતે 18-60 ઘાટો લીલો વધુ નોંધાયેલા દાતાઓને સૂચવે છે. દાતાઓ સત્ય જાહેર કરવા માટે દરેક કાર્ડ પર ક્લિક કરો.",
          "survivalRateImprovement": "તમે પર્દાફાશ કર્યો છે",
          "ageRestriction": "બધી દંતકથાઓનો પર્દાફાશ!"
        }
      }
    },
    "map": {
      "title": "Donor Distribution Across India",
      "subtitle": "માન્યતા",
      "donors": "FACT",
      "states": {
        "MH": "મહારાષ્ટ્ર",
        "DL": "દિલ્હી",
        "TN": "તમિલનાડુ",
        "KA": "કર્ણાટક",
        "GJ": "ગુજરાત",
        "KL": "કેરળ",
        "WB": "પશ્ચિમ બંગાળ",
        "TS": "તેલંગાણા",
        "UP": "ઉત્તર પ્રદેશ",
        "RJ": "રાજસ્થાન",
        "AP": "આંધ્ર પ્રદેશ",
        "MP": "મધ્યપ્રદેશ",
        "HR": "હરિયાણા",
        "PB": "પંજાબ",
        "OD": "જ્યારે મારા પતિને ઓડિશામાં પાસ કરવાની ઇચ્છા હતી ત્યારે અમે મારા પતિનું સન્માન કરીએ છીએ. તે દિવસે તેણે 5 જીવ બચાવ્યા. તેમનો વારસો જીવે છે."
      }
    },
    "myths": {
      "title": "હકીકત જાહેર કરવા ક્લિક કરો",
      "subtitle": "માન્યતાનો પર્દાફાશ!",
      "busted": "જ્ઞાન એ શક્તિ છે",
      "allBusted": "હવે જ્યારે તમે હકીકતો જાણો છો, તો આગળનું પગલું ભરો અને અંગ દાતા તરીકે નોંધણી કરો. તમારો નિર્ણય 8 જેટલા જીવ બચાવી શકે છે.",
      "of": "દાતા તરીકે નોંધણી કરાવો",
      "mythLabel": "અંગ દાન વિશે જાણો",
      "factLabel": "અંગદાનને સમજવું એ જાણકાર નિર્ણય લેવા તરફનું પ્રથમ પગલું છે.",
      "clickReveal": "રક્ત જૂથ સુસંગતતા તપાસનાર",
      "mythBusted": "અંગ અને રક્તદાન માટે સુસંગતતા જોવા માટે તમારું રક્ત જૂથ પસંદ કરો.",
      "knowledge": "દાનના પ્રકાર",
      "knowledgeSub": "જીવંત દાન",
      "registerCTA": "એક કિડની અથવા તમારા લિવરના ભાગનું દાન કરો"
    },
    "learn": {
      "title": "અસ્થિ મજ્જા અને સ્ટેમ સેલ",
      "subtitle": "દાતા સ્વસ્થ જીવન જીવે છે",
      "bloodChecker": "મૃત દાન",
      "bloodSub": "Select your blood group to see compatibility for organ and blood donation.",
      "types": "મગજ મૃત્યુ જાહેર થયા પછી થાય છે દાતા 8 જીવ બચાવી શકે છે",
      "living": "સ્ટેપ બાય સ્ટેપ પ્રોસેસ",
      "living1": "કયા અંગોનું દાન કરી શકાય છે?",
      "living2": "વારંવાર પૂછાતા પ્રશ્નો",
      "living3": "તબીબી નામ",
      "deceased": "મદદ કરી શકે છે",
      "deceased1": "સર્વાઇવલ રેટ",
      "deceased2": "એક દાતા 8 જીવો સુધી બચાવી શકે છે. ભારતમાં અંગદાન વિશે જાગૃતિ લાવવાના અમારા મિશનમાં જોડાઓ.",
      "deceased3": "ટોલ ફ્રી",
      "process": "ઝડપી લિંક્સ",
      "organQuestion": "અમને અનુસરો",
      "faqTitle": "અપડેટ રહો",
      "medName": "નવીનતમ અપડેટ્સ અને સફળતાની વાર્તાઓ માટે સબ્સ્ક્રાઇબ કરો.",
      "canHelp": "તમારું ઇમેઇલ દાખલ કરો",
      "survival": "સબ્સ્ક્રાઇબ કરો"
    },
    "footer": {
      "tagline": "સર્વાધિકાર સુરક્ષિત.",
      "tollFree": "Toll Free",
      "quickLinks": "આશાના અવાજો સાથે બનાવેલ",
      "followUs": "દાતાઓ, પ્રાપ્તકર્તાઓ અને પરિવારોની વાસ્તવિક વાર્તાઓ.",
      "stayUpdated": "દરેક અંગ એક ભેટ છે",
      "newsletterSub": "તમે શું દાન કરી શકો છો અને દરેક અંગ કેટલા જીવન બચાવી શકે છે તે શોધવા માટે હૉવર કરો.",
      "emailPlaceholder": "વધુ જાણવા માટે ક્લિક કરો",
      "subscribe": "Saves",
      "rights": "life",
      "madeWith": "life"
    },
    "testimonials": {
      "title": "Can save",
      "subtitle": "Save a Life",
      "list": {
        "1": {
          "quote": "પ્રિયા શર્મા",
          "name": "મુંબઈ",
          "city": "દાતા પરિવાર",
          "role": "બહુવિધ અવયવો",
          "organ": "મારા હાર્ટ ટ્રાન્સપ્લાન્ટ પછી, મને મારી દીકરીના લગ્ન જોવા મળ્યા. હું મારા બીજા જીવનનો એક અજાણ્યા હીરોનો ઋણી છું."
        },
        "2": {
          "quote": "રાજેશ કુમાર",
          "name": "દિલ્હી",
          "city": "પ્રાપ્તકર્તા",
          "role": "હૃદય",
          "organ": "જીવંત કિડની દાતા તરીકે, મેં મારા ભાઈને જીવનની ભેટ આપી. અમે બંને હવે સ્વસ્થ, સામાન્ય જીવન જીવીએ છીએ."
        },
        "3": {
          "quote": "અનન્યા પટેલ",
          "name": "અમદાવાદ",
          "city": "જીવંત દાતા",
          "role": "કિડની",
          "organ": "Kidney"
        }
      }
    },
    "bodyDiagram": {
      "title": "અંગદાન જાગૃતિ પ્લેટફોર્મ",
      "subtitle": "Hover to explore what you can donate and how many lives each organ can save.",
      "clickToLearn": "Click to learn more",
      "saves": "Saves",
      "lives": "lives",
      "life": "life",
      "canSave": "Can save"
    },
    "loader": {
      "title": "Save a Life",
      "subtitle": "Organ Donation Awareness Platform"
    }
  },
  "kn": {
    "nav": {
      "home": "ಮುಖಪುಟ",
      "learn": "ತಿಳಿಯಿರಿ",
      "myths": "ಪುರಾಣಗಳನ್ನು",
      "register": "ನೋಂದಾಯಿಸಿ",
      "stories": "ಕಥೆಗಳು",
      "campaigns": "ಪ್ರಚಾರಗಳು",
      "login": "ಲಾಗಿನ್ ಮಾಡಿ",
      "donateNow": "ಈಗ ದಾನ ಮಾಡಿ"
    },
    "hero": {
      "title": "ಶಾಶ್ವತವಾಗಿ ಉಳಿಯುವ ಉಡುಗೊರೆಯನ್ನು ನೀಡಿ",
      "subtitle": "ಒಬ್ಬ ದಾನಿಯು 8 ಜೀವಗಳನ್ನು ಉಳಿಸಬಹುದು. ಇಂದು ನಿಮ್ಮ ನಿರ್ಧಾರವು ಯಾರಿಗಾದರೂ ನಾಳೆಯನ್ನು ನೀಡಬಹುದು.",
      "cta": "ದಾನಿಯಾಗು",
      "learnHow": "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ",
      "joinDonors": "ಭಾರತದಾದ್ಯಂತ 5,00,000+ ನೋಂದಾಯಿತ ದಾನಿಗಳೊಂದಿಗೆ ಸೇರಿ",
      "pledgedToday": "ಜನರು ಇಂದು ವಾಗ್ದಾನ ಮಾಡಿದ್ದಾರೆ",
      "scroll": "ಅನ್ವೇಷಿಸಲು ಸ್ಕ್ರಾಲ್ ಮಾಡಿ"
    },
    "common": {
      "learnMore": "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
      "submit": "ಸಲ್ಲಿಸಿ",
      "cancel": "ರದ್ದುಗೊಳಿಸಿ",
      "close": "ಮುಚ್ಚಿ"
    },
    "stats": {
      "registered": "ನೋಂದಾಯಿತ ದಾನಿಗಳು",
      "livesSaved": "ಬದುಕಲು ~ ಕಸಿ ಮಾಡುವಿಕೆಗಾಗಿ ಕಾಯುತ್ತಿರುವ ರೋಗಿಗಳು",
      "organsDonatable": "ನೀವು ದಾನ ಮಾಡಬಹುದಾದ ಅಂಗಗಳು",
      "awaitingTransplant": "ಪ್ರತಿಯೊಂದು ಅಂಗವು ಜೀವಗಳನ್ನು ಉಳಿಸುವ ಅಥವಾ ಪರಿವರ್ತಿಸುವ ಸಾಮರ್ಥ್ಯವನ್ನು ಹೊಂದಿದೆ. ಪ್ರತಿಯೊಂದರ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ."
    },
    "organs": {
      "title": "ರೋಗಿಗಳಿಗೆ",
      "subtitle": "ಸಹಾಯ ಮಾಡುತ್ತದೆ",
      "helps": "ರೋಗಿಗಳಿಗೆ",
      "patient": "ಹೃದಯ",
      "patients": "ದಾನ ಮಾಡಿದ ಹೃದಯವು ಯಾರಿಗಾದರೂ ಜೀವನದಲ್ಲಿ ಎರಡನೇ ಅವಕಾಶವನ್ನು ನೀಡುತ್ತದೆ.",
      "list": {
        "heart": {
          "name": "ಹೃದಯ ಕಸಿ",
          "description": "85% 1 ವರ್ಷದ ಬದುಕುಳಿಯುವಿಕೆಯ ಪ್ರಮಾಣ",
          "medicalName": "ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ವಯಸ್ಸಿನ ಮಿತಿಯಿಲ್ಲ",
          "survivalRateImprovement": "ಶ್ವಾಸಕೋಶಗಳು",
          "ageRestriction": "ಶ್ವಾಸಕೋಶದ ದಾನವು ದೀರ್ಘಕಾಲದ ಉಸಿರಾಟದ ಕಾಯಿಲೆಗಳ ರೋಗಿಗಳಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ."
        },
        "lungs": {
          "name": "ಪಲ್ಮನರಿ ಟ್ರಾನ್ಸ್‌ಪ್ಲಾಂಟ್",
          "description": "80% 1 ವರ್ಷದ ಬದುಕುಳಿಯುವಿಕೆಯ ಪ್ರಮಾಣ",
          "medicalName": "ಸಾಮಾನ್ಯವಾಗಿ 65",
          "survivalRateImprovement": "ಯಕೃತ್ತು",
          "ageRestriction": "ಎರಡು ಜೀವಗಳನ್ನು ಉಳಿಸಲು ಯಕೃತ್ತನ್ನು ವಿಭಜಿಸಬಹುದು - ಒಬ್ಬ ವಯಸ್ಕ ಮತ್ತು ಒಂದು ಮಗು."
        },
        "liver": {
          "name": "ಹೆಪಾಟಿಕ್ ಟ್ರಾನ್ಸ್‌ಪ್ಲಾಂಟ್",
          "description": "90% 1 ವರ್ಷದ ಬದುಕುಳಿಯುವಿಕೆಯ ಪ್ರಮಾಣ",
          "medicalName": "ನಿರ್ದಿಷ್ಟ ವಯಸ್ಸಿನ ಮಿತಿಯಿಲ್ಲ",
          "survivalRateImprovement": "ಮೂತ್ರಪಿಂಡಗಳು",
          "ageRestriction": "ಮೂತ್ರಪಿಂಡಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಕಸಿ ಮಾಡಲಾದ ಅಂಗಗಳಾಗಿವೆ."
        },
        "kidneys": {
          "name": "ಮೂತ್ರಪಿಂಡ ಕಸಿ",
          "description": "95% 1-ವರ್ಷದ ಬದುಕುಳಿಯುವಿಕೆಯ ಪ್ರಮಾಣ",
          "medicalName": "ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ವಯಸ್ಸಿನ ಮಿತಿಯಿಲ್ಲ",
          "survivalRateImprovement": "ಕಣ್ಣುಗಳು",
          "ageRestriction": "ಕಾರ್ನಿಯಲ್ ಟ್ರಾನ್ಸ್‌ಪ್ಲಾಂಟ್‌ಗಳು ಅಂಧರಿಗೆ ದೃಷ್ಟಿ ಪುನಃಸ್ಥಾಪಿಸಬಹುದು."
        },
        "eyes": {
          "name": "ಕಾರ್ನಿಯಲ್ ಟ್ರಾನ್ಸ್‌ಪ್ಲಾಂಟ್",
          "description": "90% ನಾಟಿ ಬದುಕುಳಿಯುವಿಕೆಯ ಪ್ರಮಾಣ",
          "medicalName": "ಯಾವುದೇ ವಯಸ್ಸಿನ ನಿರ್ಬಂಧವಿಲ್ಲ",
          "survivalRateImprovement": "ಚರ್ಮ",
          "ageRestriction": "ಚರ್ಮ ದಾನಗಳು ಸುಟ್ಟ ಬಲಿಪಶುಗಳನ್ನು ಗುಣಪಡಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ."
        },
        "skin": {
          "name": "ಸ್ಕಿನ್ ಅಲೋಗ್ರಾಫ್ಟ್",
          "description": "ತೀವ್ರ ಸುಟ್ಟಗಾಯಗಳಿಗೆ ಜೀವ ಉಳಿಸುವ",
          "medicalName": "ನಿರ್ದಿಷ್ಟ ವಯಸ್ಸಿನ ಮಿತಿಯಿಲ್ಲ",
          "survivalRateImprovement": "ಮೇದೋಜೀರಕ ಗ್ರಂಥಿ",
          "ageRestriction": "ಮೇದೋಜೀರಕ ಗ್ರಂಥಿಯನ್ನು ದಾನ ಮಾಡುವುದರಿಂದ ಸ್ವೀಕರಿಸುವವರಲ್ಲಿ ಮಧುಮೇಹವನ್ನು ಗುಣಪಡಿಸಬಹುದು."
        },
        "pancreas": {
          "name": "ಪ್ಯಾಂಕ್ರಿಯಾಟಿಕ್ ಟ್ರಾನ್ಸ್‌ಪ್ಲಾಂಟ್",
          "description": "80% 1-ವರ್ಷದ ಬದುಕುಳಿಯುವಿಕೆಯ ಪ್ರಮಾಣ",
          "medicalName": "ಸಾಮಾನ್ಯವಾಗಿ 50",
          "survivalRateImprovement": "ಕರುಳುಗಳ ಅಡಿಯಲ್ಲಿ",
          "ageRestriction": "ಕರುಳಿನ ಕಸಿ ಕರುಳಿನ ವೈಫಲ್ಯದ ರೋಗಿಗಳಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ."
        },
        "intestines": {
          "name": "ಕರುಳಿನ ಕಸಿ",
          "description": "70% 1 ವರ್ಷದ ಬದುಕುಳಿಯುವಿಕೆಯ ಪ್ರಮಾಣ",
          "medicalName": "ಪ್ರಕರಣದ ಆಧಾರದ ಮೇಲೆ",
          "survivalRateImprovement": "ಅಸ್ಥಿಮಜ್ಜೆ",
          "ageRestriction": "ಮೂಳೆ ಮಜ್ಜೆ ದಾನವು ರಕ್ತದ ಕ್ಯಾನ್ಸರ್ ಅನ್ನು ಗುಣಪಡಿಸಬಹುದು."
        },
        "bone-marrow": {
          "name": "ಸ್ಟೆಮ್ ಸೆಲ್ ಟ್ರಾನ್ಸ್‌ಪ್ಲಾಂಟ್",
          "description": "ಲ್ಯುಕೇಮಿಯಾಕ್ಕೆ 60-80% ಚಿಕಿತ್ಸೆ ದರ",
          "medicalName": "ಸಾಮಾನ್ಯವಾಗಿ ದಾನಿಗಳಿಗೆ 18-60",
          "survivalRateImprovement": "ಭಾರತದಾದ್ಯಂತ ದಾನಿಗಳ ವಿತರಣೆ",
          "ageRestriction": "ವಿವಿಧ ರಾಜ್ಯಗಳಲ್ಲಿ ದಾನಿಗಳನ್ನು ಹೇಗೆ ವಿತರಿಸಲಾಗಿದೆ ಎಂಬುದನ್ನು ನೋಡಿ. ಗಾಢ ಹಸಿರು ಹೆಚ್ಚು ನೋಂದಾಯಿತ ದಾನಿಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ."
        }
      }
    },
    "map": {
      "title": "ದಾನಿಗಳು",
      "subtitle": "ಪುರಾಣ vs ಸತ್ಯಗಳು",
      "donors": "ಅನೇಕ ತಪ್ಪುಗ್ರಹಿಕೆಗಳು ಅಂಗಾಂಗ ದಾನಿಗಳಾಗಿ ನೋಂದಾಯಿಸುವುದನ್ನು ತಡೆಯುತ್ತದೆ. ಸತ್ಯವನ್ನು ಬಹಿರಂಗಪಡಿಸಲು ಪ್ರತಿ ಕಾರ್ಡ್ ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.",
      "states": {
        "MH": "ಮಹಾರಾಷ್ಟ್ರ",
        "DL": "ದೆಹಲಿ",
        "TN": "ತಮಿಳುನಾಡು",
        "KA": "ಕರ್ನಾಟಕ",
        "GJ": "ಗುಜರಾತ್",
        "KL": "ಕೇರಳ",
        "WB": "ಪಶ್ಚಿಮ ಬಂಗಾಳ",
        "TS": "ತೆಲಂಗಾಣ",
        "UP": "ಉತ್ತರ ಪ್ರದೇಶ",
        "RJ": "ರಾಜಸ್ಥಾನ",
        "AP": "ಆಂಧ್ರಪ್ರದೇಶ",
        "MP": "ಮಧ್ಯಪ್ರದೇಶ",
        "HR": "ಹರಿಯಾಣ",
        "PB": "ಪಂಜಾಬ್",
        "OD": "ಒಡಿಶಾ"
      }
    },
    "myths": {
      "title": "ನೀವು ಭಗ್ನಗೊಳಿಸಿದ್ದೀರಿ",
      "subtitle": "ಎಲ್ಲಾ ಪುರಾಣಗಳು ಭಗ್ನಗೊಂಡಿವೆ!",
      "busted": "ಮಿಥ್ಯ",
      "allBusted": "All myths busted!",
      "of": "ಸತ್ಯ",
      "mythLabel": "ಸತ್ಯವನ್ನು ಬಹಿರಂಗಪಡಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
      "factLabel": "ಮಿಥ್ ಬುಸ್ಟೆಡ್!",
      "clickReveal": "ಜ್ಞಾನವೇ ಶಕ್ತಿ",
      "mythBusted": "ಈಗ ನೀವು ಸತ್ಯಗಳನ್ನು ತಿಳಿದಿದ್ದೀರಿ, ಮುಂದಿನ ಹಂತವನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ ಮತ್ತು ಅಂಗಾಂಗ ದಾನಿಯಾಗಿ ನೋಂದಾಯಿಸಿ. ನಿಮ್ಮ ನಿರ್ಧಾರವು 8 ಜೀವಗಳನ್ನು ಉಳಿಸಬಹುದು.",
      "knowledge": "ದಾನಿಯಾಗಿ ನೋಂದಾಯಿಸಿ",
      "knowledgeSub": "ಅಂಗದಾನದ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ",
      "registerCTA": "ಅಂಗ ದಾನವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ತಿಳುವಳಿಕೆಯುಳ್ಳ ನಿರ್ಧಾರವನ್ನು ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲ ಹೆಜ್ಜೆಯಾಗಿದೆ."
    },
    "learn": {
      "title": "ರಕ್ತದ ಗುಂಪು ಹೊಂದಾಣಿಕೆ ಪರೀಕ್ಷಕ",
      "subtitle": "ಅಂಗಾಂಗ ಮತ್ತು ರಕ್ತದಾನಕ್ಕೆ ಹೊಂದಾಣಿಕೆಯನ್ನು ನೋಡಲು ನಿಮ್ಮ ರಕ್ತದ ಗುಂಪನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
      "bloodChecker": "ದಾನದ ವಿಧಗಳು",
      "bloodSub": "ಜೀವಂತ ದಾನ",
      "types": "ಒಂದು ಮೂತ್ರಪಿಂಡ ಅಥವಾ ನಿಮ್ಮ ಯಕೃತ್ತಿನ ಒಂದು ಭಾಗವನ್ನು ದಾನ ಮಾಡಿ",
      "living": "ಮೂಳೆ ಮಜ್ಜೆ ಮತ್ತು ಕಾಂಡಕೋಶಗಳು",
      "living1": "ದಾನಿಯು ಚೇತರಿಸಿಕೊಂಡ ನಂತರ ಆರೋಗ್ಯಕರ ಜೀವನವನ್ನು ನಡೆಸುತ್ತಾನೆ",
      "living2": "ಮೃತ ದಾನ",
      "living3": "ಮೆದುಳಿನ ಮರಣ ಘೋಷಿಸಿದ ನಂತರ ಸಂಭವಿಸುತ್ತದೆ",
      "deceased": "ಹೃದಯ, ಶ್ವಾಸಕೋಶ, ಯಕೃತ್ತು, ಮೂತ್ರಪಿಂಡಗಳು, ಮೂತ್ರಪಿಂಡಗಳು, 8 ಕಿಡ್ನಿಗಳು, ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ಜೀವನ",
      "deceased1": "ಹಂತ-ಹಂತದ ಪ್ರಕ್ರಿಯೆ",
      "deceased2": "ಯಾವ ಅಂಗಗಳನ್ನು ದಾನ ಮಾಡಬಹುದು?",
      "deceased3": "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
      "process": "ವೈದ್ಯಕೀಯ ಹೆಸರು",
      "organQuestion": "ಸಹಾಯ ಮಾಡಬಹುದು",
      "faqTitle": "ಬದುಕುಳಿಯುವ ದರ",
      "medName": "ಒಬ್ಬ ದಾನಿಯು 8 ಜೀವಗಳನ್ನು ಉಳಿಸಬಹುದು. ಭಾರತದಲ್ಲಿ ಅಂಗಾಂಗ ದಾನದ ಬಗ್ಗೆ ಜಾಗೃತಿ ಮೂಡಿಸಲು ನಮ್ಮ ಮಿಷನ್‌ಗೆ ಸೇರಿಕೊಳ್ಳಿ.",
      "canHelp": "ಟೋಲ್ ಫ್ರೀ",
      "survival": "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು"
    },
    "footer": {
      "tagline": "ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ",
      "tollFree": "ನವೀಕೃತವಾಗಿರಿ",
      "quickLinks": "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳು ಮತ್ತು ಯಶಸ್ಸಿನ ಕಥೆಗಳಿಗೆ ಚಂದಾದಾರರಾಗಿ.",
      "followUs": "ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ",
      "stayUpdated": "ಚಂದಾದಾರರಾಗಿ",
      "newsletterSub": "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
      "emailPlaceholder": "Enter your email",
      "subscribe": "ಭರವಸೆಯ ಧ್ವನಿಗಳೊಂದಿಗೆ",
      "rights": "ದಾನಿಗಳು, ಸ್ವೀಕರಿಸುವವರು ಮತ್ತು ಕುಟುಂಬಗಳಿಂದ ನೈಜ ಕಥೆಗಳು.",
      "madeWith": "ಪ್ರತಿಯೊಂದು ಅಂಗವೂ ಉಡುಗೊರೆ"
    },
    "testimonials": {
      "title": "ನೀವು ಏನನ್ನು ದಾನ ಮಾಡಬಹುದು ಮತ್ತು ಪ್ರತಿ ಅಂಗವು ಎಷ್ಟು ಜೀವಗಳನ್ನು ಉಳಿಸಬಹುದು ಎಂಬುದನ್ನು ಅನ್ವೇಷಿಸಲು ಸುಳಿದಾಡಿ.",
      "subtitle": "ಇನ್ನಷ್ಟು ತಿಳಿಯಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
      "list": {
        "1": {
          "quote": "ನನ್ನ ಪತಿ ಪಾಸಾದಾಗ, ದೇಣಿಗೆ ನೀಡಲು ಅವರ ಆಸೆಯನ್ನು ಗೌರವಿಸಿದೆವು. ಆ ದಿನ ಅವರು 5 ಜೀವಗಳನ್ನು ಉಳಿಸಿದರು. ಅವರ ಪರಂಪರೆ ಜೀವಂತವಾಗಿದೆ.",
          "name": "ಪ್ರಿಯಾ ಶರ್ಮಾ",
          "city": "ಮುಂಬೈ",
          "role": "ದಾನಿ ಕುಟುಂಬ",
          "organ": "ಬಹು ಅಂಗಗಳು"
        },
        "2": {
          "quote": "ನನ್ನ ಹೃದಯ ಕಸಿ ನಂತರ, ನಾನು ನನ್ನ ಮಗಳ ಮದುವೆಯನ್ನು ನೋಡಿದೆ. ಅಜ್ಞಾತ ನಾಯಕನಿಗೆ ನಾನು ನನ್ನ ಎರಡನೇ ಜೀವನಕ್ಕೆ ಋಣಿಯಾಗಿದ್ದೇನೆ.",
          "name": "ರಾಜೇಶ್ ಕುಮಾರ್",
          "city": "ದೆಹಲಿ",
          "role": "ಸ್ವೀಕರಿಸಿದವರು",
          "organ": "ಹೃದಯ"
        },
        "3": {
          "quote": "ಜೀವಂತ ಮೂತ್ರಪಿಂಡ ದಾನಿಯಾಗಿ, ನಾನು ನನ್ನ ಸಹೋದರನಿಗೆ ಜೀವನದ ಉಡುಗೊರೆಯನ್ನು ನೀಡಿದ್ದೇನೆ. ನಾವಿಬ್ಬರೂ ಈಗ ಆರೋಗ್ಯಕರ, ಸಾಮಾನ್ಯ ಜೀವನವನ್ನು ನಡೆಸುತ್ತಿದ್ದೇವೆ.",
          "name": "ಅನನ್ಯಾ ಪಟೇಲ್",
          "city": "ಅಹಮದಾಬಾದ್",
          "role": "ಜೀವಂತ ದಾನಿ",
          "organ": "ಕಿಡ್ನಿ"
        }
      }
    },
    "bodyDiagram": {
      "title": "Every Organ Is a Gift",
      "subtitle": "ಜೀವ ಉಳಿಸುತ್ತದೆ",
      "clickToLearn": "ಜೀವ",
      "saves": "ಉಳಿಸಬಹುದು",
      "lives": "ಜೀವ ಉಳಿಸಬಹುದು",
      "life": "ಅಂಗದಾನ ಜಾಗೃತಿ ವೇದಿಕೆ",
      "canSave": "Can save"
    },
    "loader": {
      "title": "Save a Life",
      "subtitle": "Organ Donation Awareness Platform"
    }
  },
  "ml": {
    "nav": {
      "home": "ഹോം",
      "learn": "പഠിക്കുക",
      "myths": "കെട്ടുകഥകൾ",
      "register": "രജിസ്റ്റർ",
      "stories": "കഥകൾ",
      "campaigns": "കാമ്പെയ്‌നുകൾ",
      "login": "ലോഗിൻ",
      "donateNow": "ഇപ്പോൾ സംഭാവന ചെയ്യുക"
    },
    "hero": {
      "title": "എന്നേക്കും നിലനിൽക്കുന്ന സമ്മാനം നൽകുക",
      "subtitle": "ഒരു ദാതാവിന് 8 ജീവൻ വരെ രക്ഷിക്കാനാകും. ഇന്നത്തെ നിങ്ങളുടെ തീരുമാനത്തിന് ആർക്കെങ്കിലും നാളെ നൽകാൻ കഴിയും.",
      "cta": "ഒരു ദാതാവാകൂ",
      "learnHow": "ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നുവെന്ന് അറിയുക",
      "joinDonors": "ഇന്ത്യയിലുടനീളം രജിസ്റ്റർ ചെയ്ത 5,00,000+ ദാതാക്കളിൽ ചേരുക",
      "pledgedToday": "ആളുകൾ ഇന്ന് പ്രതിജ്ഞയെടുത്തു ട്രാൻസ്പ്ലാൻറിനായി കാത്തിരിക്കുന്ന രോഗികൾ",
      "scroll": "പര്യവേക്ഷണം ചെയ്യാൻ സ്ക്രോൾ ചെയ്യുക"
    },
    "common": {
      "learnMore": "നിങ്ങൾക്ക് ദാനം ചെയ്യാൻ കഴിയുന്ന അവയവങ്ങൾ",
      "submit": "ഓരോ അവയവത്തിനും ജീവൻ രക്ഷിക്കാനോ രൂപാന്തരപ്പെടുത്താനോ കഴിവുണ്ട്. ഓരോന്നിനെയും കുറിച്ച് പഠിക്കുക.",
      "cancel": "രോഗിയെ",
      "close": "സഹായിക്കുന്നു"
    },
    "stats": {
      "registered": "രോഗികളെ",
      "livesSaved": "ഹൃദയം",
      "organsDonatable": "ദാനം ചെയ്ത ഹൃദയത്തിന് ജീവിതത്തിൽ രണ്ടാമതൊരു അവസരം നൽകാൻ കഴിയും.",
      "awaitingTransplant": "കാർഡിയാക് ട്രാൻസ്പ്ലാൻറ്"
    },
    "organs": {
      "title": "85% 1 വർഷത്തെ അതിജീവന നിരക്ക്",
      "subtitle": "പ്രത്യേക പ്രായപരിധിയില്ല",
      "helps": "ശ്വാസകോശം",
      "patient": "ശ്വാസകോശ ദാനം വിട്ടുമാറാത്ത ശ്വാസകോശ സംബന്ധമായ രോഗങ്ങളുള്ള രോഗികളെ സഹായിക്കും.",
      "patients": "പൾമണറി ട്രാൻസ്പ്ലാൻറ്",
      "list": {
        "heart": {
          "name": "80% 1-വർഷത്തെ അതിജീവന നിരക്ക്",
          "description": "സാധാരണയായി 65 വയസ്സിന് താഴെയുള്ള",
          "medicalName": "കരൾ",
          "survivalRateImprovement": "രണ്ട് ജീവൻ രക്ഷിക്കാൻ കരൾ വിഭജിക്കാം - ഒരു മുതിർന്നയാളും ഒരു കുട്ടിയും.",
          "ageRestriction": "ഹെപ്പാറ്റിക് ട്രാൻസ്പ്ലാൻറ്"
        },
        "lungs": {
          "name": "90% 1-വർഷത്തെ അതിജീവന നിരക്ക്",
          "description": "പ്രത്യേക പ്രായപരിധിയില്ല",
          "medicalName": "വൃക്കകൾ",
          "survivalRateImprovement": "ഏറ്റവും സാധാരണയായി മാറ്റിവയ്ക്കപ്പെടുന്ന അവയവങ്ങളാണ് വൃക്കകൾ.",
          "ageRestriction": "വൃക്ക മാറ്റിവയ്ക്കൽ"
        },
        "liver": {
          "name": "95% 1-വർഷത്തെ അതിജീവന നിരക്ക്",
          "description": "പ്രത്യേക പ്രായപരിധിയില്ല",
          "medicalName": "കണ്ണുകൾ",
          "survivalRateImprovement": "കോർണിയ മാറ്റിവയ്ക്കൽ അന്ധർക്ക് കാഴ്ച വീണ്ടെടുക്കാൻ കഴിയും.",
          "ageRestriction": "കോർണിയൽ ട്രാൻസ്പ്ലാൻറ്"
        },
        "kidneys": {
          "name": "90% ഗ്രാഫ്റ്റ് അതിജീവന നിരക്ക്",
          "description": "പ്രായ നിയന്ത്രണമില്ല",
          "medicalName": "ചർമ്മം",
          "survivalRateImprovement": "ത്വക്ക് ദാനം പൊള്ളലേറ്റ ഇരകളെ സുഖപ്പെടുത്താൻ സഹായിക്കുന്നു.",
          "ageRestriction": "സ്കിൻ അലോഗ്രാഫ്റ്റ്"
        },
        "eyes": {
          "name": "കഠിനമായ പൊള്ളലുകൾക്കുള്ള ജീവൻ രക്ഷിക്കൽ",
          "description": "പ്രത്യേക പ്രായപരിധിയില്ല",
          "medicalName": "പാൻക്രിയാസ്",
          "survivalRateImprovement": "പാൻക്രിയാസ് ദാനം സ്വീകർത്താക്കളുടെ പ്രമേഹത്തെ സുഖപ്പെടുത്തും.",
          "ageRestriction": "പാൻക്രിയാറ്റിക് ട്രാൻസ്പ്ലാൻറ്"
        },
        "skin": {
          "name": "80% 1-വർഷത്തെ അതിജീവന നിരക്ക്",
          "description": "സാധാരണയായി 50 വയസ്സിന് താഴെയുള്ള",
          "medicalName": "കുടൽ",
          "survivalRateImprovement": "കുടൽ മാറ്റിവയ്ക്കൽ കുടൽ തകരാറുള്ള രോഗികളെ സഹായിക്കുന്നു.",
          "ageRestriction": "കുടൽ മാറ്റിവയ്ക്കൽ"
        },
        "pancreas": {
          "name": "70% 1-വർഷത്തെ അതിജീവന നിരക്ക്",
          "description": "കേസ് അടിസ്ഥാനത്തിൽ",
          "medicalName": "അസ്ഥിമജ്ജ",
          "survivalRateImprovement": "അസ്ഥിമജ്ജ ദാനം രക്താർബുദത്തെ സുഖപ്പെടുത്തും.",
          "ageRestriction": "സ്റ്റെം സെൽ ട്രാൻസ്പ്ലാൻറ്"
        },
        "intestines": {
          "name": "രക്താർബുദത്തിനുള്ള 60-80% രോഗശമന നിരക്ക്",
          "description": "ദാതാക്കൾക്ക് സാധാരണയായി 18-60 ഇരുണ്ട പച്ച കൂടുതൽ രജിസ്റ്റർ ചെയ്ത ദാതാക്കളെ സൂചിപ്പിക്കുന്നു.",
          "medicalName": "ദാതാക്കൾ",
          "survivalRateImprovement": "മിഥ്യകളും വസ്തുതകളും",
          "ageRestriction": "പല തെറ്റിദ്ധാരണകളും അവയവദാതാക്കളായി രജിസ്റ്റർ ചെയ്യുന്നതിൽ നിന്ന് ആളുകളെ തടയുന്നു. സത്യം വെളിപ്പെടുത്താൻ ഓരോ കാർഡും ക്ലിക്ക് ചെയ്യുക."
        },
        "bone-marrow": {
          "name": "നിങ്ങൾ തകർത്തു",
          "description": "എല്ലാ മിഥ്യകളും തകർത്തു!",
          "medicalName": "മിഥ്യയുടെ",
          "survivalRateImprovement": "60-80% cure rate for leukemia",
          "ageRestriction": "വസ്തുത"
        }
      }
    },
    "map": {
      "title": "വസ്തുത വെളിപ്പെടുത്താൻ ക്ലിക്ക് ചെയ്യുക",
      "subtitle": "മിത്ത് തകർത്തു!",
      "donors": "അറിവ് ശക്തിയാണ്",
      "states": {
        "MH": "മഹാരാഷ്ട്ര",
        "DL": "ഡൽഹി",
        "TN": "തമിഴ്നാട്",
        "KA": "കർണാടക",
        "GJ": "ഗുജറാത്ത്",
        "KL": "കേരളം",
        "WB": "പശ്ചിമ ബംഗാൾ",
        "TS": "തെലങ്കാന",
        "UP": "ഉത്തർപ്രദേശ്",
        "RJ": "രാജസ്ഥാൻ",
        "AP": "ആന്ധ്രാപ്രദേശ്",
        "MP": "മധ്യപ്രദേശ്",
        "HR": "ഹരിയാന",
        "PB": "പഞ്ചാബ്",
        "OD": "ഒഡീഷ"
      }
    },
    "myths": {
      "title": "ഇപ്പോൾ നിങ്ങൾക്ക് വസ്തുതകൾ അറിയാം, അടുത്ത ഘട്ടം സ്വീകരിച്ച് ഒരു അവയവ ദാതാവായി രജിസ്റ്റർ ചെയ്യുക. നിങ്ങളുടെ തീരുമാനത്തിന് 8 ജീവൻ വരെ രക്ഷിക്കാനാകും.",
      "subtitle": "ഒരു ദാതാവായി രജിസ്റ്റർ ചെയ്യുക",
      "busted": "അവയവദാനത്തെക്കുറിച്ച് അറിയുക",
      "allBusted": "അവയവദാനം മനസ്സിലാക്കുക എന്നത് അറിവോടെയുള്ള തീരുമാനമെടുക്കുന്നതിനുള്ള ആദ്യപടിയാണ്.",
      "of": "ബ്ലഡ് ഗ്രൂപ്പ് കോംപാറ്റിബിലിറ്റി ചെക്കർ",
      "mythLabel": "അവയവത്തിനും രക്തദാനത്തിനും അനുയോജ്യത കാണുന്നതിന് നിങ്ങളുടെ രക്തഗ്രൂപ്പ് തിരഞ്ഞെടുക്കുക.",
      "factLabel": "ദാനത്തിൻ്റെ തരങ്ങൾ",
      "clickReveal": "ജീവനുള്ള ദാനം",
      "mythBusted": "ഒരു വൃക്കയോ കരളിൻ്റെ ഒരു ഭാഗമോ ദാനം ചെയ്യുക",
      "knowledge": "അസ്ഥിമജ്ജയും മൂലകോശങ്ങളും",
      "knowledgeSub": "ദാതാവ് സുഖം പ്രാപിച്ചതിന് ശേഷം ആരോഗ്യകരമായ ജീവിതം നയിക്കുന്നു",
      "registerCTA": "മരിച്ചയാൾ ദാനം"
    },
    "learn": {
      "title": "മസ്തിഷ്ക മരണം പ്രഖ്യാപിക്കപ്പെട്ടതിന് ശേഷം സംഭവിക്കുന്നു",
      "subtitle": "ഹൃദയം, ശ്വാസകോശം, കരൾ, വൃക്കകൾ, വൃക്കകൾ, വൃക്കകൾ, 8 വരെ സംരക്ഷിക്കാൻ കഴിയും. ജീവിതങ്ങൾ",
      "bloodChecker": "ഘട്ടം ഘട്ടമായുള്ള പ്രക്രിയ",
      "bloodSub": "ഏതൊക്കെ അവയവങ്ങൾ ദാനം ചെയ്യാം?",
      "types": "പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ",
      "living": "മെഡിക്കൽ നാമം",
      "living1": "സഹായിക്കും",
      "living2": "അതിജീവന നിരക്ക്",
      "living3": "ഒരു ദാതാവിന് 8 ജീവൻ വരെ രക്ഷിക്കാനാകും. ഇന്ത്യയിൽ അവയവദാനത്തെക്കുറിച്ച് അവബോധം സൃഷ്ടിക്കുന്നതിനുള്ള ഞങ്ങളുടെ ദൗത്യത്തിൽ ചേരുക.",
      "deceased": "ടോൾ ഫ്രീ",
      "deceased1": "ദ്രുത ലിങ്കുകൾ",
      "deceased2": "ഞങ്ങളെ പിന്തുടരുക",
      "deceased3": "അപ്‌ഡേറ്റായി തുടരുക",
      "process": "ഏറ്റവും പുതിയ അപ്‌ഡേറ്റുകൾക്കും വിജയഗാഥകൾക്കും സബ്‌സ്‌ക്രൈബ് ചെയ്യുക.",
      "organQuestion": "നിങ്ങളുടെ ഇമെയിൽ നൽകുക",
      "faqTitle": "സബ്സ്ക്രൈബ് ചെയ്യുക",
      "medName": "എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
      "canHelp": "Can Help",
      "survival": "പ്രത്യാശയുടെ ശബ്ദങ്ങൾ കൊണ്ട് നിർമ്മിച്ചത്"
    },
    "footer": {
      "tagline": "ദാതാക്കളിൽ നിന്നും സ്വീകർത്താക്കളിൽ നിന്നും കുടുംബങ്ങളിൽ നിന്നുമുള്ള യഥാർത്ഥ കഥകൾ.",
      "tollFree": "ഓരോ അവയവവും ഒരു സമ്മാനമാണ്",
      "quickLinks": "നിങ്ങൾക്ക് എന്ത് സംഭാവന നൽകാമെന്നും ഓരോ അവയവത്തിനും എത്ര ജീവൻ രക്ഷിക്കാനാകുമെന്നും പര്യവേക്ഷണം ചെയ്യാൻ ഹോവർ ചെയ്യുക.",
      "followUs": "കൂടുതലറിയാൻ ക്ലിക്ക് ചെയ്യുക",
      "stayUpdated": "Stay Updated",
      "newsletterSub": "ജീവൻ രക്ഷിക്കുന്നു",
      "emailPlaceholder": "ജീവൻ",
      "subscribe": "രക്ഷിക്കാൻ കഴിയും",
      "rights": "ഒരു ജീവൻ രക്ഷിക്കാൻ",
      "madeWith": "അവയവദാന ബോധവൽക്കരണ പ്ലാറ്റ്ഫോം"
    },
    "testimonials": {
      "title": "Voices of Hope",
      "subtitle": "Real stories from donors, recipients, and families.",
      "list": {
        "1": {
          "quote": "വിജയിച്ചപ്പോൾ, എൻ്റെ ഭർത്താവ് സംഭാവന നൽകണമെന്ന അദ്ദേഹത്തിൻ്റെ ആഗ്രഹത്തെ ഞങ്ങൾ മാനിച്ചു. അന്ന് അവൻ 5 ജീവൻ രക്ഷിച്ചു. അദ്ദേഹത്തിൻ്റെ പാരമ്പര്യം നിലനിൽക്കുന്നു.",
          "name": "പ്രിയ ശർമ്മ",
          "city": "മുംബൈ",
          "role": "ദാതാക്കളുടെ കുടുംബം",
          "organ": "ഒന്നിലധികം അവയവങ്ങൾ"
        },
        "2": {
          "quote": "എൻ്റെ ഹൃദയം മാറ്റിവയ്ക്കലിനുശേഷം, എനിക്ക് എൻ്റെ മകളുടെ കല്യാണം കാണാൻ കഴിഞ്ഞു. അജ്ഞാതനായ ഒരു നായകനോട് ഞാൻ എൻ്റെ രണ്ടാം ജീവിതത്തിന് കടപ്പെട്ടിരിക്കുന്നു.",
          "name": "രാജേഷ് കുമാർ",
          "city": "ഡൽഹി",
          "role": "സ്വീകർത്താവ്",
          "organ": "ഹൃദയം"
        },
        "3": {
          "quote": "ജീവിച്ചിരിക്കുന്ന വൃക്ക ദാതാവെന്ന നിലയിൽ ഞാൻ എൻ്റെ സഹോദരന് ജീവൻ്റെ സമ്മാനം നൽകി. ഞങ്ങൾ രണ്ടുപേരും ഇപ്പോൾ ആരോഗ്യത്തോടെ സാധാരണ ജീവിതം നയിക്കുന്നു.",
          "name": "അനന്യ പട്ടേൽ",
          "city": "അഹമ്മദാബാദ്",
          "role": "ജീവിക്കുന്ന ദാതാവ്",
          "organ": "വൃക്ക"
        }
      }
    },
    "bodyDiagram": {
      "title": "Every Organ Is a Gift",
      "subtitle": "Hover to explore what you can donate and how many lives each organ can save.",
      "clickToLearn": "Click to learn more",
      "saves": "Saves",
      "lives": "lives",
      "life": "life",
      "canSave": "Can save"
    },
    "loader": {
      "title": "Save a Life",
      "subtitle": "Organ Donation Awareness Platform"
    }
  },
  "pa": {
    "nav": {
      "home": "ਘਰ",
      "learn": "ਜਾਣੋ",
      "myths": "ਮਿੱਥਾਂ",
      "register": "ਰਜਿਸਟਰ ਕਰੋ",
      "stories": "ਕਹਾਣੀਆਂ",
      "campaigns": "ਮੁਹਿੰਮਾਂ",
      "login": "ਲੌਗਇਨ ਕਰੋ",
      "donateNow": "ਹੁਣੇ ਦਾਨ ਕਰੋ"
    },
    "hero": {
      "title": "ਉਹ ਤੋਹਫ਼ਾ ਦਿਓ ਜੋ ਹਮੇਸ਼ਾ ਲਈ ਰਹਿੰਦਾ ਹੈ",
      "subtitle": "ਇੱਕ ਦਾਨੀ 8 ਜਾਨਾਂ ਬਚਾ ਸਕਦਾ ਹੈ। ਤੁਹਾਡਾ ਅੱਜ ਦਾ ਫੈਸਲਾ ਕੱਲ ਨੂੰ ਕਿਸੇ ਨੂੰ ਦੇ ਸਕਦਾ ਹੈ।",
      "cta": "ਇੱਕ ਦਾਨੀ ਬਣੋ",
      "learnHow": "ਜਾਣੋ ਕਿ ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
      "joinDonors": "ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ 5,00,000+ ਰਜਿਸਟਰਡ ਦਾਨੀਆਂ ਨਾਲ ਜੁੜੋ",
      "pledgedToday": "ਲੋਕਾਂ ਨੇ ਅੱਜ ਵਾਅਦਾ ਕੀਤਾ ਹੈ",
      "scroll": "ਖੋਜ ਕਰਨ ਲਈ ਸਕ੍ਰੋਲ ਕਰੋ"
    },
    "common": {
      "learnMore": "ਹੋਰ ਜਾਣੋ",
      "submit": "ਜਮ੍ਹਾ ਕਰੋ",
      "cancel": "ਰੱਦ ਕਰੋ",
      "close": "ਬੰਦ ਕਰੋ"
    },
    "stats": {
      "registered": "ਰਜਿਸਟਰਡ ਦਾਨੀਆਂ",
      "livesSaved": "ਜੀਵਨ ਇੱਕ ਦਾਨੀ ਜਾਂ ਦਾਨ ਕਰਨ ਯੋਗ",
      "organsDonatable": "ਬਚਾ ਸਕਦਾ ਹੈ ਜਾਂ ਦਾਨ ਕਰ ਸਕਦਾ ਹੈ। ਮਰੀਜ਼ ਟਰਾਂਸਪਲਾਂਟ ਦੀ ਉਡੀਕ ਕਰ ਰਹੇ ਹਨ",
      "awaitingTransplant": "ਅੰਗ ਜੋ ਤੁਸੀਂ ਦਾਨ ਕਰ ਸਕਦੇ ਹੋ"
    },
    "organs": {
      "title": "ਹਰੇਕ ਅੰਗ ਵਿੱਚ ਜੀਵਨ ਬਚਾਉਣ ਜਾਂ ਬਦਲਣ ਦੀ ਸਮਰੱਥਾ ਹੁੰਦੀ ਹੈ। ਹਰ ਇੱਕ ਬਾਰੇ ਜਾਣੋ।",
      "subtitle": "ਮਦਦ ਕਰਦਾ ਹੈ",
      "helps": "ਮਰੀਜ਼",
      "patient": "ਮਰੀਜ਼ਾਂ",
      "patients": "ਦਿਲ",
      "list": {
        "heart": {
          "name": "ਇੱਕ ਦਾਨ ਕੀਤਾ ਦਿਲ ਕਿਸੇ ਨੂੰ ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਦੂਜਾ ਮੌਕਾ ਦੇ ਸਕਦਾ ਹੈ।",
          "description": "ਕਾਰਡਿਅਕ ਟ੍ਰਾਂਸਪਲਾਂਟ",
          "medicalName": "85% 1-ਸਾਲ ਦੀ ਬਚਣ ਦੀ ਦਰ",
          "survivalRateImprovement": "ਕੋਈ ਖਾਸ ਉਮਰ ਸੀਮਾ ਨਹੀਂ",
          "ageRestriction": "ਫੇਫੜੇ"
        },
        "lungs": {
          "name": "ਫੇਫੜਿਆਂ ਦਾ ਦਾਨ ਗੰਭੀਰ ਸਾਹ ਦੀਆਂ ਬਿਮਾਰੀਆਂ ਵਾਲੇ ਮਰੀਜ਼ਾਂ ਦੀ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ।",
          "description": "ਪਲਮਨਰੀ ਟ੍ਰਾਂਸਪਲਾਂਟ",
          "medicalName": "80% 1-ਸਾਲ ਦੀ ਬਚਣ ਦੀ ਦਰ",
          "survivalRateImprovement": "ਆਮ ਤੌਰ 'ਤੇ 65 ਤੋਂ ਘੱਟ",
          "ageRestriction": "ਜਿਗਰ"
        },
        "liver": {
          "name": "ਦੋ ਜਾਨਾਂ ਬਚਾਉਣ ਲਈ ਲਿਵਰ ਨੂੰ ਵੰਡਿਆ ਜਾ ਸਕਦਾ ਹੈ - ਇੱਕ ਬਾਲਗ ਅਤੇ ਇੱਕ ਬੱਚਾ।",
          "description": "ਹੈਪੇਟਿਕ ਟ੍ਰਾਂਸਪਲਾਂਟ",
          "medicalName": "90% 1-ਸਾਲ ਦੀ ਬਚਣ ਦੀ ਦਰ",
          "survivalRateImprovement": "ਕੋਈ ਖਾਸ ਉਮਰ ਸੀਮਾ ਨਹੀਂ",
          "ageRestriction": "ਗੁਰਦੇ"
        },
        "kidneys": {
          "name": "ਗੁਰਦੇ ਸਭ ਤੋਂ ਵੱਧ ਟ੍ਰਾਂਸਪਲਾਂਟ ਕੀਤੇ ਅੰਗ ਹਨ।",
          "description": "ਰੇਨਲ ਟ੍ਰਾਂਸਪਲਾਂਟ",
          "medicalName": "95% 1-ਸਾਲ ਦੀ ਬਚਣ ਦੀ ਦਰ",
          "survivalRateImprovement": "ਕੋਈ ਖਾਸ ਉਮਰ ਸੀਮਾ ਨਹੀਂ",
          "ageRestriction": "ਅੱਖਾਂ"
        },
        "eyes": {
          "name": "ਕੋਰਨੀਅਲ ਟ੍ਰਾਂਸਪਲਾਂਟ ਅੰਨ੍ਹੇ ਲੋਕਾਂ ਦੀ ਨਜ਼ਰ ਨੂੰ ਬਹਾਲ ਕਰ ਸਕਦੇ ਹਨ।",
          "description": "ਕੋਰਨੀਅਲ ਟ੍ਰਾਂਸਪਲਾਂਟ",
          "medicalName": "90% ਗ੍ਰਾਫਟ ਸਰਵਾਈਵਲ ਰੇਟ",
          "survivalRateImprovement": "ਉਮਰ ਦੀ ਕੋਈ ਪਾਬੰਦੀ ਨਹੀਂ",
          "ageRestriction": "ਚਮੜੀ"
        },
        "skin": {
          "name": "ਚਮੜੀ ਦਾਨ ਜਲਣ ਪੀੜਤਾਂ ਨੂੰ ਠੀਕ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।",
          "description": "ਸਕਿਨ ਐਲੋਗਰਾਫਟ",
          "medicalName": "ਗੰਭੀਰ ਜਲਣ ਲਈ ਜੀਵਨ-ਰੱਖਿਅਕ",
          "survivalRateImprovement": "ਕੋਈ ਖਾਸ ਉਮਰ ਸੀਮਾ ਨਹੀਂ",
          "ageRestriction": "ਪੈਨਕ੍ਰੀਅਸ"
        },
        "pancreas": {
          "name": "ਪੈਨਕ੍ਰੀਅਸ ਦਾਨ ਪ੍ਰਾਪਤਕਰਤਾਵਾਂ ਵਿੱਚ ਸ਼ੂਗਰ ਦਾ ਇਲਾਜ ਕਰ ਸਕਦਾ ਹੈ।",
          "description": "ਪੈਨਕ੍ਰੀਆਟਿਕ ਟ੍ਰਾਂਸਪਲਾਂਟ",
          "medicalName": "80% 1-ਸਾਲ ਦੀ ਬਚਣ ਦੀ ਦਰ",
          "survivalRateImprovement": "ਆਮ ਤੌਰ 'ਤੇ 50 ਤੋਂ ਘੱਟ",
          "ageRestriction": "ਅੰਤੜੀਆਂ"
        },
        "intestines": {
          "name": "ਅੰਤੜੀਆਂ ਦੇ ਟ੍ਰਾਂਸਪਲਾਂਟ ਆਂਦਰਾਂ ਦੀ ਅਸਫਲਤਾ ਵਾਲੇ ਮਰੀਜ਼ਾਂ ਦੀ ਮਦਦ ਕਰਦੇ ਹਨ।",
          "description": "ਆਂਦਰਾਂ ਦਾ ਟਰਾਂਸਪਲਾਂਟ",
          "medicalName": "70% 1-ਸਾਲ ਦੀ ਬਚਣ ਦੀ ਦਰ",
          "survivalRateImprovement": "ਕੇਸ ਦੇ ਆਧਾਰ 'ਤੇ ਕੇਸ",
          "ageRestriction": "ਬੋਨ ਮੈਰੋ"
        },
        "bone-marrow": {
          "name": "ਬੋਨ ਮੈਰੋ ਦਾਨ ਖੂਨ ਦੇ ਕੈਂਸਰ ਦਾ ਇਲਾਜ ਕਰ ਸਕਦਾ ਹੈ।",
          "description": "ਸਟੈਮ ਸੈੱਲ ਟ੍ਰਾਂਸਪਲਾਂਟ",
          "medicalName": "ਲੂਕੇਮੀਆ ਲਈ 60-80% ਇਲਾਜ ਦਰ",
          "survivalRateImprovement": "ਆਮ ਤੌਰ 'ਤੇ ਦਾਨੀਆਂ ਲਈ 18-60",
          "ageRestriction": "ਭਾਰਤ ਭਰ ਵਿੱਚ ਦਾਨੀਆਂ ਦੀ ਵੰਡ"
        }
      }
    },
    "map": {
      "title": "ਦੇਖੋ ਕਿ ਵੱਖ-ਵੱਖ ਰਾਜਾਂ ਵਿੱਚ ਦਾਨੀਆਂ ਨੂੰ ਕਿਵੇਂ ਵੰਡਿਆ ਜਾਂਦਾ ਹੈ। ਗੂੜਾ ਹਰਾ ਵਧੇਰੇ ਰਜਿਸਟਰਡ ਦਾਨੀਆਂ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।",
      "subtitle": "ਦਾਨੀ",
      "donors": "ਮਿੱਥ ਬਨਾਮ ਤੱਥ",
      "states": {
        "MH": "ਮਹਾਰਾਸ਼ਟਰ",
        "DL": "ਦਿੱਲੀ",
        "TN": "ਤਾਮਿਲਨਾਡੂ",
        "KA": "ਕਰਨਾਟਕ",
        "GJ": "ਗੁਜਰਾਤ",
        "KL": "ਕੇਰਲਾ",
        "WB": "ਪੱਛਮੀ ਬੰਗਾਲ",
        "TS": "ਤੇਲੰਗਾਨਾ",
        "UP": "ਉੱਤਰ ਪ੍ਰਦੇਸ਼",
        "RJ": "ਰਾਜਸਥਾਨ",
        "AP": "ਆਂਧਰਾ ਪ੍ਰਦੇਸ਼",
        "MP": "ਮੱਧ ਪ੍ਰਦੇਸ਼",
        "HR": "ਹਰਿਆਣਾ",
        "PB": "ਪੰਜਾਬ",
        "OD": "ਜਦੋਂ ਮੇਰਾ ਪਤੀ ਪਾਸ ਹੋਇਆ, ਓਡੀਸ਼ਾ ਦਾ ਦਾਨ"
      }
    },
    "myths": {
      "title": "ਬਹੁਤ ਸਾਰੀਆਂ ਗਲਤ ਧਾਰਨਾਵਾਂ ਲੋਕਾਂ ਨੂੰ ਅੰਗ ਦਾਨੀ ਵਜੋਂ ਰਜਿਸਟਰ ਕਰਨ ਤੋਂ ਰੋਕਦੀਆਂ ਹਨ। ਸੱਚਾਈ ਨੂੰ ਪ੍ਰਗਟ ਕਰਨ ਲਈ ਹਰੇਕ ਕਾਰਡ 'ਤੇ ਕਲਿੱਕ ਕਰੋ।",
      "subtitle": "ਤੂੰ ਪਰਦਾਫਾਸ਼ ਕੀਤਾ",
      "busted": "ਸਭ ਮਿੱਥਾਂ ਦਾ ਪਰਦਾਫਾਸ਼ !",
      "allBusted": "of",
      "of": "MYTH",
      "mythLabel": "FACT",
      "factLabel": "ਤੱਥਾਂ ਦਾ ਖੁਲਾਸਾ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ",
      "clickReveal": "ਮਿੱਥ ਦਾ ਪਰਦਾਫਾਸ਼!",
      "mythBusted": "ਗਿਆਨ ਸ਼ਕਤੀ ਹੈ",
      "knowledge": "ਹੁਣ ਜਦੋਂ ਤੁਸੀਂ ਤੱਥਾਂ ਨੂੰ ਜਾਣਦੇ ਹੋ, ਅਗਲਾ ਕਦਮ ਚੁੱਕੋ ਅਤੇ ਇੱਕ ਅੰਗ ਦਾਨੀ ਵਜੋਂ ਰਜਿਸਟਰ ਕਰੋ। ਤੁਹਾਡਾ ਫੈਸਲਾ 8 ਤੱਕ ਜਾਨਾਂ ਬਚਾ ਸਕਦਾ ਹੈ।",
      "knowledgeSub": "ਇੱਕ ਦਾਨੀ ਵਜੋਂ ਰਜਿਸਟਰ ਕਰੋ",
      "registerCTA": "ਅੰਗ ਦਾਨ ਬਾਰੇ ਜਾਣੋ"
    },
    "learn": {
      "title": "ਅੰਗ ਦਾਨ ਨੂੰ ਸਮਝਣਾ ਇੱਕ ਸੂਚਿਤ ਫੈਸਲਾ ਲੈਣ ਵੱਲ ਪਹਿਲਾ ਕਦਮ ਹੈ।",
      "subtitle": "ਬਲੱਡ ਗਰੁੱਪ ਅਨੁਕੂਲਤਾ ਜਾਂਚਕਰਤਾ",
      "bloodChecker": "ਅੰਗ ਅਤੇ ਖੂਨ ਦਾਨ ਲਈ ਅਨੁਕੂਲਤਾ ਦੇਖਣ ਲਈ ਆਪਣਾ ਬਲੱਡ ਗਰੁੱਪ ਚੁਣੋ।",
      "bloodSub": "ਦਾਨ ਦੀਆਂ ਕਿਸਮਾਂ",
      "types": "ਜੀਵਤ ਦਾਨ",
      "living": "ਇੱਕ ਗੁਰਦਾ ਜਾਂ ਆਪਣੇ ਜਿਗਰ ਦਾ ਇੱਕ ਹਿੱਸਾ ਦਾਨ ਕਰੋ",
      "living1": "ਬੋਨ ਮੈਰੋ ਅਤੇ ਸਟੈਮ ਸੈੱਲ",
      "living2": "ਦਾਨੀ ਠੀਕ ਹੋਣ ਤੋਂ ਬਾਅਦ ਇੱਕ ਸਿਹਤਮੰਦ ਜੀਵਨ ਬਤੀਤ ਕਰਦਾ ਹੈ",
      "living3": "ਮ੍ਰਿਤਕ ਦਾਨ",
      "deceased": "ਦਿਮਾਗ ਦੀ ਮੌਤ ਘੋਸ਼ਿਤ ਹੋਣ ਤੋਂ ਬਾਅਦ ਵਾਪਰਦਾ ਹੈ ਦਾਨੀ 8 ਜਾਨਾਂ ਤੱਕ ਬਚਾ ਸਕਦਾ ਹੈ",
      "deceased1": "ਕਦਮ-ਦਰ-ਕਦਮ ਪ੍ਰਕਿਰਿਆ",
      "deceased2": "ਕਿਹੜੇ ਅੰਗ ਦਾਨ ਕੀਤੇ ਜਾ ਸਕਦੇ ਹਨ?",
      "deceased3": "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ",
      "process": "ਮੈਡੀਕਲ ਨਾਮ",
      "organQuestion": "ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ",
      "faqTitle": "ਸਰਵਾਈਵਲ ਰੇਟ",
      "medName": "ਇੱਕ ਦਾਨੀ 8 ਜਾਨਾਂ ਤੱਕ ਬਚਾ ਸਕਦਾ ਹੈ। ਭਾਰਤ ਵਿੱਚ ਅੰਗ ਦਾਨ ਬਾਰੇ ਜਾਗਰੂਕਤਾ ਪੈਦਾ ਕਰਨ ਲਈ ਸਾਡੇ ਮਿਸ਼ਨ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ।",
      "canHelp": "ਟੋਲ ਫ੍ਰੀ",
      "survival": "ਤੇਜ਼ ਲਿੰਕ"
    },
    "footer": {
      "tagline": "ਸਾਡੇ ਨਾਲ ਪਾਲਣਾ ਕਰੋ",
      "tollFree": "ਅੱਪਡੇਟ ਰਹੋ",
      "quickLinks": "ਨਵੀਨਤਮ ਅਪਡੇਟਾਂ ਅਤੇ ਸਫਲਤਾ ਦੀਆਂ ਕਹਾਣੀਆਂ ਲਈ ਗਾਹਕ ਬਣੋ।",
      "followUs": "ਆਪਣੀ ਈਮੇਲ ਦਰਜ ਕਰੋ",
      "stayUpdated": "ਗਾਹਕ ਬਣੋ",
      "newsletterSub": "ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।",
      "emailPlaceholder": "Enter your email",
      "subscribe": "ਉਮੀਦ ਦੀਆਂ ਆਵਾਜ਼ਾਂ ਨਾਲ ਬਣਾਇਆ ਗਿਆ",
      "rights": "ਦਾਨੀਆਂ, ਪ੍ਰਾਪਤਕਰਤਾਵਾਂ ਅਤੇ ਪਰਿਵਾਰਾਂ ਦੀਆਂ ਅਸਲ ਕਹਾਣੀਆਂ।",
      "madeWith": "ਹਰ ਅੰਗ ਇੱਕ ਤੋਹਫ਼ਾ ਹੈ"
    },
    "testimonials": {
      "title": "ਇਹ ਪਤਾ ਲਗਾਉਣ ਲਈ ਘੁੰਮੋ ਕਿ ਤੁਸੀਂ ਕੀ ਦਾਨ ਕਰ ਸਕਦੇ ਹੋ ਅਤੇ ਹਰੇਕ ਅੰਗ ਕਿੰਨੀਆਂ ਜਾਨਾਂ ਬਚਾ ਸਕਦਾ ਹੈ।",
      "subtitle": "ਹੋਰ ਜਾਣਨ ਲਈ ਕਲਿੱਕ ਕਰੋ",
      "list": {
        "1": {
          "quote": "ਸਾਡੀ ਇੱਛਾ ਹੈ। ਉਸ ਦਿਨ ਉਸ ਨੇ 5 ਜਾਨਾਂ ਬਚਾਈਆਂ। ਉਸਦੀ ਵਿਰਾਸਤ ਜਿਉਂਦੀ ਹੈ।",
          "name": "ਪ੍ਰਿਆ ਸ਼ਰਮਾ",
          "city": "ਮੁੰਬਈ",
          "role": "ਦਾਨੀ ਪਰਿਵਾਰ",
          "organ": "ਮਲਟੀਪਲ ਆਰਗਨਸ"
        },
        "2": {
          "quote": "ਮੇਰੇ ਦਿਲ ਦੇ ਟਰਾਂਸਪਲਾਂਟ ਤੋਂ ਬਾਅਦ, ਮੈਨੂੰ ਆਪਣੀ ਧੀ ਦਾ ਵਿਆਹ ਦੇਖਣ ਨੂੰ ਮਿਲਿਆ। ਮੈਂ ਆਪਣੀ ਦੂਜੀ ਜ਼ਿੰਦਗੀ ਇੱਕ ਅਣਜਾਣ ਨਾਇਕ ਦਾ ਰਿਣੀ ਹਾਂ।",
          "name": "ਰਾਜੇਸ਼ ਕੁਮਾਰ",
          "city": "ਦਿੱਲੀ",
          "role": "ਪ੍ਰਾਪਤਕਰਤਾ",
          "organ": "ਦਿਲ"
        },
        "3": {
          "quote": "ਇੱਕ ਜੀਵਤ ਗੁਰਦਾ ਦਾਨੀ ਵਜੋਂ, ਮੈਂ ਆਪਣੇ ਭਰਾ ਨੂੰ ਜੀਵਨ ਦਾ ਤੋਹਫ਼ਾ ਦਿੱਤਾ। ਅਸੀਂ ਦੋਵੇਂ ਹੁਣ ਸਿਹਤਮੰਦ, ਆਮ ਜੀਵਨ ਜਿਉਂਦੇ ਹਾਂ।",
          "name": "ਅਨੰਨਿਆ ਪਟੇਲ",
          "city": "ਅਹਿਮਦਾਬਾਦ",
          "role": "ਜੀਵਤ ਦਾਨੀ",
          "organ": "ਗੁਰਦਾ"
        }
      }
    },
    "bodyDiagram": {
      "title": "Saves",
      "subtitle": "life",
      "clickToLearn": "life",
      "saves": "Can save",
      "lives": "Save a Life",
      "life": "ਅੰਗ ਦਾਨ ਜਾਗਰੂਕਤਾ ਪਲੇਟਫਾਰਮ",
      "canSave": "Can save"
    },
    "loader": {
      "title": "Save a Life",
      "subtitle": "Organ Donation Awareness Platform"
    }
  },
  "ur": {
    "nav": {
      "home": "ہوم",
      "learn": "جانیں",
      "myths": "خرافات",
      "register": "رجسٹر کریں",
      "stories": "کہانیاں",
      "campaigns": "مہمات",
      "login": "لاگ ان کریں",
      "donateNow": "ابھی عطیہ کریں"
    },
    "hero": {
      "title": "وہ تحفہ دیں جو ہمیشہ کے لیے رہے",
      "subtitle": "ایک ڈونر 8 جانیں بچا سکتا ہے۔ آپ کا آج کا فیصلہ کل کسی کو دے سکتا ہے۔",
      "cta": "ڈونر بنیں",
      "learnHow": "جانیں کہ یہ کیسے کام کرتا ہے",
      "joinDonors": "ہندوستان بھر میں 5,00,000+ رجسٹرڈ عطیہ دہندگان کے ساتھ شامل ہوں",
      "pledgedToday": "لوگوں نے آج عہد کیا ہے",
      "scroll": "تلاش کرنے کے لئے اسکرول کریں"
    },
    "common": {
      "learnMore": "مزید جانیں",
      "submit": "جمع کروائیں",
      "cancel": "منسوخ کریں",
      "close": "بند کریں"
    },
    "stats": {
      "registered": "رجسٹرڈ عطیہ دہندگان",
      "livesSaved": "ایک عطیہ دہندہ زندگی گزار سکتا ہے یا اسے بچا سکتا ہے ٹرانسپلانٹ کے منتظر مریض",
      "organsDonatable": "اعضاء جو آپ عطیہ کر سکتے ہیں",
      "awaitingTransplant": "ہر عضو میں زندگی بچانے یا تبدیل کرنے کی صلاحیت ہوتی ہے۔ ہر ایک کے بارے میں جانیں۔"
    },
    "organs": {
      "title": "مریضوں کی مدد کرتا ہے",
      "subtitle": "مریضوں",
      "helps": "دل",
      "patient": "عطیہ کردہ دل کسی کو زندگی میں دوسرا موقع دے سکتا ہے۔",
      "patients": "کارڈیک ٹرانسپلانٹ",
      "list": {
        "heart": {
          "name": "85% 1 سال کی بقا کی شرح",
          "description": "عمر کی کوئی خاص حد نہیں",
          "medicalName": "پھیپھڑے",
          "survivalRateImprovement": "پھیپھڑوں کا عطیہ سانس کی دائمی بیماریوں میں مبتلا مریضوں کی مدد کر سکتا ہے۔",
          "ageRestriction": "پلمونری ٹرانسپلانٹ"
        },
        "lungs": {
          "name": "80% 1 سال کی بقا کی شرح",
          "description": "عام طور پر 65 سال سے کم",
          "medicalName": "جگر",
          "survivalRateImprovement": "دو جانیں بچانے کے لیے جگر کو تقسیم کیا جا سکتا ہے - ایک بالغ اور ایک بچہ۔",
          "ageRestriction": "ہیپاٹک ٹرانسپلانٹ"
        },
        "liver": {
          "name": "90% 1 سال کی بقا کی شرح",
          "description": "عمر کی کوئی خاص حد نہیں",
          "medicalName": "گردے",
          "survivalRateImprovement": "گردے سب سے زیادہ ٹرانسپلانٹ کیے جانے والے اعضاء ہیں۔",
          "ageRestriction": "رینل ٹرانسپلانٹ"
        },
        "kidneys": {
          "name": "95% 1 سال کی بقا کی شرح",
          "description": "عمر کی کوئی خاص حد نہیں",
          "medicalName": "آنکھیں",
          "survivalRateImprovement": "قرنیہ ٹرانسپلانٹ اندھے کی بینائی بحال کر سکتے ہیں۔",
          "ageRestriction": "کورنیل ٹرانسپلانٹ"
        },
        "eyes": {
          "name": "90٪ گرافٹ بقا کی شرح",
          "description": "عمر کی کوئی پابندی نہیں",
          "medicalName": "جلد",
          "survivalRateImprovement": "جلد کا عطیہ جلنے والے متاثرین کو ٹھیک کرنے میں مدد کرتا ہے۔",
          "ageRestriction": "سکن ایلوگرافٹ"
        },
        "skin": {
          "name": "شدید جلنے کے لیے زندگی بچانے والا",
          "description": "عمر کی کوئی خاص حد نہیں",
          "medicalName": "لبلبہ",
          "survivalRateImprovement": "لبلبہ کا عطیہ وصول کنندگان میں ذیابیطس کا علاج کر سکتا ہے۔",
          "ageRestriction": "لبلبے کا ٹرانسپلانٹ"
        },
        "pancreas": {
          "name": "80% 1 سالہ بقا کی شرح",
          "description": "عام طور پر 50 سے کم",
          "medicalName": "آنتوں",
          "survivalRateImprovement": "آنتوں کی پیوند کاری آنتوں کی ناکامی کے مریضوں کی مدد کرتی ہے۔",
          "ageRestriction": "آنتوں کا ٹرانسپلانٹ"
        },
        "intestines": {
          "name": "70% 1 سال کی بقا کی شرح",
          "description": "کیس کی بنیاد پر",
          "medicalName": "بون میرو",
          "survivalRateImprovement": "بون میرو کا عطیہ خون کے کینسر کا علاج کر سکتا ہے۔",
          "ageRestriction": "سٹیم سیل ٹرانسپلانٹ"
        },
        "bone-marrow": {
          "name": "لیوکیمیا کے لئے 60-80٪ علاج کی شرح",
          "description": "عطیہ دہندگان کے لئے عام طور پر 18-60",
          "medicalName": "ہندوستان بھر میں ڈونر کی تقسیم",
          "survivalRateImprovement": "دیکھیں کہ مختلف ریاستوں میں عطیہ دہندگان کو کس طرح تقسیم کیا جاتا ہے۔ گہرا سبز زیادہ رجسٹرڈ ڈونرز کی نشاندہی کرتا ہے۔",
          "ageRestriction": "عطیہ دہندگان"
        }
      }
    },
    "map": {
      "title": "افسانے بمقابلہ حقائق",
      "subtitle": "بہت سی غلط فہمیاں لوگوں کو اعضاء کے عطیہ دہندگان کے طور پر رجسٹر کرنے سے روکتی ہیں۔ حقیقت کو ظاہر کرنے کے لئے ہر کارڈ پر کلک کریں۔",
      "donors": "تم نے بھانڈا پھوڑ دیا",
      "states": {
        "MH": "مہاراشٹر",
        "DL": "دہلی",
        "TN": "تامل ناڈو",
        "KA": "کرناٹک",
        "GJ": "گجرات",
        "KL": "کیرالہ",
        "WB": "مغربی بنگال",
        "TS": "تلنگانہ",
        "UP": "اتر پردیش",
        "RJ": "راجستھان",
        "AP": "آندھرا پردیش",
        "MP": "مدھیہ پردیش",
        "HR": "ہریانہ",
        "PB": "پنجاب",
        "OD": "جب میرے شوہر کا انتقال ہو گیا تو ہم نے اوڈیشہ کی خواہش کی اس دن اس نے 5 جانیں بچائیں۔ اس کی میراث زندہ ہے۔"
      }
    },
    "myths": {
      "title": "تمام خرافات کا بھانڈا پھوڑ دیا!",
      "subtitle": "Many misconceptions prevent people from registering as organ donors. Click each card to reveal the truth.",
      "busted": "MYTH",
      "allBusted": "FACT",
      "of": "حقیقت کو ظاہر کرنے کے لئے کلک کریں",
      "mythLabel": "افسانہ کا پردہ فاش!",
      "factLabel": "علم ہی طاقت ہے",
      "clickReveal": "اب جب کہ آپ حقائق جان چکے ہیں، اگلا قدم اٹھائیں اور ایک عضو عطیہ کرنے والے کے طور پر رجسٹر ہوں۔ آپ کا فیصلہ 8 جانیں بچا سکتا ہے۔",
      "mythBusted": "ایک عطیہ دہندہ کے طور پر رجسٹر ہوں",
      "knowledge": "اعضاء کے عطیہ کے بارے میں جانیں",
      "knowledgeSub": "اعضاء کے عطیہ کو سمجھنا ایک باخبر فیصلہ کرنے کی طرف پہلا قدم ہے۔",
      "registerCTA": "بلڈ گروپ کمپیٹیبلٹی چیکر"
    },
    "learn": {
      "title": "اعضاء اور خون کے عطیہ کے لیے مطابقت دیکھنے کے لیے اپنا بلڈ گروپ منتخب کریں۔",
      "subtitle": "عطیہ کی اقسام",
      "bloodChecker": "زندہ عطیہ",
      "bloodSub": "ایک گردہ یا اپنے جگر کا کچھ حصہ عطیہ کریں",
      "types": "بون میرو اور سٹیم سیلز",
      "living": "عطیہ کرنے والا صحت یاب ہونے کے بعد صحت مند زندگی گزارتا ہے",
      "living1": "فوت شدہ عطیہ",
      "living2": "دماغ کی موت کے اعلان کے بعد ہوتا ہے ڈونر 8 جانیں بچا سکتا ہے",
      "living3": "مرحلہ وار عمل",
      "deceased": "کون سے اعضاء عطیہ کیے جا سکتے ہیں؟",
      "deceased1": "اکثر پوچھے جانے والے سوالات",
      "deceased2": "طبی نام",
      "deceased3": "مدد کر سکتے ہیں",
      "process": "بقا کی شرح",
      "organQuestion": "ایک ڈونر 8 جانیں بچا سکتا ہے۔ ہندوستان میں اعضاء کے عطیہ کے بارے میں بیداری پیدا کرنے کے ہمارے مشن میں شامل ہوں۔",
      "faqTitle": "ٹول فری",
      "medName": "فوری لنکس",
      "canHelp": "ہمارے ساتھ چلیں",
      "survival": "تازہ ترین رہیں"
    },
    "footer": {
      "tagline": "تازہ ترین اپ ڈیٹس اور کامیابی کی کہانیوں کے لیے سبسکرائب کریں۔",
      "tollFree": "اپنا ای میل درج کریں",
      "quickLinks": "سبسکرائب کریں",
      "followUs": "جملہ حقوق محفوظ ہیں۔",
      "stayUpdated": "امید کی آوازوں کے ساتھ بنایا گیا",
      "newsletterSub": "عطیہ دہندگان، وصول کنندگان اور خاندانوں کی حقیقی کہانیاں۔ ہر عضو تحفہ ہے",
      "emailPlaceholder": "مزید جاننے کے لیے کلک کریں",
      "subscribe": "Saves",
      "rights": "life",
      "madeWith": "life"
    },
    "testimonials": {
      "title": "Voices of Hope",
      "subtitle": "Save a Life",
      "list": {
        "1": {
          "quote": "پریا شرما",
          "name": "ممبئی",
          "city": "ڈونر فیملی",
          "role": "ایک سے زیادہ اعضاء",
          "organ": "دل کی پیوند کاری کے بعد مجھے اپنی بیٹی کی شادی دیکھنے کو ملی۔ میں اپنی دوسری زندگی ایک نامعلوم ہیرو کا مقروض ہوں۔"
        },
        "2": {
          "quote": "راجیش کمار",
          "name": "دہلی",
          "city": "وصول کنندہ",
          "role": "دل",
          "organ": "ایک زندہ گردہ عطیہ کرنے والے کے طور پر، میں نے اپنے بھائی کو زندگی کا تحفہ دیا۔ ہم دونوں اب صحت مند، نارمل زندگی گزار رہے ہیں۔"
        },
        "3": {
          "quote": "اننیا پٹیل",
          "name": "احمد آباد",
          "city": "زندہ ڈونر",
          "role": "گردہ",
          "organ": "Kidney"
        }
      }
    },
    "bodyDiagram": {
      "title": "Organ Donation Awareness Platform",
      "subtitle": "Hover to explore what you can donate and how many lives each organ can save.",
      "clickToLearn": "Click to learn more",
      "saves": "Saves",
      "lives": "lives",
      "life": "life",
      "canSave": "Can save"
    },
    "loader": {
      "title": "Save a Life",
      "subtitle": "Organ Donation Awareness Platform"
    }
  }
};
