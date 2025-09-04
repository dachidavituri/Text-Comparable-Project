import { Check, Type, Mic, AudioLines, FileText, Info } from "lucide-react";

export const navItems = [
  { to: "/", label: "მთავარი", icon: <Check size={18} /> },
  { to: "/compare", label: "ტექსტის შედარება", icon: <Type size={18} /> },
  { to: "/speech", label: "ხმა → ტექსტი", icon: <Mic size={18} /> },
  { to: "/tts", label: "ტექსტი → ხმა", icon: <AudioLines size={18} /> },
  { to: "/pdf", label: "PDF კონვერტაცია", icon: <FileText size={18} /> },
  { to: "/about", label: "ჩვენს შესახებ", icon: <Info size={18} /> },
];
