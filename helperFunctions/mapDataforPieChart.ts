
import Expense from "@/model/Expanse";
import PieChartProps from "@/model/PropHelpers/PieChartProps";
import aggrageteData from "./aggragateData";
export default function mapDataforPieChart(data: Expense[] , key: string) {
let response: PieChartProps = { data: [] };
console.log("Ben Buralardayım")
 switch (key) {
    case 'kategori':
        data.map((expanse) => {
            response.data.push({name: expanse.category, population: expanse.amount})})
            break;

    case 'kişiler':
        data.map((expanse) => {
            response.data.push({name: expanse.paidBy, population: expanse.amount})})
            break;

}
console.log(response)
return aggrageteData(response);
}