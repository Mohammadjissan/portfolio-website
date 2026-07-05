import { Download } from "lucide-react";

export default function ResumeButton() {
  return (
    <a
      href="/Mohammadjissan_Fullstack_Resume.pdf"
      download="Mohammadjissan_Kharadi_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-2 rounded-full 
                 bg-black from-violet-500 to-purple-600
                 text-white text-sm font-medium
                 hover:from-violet-600 hover:to-purple-700
                 transition-all duration-300 shadow-lg shadow-purple-500/25
                 hover:shadow-purple-500/40 hover:scale-105"
    >
      Resume
      <Download size={16} />
    </a>
  );
}