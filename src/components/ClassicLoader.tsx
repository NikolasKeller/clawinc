import { cn } from "../lib/utils";

export default function ClassicLoader({ className }: { className?: string }) {
    return (
        <div className={cn("border-white/20 flex h-10 w-10 animate-spin items-center justify-center rounded-full border-4 border-t-white", className)}></div>
    );
}
