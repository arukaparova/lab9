
//Load a titanic.csv dataset as a csv file using D3 JS

//Generate a pie chart for age distribution for passengers

parseInt(data [0].Age / 10);

function pie (){    
    var data = [1.1,2.2,4.46,2.12,1.36,5.002445,4.1242];

// Selecting SVG using d3.select()
var svg = d3.select("svg");

let g = svg.append("g")
       .attr("transform", "translate(150,120)");
  
// Creating Pie generator
var pie = d3.pie();

// Creating arc
var arc = d3.arc()
            .innerRadius(0)
            .outerRadius(100);

// Grouping different arcs
var arcs = g.selectAll("arc")
            .data(pie(data))
            .enter()
            .append("g");

// Appending path 
arcs.append("path")
    .attr("fill", (data, i)=>{
        let value=data.data;
        return d3.schemeSet3[i];
    })
    .attr("d", arc);
}
 
function pieChart (){
    var svg = d3.select("svg"),
    width = svg.attr("width"),
    height = svg.attr("height"),
    radius = Math.min(width, height) / 2.5;
    
    var g = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal([
        'gray', 'green', 'brown', 'orange', 'yellow', 'red', 'purple'
    ]);
    
    var pie = d3.pie().value(function(d) { 
        return d.percent * 100; 
    });
    
    var path = d3.arc()
        .outerRadius(radius - 10).innerRadius(20);
    
    var label = d3.arc()
        .outerRadius(radius).innerRadius(radius - 80);
    
        d3.csv("titanic.csv").then (function (data){
          arc = g.selectAll ('.arc')
                .data (pie (data))
                .enter ().append ('g')
                .attr ('class','arc');
          arc.append ('path')
              .attr ('d',path)
              .attr ('fill', function(d) {console.log ("log:"+d.data.name);return color(d.data.name); });      

          arc.append("text").attr("transform", function(d) { 
            return "translate(" + label.centroid(d) + ")"; 
        })         
        .text(function(d) { return d.data.name; })
    });
    svg.append("g")
        .attr("transform", "translate(" + (width / 2 - 120) + "," + 30 + ")")
        .append("text").text("Age of the first group of passengers is:" + )
        .attr("class", "title")
}

function load () {
    pieChart ();
}  

d3.csv ("titanic.csv").then (function (data) {
    console.log ("Age " + parseInt(data))
    var grouped_data = d3.group (data, d => parseInt (d.Age / 10));
    console.log (grouped_data);
});