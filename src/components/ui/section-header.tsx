import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ 
  badge, 
  title, 
  description, 
  align = "center",
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "max-w-3xl mb-16",
      align === "center" ? "mx-auto text-center" : "text-left",
      className
    )}>
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest text-primary mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gradient">
        {title}
      </h2>
      <p className="text-lg text-zinc-400 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}
