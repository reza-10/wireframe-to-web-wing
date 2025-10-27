import { Link, useLocation } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Work", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 border-r border-sidebar-border bg-sidebar-background flex flex-col">
      <div className="p-8">
        <Link to="/" className="block">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              R
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none">Reza</h1>
              <p className="text-sm text-muted-foreground">UX Designer</p>
            </div>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-8">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block py-2 text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-primary font-medium border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-8 space-y-4">
        <div className="flex gap-4">
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            Dribbble <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            LinkedIn <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()}. All Rights Reserved to Reza.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
