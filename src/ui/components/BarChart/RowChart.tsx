import React, { Component } from "react";
import * as d3 from "d3";
import styles from "./RowChart.module.scss";
import { uuid } from "../../../utils/chartUtils";

type DataItem = {
  x: string | number;
  y: number;
  [key: string]: any;
};

type ChartMargin = {
  left: number;
  top: number;
  bottom: number;
  right: number;
  innerWidth?: number;
  innerHeight?: number;
};

type Props = {
  data: DataItem[];
  height: number;
  width: number;
  margin?: ChartMargin;
  selection?: any;
  highlight?: (d: DataItem) => boolean | undefined;
  axisFormat?: any;
  labelFormat?: (d: DataItem) => string | number | undefined;
  valueFormat?: (d: DataItem) => string | number | undefined;
};

type State = {
  bars: DataItem[];
  xScale: any;
  yScale: any;
  yZoom: any;
  textScale: any;
  margin: ChartMargin;
};

const defaultProps = {
  margin: {
    left: 10,
    right: 60,
    top: 10,
    bottom: 0,
    innerWidth: 300,
    innerHeight: 300
  },
  labelFormat: (d: DataItem) => d.x,
  valueFormat: (d: DataItem) => d.y,
  axisFormat: (d: DataItem) => d.x,
  highlight: () => false
};

class RowChart extends Component<Props, State> {
  static defaultProps = defaultProps;
  // TODO: fix method of creating stupid unique ID for SVG clip-path
  uid = uuid();
  yAxisRef = React.createRef<SVGGElement>();
  xAxisRef = React.createRef<SVGGElement>();
  xAxis: d3.Axis<d3.AxisDomain>;
  yAxis: d3.Axis<d3.AxisDomain>;

  constructor(props: Props) {
    super(props);
    const margin = {
      ...defaultProps.margin,
      ...props.margin
    };
    const innerHeight = (margin.innerHeight =
      props.height - margin.top - margin.bottom);
    const innerWidth = (margin.innerWidth =
      props.width - margin.left - margin.right);

    this.state = {
      bars: [], // array of rects
      // d3 helpers
      xScale: d3.scaleLinear().range([0, innerWidth]),
      yScale: d3
        .scaleBand()
        .range([innerHeight, 0])
        .padding(0.15),
      // eslint-disable-next-line react/no-unused-state
      yZoom: d3
        .scaleLinear()
        .range([innerHeight, 0])
        .domain([innerHeight, 0]),
      textScale: d3
        .scaleLinear()
        .domain([15, 50])
        .range([12, 6])
        .clamp(true),
      margin: margin
    };
    this.xAxis = d3
      .axisBottom(this.state.xScale)
      .ticks(5)
      .tickFormat(props.axisFormat);
    this.yAxis = d3.axisLeft(this.state.yScale);
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (
      !nextProps.data ||
      !Array.isArray(nextProps.data) ||
      nextProps.width < 0
    )
      return null; // data hasn't been loaded yet so do nothing

    const { data, selection, height, width, margin: marginProps } = nextProps;
    const highlight = nextProps.highlight || defaultProps.highlight;
    const labelFormat = nextProps.labelFormat || defaultProps.labelFormat;
    const valueFormat = nextProps.valueFormat || defaultProps.valueFormat;

    const { xScale, yScale, yZoom, margin: marginState } = prevState;

    const margin = {
      ...marginState,
      ...marginProps
    };
    const innerHeight = (margin.innerHeight =
      height - margin.top - margin.bottom);
    const innerWidth = (margin.innerWidth = width - margin.left - margin.right);

    // data has changed, so recalculate scale domains
    const yDomain = data.map(d => d.x);

    yScale.domain(yDomain);
    xScale.domain([0, d3.max(data, (d: DataItem) => d.y)]);

    // if height of svg has changed
    if (yZoom.range()[0] !== innerHeight) {
      yZoom.range([innerHeight, 0]);
    }
    if (xScale.range()[1] !== innerWidth) {
      xScale.range([0, innerWidth]);
    }

    // if brush has selection then zoom chart to selection
    if (selection) {
      const originalRange = yZoom.range();

      // reverse selection to match domain
      yZoom.domain([selection[1], selection[0]]);

      yScale.range([yZoom(originalRange[0]), yZoom([originalRange[1]])]);
    } else {
      yScale.range([innerHeight, 0]);
    }

    // calculate x and y for each rectangle
    const bars = data.map(d => ({
      x: 0,
      y: yScale(d.x),
      width: xScale(d.y),
      height: yScale.bandwidth(),
      class: highlight(d) ? "highlight" : "",
      label: labelFormat(d),
      valueLabel: valueFormat(d)
    }));

    return { bars, margin };
  }

  componentDidUpdate() {
    const { yScale, textScale } = this.state;
    // TODO: see if there's a better way of doing text scale
    const s = this.props.selection;
    const len = s
      ? yScale
          .domain()
          .filter(
            (d: DataItem) =>
              s[0] - yScale.bandwidth() <= yScale(d) && yScale(d) <= s[1]
          ).length
      : yScale.domain().length;


    // @ts-ignore
    // d3.select(this.xAxisRef.current).call(this.xAxis);
    // @ts-ignore
    // d3.select(this.yAxisRef.current).call(this.yAxis);

    d3.select(this.yAxisRef.current)
      .selectAll("text")
      .style("font-size", textScale(len));
  }

  render() {
    const { width, height } = this.props;
    const { bars, margin } = this.state;
    return (
      <svg width={width} height={height} className={styles["row-chart"]}>
        {bars.length > 0 && (
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <g clipPath={`url(#clip-${this.uid})`}>
              {bars.map(d => (
                <g
                  className={`${d.class} ${styles.bar}`}
                  key={`${d.label}-${d.y}`}
                  transform={`translate(0, ${d.y})`}
                >
                  <rect height={d.height} width={d.width} />
                  <text y={d.height / 2} x={d.width + 6}>
                    {d.valueLabel}
                  </text>
                  <text y={d.height / 2} x={6} className={styles["bar-label"]}>
                    {d.label}
                  </text>
                </g>
              ))}
              <g ref={this.yAxisRef} className="axis axis-y" />
            </g>
            <g>
              <g
                ref={this.xAxisRef}
                className="axis axis-x"
                transform={`translate(0, ${margin.innerHeight})`}
              />
            </g>
            <defs>
              <clipPath id={`clip-${this.uid}`}>
                <rect
                  x={-margin.left}
                  width={width + 100}
                  height={margin.innerHeight}
                />
              </clipPath>
            </defs>
          </g>
        )}
      </svg>
    );
  }
}

export default RowChart;
