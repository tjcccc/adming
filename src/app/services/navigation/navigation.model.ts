export interface NavigationNode {
  label?: string;
  icon?: string;
  link?: string;
  tooltip?: string;
  hidden?: boolean;
  children?: NavigationNode[];
}

// export interface CurrentNode {
//   link: string;
//   node: NavigationNode;
// }
