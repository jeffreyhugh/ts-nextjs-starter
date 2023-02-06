import { ReactNode } from 'react';
import {
  TbAlertOctagon,
  TbAlertTriangle,
  TbCircleCheck,
  TbInfoCircle,
} from 'react-icons/tb';

import clsxm from '@/lib/clsxm';

export const Callout = ({
  type,
  icon,
  children,
}: {
  type?: '' | 'info' | 'success' | 'warning' | 'error';
  icon?: ReactNode;
  children: ReactNode;
}) => (
  <div
    className={clsxm(
      'alert',
      type &&
        {
          '': '',
          info: 'alert-info',
          success: 'alert-success',
          warning: 'alert-warning',
          error: 'alert-error',
        }[type]
    )}
  >
    <div>
      {icon ||
        (type &&
          {
            '': <></>,
            info: <TbInfoCircle className='mr-2 h-6 w-6 flex-shrink-0' />,
            success: <TbCircleCheck className='mr-2 h-6 w-6 flex-shrink-0' />,
            warning: <TbAlertTriangle className='mr-2 h-6 w-6 flex-shrink-0' />,
            error: <TbAlertOctagon className='mr-2 h-6 w-6 flex-shrink-0' />,
          }[type])}
      <span className='m-0'>{children}</span>
    </div>
  </div>
);
