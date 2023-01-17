import React from 'react'
import s from "./Days.module.scss"
import Card from './Card';
import Tabs from './Tabs';

type Props = {}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: 'Сьогодні',
      day_info: '22 серпня',
      icon_id: 'sun',
      temp_day: '+27°',
      temp_night: '+18°',
      info: 'Сонячно',
    },
    {
      day: 'Завтра',
      day_info: '23 серпня',
      icon_id: 'small_rain_sun',
      temp_day: '+18°',
      temp_night: '+15°',
      info: 'Невелкий дощ і сонце',
    },
    {
      day: 'Середа',
      day_info: '24 авг',
      icon_id: 'small_rain',
      temp_day: '+18°',
      temp_night: '+15°',
      info: 'Невелкий дощ',
    },
    {
      day: 'Четвер',
      day_info: '25 серпня',
      icon_id: 'mainly_cloudy',
      temp_day: '+18°',
      temp_night: '+15°',
      info: 'Хмарно',
    },
    {
      day: 'Пʼятниця',
      day_info: '26 серпня',
      icon_id: 'rain',
      temp_day: '+18°',
      temp_night: '+15°',
      info: 'Невелкий дощ',
    },
    {
      day: 'Субота',
      day_info: '27 серпня',
      icon_id: 'sun',
      temp_day: '+29°',
      temp_night: '+19°',
      info: 'Сонячно',
    },
    {
      day: 'Неділя',
      day_info: '28 серпня',
      icon_id: 'sun',
      temp_day: '+28°',
      temp_night: '+21°',
      info: 'Сонячно',
    },
  ];

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: Day) => 
          <Card day={day} key={day.day}/>
        )}
      </div>
    </>

  )
}

export default Days