import React, { useMemo, useEffect } from 'react';
import HeatMap from '@uiw/react-heat-map';
import useHabits from '../habits/hooks/useHabits';
import useStorage from '../habits/hooks/useLocalStorage';
const MyCalendarHeatmap = () => {
  const { habits } = useHabits();
  const [dateTime, setDateTime] = useStorage("DateTime", [])

  const doneCount = useMemo(() => {
      return habits.filter(h => h.isDone === true).length;
  }, [habits]);

  const formattedDate = useMemo(() => {
    return new Date().toISOString().split('T')[0].replace(/-/g, '/');
  }, []);

  useEffect(() => {
    setDateTime(prev => {
      const filtered = prev.filter(item => item.date !== formattedDate);
      return [...filtered, { date: formattedDate, count: doneCount }];
    });
  }, [doneCount, formattedDate, setDateTime]);

 const heatmapData = dateTime.map(time => ({
    date: time.date,
    count: time.count
  }));

  return (
    <>
      <div>
        <HeatMap 
          className='heatmap'
          value={heatmapData}
          width={930}
          height={138}
          startDate={new Date('2026/01/01')}
          endDate={new Date('2026/12/31')}
          rectSize={14}
          space={3}
          panelColors={{
          0: '#EBEDF0',
          2: '#9be9a8',
          5: '#40c463',
          10: '#216e39',
        }}
          rectProps={{ rx: 2.5 }}
          weekLabels={['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']}
        />
      </div>
      <div className='deskrip-heatmap'>
          <span>Sedikit</span>
          <div className='des'>
          <div className="day level-0"></div>
          <div className="day level-1"></div>
          <div className="day level-2"></div>
          <div className="day level-3"></div>
          <div className="day level-4"></div>
          </div>
          <span>Banyak</span>
      </div>
    </>
  );
};

export default MyCalendarHeatmap;
