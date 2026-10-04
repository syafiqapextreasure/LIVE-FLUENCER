export type Language = 'bm' | 'en';

export interface PricingPlan {
  id: string;
  name: string;
  priceRm: number;
  minutes: number;
  ratePerMin: string;
  isRecommended?: boolean;
  isProvisional?: boolean;
  features: string[];
}

export interface AffiliateTierCommission {
  planId: string;
  planName: string;
  priceRm: number;
  commissionRm: number;
  eligibleForBonus: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'viewer' | 'host' | 'system';
  senderName: string;
  text: string;
  time: string;
  tag?: 'harga' | 'penghantaran' | 'hadiah' | 'am';
  giftName?: string;
  diamondCount?: number;
}

export interface HostPersona {
  id: string;
  nameBm: string;
  nameEn: string;
  descBm: string;
  descEn: string;
  greetingSampleBm: string;
  greetingSampleEn: string;
}
