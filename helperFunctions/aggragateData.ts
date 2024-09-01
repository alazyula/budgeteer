import PieChartProps from "@/model/PropHelpers/PieChartProps";

export default function aggrageteData(data: PieChartProps){
    const result: { [key: string]: number } = {};

    data.data.forEach(item => {
        if (result[item.name]) {
          result[item.name] += item.population;
        } else {
          result[item.name] = item.population;
        }
      });

      data.data =  Object.keys(result).map(name => ({
        name,
        population: result[name],
      }));

        return data;

}