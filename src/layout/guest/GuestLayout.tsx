import { Outlet } from 'react-router-dom'
// import Header from '../../components/guest/header/Header'

const GuestLayout: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  )
}

export default GuestLayout