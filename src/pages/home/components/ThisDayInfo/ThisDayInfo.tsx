import React from 'react'
import s from "./ThisDayInfo.module.scss"
import cloud from "../../../../assets/images/cloud.png"
import ThisDayItem from './ThisDayItem';


type Props = {}

export interface Item {
  icon_id: string,
  name: string,
  value: string,
}

const ThisDayInfo = (props: Props) => {
  const items: any = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - відчуваєьтся як 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Тиск',
      value: '765 мм ртутного стовпа – нормальне',
    },
    {
      icon_id: 'precipitation',
      name: 'Опади',
      value: 'Без опадів',
    },
    {
      icon_id: 'wind',
      name: 'Вітер',
      value: '3 м/с південний-захід - легкий вітер',
    },
  ];

  return (
    <div className={s.this_day_info}>
      <div className={s.this_day_info_items}>
        {items.map((item: Item) =>
          <ThisDayItem key={item.icon_id} item={item} />
        )}
      </div>
      <img className={s.cloud_img} src={cloud} alt="cloud" />
    </div>
  )
}

export default ThisDayInfo