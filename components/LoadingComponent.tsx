import React from 'react';
import { Skeleton, Space } from 'antd';

const LoadingComponent: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 pb-8">
      <div className="bg-white shadow-md mt-2 rounded-lg p-4 ">
        <Skeleton.Input
          active={true}
          size={'default'}
          block={true}
          className="pb-3"
        />
        <Skeleton.Input
          active={true}
          size={'default'}
          block={true}
          className="pb-3"
        />
        <Skeleton.Input
          active={true}
          size={'default'}
          block={true}
          className="pb-3"
        />
      </div>

      <div className="bg-white shadow-md mt-2 rounded-lg p-4 ">
        <Skeleton.Input
          active={true}
          size={'default'}
          block={true}
          className="pb-3"
        />
        <Skeleton.Input
          active={true}
          size={'default'}
          block={true}
          className="pb-3"
        />
        <Skeleton.Input
          active={true}
          size={'default'}
          block={true}
          className="pb-3"
        />
        <Skeleton.Input
          active={true}
          size={'default'}
          block={true}
          className="pb-3"
        />
        <Skeleton.Input
          active={true}
          size={'default'}
          block={true}
          className="pb-3"
        />
        <Skeleton.Input
          active={true}
          size={'default'}
          block={true}
          className="pb-3"
        />
        <Skeleton.Input
          active={true}
          size={'default'}
          block={true}
          className="pb-3"
        />
      </div>
    </div>
  );
};

export default LoadingComponent;
