export interface InfoItem {
  icon: React.ReactNode;
  text: string;
}

export interface QualificationItem {
  university: string;
  qualification: string;
  years: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  years: string;
}

export interface QualificationData {
  title: string;
  data: QualificationItem[];
}

export interface ExperienceData {
  title: string;
  data: ExperienceItem[]
}

export interface SkillDataItem {
  name: string;
}

export interface SkillData {
  title: string;
  data: SkillDataItem[];
}

export interface ToolsDataItem {
  imgPath: string;
}

export interface ToolsData {
  title: string;
  data: ToolsDataItem[];
}
