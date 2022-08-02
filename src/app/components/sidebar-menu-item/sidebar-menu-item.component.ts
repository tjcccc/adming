import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { NavigationNode } from '../../models/navigation-node.model';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { fas, faAngleDown as NAVIGATION_ICON_DEFAULT, IconDefinition,  } from '@fortawesome/free-solid-svg-icons';

const LEVEL_STYLE_PREFIX = 'level-';

@Component({
  selector: 'adming-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.scss']
})
export class SidebarMenuItemComponent implements OnInit {

  @Input() node?: NavigationNode;
  @Input() level: number = 1;
  @Input() noLink: boolean = false;
  @Input() hasChildren: boolean = false;
  @Input() parentNode?: NavigationNode;

  isExpanded = false;
  isSelected = false;
  isHidden = false;
  stateStyle: { [index: string]: boolean } = {};
  collapseIcon: IconDefinition = NAVIGATION_ICON_DEFAULT;
  collapseIconRotate?: RotateProp;

  constructor(private route: ActivatedRoute, private router: Router, private faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIconPacks(fas);
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSelected = this.matchPath(event.url);
        this.setStateStyle();
      }
    });
    this.setStateStyle();
  }

  onClick(): void {
    this.isExpanded = !this.isExpanded;
    this.setNavIconRotation();
  };

  matchPath(url: string) {
    return this.node?.link !== '' && url.includes(this.node?.link as string);
  }

  setStateStyle(): void {
    this.stateStyle = {
      [LEVEL_STYLE_PREFIX + this.level]: true,
      expanded: this.isExpanded,
      selected: this.isSelected,
      hidden: this.isHidden
    }
  };

  setNavIconRotation(): void {
    if (this.hasChildren && this.collapseIcon) {
      this.collapseIconRotate = this.isExpanded ? 180 : undefined;
    }
  }

}
