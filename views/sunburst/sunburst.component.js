var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    var d3 = window.d3;
    var SunburstComponent = (function () {
        function SunburstComponent() {
        }
        SunburstComponent.prototype.ngOnInit = function () {
            var that = this;
            var margin = { top: 40, right: 10, bottom: 10, left: 10 }, width = 960 - margin.left - margin.right, height = 500 - margin.top - margin.bottom;
            this.radius = Math.min(width, height) / 2;
            var color = d3.scale.category20c();
            this.x = d3.scale.linear()
                .range([0, 2 * Math.PI]);
            this.y = d3.scale.sqrt()
                .range([0, this.radius]);
            // var treemap = d3.layout.treemap()
            //     .size([width, height])
            //     .sticky(true)
            //     .value(function (d: any) { return d.size; });
            this.chartElement = this.chartPlaceholderRef.element.nativeElement;
            this.formElement = this.formPlaceholderRef.element.nativeElement;
            // var div = d3.select(this.chartElement).append("div")
            //     .style("position", "relative")
            //     .style("width", (width + margin.left + margin.right) + "px")
            //     .style("height", (height + margin.top + margin.bottom) + "px")
            //     .style("left", margin.left + "px")
            //     .style("top", margin.top + "px");
            var svg = d3.select(this.chartElement).append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + (height / 2 + 10) + ")");
            this.partition = d3.layout.partition()
                .sort(null)
                .value(function (d) { return 1; });
            this.arc = d3.svg.arc()
                .startAngle(function (d) { return Math.max(0, Math.min(2 * Math.PI, that.x(d.x))); })
                .endAngle(function (d) { return Math.max(0, Math.min(2 * Math.PI, that.x(d.x + d.dx))); })
                .innerRadius(function (d) { return Math.max(0, that.y(d.y)); })
                .outerRadius(function (d) { return Math.max(0, that.y(d.y + d.dy)); });
            // Keep track of the node that is currently being displayed as the root.
            var root = this.getData();
            this.node = root;
            this.path = svg.datum(root).selectAll("path")
                .data(that.partition.nodes)
                .enter().append("path")
                .attr("d", that.arc)
                .style("fill", function (d) { return color((d.children ? d : d.parent).name); })
                .on("click", function (d) {
                that.click.call(this, that, d);
            })
                .each(function (d) {
                that.stash.call(this, d);
            });
            d3.select(this.formElement).selectAll("input").on("change", function change() {
                var value = this.value === "count"
                    ? function () { return 1; }
                    : function (d) { return d.size; };
                that.path
                    .data(that.partition.value(value).nodes)
                    .transition()
                    .duration(1000)
                    .attrTween("d", function (d, i) {
                    return that.arcTweenData.call(this, that, d, i);
                });
            });
            d3.select(self.frameElement).style("height", height + "px");
            // var node = div.datum(root).selectAll(".treemap-node")
            //     .data(treemap.nodes)
            //     .enter().append("div")
            //     .attr("class", "treemap-node")
            //     .call(position)
            //     .style("background", function (d: any) { return d.children ? color(d.name) : null; })
            //     .text(function (d: any) { return d.children ? null : d.name; });
            // this.formElement = this.formPlaceholderRef.element.nativeElement;
            // d3.select(this.formElement).selectAll("input").on("change", function change() {
            //     var value = this.value === "count"
            //         ? function () { return 1; }
            //         : function (d: any) { return d.size; };
            //     node
            //         .data(treemap.value(value).nodes)
            //         .transition()
            //         .duration(1500)
            //         .call(position);
            // });
        };
        // Setup for switching data: stash the old values for transition.
        SunburstComponent.prototype.stash = function (d) {
            d.x0 = d.x;
            d.dx0 = d.dx;
        };
        // When switching data: interpolate the arcs in data space.
        SunburstComponent.prototype.arcTweenData = function (that, a, i) {
            var oi = d3.interpolate({ x: a.x0, dx: a.dx0 }, a);
            function tween(t) {
                var b = oi(t);
                a.x0 = b.x;
                a.dx0 = b.dx;
                return that.arc.call(this, b);
            }
            if (i == 0) {
                // If we are on the first arc, adjust the x domain to match the root node
                // at the current zoom level. (We only need to do this once.)
                var xd = d3.interpolate(that.x.domain.call(this), [that.node.x, that.node.x + that.node.dx]);
                return function (t) {
                    that.x.domain.call(this, xd(t));
                    return tween(t);
                };
            }
            else {
                return tween;
            }
        };
        // When zooming: interpolate the scales.
        SunburstComponent.prototype.arcTweenZoom = function (that, d) {
            var myThis = this;
            var xd = d3.interpolate(that.x.domain(), [d.x, d.x + d.dx]), yd = d3.interpolate(that.y.domain(), [d.y, 1]), yr = d3.interpolate(that.y.range(), [d.y ? 20 : 0, that.radius]);
            return function (d, i) {
                var myInnerThis = this;
                return i ?
                    function (t) {
                        return that.arc.call(myInnerThis, d);
                    }
                    : function (t) {
                        that.x.domain(xd(t));
                        that.y.domain(yd(t)).range(yr(t));
                        return that.arc.call(myInnerThis, d);
                    };
            };
        };
        // position() {
        //     this.style("left", function (d: any) { return d.x + "px"; })
        //         .style("top", function (d: any) { return d.y + "px"; })
        //         .style("width", function (d: any) { return Math.max(0, d.dx - 1) + "px"; })
        //         .style("height", function (d: any) { return Math.max(0, d.dy - 1) + "px"; });
        // }
        SunburstComponent.prototype.click = function (that, d) {
            var myThat = this;
            that.node = d;
            that.path.transition()
                .duration(1000)
                .attrTween("d", that.arcTweenZoom.call(this, that, d));
        };
        SunburstComponent.prototype.getData = function () {
            var data = {
                "name": "flare",
                "children": [
                    {
                        "name": "analytics",
                        "children": [
                            {
                                "name": "cluster",
                                "children": [
                                    { "name": "AgglomerativeCluster", "size": 3938 },
                                    { "name": "CommunityStructure", "size": 3812 },
                                    { "name": "HierarchicalCluster", "size": 6714 },
                                    { "name": "MergeEdge", "size": 743 }
                                ]
                            },
                            {
                                "name": "graph",
                                "children": [
                                    { "name": "BetweennessCentrality", "size": 3534 },
                                    { "name": "LinkDistance", "size": 5731 },
                                    { "name": "MaxFlowMinCut", "size": 7840 },
                                    { "name": "ShortestPaths", "size": 5914 },
                                    { "name": "SpanningTree", "size": 3416 }
                                ]
                            },
                            {
                                "name": "optimization",
                                "children": [
                                    { "name": "AspectRatioBanker", "size": 7074 }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "animate",
                        "children": [
                            { "name": "Easing", "size": 17010 },
                            { "name": "FunctionSequence", "size": 5842 },
                            {
                                "name": "interpolate",
                                "children": [
                                    { "name": "ArrayInterpolator", "size": 1983 },
                                    { "name": "ColorInterpolator", "size": 2047 },
                                    { "name": "DateInterpolator", "size": 1375 },
                                    { "name": "Interpolator", "size": 8746 },
                                    { "name": "MatrixInterpolator", "size": 2202 },
                                    { "name": "NumberInterpolator", "size": 1382 },
                                    { "name": "ObjectInterpolator", "size": 1629 },
                                    { "name": "PointInterpolator", "size": 1675 },
                                    { "name": "RectangleInterpolator", "size": 2042 }
                                ]
                            },
                            { "name": "ISchedulable", "size": 1041 },
                            { "name": "Parallel", "size": 5176 },
                            { "name": "Pause", "size": 449 },
                            { "name": "Scheduler", "size": 5593 },
                            { "name": "Sequence", "size": 5534 },
                            { "name": "Transition", "size": 9201 },
                            { "name": "Transitioner", "size": 19975 },
                            { "name": "TransitionEvent", "size": 1116 },
                            { "name": "Tween", "size": 6006 }
                        ]
                    },
                    {
                        "name": "data",
                        "children": [
                            {
                                "name": "converters",
                                "children": [
                                    { "name": "Converters", "size": 721 },
                                    { "name": "DelimitedTextConverter", "size": 4294 },
                                    { "name": "GraphMLConverter", "size": 9800 },
                                    { "name": "IDataConverter", "size": 1314 },
                                    { "name": "JSONConverter", "size": 2220 }
                                ]
                            },
                            { "name": "DataField", "size": 1759 },
                            { "name": "DataSchema", "size": 2165 },
                            { "name": "DataSet", "size": 586 },
                            { "name": "DataSource", "size": 3331 },
                            { "name": "DataTable", "size": 772 },
                            { "name": "DataUtil", "size": 3322 }
                        ]
                    },
                    {
                        "name": "display",
                        "children": [
                            { "name": "DirtySprite", "size": 8833 },
                            { "name": "LineSprite", "size": 1732 },
                            { "name": "RectSprite", "size": 3623 },
                            { "name": "TextSprite", "size": 10066 }
                        ]
                    },
                    {
                        "name": "flex",
                        "children": [
                            { "name": "FlareVis", "size": 4116 }
                        ]
                    },
                    {
                        "name": "physics",
                        "children": [
                            { "name": "DragForce", "size": 1082 },
                            { "name": "GravityForce", "size": 1336 },
                            { "name": "IForce", "size": 319 },
                            { "name": "NBodyForce", "size": 10498 },
                            { "name": "Particle", "size": 2822 },
                            { "name": "Simulation", "size": 9983 },
                            { "name": "Spring", "size": 2213 },
                            { "name": "SpringForce", "size": 1681 }
                        ]
                    },
                    {
                        "name": "query",
                        "children": [
                            { "name": "AggregateExpression", "size": 1616 },
                            { "name": "And", "size": 1027 },
                            { "name": "Arithmetic", "size": 3891 },
                            { "name": "Average", "size": 891 },
                            { "name": "BinaryExpression", "size": 2893 },
                            { "name": "Comparison", "size": 5103 },
                            { "name": "CompositeExpression", "size": 3677 },
                            { "name": "Count", "size": 781 },
                            { "name": "DateUtil", "size": 4141 },
                            { "name": "Distinct", "size": 933 },
                            { "name": "Expression", "size": 5130 },
                            { "name": "ExpressionIterator", "size": 3617 },
                            { "name": "Fn", "size": 3240 },
                            { "name": "If", "size": 2732 },
                            { "name": "IsA", "size": 2039 },
                            { "name": "Literal", "size": 1214 },
                            { "name": "Match", "size": 3748 },
                            { "name": "Maximum", "size": 843 },
                            {
                                "name": "methods",
                                "children": [
                                    { "name": "add", "size": 593 },
                                    { "name": "and", "size": 330 },
                                    { "name": "average", "size": 287 },
                                    { "name": "count", "size": 277 },
                                    { "name": "distinct", "size": 292 },
                                    { "name": "div", "size": 595 },
                                    { "name": "eq", "size": 594 },
                                    { "name": "fn", "size": 460 },
                                    { "name": "gt", "size": 603 },
                                    { "name": "gte", "size": 625 },
                                    { "name": "iff", "size": 748 },
                                    { "name": "isa", "size": 461 },
                                    { "name": "lt", "size": 597 },
                                    { "name": "lte", "size": 619 },
                                    { "name": "max", "size": 283 },
                                    { "name": "min", "size": 283 },
                                    { "name": "mod", "size": 591 },
                                    { "name": "mul", "size": 603 },
                                    { "name": "neq", "size": 599 },
                                    { "name": "not", "size": 386 },
                                    { "name": "or", "size": 323 },
                                    { "name": "orderby", "size": 307 },
                                    { "name": "range", "size": 772 },
                                    { "name": "select", "size": 296 },
                                    { "name": "stddev", "size": 363 },
                                    { "name": "sub", "size": 600 },
                                    { "name": "sum", "size": 280 },
                                    { "name": "update", "size": 307 },
                                    { "name": "variance", "size": 335 },
                                    { "name": "where", "size": 299 },
                                    { "name": "xor", "size": 354 },
                                    { "name": "_", "size": 264 }
                                ]
                            },
                            { "name": "Minimum", "size": 843 },
                            { "name": "Not", "size": 1554 },
                            { "name": "Or", "size": 970 },
                            { "name": "Query", "size": 13896 },
                            { "name": "Range", "size": 1594 },
                            { "name": "StringUtil", "size": 4130 },
                            { "name": "Sum", "size": 791 },
                            { "name": "Variable", "size": 1124 },
                            { "name": "Variance", "size": 1876 },
                            { "name": "Xor", "size": 1101 }
                        ]
                    },
                    {
                        "name": "scale",
                        "children": [
                            { "name": "IScaleMap", "size": 2105 },
                            { "name": "LinearScale", "size": 1316 },
                            { "name": "LogScale", "size": 3151 },
                            { "name": "OrdinalScale", "size": 3770 },
                            { "name": "QuantileScale", "size": 2435 },
                            { "name": "QuantitativeScale", "size": 4839 },
                            { "name": "RootScale", "size": 1756 },
                            { "name": "Scale", "size": 4268 },
                            { "name": "ScaleType", "size": 1821 },
                            { "name": "TimeScale", "size": 5833 }
                        ]
                    },
                    {
                        "name": "util",
                        "children": [
                            { "name": "Arrays", "size": 8258 },
                            { "name": "Colors", "size": 10001 },
                            { "name": "Dates", "size": 8217 },
                            { "name": "Displays", "size": 12555 },
                            { "name": "Filter", "size": 2324 },
                            { "name": "Geometry", "size": 10993 },
                            {
                                "name": "heap",
                                "children": [
                                    { "name": "FibonacciHeap", "size": 9354 },
                                    { "name": "HeapNode", "size": 1233 }
                                ]
                            },
                            { "name": "IEvaluable", "size": 335 },
                            { "name": "IPredicate", "size": 383 },
                            { "name": "IValueProxy", "size": 874 },
                            {
                                "name": "math",
                                "children": [
                                    { "name": "DenseMatrix", "size": 3165 },
                                    { "name": "IMatrix", "size": 2815 },
                                    { "name": "SparseMatrix", "size": 3366 }
                                ]
                            },
                            { "name": "Maths", "size": 17705 },
                            { "name": "Orientation", "size": 1486 },
                            {
                                "name": "palette",
                                "children": [
                                    { "name": "ColorPalette", "size": 6367 },
                                    { "name": "Palette", "size": 1229 },
                                    { "name": "ShapePalette", "size": 2059 },
                                    { "name": "SizePalette", "size": 2291 }
                                ]
                            },
                            { "name": "Property", "size": 5559 },
                            { "name": "Shapes", "size": 19118 },
                            { "name": "Sort", "size": 6887 },
                            { "name": "Stats", "size": 6557 },
                            { "name": "Strings", "size": 22026 }
                        ]
                    },
                    {
                        "name": "vis",
                        "children": [
                            {
                                "name": "axis",
                                "children": [
                                    { "name": "Axes", "size": 1302 },
                                    { "name": "Axis", "size": 24593 },
                                    { "name": "AxisGridLine", "size": 652 },
                                    { "name": "AxisLabel", "size": 636 },
                                    { "name": "CartesianAxes", "size": 6703 }
                                ]
                            },
                            {
                                "name": "controls",
                                "children": [
                                    { "name": "AnchorControl", "size": 2138 },
                                    { "name": "ClickControl", "size": 3824 },
                                    { "name": "Control", "size": 1353 },
                                    { "name": "ControlList", "size": 4665 },
                                    { "name": "DragControl", "size": 2649 },
                                    { "name": "ExpandControl", "size": 2832 },
                                    { "name": "HoverControl", "size": 4896 },
                                    { "name": "IControl", "size": 763 },
                                    { "name": "PanZoomControl", "size": 5222 },
                                    { "name": "SelectionControl", "size": 7862 },
                                    { "name": "TooltipControl", "size": 8435 }
                                ]
                            },
                            {
                                "name": "data",
                                "children": [
                                    { "name": "Data", "size": 20544 },
                                    { "name": "DataList", "size": 19788 },
                                    { "name": "DataSprite", "size": 10349 },
                                    { "name": "EdgeSprite", "size": 3301 },
                                    { "name": "NodeSprite", "size": 19382 },
                                    {
                                        "name": "render",
                                        "children": [
                                            { "name": "ArrowType", "size": 698 },
                                            { "name": "EdgeRenderer", "size": 5569 },
                                            { "name": "IRenderer", "size": 353 },
                                            { "name": "ShapeRenderer", "size": 2247 }
                                        ]
                                    },
                                    { "name": "ScaleBinding", "size": 11275 },
                                    { "name": "Tree", "size": 7147 },
                                    { "name": "TreeBuilder", "size": 9930 }
                                ]
                            },
                            {
                                "name": "events",
                                "children": [
                                    { "name": "DataEvent", "size": 2313 },
                                    { "name": "SelectionEvent", "size": 1880 },
                                    { "name": "TooltipEvent", "size": 1701 },
                                    { "name": "VisualizationEvent", "size": 1117 }
                                ]
                            },
                            {
                                "name": "legend",
                                "children": [
                                    { "name": "Legend", "size": 20859 },
                                    { "name": "LegendItem", "size": 4614 },
                                    { "name": "LegendRange", "size": 10530 }
                                ]
                            },
                            {
                                "name": "operator",
                                "children": [
                                    {
                                        "name": "distortion",
                                        "children": [
                                            { "name": "BifocalDistortion", "size": 4461 },
                                            { "name": "Distortion", "size": 6314 },
                                            { "name": "FisheyeDistortion", "size": 3444 }
                                        ]
                                    },
                                    {
                                        "name": "encoder",
                                        "children": [
                                            { "name": "ColorEncoder", "size": 3179 },
                                            { "name": "Encoder", "size": 4060 },
                                            { "name": "PropertyEncoder", "size": 4138 },
                                            { "name": "ShapeEncoder", "size": 1690 },
                                            { "name": "SizeEncoder", "size": 1830 }
                                        ]
                                    },
                                    {
                                        "name": "filter",
                                        "children": [
                                            { "name": "FisheyeTreeFilter", "size": 5219 },
                                            { "name": "GraphDistanceFilter", "size": 3165 },
                                            { "name": "VisibilityFilter", "size": 3509 }
                                        ]
                                    },
                                    { "name": "IOperator", "size": 1286 },
                                    {
                                        "name": "label",
                                        "children": [
                                            { "name": "Labeler", "size": 9956 },
                                            { "name": "RadialLabeler", "size": 3899 },
                                            { "name": "StackedAreaLabeler", "size": 3202 }
                                        ]
                                    },
                                    {
                                        "name": "layout",
                                        "children": [
                                            { "name": "AxisLayout", "size": 6725 },
                                            { "name": "BundledEdgeRouter", "size": 3727 },
                                            { "name": "CircleLayout", "size": 9317 },
                                            { "name": "CirclePackingLayout", "size": 12003 },
                                            { "name": "DendrogramLayout", "size": 4853 },
                                            { "name": "ForceDirectedLayout", "size": 8411 },
                                            { "name": "IcicleTreeLayout", "size": 4864 },
                                            { "name": "IndentedTreeLayout", "size": 3174 },
                                            { "name": "Layout", "size": 7881 },
                                            { "name": "NodeLinkTreeLayout", "size": 12870 },
                                            { "name": "PieLayout", "size": 2728 },
                                            { "name": "RadialTreeLayout", "size": 12348 },
                                            { "name": "RandomLayout", "size": 870 },
                                            { "name": "StackedAreaLayout", "size": 9121 },
                                            { "name": "TreeMapLayout", "size": 9191 }
                                        ]
                                    },
                                    { "name": "Operator", "size": 2490 },
                                    { "name": "OperatorList", "size": 5248 },
                                    { "name": "OperatorSequence", "size": 4190 },
                                    { "name": "OperatorSwitch", "size": 2581 },
                                    { "name": "SortOperator", "size": 2023 }
                                ]
                            },
                            { "name": "Visualization", "size": 16540 }
                        ]
                    }
                ]
            };
            return data;
        };
        return SunburstComponent;
    }());
    __decorate([
        core_1.ViewChild("chartPlaceholder", { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], SunburstComponent.prototype, "chartPlaceholderRef", void 0);
    __decorate([
        core_1.ViewChild("formPlaceholder", { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], SunburstComponent.prototype, "formPlaceholderRef", void 0);
    SunburstComponent = __decorate([
        core_1.Component({
            selector: 'v-sunburst',
            template: "\n        <form #formPlaceholder class=\"sunburst\">\n            <label><input type=\"radio\" name=\"mode\" value=\"size\" checked> Size</label>\n            <label><input type=\"radio\" name=\"mode\" value=\"count\"> Count</label>\n        </form>\n        <div #chartPlaceholder class=\"sunburst-body\">\n        </div>\n    ",
            styles: ["\n        :host >>> form.sunburst {\n            position: absolute;\n            left: 10px;\n            top: 10px;\n        }\n\n        :host >>> .sunburst-node {\n            border: solid 1px white;\n            font: 10px sans-serif;\n            line-height: 12px;\n            overflow: hidden;\n            position: absolute;\n            text-indent: 2px;\n        }\n        :host >>> .sunburst-body {\n            width: 100%;\n            height: 100%;\n        }\n\n        :host >>> path {\n            stroke: #fff;\n            fill-rule: evenodd;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], SunburstComponent);
    exports.SunburstComponent = SunburstComponent;
});
//# sourceMappingURL=sunburst.component.js.map