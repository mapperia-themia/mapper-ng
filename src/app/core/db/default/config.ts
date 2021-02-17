import {Config} from '../../../helpers/types';

export const config: Config = {
  colorTheme: 'theme-default',
  layout: {
    style: 'vertical-layout-1',
    width: 'fullWidth',
    navbar: {
      primaryBackground: 'fuse-navy-700',
      secondaryBackground: 'fuse-navy-900',
      folded: false,
      hidden: false,
      position: 'left',
      variant: 'vertical-style-1'
    },
    toolbar: {
      customBackgroundColor: false,
      background: 'fuse-white-500',
      hidden: false,
      position: 'below-static'
    },
    footer: {
      customBackgroundColor: true,
      background: 'fuse-navy-900',
      hidden: false,
      position: 'below-fixed'
    },
    sidePanel: {
      hidden: false,
      position: 'right'
    }
  }
};
