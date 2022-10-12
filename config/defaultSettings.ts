import { Settings as LayoutSettings } from '@ant-design/pro-components';
import { PROJECT_TITLE } from '../src/constants/global_constants';

/**
 * @name
 */
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  colorPrimary: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  pwa: false,
  logo: 'logo.svg',
  splitMenus: false,
  siderMenuType: 'sub',
  title: PROJECT_TITLE,
};

export default Settings;
