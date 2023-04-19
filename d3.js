//Generate 100 random points within an svg canvas with height of 500 pixels and width of 500 pixels and Display points as a scatter plot using d3 js library

width = 500;
height = 500;
svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

data = d3.range(100).map(() => ({
  x: Math.random() * width,
  y: Math.random() * height,
}));

xScale = d3.scaleLinear()
  .domain([0, width])
  .range([0, width]);

yScale = d3.scaleLinear()
  .domain([0, height])
  .range([height, 0]);

pointsGroup = svg.append("g");

pointsGroup.selectAll("circle")
  .data(data)
  .join("circle")
  .attr("cx", d => xScale(d.x))
  .attr("cy", d => yScale(d.y))
  .attr("r", 5)
 
