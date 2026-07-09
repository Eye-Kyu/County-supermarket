import type { JobRole } from "../types/careers";

export const careersValues = [
  {
    title: "Growth",
    desc: "We invest in our people. From cashier to store manager, every career path is possible and actively supported.",
  },
  {
    title: "Community",
    desc: "You're not just staff - you're a neighbour serving your neighbourhood. That connection matters to us.",
  },
  {
    title: "Benefits",
    desc: "Staff discounts, meal allowances, and statutory cover are part of how we care for the team.",
  },
  {
    title: "Purpose",
    desc: "Every shift keeps a family's fridge full and their household budget intact.",
  },
];

export const jobRoles: JobRole[] = [
  {
    id: "store-manager",
    title: "Store Manager",
    department: "Operations",
    location: "Kahawa West, Nairobi",
    employmentType: "Full-time",
    experience: "5+ years",
    closingDate: "31 August 2026",
    description: "Lead daily branch operations, guide department teams, and ensure every customer enjoys a clean, efficient, and welcoming shopping experience.",
    responsibilities: [
      "Oversee sales floor operations, staffing, stock control, and customer service standards.",
      "Coach supervisors and front-line teams to meet daily operational targets.",
      "Monitor branch performance, shrinkage, safety, and compliance routines.",
    ],
    qualifications: [
      "Diploma or degree in Business, Retail Management, or a related field.",
      "Proven supermarket, retail, or FMCG branch leadership experience.",
      "Strong people management, reporting, and customer resolution skills.",
    ],
  },
  {
    id: "cashier",
    title: "Cashier",
    department: "Customer Service",
    location: "Multiple Branches",
    employmentType: "Full-time",
    experience: "1+ year",
    closingDate: "15 August 2026",
    description: "Serve shoppers at checkout with speed, accuracy, and warmth while maintaining clean till procedures and excellent customer care.",
    responsibilities: [
      "Process cash, card, and mobile money transactions accurately.",
      "Balance till records and report discrepancies promptly.",
      "Support customers with pricing, loyalty, and product enquiries.",
    ],
    qualifications: [
      "KCSE certificate or equivalent qualification.",
      "Cash handling or customer service experience preferred.",
      "High integrity, attention to detail, and clear communication.",
    ],
  },
  {
    id: "bakery-supervisor",
    title: "Bakery Supervisor",
    department: "Food & Beverage",
    location: "Kenol, Murang'a",
    employmentType: "Full-time",
    experience: "3+ years",
    closingDate: "22 August 2026",
    description: "Coordinate bakery production, freshness standards, display quality, and team routines for one of County's most loved departments.",
    responsibilities: [
      "Plan daily production for bread, pastries, cakes, and hot counter items.",
      "Maintain hygiene, food safety, and display standards throughout the shift.",
      "Supervise bakery assistants and monitor ingredient usage and wastage.",
    ],
    qualifications: [
      "Certificate or diploma in Baking, Pastry, Food Production, or related training.",
      "Hands-on bakery production and team supervision experience.",
      "Knowledge of food safety, stock rotation, and costing basics.",
    ],
  },
  {
    id: "delivery-driver",
    title: "Delivery Driver",
    department: "Logistics",
    location: "Nairobi Metro",
    employmentType: "Full-time",
    experience: "2+ years",
    closingDate: "30 August 2026",
    description: "Deliver customer orders safely and on time while representing County Supermarket with professionalism at every doorstep.",
    responsibilities: [
      "Collect, verify, and deliver customer orders within assigned routes.",
      "Maintain delivery records, vehicle cleanliness, and basic safety checks.",
      "Communicate delays, substitutions, and delivery updates clearly.",
    ],
    qualifications: [
      "Valid driving license with a clean driving record.",
      "Good knowledge of Nairobi and surrounding delivery routes.",
      "Customer-focused, punctual, and comfortable using mobile order tools.",
    ],
  },
  {
    id: "customer-service-representative",
    title: "Customer Service Representative",
    department: "Customer Experience",
    location: "All Branches",
    employmentType: "Full-time",
    experience: "1-2 years",
    closingDate: "20 August 2026",
    description: "Support shoppers before, during, and after their visit by resolving questions, coordinating returns, and keeping service lines moving.",
    responsibilities: [
      "Handle customer enquiries, complaints, returns, and loyalty support.",
      "Escalate operational issues to supervisors with clear context.",
      "Maintain a welcoming service desk and accurate customer records.",
    ],
    qualifications: [
      "Customer service, hospitality, or retail experience preferred.",
      "Strong listening, problem-solving, and de-escalation skills.",
      "Fluent spoken English and Kiswahili; local language is an advantage.",
    ],
  },
  {
    id: "stock-controller",
    title: "Stock Controller",
    department: "Inventory",
    location: "Multiple Branches",
    employmentType: "Full-time",
    experience: "2+ years",
    closingDate: "28 August 2026",
    description: "Keep shelves supplied and stock records accurate by coordinating receiving, replenishment, cycle counts, and stock movement routines.",
    responsibilities: [
      "Receive goods, verify documentation, and update stock movement records.",
      "Run regular stock counts and investigate variances with department leads.",
      "Monitor expiry dates, slow-moving items, and replenishment priorities.",
    ],
    qualifications: [
      "Inventory, warehouse, or supermarket stock control experience.",
      "Comfortable using stock systems, spreadsheets, and handheld scanners.",
      "Organised, numerate, and able to work early or late shifts when needed.",
    ],
  },
];
