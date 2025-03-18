import Link from "next/link";

interface NavLinkProps {
    href: string;
    icon: React.ReactNode;
    label?: string;
  }
  
  export default function NavLink({ href, icon, label }: NavLinkProps) {
    return (
      <Link
        href={href}
        className="flex items-center gap-2 text-sm text-white px-3 sm:px-1 py-1 rounded-xl border border-transparent transition duration-500 hover:bg-white/10 hover:border-white/20"
      >
        <span className="text-xl">{icon}</span>
        <span className="hidden sm:inline">{label}</span>
      </Link>
    );
  }
  