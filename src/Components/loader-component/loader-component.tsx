import * as React from 'react';
import classes from './loader-component.module.scss';

export const LoaderComponent: React.FC = () => {
  return (
    <div className={classes.loader}>
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
