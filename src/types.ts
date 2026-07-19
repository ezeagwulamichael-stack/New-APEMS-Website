/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  tabLabel: string;
  description: string;
  features: string[];
  metrics: {
    label: string;
    value: string | number;
    color: string;
  }[];
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatarUrl?: string;
  initials: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Sector {
  id: string;
  name: string; // Tab Label
  title: string; // Heading in detail
  description: string;
  imageTheme: "corporate" | "security" | "finance" | "public" | "associations" | "cooperatives" | "elections" | "entertainment" | "education" | "health" | "nonprofit";
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface WhyChooseCard {
  id: string;
  num: string;
  title: string;
  description: string;
  iconName: "message" | "shield" | "users" | "file-text";
}

export interface ParticipationMode {
  id: string;
  title: string;
  description: string;
  iconName: "smartphone" | "mail" | "dialpad" | "monitor";
  imageBg: string;
}

export interface ProcessStep {
  id: string;
  num: string;
  title: string;
  tag: string;
  description: string;
}
