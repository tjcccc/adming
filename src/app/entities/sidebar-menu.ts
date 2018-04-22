export class SidebarMenu {
  id: number;
  label: string;
  level: number;
  icon: string;
  routerLink: string;
  nextLevel: SidebarMenu[];
}
