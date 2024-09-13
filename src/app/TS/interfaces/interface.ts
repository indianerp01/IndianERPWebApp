export interface FAQItemProps {
  question: string;
  answer: string;
}

export interface MiniTechProp {
  title: string;
  icon: JSX.Element;
}

export interface Titlee {
  title: string;
}
export interface SoftwareInfoProp {
  src: string;
  name: string;
}

export interface FeatureData {
  icon: JSX.Element;
  title: string;
}

export interface TabProps {
  tabName: string;
  isActive: boolean;
  handleClick: (tabName: string) => void;
}

export interface SectionProps {
  title: string;
  description: string;
  activeTab: string;
  content: React.ReactNode;
}

export interface FeatureItemProp {
  title: String;
  icon: JSX.Element;
}

export interface HeroProps { 
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
}

export interface HeroHeader { 
  title: string;
  description: string;
  link: string;

}