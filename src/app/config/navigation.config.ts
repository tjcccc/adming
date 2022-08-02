import { NavigationNode } from '../models/navigation-node.model';

export const dashboardDemoNode: NavigationNode = {
  id: 0,
  label: 'Dashboard',
  icon: 'home',
  link: '/dashboard-demo',
  tooltip: 'Dashboard'
};

export const menuLevelsDemoNode: NavigationNode = {
  id: 1,
  label: 'Menu Levels',
  icon: 'list-ul',
  link: '',
  tooltip: 'Menu Levels'
}

export const level2DemoNode: NavigationNode = {
  id: 101,
  label: 'Level 2',
  icon: 'smile',
  link: '',
  tooltip: 'Level 2'
}

export const level3DemoNode: NavigationNode = {
  id: 10101,
  label: 'Level 3',
  icon: 'smile',
  link: '',
  tooltip: 'Level 3'
}

export const componentsDemoNode: NavigationNode = {
  id: 2,
  label: 'Components',
  icon: 'cubes',
  link: '/components-demo',
  tooltip: 'Misc Components'
}

export const formsDemoNode: NavigationNode = {
  id: 3,
  label: 'Forms',
  icon: 'edit',
  link: '/forms-demo',
  tooltip: 'Forms'
}

export const tablesDemoNode: NavigationNode = {
  id: 4,
  label: 'Tables',
  icon: 'table',
  link: '/tables-demo',
  tooltip: 'Tables'
}
