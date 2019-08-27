export interface NavigationNode {
  label?: string;
  icon?: any;
  navIcon?: any;
  link?: string;
  tooltip?: string;
  hidden?: boolean;
  children?: NavigationNode[];
}
