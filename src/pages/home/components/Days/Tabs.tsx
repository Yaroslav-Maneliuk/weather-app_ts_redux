import React from 'react'
import s from "./Days.module.scss"

type Props = {}

const Tabs = (props: Props) => {
  const tabs = [
    {
      value: 'Протягом тижня',
    },
    {
      value: 'Протягом 10 днів',
    },
    {
      value: 'Протягом місяця',
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
      <div className={s.cancel}>Скасувати</div>
    </div>
  )
}

export default Tabs