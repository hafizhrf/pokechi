import { Container } from '@material-ui/core'
import styled from 'styled-components'

interface Props {
  children: unknown
}

const MainLayout = styled.div`
  background: #f5f5f5;
  padding-top: 5%;
`

const Layout = ({ children }: Props): React.ReactElement => {
  return (
    <MainLayout>
      <Container>{children}</Container>
    </MainLayout>
  )
}

export default Layout
