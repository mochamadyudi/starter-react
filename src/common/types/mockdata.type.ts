// ─── Navigation ─────────────────────────────────────────────
export interface NavItem {
  key: string;
  label: string;
  icon: string;
  badge?: string | number;
  badgeColor?: "primary" | "success" | "warning" | "danger" | "secondary";
  section: string;
}

// ─── Stat Cards ──────────────────────────────────────────────
export interface StatCard {
  id: string;
  label: string;
  value: string;
  sub: string;
  trend: "up" | "down" | "neutral";
  trendValue: string;
  icon: string;
  gradient: "indigo" | "rose" | "sky" | "amber";
}

// ─── Wajib Pajak ─────────────────────────────────────────────
export type WPCategory = "OP" | "PN" | "Badan";
export type TaxStatus = "Lunas" | "Belum" | "Proses";
export type PTKPStatus = "TK/0" | "TK/1" | "K/0" | "K/1" | "K/2" | "K/3";

export interface WajibPajak {
  id: string;
  name: string;
  npwp: string;
  category: WPCategory;
  company: string;
  grossIncome: number;
  ptkp: PTKPStatus;
  taxDue: number;
  status: TaxStatus;
  period: string;
  avatarColor: string;
  registeredAt: string;
}

// ─── Setoran ─────────────────────────────────────────────────
export interface Setoran {
  id: string;
  wpName: string;
  type: string;
  amount: number;
  sspNo: string;
  date: string;
  color: string;
}

// ─── Deadline ────────────────────────────────────────────────
export type DeadlineUrgency = "kritis" | "segera" | "normal";

export interface Deadline {
  id: string;
  day: number;
  month: string;
  title: string;
  sub: string;
  urgency: DeadlineUrgency;
}

// ─── Aktivitas ───────────────────────────────────────────────
export interface Activity {
  id: string;
  icon: string;
  iconBg: string;
  text: string;
  actor: string;
  timeAgo: string;
}

// ─── Chart ───────────────────────────────────────────────────
export interface MonthlyData {
  month: string;
  pph21: number;
  pphBadan: number;
}

// ─── Target Progress ─────────────────────────────────────────
export interface TaxTarget {
  id: string;
  label: string;
  realized: number;
  target: number;
  color: string;
  textColor: string;
}

// ─── Management Menu ─────────────────────────────────────────
export interface MgmtMenu {
  id: string;
  icon: string;
  label: string;
  count: string;
  iconBg: string;
  borderColor: string;
}

// ─── Donut Data ──────────────────────────────────────────────
export interface DonutSegment {
  label: string;
  count: number;
  pct: number;
  color: string;
  chipColor: "success" | "warning" | "danger";
}
