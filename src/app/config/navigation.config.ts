import { NavigationNode } from '@adming/models/navigation.model';

export const navigation: NavigationNode[] = [
  {
    label: 'Home',
    icon: 'home',
    link: 'home',
    tooltip: 'Home page.'
  },
  {
    label: 'Menu Levels',
    icon: 'list-ul',
    tooltip: 'Level 1.',
    children: [
      {
        label: 'Level 2',
        icon: 'smile',
        tooltip: 'Level 2',
        children: [
          {
            label: 'Level 3',
            icon: 'smile',
            tooltip: 'Level 3'
          }
        ]
      }
    ]
  },
  {
    label: 'Form',
    icon: 'edit',
    tooltip: 'Form component.',
    children: [
      {
        label: 'Reactive Form',
        icon: 'edit',
        link: 'form',
        tooltip: 'Default form.'
      },
      {
        label: 'Register User',
        icon: 'user',
        link: 'user-registration-form',
        tooltip: 'Add a new user.'
      },
      {
        label: 'Form For Test',
        icon: 'cat',
        link: 'test-form',
        tooltip: '???'
      }
    ]
  },
  {
    label: 'Table',
    icon: 'table',
    tooltip: 'Table component.',
    children: [
      {
        label: 'Common Tables',
        icon: 'table',
        link: 'common-table-list',
        tooltip: 'Default table list.'
      },
      {
        label: 'Collection Table',
        icon: 'table',
        link: 'collection-table-showcase',
        tooltip: 'Collection Table'
      }
    ]
  },
  {
    label: 'Config',
    icon: 'cog',
    tooltip: 'Configuration'
  }
];
