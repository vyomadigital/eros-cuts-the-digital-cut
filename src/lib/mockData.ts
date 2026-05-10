import cut1 from "@/assets/cut1.jpg";
import cut2 from "@/assets/cut2.jpg";
import cut3 from "@/assets/cut3.jpg";
import cut4 from "@/assets/cut4.jpg";
import interior from "@/assets/interior.jpg";
import tools from "@/assets/tools.jpg";

export const services = [
  {
    id: "signature-cut",
    name: "Signature Cut",
    tagline: "Precision haircut tailored to you",
    price: 1500,
    duration: 45,
    description:
      "Consultation, shampoo, scissor & clipper work, and a hot-towel finish.",
    popular: true,
  },
  {
    id: "skin-fade",
    name: "Skin Fade",
    tagline: "Razor-clean modern fade",
    price: 1800,
    duration: 50,
    description:
      "Bald or taper fade with detailed line-up, executed by senior stylists.",
    popular: true,
  },
  {
    id: "beard-sculpt",
    name: "Beard Sculpt",
    tagline: "Straight razor beard architecture",
    price: 900,
    duration: 30,
    description: "Steam, hot towel, beard oil, and a precision straight-razor edge.",
  },
  {
    id: "royal-package",
    name: "The Royal",
    tagline: "Cut · Beard · Facial · Massage",
    price: 3500,
    duration: 90,
    description:
      "Our flagship 90-minute experience. Includes scalp massage and clay facial.",
    popular: true,
  },
  {
    id: "kids-cut",
    name: "Heir Cut",
    tagline: "Ages 4–12, calmly handled",
    price: 800,
    duration: 30,
    description: "Patient, gentle, and styled to be just like dad's.",
  },
  {
    id: "consultation",
    name: "Style Consultation",
    tagline: "1-on-1 with our master stylist",
    price: 0,
    duration: 20,
    description:
      "Free face-shape and lifestyle analysis to design your signature look.",
  },
];

export const gallery = [
  { src: cut1, alt: "Modern textured top with skin fade", category: "Fades" },
  { src: cut2, alt: "Straight razor beard sculpt", category: "Beard" },
  { src: cut3, alt: "Editorial side profile cut", category: "Signature" },
  { src: cut4, alt: "Scalp massage and styling", category: "Royal" },
  { src: interior, alt: "EROS CUTS shop floor", category: "Studio" },
  { src: tools, alt: "Brass and steel tooling", category: "Studio" },
];

export const testimonials = [
  {
    name: "Aayush Shrestha",
    handle: "Thamel",
    rating: 5,
    text: "Easily the sharpest fade I've had in Kathmandu. The room feels like a Tokyo speakeasy.",
    service: "Skin Fade",
    when: "2 days ago",
  },
  {
    name: "Bikash Maharjan",
    handle: "Patan",
    rating: 5,
    text: "Booked The Royal before my wedding. The hot-towel finish alone was worth it. Faultless service.",
    service: "The Royal",
    when: "1 week ago",
  },
  {
    name: "Daniel R.",
    handle: "Visiting · UK",
    rating: 5,
    text: "Stumbled in for a beard trim, left with the best straight-razor experience of my life. Bookmarked.",
    service: "Beard Sculpt",
    when: "3 weeks ago",
  },
  {
    name: "Saugat K.C.",
    handle: "Lazimpat",
    rating: 5,
    text: "I bring my 8-year-old here. Patient, professional, and the chair is calmer than our living room.",
    service: "Heir Cut",
    when: "1 month ago",
  },
  {
    name: "Niraj Tamang",
    handle: "Jhamsikhel",
    rating: 5,
    text: "Consultation alone changed how I see my own face. These guys are artists, not barbers.",
    service: "Signature Cut",
    when: "1 month ago",
  },
  {
    name: "Rohit Adhikari",
    handle: "Baluwatar",
    rating: 5,
    text: "The booking flow is so clean I almost forgot it's a barbershop. Premium feel from start to finish.",
    service: "The Royal",
    when: "2 months ago",
  },
];

export const stats = [
  { value: "662", label: "Google Reviews" },
  { value: "4.9", label: "Average Rating", suffix: "★" },
  { value: "12K+", label: "Cuts Delivered" },
  { value: "8", label: "Years In Kathmandu" },
];

export const stylists = [
  { name: "Eros", role: "Founder · Master Stylist", years: 12 },
  { name: "Sandesh", role: "Senior Barber · Fades", years: 7 },
  { name: "Pranish", role: "Beard Specialist", years: 5 },
  { name: "Aakash", role: "Style Consultant", years: 4 },
];

export const todaysSlots = [
  "11:30", "12:15", "13:00", "14:30", "15:15", "16:00", "17:45", "18:30",
];

// Mock dashboard data
export const dashboardKpis = [
  { label: "Today's Bookings", value: "23", delta: "+18%" },
  { label: "Today's Revenue", value: "Rs 41,200", delta: "+24%" },
  { label: "New Customers", value: "9", delta: "+12%" },
  { label: "Avg Rating (30d)", value: "4.92", delta: "+0.04" },
];

export const upcomingBookings = [
  { time: "14:30", name: "Aayush S.", service: "Skin Fade", status: "Confirmed" },
  { time: "15:15", name: "Bikash M.", service: "The Royal", status: "Confirmed" },
  { time: "16:00", name: "Daniel R.", service: "Beard Sculpt", status: "Pending" },
  { time: "17:45", name: "Saugat K.", service: "Signature Cut", status: "Confirmed" },
  { time: "18:30", name: "Niraj T.", service: "The Royal", status: "Confirmed" },
];

export const revenueByService = [
  { name: "The Royal", value: 38 },
  { name: "Skin Fade", value: 24 },
  { name: "Signature Cut", value: 21 },
  { name: "Beard Sculpt", value: 12 },
  { name: "Heir Cut", value: 5 },
];

export const weeklyRevenue = [
  { day: "Mon", value: 28 }, { day: "Tue", value: 34 }, { day: "Wed", value: 41 },
  { day: "Thu", value: 38 }, { day: "Fri", value: 56 }, { day: "Sat", value: 72 }, { day: "Sun", value: 49 },
];
