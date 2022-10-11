import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import './index.less';

import packageInfo from '../../../package.json';

const Footer: React.FC = () => {
  const intl = useIntl();
  const companyName = intl.formatMessage({
    id: 'app.copyright.produced',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter copyright={`${currentYear} ${companyName} version: ${packageInfo.version}`} />
  );
};

export default Footer;
