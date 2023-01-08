import React from 'react'
import s from "./Header.module.scss"
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import Select from "react-select"
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';


type Props = {}

const Header = (props: Props) => {
  const theme = useTheme()

  const options = [
    { value: "city-1", label: "Kyiv" },
    { value: "city-2", label: "Lviv" },
    { value: "city-3", label: "Ternopil" }
  ]



  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71,147,255,0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000"
    }),
  }


  function changeTheme() {

    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }



  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>weather application</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
        />
      </div>
    </header>
  )
}

export default Header