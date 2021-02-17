import {FooterLayout, NavbarLayout, SidePanelLayout, ToolbarLayout} from './layouts';

export interface Layout {
  style: string;
  width: 'fullWidth' | 'boxed';
  toolbar: ToolbarLayout;
  footer: FooterLayout;
  navbar: NavbarLayout;
  sidePanel: SidePanelLayout;
}
