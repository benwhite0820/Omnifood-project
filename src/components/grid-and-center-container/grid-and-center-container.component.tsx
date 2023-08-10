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
    const [currentWidth, setCurrentWidth] = React.useState(window.innerWidth);
    const resizeTimerRef = React.useRef<number | null>(null);

    const getGridResponsiveColumns = () => {
        if (currentWidth > 700) return columns;
        if (currentWidth < 700 && currentWidth > 544) return 2;
        return 1;
    };

    const gridColumns = {
        gridTemplateColumns: `repeat(${getGridResponsiveColumns()}, 1fr)`,
    };

    React.useEffect(() => {
        const handleResize = () => {
            if (resizeTimerRef.current) {
                clearTimeout(resizeTimerRef.current);
            }
            resizeTimerRef.current = window.setTimeout(() => {
                setCurrentWidth(window.innerWidth);
            }, 1000);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (resizeTimerRef.current) {
                clearTimeout(resizeTimerRef.current);
            }
        };
    }, []);

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
