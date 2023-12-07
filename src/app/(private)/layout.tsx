import { Props } from '@/types';

const PrivateLayout = ({ children }: Props) => {
  return <div>after login Layout {children}</div>;
};

export default PrivateLayout;
