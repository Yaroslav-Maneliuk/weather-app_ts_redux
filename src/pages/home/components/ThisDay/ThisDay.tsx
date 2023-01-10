import React from 'react'
import s from "./ThisDay.module.scss"
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';


type Props = {
  weather: Weather
}

const ThisDay = ({weather}: Props) => {

  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this_day_name}>Today</div>
        </div>
        <GlobalSvgSelector id='sun' />
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}>Time: <span>21:54</span></div>
        <div className={s.this_city}>Kyiv</div>
      </div>
    </div>
  )
}

export default ThisDay