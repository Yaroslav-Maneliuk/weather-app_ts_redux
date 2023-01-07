import React from 'react'
import s from "./Days.module.scss"

type Props = {}

const Tabs = (props: Props) => {
  const tabs = [
    {
      value: 'For a week',
    },
    {
      value: 'For 10 days',
    },
    {
      value: 'For a month',
    },
  ];

  return (
    <div className={s.tabs}>
      <div className={s.tabs_wrapper}>
        {
          tabs.map((tab) => (
            <div key={tab.value} className={s.tab}>
              {tab.value}
            </div>)
          )}
      </div>
      <div className={s.cancel}>Cancel</div>
    </div>
  )
}

export default Tabs