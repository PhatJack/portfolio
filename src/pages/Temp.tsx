import React, { useState, useCallback } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
const ReactGridLayout = WidthProvider(RGL);
const BasicLayout = ({
  className = "layout",
  items = 20,
  rowHeight = 30,
  onLayoutChange = () => {},
  cols = 12,
  ...otherProps
}) => {
  // Helper function to generate layout
  const generateLayout = useCallback(() => {
    return _.map(new Array(items), (item, i) => {
      const y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
      };
    });
  }, [items]);

  // State management using useState hook
  const [layout, setLayout] = useState(generateLayout());

  // Helper function to generate DOM elements
  const generateDOM = useCallback(() => {
    return _.map(_.range(items), (i) => (
      <div key={i}>
        <span className="text">{i}</span>
      </div>
    ));
  }, [items]);

  // Layout change handler
  const handleLayoutChange = useCallback(
    (newLayout) => {
      setLayout(newLayout);
      onLayoutChange(newLayout);
    },
    [onLayoutChange]
  );

  return (
    <div className="grid-layout-container">
      <ReactGridLayout
        className={className}
        layout={layout}
        onLayoutChange={handleLayoutChange}
        rowHeight={rowHeight}
        cols={cols}
        {...otherProps}
      >
        {generateDOM()}
      </ReactGridLayout>
    </div>
  );
};

export default BasicLayout;
