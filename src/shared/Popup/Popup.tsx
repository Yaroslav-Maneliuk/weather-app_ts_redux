import React from 'react'
import s from "./Popup.module.scss"
import { Item } from '../../pages/home/components/ThisDayInfo/ThisDayInfo';
import ThisDayItem from '../../pages/home/components/ThisDayInfo/ThisDayItem';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

type Props = {
}

const Popup = (props: Props) => {
  const items: any = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Precipitation',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];

  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day_temp}>12°</div>
          <div className={s.day_name}>Wednesday</div>
          <div className={s.img}>
            <GlobalSvgSelector id='sun' />
          </div>
          <div className={s.day_time}>
            Time: <span>21:54</span>
          </div>
          <div className={s.day_city}>Kyiv</div>
        </div>

        <div className={s.this_day_info}>
          <div className={s.this_day_info_items}>
            {items.map((item: Item) =>
              <ThisDayItem key={item.icon_id} item={item} />
            )}
          </div>
          <div className={s.close}>
            <GlobalSvgSelector id='close' />
          </div>
        </div>
      </div>
    </>

  )
}

export default Popup