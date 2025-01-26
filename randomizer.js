// Arrays of affirmations
const momAffirmations = [
    "I am a loving and supportive mom who nurtures my family",
    "My family feels my unwavering care and kindness every day",
    "I bring warmth and joy into every moment with my children",
    "I create a safe, happy, and loving space for my family",
    "My love for my family inspires and uplifts them daily",
    "I balance motherhood with love, patience, and strength",
    "My presence brings comfort and happiness to my family",
    "I am a role model of kindness, courage, and positivity for my children",
    "I embrace motherhood with gratitude and joy",
    "I nurture my family with love, understanding, and care",
    "I am a steady source of love and strength for my family",
    "My family thrives because of my compassion and dedication",
    "I cherish every moment with my children and family"
  ];
  const wifeAffirmations = [
    "I am a loving and supportive partner who builds a strong bond with my spouse",
    "My marriage is rooted in trust, love, and mutual respect",
    "I bring positivity and joy to my relationship every day",
    "I am my partner’s greatest supporter and biggest fan",
    "I nurture our love with care, communication, and understanding",
    "My love for my spouse grows deeper with every moment we share",
    "Together, my partner and I create a life filled with love and laughter",
    "I bring balance, kindness, and warmth to my marriage",
    "I cherish and honor my relationship with my spouse daily",
    "I am a thoughtful and caring partner who adds joy to my partner’s life",
    "I celebrate the bond of love and friendship I share with my spouse",
    "My relationship is a source of happiness, strength, and love",
    "I am proud to be a loving, compassionate, and supportive wife"
  ];
  const designerStyleAffirmations = [
    "I bring creativity and elegance into every project I work on",
    "My designs inspire and captivate, blending beauty with functionality",
    "I express my unique style through both my designs and fashion",
    "I balance creativity, innovation, and attention to detail in my work",
    "My passion for design shines through everything I create",
    "I combine my artistic vision with technical expertise to deliver excellence",
    "I stay inspired and embrace my individuality in every design and outfit",
    "My style and creativity reflect my bold and visionary spirit",
    "I am confident in my ability to design with beauty and purpose",
    "I use my passion for fashion and design to make the world more inspiring",
    "My work combines elegance, creativity, and modern trends seamlessly",
    "I am proud to be a designer and a trendsetter in style and creativity",
    "My love for fashion and web design drives me to innovate and inspire"
  ];
  
  // Function to randomize affirmations
  function affirmationRandomizer(...arrays) {
    return arrays
      .map((arr, index) => {
        if (!arr || arr.length === 0) return `Array ${index + 1} is empty.`;
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
      })
      .map((affirmation, i) => ` ${["👶", "❤️", "🎨"][i] || "⭐"} ${affirmation}`)
      .join("\n");
  }
  
  // Test the function 
  console.log(affirmationRandomizer(momAffirmations, wifeAffirmations, designerStyleAffirmations));