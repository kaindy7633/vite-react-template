import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import './index.less';

const Footer: React.FC = () => {
  const intl = useIntl();
  const companyName = intl.formatMessage({
    id: 'app.copyright.produced',
  });

  const currentYear = new Date().getFullYear();

  return <DefaultFooter copyright={`${currentYear} ${companyName}`} />;
};

export default Footer;
