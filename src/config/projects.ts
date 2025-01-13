// src/config/projects.ts
export interface Project {
  name: string
  slug: string
  description: string
  fullDescription?: string
  technologies?: string[]
  image?: string  // Reference to image in public/images/projects/
  githubUrl?: string
  liveUrl?: string
  otherUrls?: {
    [key: string]: string
  }
  isFeatured?: boolean
}

export const projects: Project[] = [
  {
    name: "Idea History Agent",
    slug: "idea-history-agent",
    description: `AI agent that constructs a DAG model of how different ideas have evolved throughout time and locations.`,
    fullDescription: `The world is really, really complicated. We often accept the values and ideas of our society as givens - as if they've always existed in their current form.

But how did we get here? Ideas and values are dynamic, evolving differently across both space and time. Different cultures can hold radically different interpretations of the same concept, and these interpretations themselves change as societies develop and interact.

This project is an attempt to shed some light on how we got where we are now, using AI to trace and record the evolution of different concepts through a directed acyclic graph (DAG).

Using a DAG to model the evolution of abstract ideas is obviously a massive simplification of how cultural and intellectual change actually happens. Hopefully this is a fun/useful starting point though.

The technical goal here was to implement an AI agent from scratch, but my broader aim is to create a tool that helps us better understand our own worldviews (and hopefully question them :)).`.trim(),
    technologies: ["Python", "React"],
    image: "idea-history.png",
    githubUrl: "https://github.com/awiteckzb/idea-history-agent",
    isFeatured: true
  },

  {
    name: "Princeton Senior Thesis: \"Rethinking the Hype of Transformer Models: Examples from Electric Load Forecasting\"",
    slug: "princeton-senior-thesis",
    description: "Developed a transformer-based model from scratch that can forecast electricity loads based on historical data and forecasted weather patterns.",
    fullDescription:"Developed a transformer-based model from scratch that can forecast electricity loads based on historical data and forecasted weather patterns.",
    technologies: ["Pytorch", "Transformers", "Python"],
    image: "princeton-senior-thesis.png",
    githubUrl: "https://github.com/awiteck/thesis",
    isFeatured: true
  },


  {
    name: "Radiation: A Deterministic Generative Art Project",
    slug: "radiation",
    description: "Generative art project using p5.js, inspired off the album cover for Flying Lotus's Cosmogramma.",
    fullDescription:"Made a deterministic generative art project using p5.js, inspired off the album cover for Flying Lotus's Cosmogramma.",
    technologies: ["JavaScript", "p5.js"],
    image: "radiation.png",
    githubUrl: "https://github.com/awiteck/radiation",
    otherUrls: {
      "Medium Article": "https://medium.com/@awiteck/generative-art-is-awesome-heres-how-i-started-dd24cf80c4af"
    },
    isFeatured: true
  },
  {
    name: "Pre-Calculus Textbook",
    slug: "precalculus-textbook",
    description: "Wrote 160 page advanced precalculus textbook, self-published. Book covers advanced math concepts in support of high school course. Completed and released summer 2019",
    fullDescription: `Taken from the intro: 
    
    One challenge I had throughout my first semester at Thomas Jefferson High School for Science and Technology ("TJ") was difficulty adjusting, especially with math. I was used to half-listening to my teacher's lectures, cramming for 30 minutes the night before tests, and then doing well on them. After a very short time at TJ, however, I quickly realized the results I was accustomed to would not be the case if I continued with my same approach and level of effort. Although I tried to study more effectively and efficiently, including doing all the review sheets I was given, I performed below my standards on basically every test. I attribute this to three main things: bad study habits, a lack of useful resource materials to help support success in rigorous math courses, and not taking summer-school classes before my freshmen year to prepare me better for what was to come.

The purpose of this book is to solve two of these issues. First, I have 
"attempted" to provide a deeper analysis of topics covered in Pre-Calculus, designing this book to be almost entirely proofbased. As a result, most equations we derive will have a complete, annotated proof preceding them. I have also included what I think are relatively difficult problems, hopefully providing "TJ-level" test questions that driven, yet usually nervous, students so fervently desire. Although there are no guarantees, I believe that if one does all the examples and problems and truly understands them then they will be in good shape for the relevant test. Emphasis on the 'truly understand' part.

Now, the other issue I hope to address: I feel there has been some deficiency and inherent unfairness in the TJ system for some time; for the most part, only students who are willing to sacrifice large portions of their summers and come from families financially well off enough to pay for summer school can learn and get ahead. The rest of the students aren't "left behind" but, based on my observation and experience, are certainly at a disadvantage compared to their peers. This has always bothered me and I'd like to do a small part to address this situation constructively and level the playing field.`,

    image: "precalc-textbook.png",
    // githubUrl: "https://github.com/awiteck/precalculus-textbook"
    otherUrls: {
      "PDF": "https://www.aidanwiteck.com/textbook.pdf"
    },
    isFeatured: true
  },

  {
    name: "Dlamos",
    slug: "dlamos",
    description: "iOS app that uses Spotify API, creating a social media app where users can share music and artists can interact directly with their fanbase, adding a large-scale collaborative element to the music creation process. Over 8k lines of code, fully built-out backend (Spotify authentication, database, etc.) and frontend (SwiftUI).",
    fullDescription: "iOS app that uses Spotify API, creating a social media app where users can share music and artists can interact directly with their fanbase, adding a large-scale collaborative element to the music creation process. Over 8k lines of code, fully built-out backend (Spotify authentication, database, etc.) and frontend (SwiftUI).",
    technologies: ["Swift", "Firebase", "JavsScript"],
    image: "dlamos1.jpg",
    // githubUrl: "https://github.com/awiteck/dlamos",
    isFeatured: false
  },

  {
    name: "VitalMap",
    slug: "vitalmap",
    description: "Lead team to build a community-driven Progressive Web Application that eliminates the barriers between students and getting the essential products they need. Completed for Princeton's COS333 class.",
    fullDescription: "Lead team to build a community-driven Progressive Web Application that eliminates the barriers between students and getting the essential products they need. Completed for Princeton's COS333 class.",
    technologies: ["Python", "Flask", "JavaScript"],
    image: "vitalmap.jpg",
    // githubUrl: "https://github.com/awiteck/vitalmap",
    isFeatured: false
  },


  {
    name: "Greg: A Princeton Course Chatbot",
    slug: "greg",
    description: "This project uses the Retrieval Augmented Generation (RAG) framework in conjunction with the OpenAI GPT API to create a chatbot, Greg, that can make class suggestions to students based on their interests and preferences.",
    fullDescription: "This project uses the Retrieval Augmented Generation (RAG) framework in conjunction with the OpenAI GPT API to create a chatbot, Greg, that can make class suggestions to students based on their interests and preferences.",
    technologies: ["Python", "RAG"],
    image: "greg.png",
    githubUrl: "https://github.com/awiteck/courses-chatbot",
    isFeatured: false
  },

  {
    name: "LSH Music Recommendation Engine",
    slug: "lsh-music-recommendation-engine",
    description: "In this project, I implemented the locality-sensitive hashing (LSH) vector search algorithm from scratch and used it to efficiently recommend music to a user based on a song they like.",
    fullDescription: "In this project, I implemented the locality-sensitive hashing (LSH) vector search algorithm from scratch and used it to efficiently recommend music to a user based on a song they like.",
    technologies: ["Python", "LSH", "Vector Search"],
    image: "lsh.png",
    githubUrl: "https://github.com/awiteck/track_recommendation",
    isFeatured: false,
    otherUrls: {
        "Medium Article": "https://medium.com/@awiteck/lets-discover-some-music-implementing-an-efficient-vector-search-from-scratch-in-python-384450744438"
    }
  }
]