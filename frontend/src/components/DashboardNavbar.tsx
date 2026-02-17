import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Activity, User, Bell, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Overview', href: '/home' },
  { label: 'Analytics', href: '/home' },
  { label: 'Reports', href: '/home' },
  { label: 'Settings', href: '/home' },
];

const DashboardNavbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/home')}>
            <div className="relative">
              <Activity className="w-6 h-6 text-primary" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
            <span className="font-display font-bold text-lg hidden sm:block">
              AWM <span className="text-muted-foreground font-normal">Dashboard</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-primary ${index === 0 ? 'text-primary' : 'text-muted-foreground'}`}
                onClick={(e) => { e.preventDefault(); navigate(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Icons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="h-8 w-px bg-border mx-2" />
            <Button variant="ghost" size="sm" className="gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <span className="hidden lg:inline text-sm font-medium">Admin User</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in bg-background">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 px-4"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setIsMobileOpen(false); 
                    navigate(link.href); 
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-border pt-4 px-4 flex gap-4">
                <Button variant="ghost" size="sm" className="justify-start gap-2 w-full">
                  <User className="w-4 h-4" />
                  Profile
                </Button>
                <Button variant="ghost" size="sm" className="justify-start gap-2 w-full">
                  <Settings className="w-4 h-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNavbar;
