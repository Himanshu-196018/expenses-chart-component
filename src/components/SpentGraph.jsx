import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SpentGraph = () => {
  const options = {
    data: [
      {
        type: "column",
        dataPoints: [
          {
            label: "mon",
            y: 17.45,
          },
          {
            label: "tue",
            y: 34.91,
          },
          {
            label: "wed",
            y: 52.36,
          },
          {
            label: "thu",
            y: 31.07,
          },
          {
            label: "fri",
            y: 23.39,
          },
          {
            label: "sat",
            y: 43.28,
          },
          {
            label: "sun",
            y: 25.48,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default SpentGraph;
