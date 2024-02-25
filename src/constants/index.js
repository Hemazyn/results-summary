import {
     memory,
     reaction,
     verbal,
     visual,

} from "../assets";

const results = [
     {
          id: 1,
          icon: reaction,
          alt: "reaction",
          iconName: "Reaction",
          score: "80",
          textColor: "hsl(0, 100%, 67%)",
          bg: "hsl(0, 100%, 67%, 0.1)",
          overall: "hsl(224, 30%, 27%, 0.7)"
     },
     {
          id: 2,
          icon: memory,
          alt: "memory",
          iconName: "Memory",
          score: "92",
          textColor: "hsl(39, 100%, 56%)",
          bg: "hsl(39, 100%, 56%, 0.1)",
          overall: "hsl(224, 30%, 27%, 0.7)"
     },
     {
          id: 3,
          icon: verbal,
          alt: "verbal",
          iconName: "Verbal",
          score: "61",
          textColor: "hsl(166, 100%, 37%)",
          bg: "hsl(166, 100%, 37%, 0.1)",
          overall: "hsl(224, 30%, 27%, 0.7)"
     },
     {
          id: 4,
          icon: visual,
          alt: "visual",
          iconName: "Visual",
          score: "72",
          textColor: "hsl(234, 85%, 45%)",
          bg: "hsl(234, 85%, 45%, 0.1)",
          overall: "hsl(224, 30%, 27%, 0.7)"
     },
];
export { results }