import { daysFromNow } from "../utils/helpers";

// Sample data shown the first time the app opens
export const startCustomers = [
  { id: 1, name: "Anita Rao", company: "Bluewave Foods", email: "anita@bluewave.in", phone: "98480 12345", status: "Active" },
  { id: 2, name: "Rahul Verma", company: "Kiran Textiles", email: "rahul@kirantex.com", phone: "99890 45678", status: "Lead" },
  { id: 3, name: "Sneha Reddy", company: "Orbit Logistics", email: "sneha@orbitlogi.com", phone: "90000 76543", status: "Active" },
  { id: 4, name: "Imran Khan", company: "Charminar Traders", email: "imran@charminar.co", phone: "91234 56780", status: "Inactive" },
  { id: 5, name: "Priya Nair", company: "Greenleaf Clinics", email: "priya@greenleaf.org", phone: "98765 43210", status: "Lead" },
];

export const startDeals = [
  { id: 1, title: "Annual supply contract", customer: "Bluewave Foods", value: 450000, stage: "Negotiation" },
  { id: 2, title: "Website redesign", customer: "Kiran Textiles", value: 120000, stage: "New" },
  { id: 3, title: "Fleet tracking setup", customer: "Orbit Logistics", value: 300000, stage: "Won" },
  { id: 4, title: "Clinic software license", customer: "Greenleaf Clinics", value: 80000, stage: "New" },
  { id: 5, title: "Warehouse audit", customer: "Charminar Traders", value: 60000, stage: "Lost" },
];

export const startTasks = [
  { id: 1, text: "Send price quote", customer: "Kiran Textiles", due: daysFromNow(-1), done: false },
  { id: 2, text: "Call to discuss renewal", customer: "Bluewave Foods", due: daysFromNow(2), done: false },
  { id: 3, text: "Share product demo link", customer: "Greenleaf Clinics", due: daysFromNow(5), done: false },
  { id: 4, text: "Collect signed agreement", customer: "Orbit Logistics", due: daysFromNow(-3), done: true },
];

export const statuses = ["Lead", "Active", "Inactive"];

export const stages = ["New", "Negotiation", "Won", "Lost"];
