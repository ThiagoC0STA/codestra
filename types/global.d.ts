// Declarações de tipos para módulos sem tipos

declare module "react-modal-video" {
  import React from "react";

  interface ModalVideoProps {
    channel: string;
    isOpen: boolean;
    videoId: string;
    onClose: () => void;
    ratio?: string;
    [key: string]: any;
  }

  const ModalVideo: React.FC<ModalVideoProps>;
  export default ModalVideo;
}

declare module "wowjs" {
  export class WOW {
    constructor(options?: any);
    init(): void;
  }
}

declare module "jarallax" {
  export function jarallax(element: string | HTMLElement, options?: any): void;
}

declare module "rellax" {
  export default class Rellax {
    constructor(element: string | HTMLElement, options?: any);
    destroy(): void;
  }
}

declare module "swiper" {
  export * from "swiper/modules";
  export * from "swiper/react";
}

declare module "tippy.js" {
  export function tippy(element: string | HTMLElement, options?: any): any;
}

declare module "typewriter-effect" {
  import React from "react";

  interface TypewriterProps {
    text: string | string[];
    speed?: number;
    delay?: number;
    [key: string]: any;
  }

  const Typewriter: React.FC<TypewriterProps>;
  export default Typewriter;
}

// Extensões para tipos existentes
declare global {
  interface Window {
    addScrollspy?: (
      defalutClass?: string,
      linksContainer?: string,
      activeClass?: string
    ) => void;
  }
}

// Tipos para dados do portfólio
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imgSrc: string;
  imgAlt: string;
  link: string;
  loopMuted?: boolean;
}

// Tipos para dados de blog
export interface BlogItem {
  id: number;
  delay: string;
  title: string;
  text: string;
  authorImg: string;
  authorName: string;
  date: string;
  imgSrc: string;
}

// Tipos para dados de pricing
export interface PricingItem {
  id: number;
  title: string;
  price: number | null;
  currency?: string;
  period?: string;
  features?: string[];
  disabledFeatures?: string[];
  popular?: boolean;
  link?: string;
}

// Tipos para dados de testimonials
export interface TestimonialItem {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  img: string;
}

// Tipos para dados de team
export interface TeamItem {
  id: number;
  name: string;
  position: string;
  img: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

// Tipos para dados de services
export interface ServiceItem {
  id: number;
  title: string;
  text: string;
  icon: string;
  link: string;
}

// Tipos para dados de features
export interface FeatureItem {
  id: number;
  title: string;
  text: string;
  icon: string;
}

// Tipos para dados de facts
export interface FactItem {
  id: number;
  number: number;
  title: string;
  text: string;
}

// Tipos para dados de awards
export interface AwardItem {
  id: number;
  title: string;
  text: string;
  img: string;
}

// Tipos para dados de brands
export interface BrandItem {
  id: number;
  img: string;
  link: string;
}

// Tipos para dados de categories
export interface CategoryItem {
  id: number;
  name: string;
  count: number;
}

// Tipos para dados de comments
export interface CommentItem {
  id: number;
  author: string;
  date: string;
  content: string;
  img: string;
}

// Tipos para dados de contact
export interface ContactItem {
  id: number;
  title: string;
  text: string;
  icon: string;
  link: string;
}

// Tipos para dados de education
export interface EducationItem {
  id: number;
  title: string;
  text: string;
  date: string;
  link: string;
}

// Tipos para dados de experience
export interface ExperienceItem {
  id: number;
  title: string;
  text: string;
  date: string;
  link: string;
}

// Tipos para dados de skills
export interface SkillItem {
  id: number;
  name: string;
  percentage: number;
}

// Tipos para dados de steps
export interface StepItem {
  id: number;
  title: string;
  text: string;
  icon: string;
}

// Tipos para dados de tags
export interface TagItem {
  id: number;
  name: string;
  count: number;
}

// Tipos para dados de footer
export interface FooterItem {
  id: number;
  title: string;
  links: {
    id: number;
    name: string;
    link: string;
  }[];
}

// Tipos para dados de preview
export interface PreviewItem {
  id: number;
  title: string;
  text: string;
  img: string;
  link: string;
}

// Tipos para dados de gallery
export interface GalleryItem {
  id: number;
  img: string;
  title: string;
  category: string;
}

// Tipos para dados de archeve
export interface ArcheveItem {
  id: number;
  title: string;
  text: string;
  date: string;
  link: string;
}
