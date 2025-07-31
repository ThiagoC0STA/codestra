// Tipos globais para o projeto

export interface MenuItem {
  id: string;
  title: string;
  href: string;
  children?: MenuItem[];
}

export interface Home1Props {
  onePage?: boolean;
  dark?: boolean;
}

export interface HeaderProps {
  links: MenuItem[];
}

export interface FooterProps {
  dark?: boolean;
}

export interface ParallaxContainerProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;
}

export interface AnimatedTextProps {
  text: string;
}

export interface HeroProps {
  dark?: boolean;
}

// Tipos para dados do menu
export interface MenuData {
  menuItemsDark: MenuItem[];
  menuItemsLight: MenuItem[];
}

// Tipos para componentes de portfólio
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

// Tipos para componentes de blog
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  link: string;
}

// Tipos para componentes de serviços
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

// Tipos para componentes de equipe
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

// Tipos para componentes de depoimentos
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating?: number;
}
