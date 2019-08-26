export interface NavigationNode {
  label?: string;
  icon?: any;
  link?: string;
  tooltip?: string;
  hidden?: boolean;
  children?: NavigationNode[];
}
