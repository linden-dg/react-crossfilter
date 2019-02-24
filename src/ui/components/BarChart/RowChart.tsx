import React, { Component } from "react";
import * as d3 from "d3";

type Props = {
  height: number;
  rightMargin: number;
  topMargin: number;
  width: number;
  leftMargin: number;
  data: { x: string | number; y: number; [key: string]: any }[];
  highlight: any;
  selection: any;
  axisFormat: any;
  labelFormat: any;
};

type State = {
  bars: { x: string | number; y: number; [key: string]: any }[];
  xScale: any;
  yScale: any;
  yZoom: any;
  textScale: any;
};

class RowChart extends Component<Props, State> {
  // TODO: fix method of creating stupid unique ID for SVG clip-path
  uid = Math.floor(Math.random() * 0xffff);
  yAxisRef = React.createRef<SVGGElement>();
  xAxisRef = React.createRef<SVGGElement>();
  xAxis = {};
  yAxis = {};

  constructor(props: Props) {
    super(props);

    this.state = {
      bars: [], // array of rects
      // d3 helpers
      xScale: d3.scaleLinear().range([0, props.width]),
      yScale: d3
        .scaleBand()
        .range([props.height, 0])
        .padding(0.15),
      // eslint-disable-next-line react/no-unused-state
      yZoom: d3
        .scaleLinear()
        .range([props.height, 0])
        .domain([props.height, 0]),
      textScale: d3
        .scaleLinear()
        .domain([15, 50])
        .range([12, 6])
        .clamp(true)
    };
    this.xAxis = d3
      .axisBottom()
      .ticks(5)
      .scale(this.state.xScale)
      .tickFormat(props.axisFormat);
    this.yAxis = d3.axisLeft().scale(this.state.yScale);
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (
      !nextProps.data ||
      !Array.isArray(nextProps.data) ||
      nextProps.width < 0
    )
      return null; // data hasn't been loaded yet so do nothing
    const {
      data,
      selection,
      height,
      width,
      highlight,
      labelFormat
    } = nextProps;
    const { xScale, yScale, yZoom } = prevState;

    // data has changed, so recalculate scale domains
    const yDomain = data.map(d => d.x);

    yScale.domain(yDomain);
    xScale.domain([0, d3.max(data, (d: any) => d.y)]);

    // if height of svg has changed
    if (yZoom.range()[0] !== height) {
      yZoom.range([height, 0]);
    }
    if (xScale.range()[1] !== width) {
      xScale.range([0, width]);
    }

    // if brush has selection then zoom chart to selection
    if (selection) {
      const originalRange = yZoom.range();

      // reverse selection to match domain
      yZoom.domain([selection[1], selection[0]]);

      yScale.range([yZoom(originalRange[0]), yZoom([originalRange[1]])]);
    } else {
      yScale.range([height, 0]);
    }

    // calculate x and y for each rectangle
    const bars = data.map(d => ({
      x: 0,
      y: yScale(d.x),
      width: xScale(d.y),
      height: yScale.bandwidth(),
      class: highlight(d) ? "highlight" : "",
      label: labelFormat(d.y)
    }));

    return { bars };
  }

  componentDidUpdate() {
    const { yScale, textScale } = this.state;
    // TODO: see if there's a better way of doing text scale
    const s = this.props.selection;
    const len = s
      ? yScale
          .domain()
          .filter(
            (d: any) =>
              s[0] - yScale.bandwidth() <= yScale(d) && yScale(d) <= s[1]
          ).length
      : yScale.domain().length;

    d3.select(this.xAxisRef.current).call(this.xAxis);
    d3.select(this.yAxisRef.current).call(this.yAxis);

    d3.select(this.yAxisRef.current)
      .selectAll("text")
      .style("font-size", textScale(len));
  }

  render() {
    return (
      this.state.bars.length > 0 && (
        <g
          transform={`translate(${this.props.leftMargin}, ${
            this.props.topMargin
          })`}
        >
          <g clipPath={`url(#clip-${this.uid})`}>
            {this.state.bars.map(d => (
              <g
                className={`${d.class} bar`}
                key={`${d.label}-${d.y}`}
                transform={`translate(0, ${d.y})`}
              >
                <rect height={d.height} width={d.width} />
                <text y={d.height / 2} x={d.width + 6}>
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
              transform={`translate(0, ${this.props.height})`}
            />
          </g>
          <defs>
            <clipPath id={`clip-${this.uid}`}>
              <rect
                x={-this.props.leftMargin}
                width={
                  this.props.width +
                  this.props.leftMargin +
                  this.props.rightMargin +
                  100
                }
                height={this.props.height}
              />
            </clipPath>
          </defs>
        </g>
      )
    );
  }
}

export default RowChart;
