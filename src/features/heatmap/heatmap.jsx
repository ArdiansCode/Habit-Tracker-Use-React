import { useRef, useEffect } from 'react';
import HeatMap from '@uiw/react-heat-map';
import useStorage from '../habits/hooks/useLocalStorage';

function getValueHabit() {
  const [values, setValues] = useStorage('Habit', []);
  const [count, setCount] = useState(0)

  const getValue = setValues(prev => prev.map(h => h.isDone === true ? setCount(count + 1) : values))
  return getValue;
}

const date = new Date();
const formattedDate = date.toLocaleDateString('en-GB') // dd/mm/yyyy
  .split('/')
  .reverse()
  .join('/'); // Mengubah ke yyyy/mm/dd

const value = [
  { date: formattedDate , count: getValueHabit },
];

const MyCalendarHeatmap = () => {
  return (
    <>
    <div>
      <HeatMap className='heatmap'
        value={value}
        width={930}
        height={138}
        startDate={new Date('2026/01/01')}
        endDate={new Date('2026/12/31')}
        rectSize={14}
        space={3}
        rectProps={{
          rx: 2.5
        }}
        weekLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
      />

    </div>
    <h2>{getValueHabit}</h2>
    </>
  );
};


export default MyCalendarHeatmap;
