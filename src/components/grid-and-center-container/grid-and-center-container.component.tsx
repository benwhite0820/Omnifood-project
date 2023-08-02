import React from 'react';
import './grid-and-center-container.style.scss';

type Props =
    | {
          children: React.ReactNode;
          className?: string;
          grid?: false;
          container?: boolean;
          columns?: never;
          verticalCenter?: never;
      }
    | {
          children: React.ReactNode;
          className?: string;
          grid: true;
          container?: boolean;
          columns: 1 | 2 | 3 | 4;
          verticalCenter: boolean;
      };

const GridAndCenterContainer = ({
    children,
    columns,
    className = '',
    grid = false,
    container = false,
    verticalCenter = false,
}: Props) => {
    const gridColumns = {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
    };

    return (
        <div
            className={`${container ? 'container' : ''} ${
                grid ? 'grid-container' : ''
            } ${verticalCenter ? 'gird-vertical-center' : ''} ${className}`}
            style={columns ? gridColumns : {}}
        >
            {children}
        </div>
    );
};

export default GridAndCenterContainer;
