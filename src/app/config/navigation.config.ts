import { NavigationNode } from '@adming/models/navigation.model';

export const navigation: NavigationNode[] = [
  {
    label: 'Home',
    icon: 'home',
    link: 'home',
    tooltip: 'Home page.'
  },
  {
    label: 'Collection',
    icon: 'list-ul',
    tooltip: 'Collection component.',
    children: [
      {
        label: 'Common',
        icon: 'list-ul',
        link: 'collection',
        tooltip: 'Common collection.'
      },
      {
        label: 'Level-2',
        icon: 'smile',
        tooltip: 'Level 2',
        children: [
          {
            label: 'Level-3',
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
    label: 'table',
    icon: 'table',
    tooltip: 'Table component.',
    children: [
      {
        label: 'Common Table',
        icon: 'table',
        link: 'table',
        tooltip: 'Default table.'
      }
    ]
  },
  {
    label: 'Config',
    icon: 'cog',
    tooltip: 'Configuration'
  }
];
