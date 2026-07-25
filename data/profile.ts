export interface ContactInfo {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

export interface Profile {
  name: string;
  photo: string;
  role: string;
  apprenticeId: string;
  shortBio: string;
  forgeCohort: string;
  skills: string[];
  contact: ContactInfo;
}

const profile: Profile = {
  name: "Mohammed Firdose FN",
  photo: "/photo.jpj.jpeg",
  role: "Backend Engineering",
  apprenticeId: "ZPN-NAG-001",
  shortBio:
    "I'm a FORGE apprentice and aspiring software developer focused on building practical, real-world software solutions. Through hands-on projects, I'm developing my skills in programming, problem-solving, and software development while gaining experience turning ideas into functional applications. I'm eager to contribute my skills to a professional team, learn from experienced developers, and build impactful software that solves meaningful problems.",

  forgeCohort: "April 2026",

  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "HTML",
    "CSS",
    "JavaScript",
  ],

  contact: {
    email: "firdose0104@gmail.com",
    phone: "9353681799",
    linkedin: "https://www.linkedin.com/in/mohammed-firdose-fn-5289ab2bb/",
    github: "https://github.com/firdose0104",
  },
};

export default profile;
