import React from 'react';
import { cn } from "../lib/utils";
import {
    Calendar,
    Mail,
    MessageSquare,
    ClipboardList,
    Calculator,
    Share2,
    FileSignature,
    Search,
    UserCheck,
    Target,
    Briefcase,
    Bell,
    FileText,
    Users,
    Globe,

    Building2
} from 'lucide-react';

const USE_CASES = [
    { icon: Calendar, label: "Schedule meetings" },
    { icon: Mail, label: "Summarize emails" },
    { icon: MessageSquare, label: "Draft replies" },
    { icon: ClipboardList, label: "Meeting notes" },
    { icon: Calculator, label: "Run payroll" },
    { icon: Share2, label: "Social posts" },
    { icon: FileSignature, label: "Write contracts" },
    { icon: Search, label: "Competitor research" },
    { icon: UserCheck, label: "Screen leads" },
    { icon: Target, label: "Track OKRs" },
    { icon: Bell, label: "Monitor news" },
    { icon: Briefcase, label: "Job descriptions" },
    { icon: Building2, label: "Company structure" },
    { icon: FileText, label: "Financial reports" },
    { icon: Users, label: "Team access" },
    { icon: Globe, label: "Market trends" },

];

interface UseCaseCloudProps {
    onSelect?: (text: string) => void;
}

export const UseCaseCloud: React.FC<UseCaseCloudProps> = () => {
    return (
        <div className="w-full max-w-4xl px-4 mt-8 fade-in animate-in slide-in-from-bottom-5 duration-700 delay-200">
            <div className="flex flex-wrap justify-center gap-2">
                {USE_CASES.map((useCase, index) => (
                    <div
                        key={index}
                        className={cn(
                            "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300",
                            "bg-orange-50 border border-orange-200 text-[#ff4f00]",
                            "hover:border-orange-400 hover:bg-orange-100 cursor-default shadow-sm"
                        )}
                    >
                        <useCase.icon className="w-3.5 h-3.5 text-[#ff4f00]" />
                        <span>{useCase.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
