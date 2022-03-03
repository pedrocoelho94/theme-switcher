import { useContext } from 'react'
import * as S from './styles'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import dynamic from 'next/dynamic'

const SwitchDynamic = dynamic(() => import('react-switch'), { ssr: false })

type HeaderProps = {
  toggleTheme: () => void
}

const Header = ({ toggleTheme }: HeaderProps) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <S.Wrapper>
      <h2>Header</h2>

      <SwitchDynamic
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.2, colors.primary)}
        onColor={shade(0.5, colors.primary)}
      />
    </S.Wrapper>
  )
}

export default Header
