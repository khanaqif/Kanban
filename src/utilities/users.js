const tickets = [
  {
    id: "CAM-1",
    title: "Update User Profile Page UI",
    tag: ["Feature request"],
    userId: "usr-1",
    status: "Todo",
    priority: 4,
  },
  {
    id: "CAM-2",
    title:
      "Add Multi-Language Support - Enable multi-language support within the application.",
    tag: ["Feature Request"],
    userId: "usr-2",
    status: "In progress",
    priority: 3,
  },
  {
    id: "CAM-3",
    title: "Optimize Database Queries for Performance",
    tag: ["Feature Request"],
    userId: "usr-2",
    status: "In progress",
    priority: 1,
  },
  {
    id: "CAM-4",
    title: "Implement Email Notification System",
    tag: ["Feature Request"],
    userId: "usr-1",
    status: "In progress",
    priority: 3,
  },
  {
    id: "CAM-5",
    title: "Enhance Search Functionality",
    tag: ["Feature Request"],
    userId: "usr-5",
    status: "In progress",
    priority: 0,
  },
  {
    id: "CAM-6",
    title: "Third-Party Payment Gateway",
    tag: ["Feature Request"],
    userId: "usr-2",
    status: "Todo",
    priority: 1,
  },
  {
    id: "CAM-7",
    title: "Create Onboarding Tutorial for New Users",
    tag: ["Feature Request"],
    userId: "usr-1",
    status: "Backlog",
    priority: 2,
  },
  {
    id: "CAM-8",
    title: "Implement Role-Based Access Control (RBAC)",
    tag: ["Feature Request"],
    userId: "usr-3",
    status: "In progress",
    priority: 3,
  },
  {
    id: "CAM-9",
    title: "Upgrade Server Infrastructure",
    tag: ["Feature Request"],
    userId: "usr-5",
    status: "Todo",
    priority: 2,
  },
  {
    id: "CAM-10",
    title: "Conduct Security Vulnerability Assessment",
    tag: ["Feature Request"],
    userId: "usr-4",
    status: "Backlog",
    priority: 1,
  },
];

const users = [
  {
    id: "usr-1",
    name: "Anoop sharma",

    available: false,
    profile_pic:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
  },
  {
    id: "usr-2",
    name: "Yogesh",
    available: true,
    profile_pic:
      "https://images.pexels.com/photos/3772594/pexels-photo-3772594.jpeg",
  },
  {
    id: "usr-3",
    name: "Shankar Kumar",
    available: true,
    profile_pic:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  },
  {
    id: "usr-4",
    name: "Ramesh",
    available: true,
    profile_pic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    id: "usr-5",
    name: "Suresh",
    available: true,
    profile_pic:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
];

export { tickets, users };
