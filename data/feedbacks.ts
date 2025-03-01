import { IFeedbacks } from "~~/types/Feedback.types";

export const feedbacks: IFeedbacks = {
  lapino: [
    {
      id: 1,
      title: "Add tags for solutions",
      category: "enhancement",
      upvotes: 112,
      status: "suggestion",
      description: "Easier to search for solutions based on a specific stack.",
    },
    {
      id: 2,
      title: "Add a dark theme option",
      category: "feature",
      upvotes: 99,
      status: "suggestion",
      description:
        "It would help people with light sensitivities and who prefer dark mode.",
    },
  ],
  oishi: [
    {
      id: 3,
      title: "Q&A within the challenge hubs",
      category: "feature",
      upvotes: 65,
      status: "suggestion",
      description: "Challenge-specific Q&A would make for easy reference.",
    },
    {
      id: 4,
      title: "Add image/video upload to feedback",
      category: "enhancement",
      upvotes: 51,
      status: "suggestion",
      description: "Images and screencasts can enhance comments on solutions.",
    },
  ],
  run: [
    {
      id: 5,
      title: "Ability to follow others",
      category: "feature",
      upvotes: 42,
      status: "suggestion",
      description: "Stay updated on comments and solutions other people post.",
    },
    {
      id: 6,
      title: "Preview images not loading",
      category: "bug",
      upvotes: 3,
      status: "suggestion",
      description:
        "Challenge preview images are missing when you apply a filter.",
    },
  ],
  animix: [
    {
      id: 7,
      title: "More comprehensive reports",
      category: "feature",
      upvotes: 123,
      status: "planned",
      description:
        "It would be great to see a more detailed breakdown of solutions.",
    },
    {
      id: 8,
      title: "Learning paths",
      category: "feature",
      upvotes: 28,
      status: "planned",
      description:
        "Sequenced projects for different goals to help people improve.",
    },
  ],
  perfume: [
    {
      id: 9,
      title: "One-click portfolio generation",
      category: "feature",
      upvotes: 62,
      status: "in-progress",
      description:
        "Add ability to create professional looking portfolio from profile.",
    },
    {
      id: 10,
      title: "Bookmark challenges",
      category: "feature",
      upvotes: 31,
      status: "in-progress",
      description: "Be able to bookmark challenges to take later on.",
    },
  ],
  sushio: [
    {
      id: 11,
      title: "Animated solution screenshots",
      category: "bug",
      upvotes: 9,
      status: "in-progress",
      description:
        "Screenshots of solutions with animations don’t display correctly.",
    },
    {
      id: 12,
      title: "Add micro-interactions",
      category: "enhancement",
      upvotes: 71,
      status: "live",
      description: "Small animations at specific points can add delight.",
    },
  ],
};
