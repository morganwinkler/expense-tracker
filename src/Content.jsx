import { AddTransaction } from "./AddTransaction";
import { Balance } from "./Balance";
import { IncomeExpense } from "./IncomeExpense";
import { TrasactionList } from "./TrasactionList";




export function Content() {
  return (
    <div>
      <Balance/>
      <IncomeExpense/>
      <TrasactionList/>
      <AddTransaction/>
    </div>
  );
}
