import React from 'react';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export default BarChart;
