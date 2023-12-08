import Sider from '../component/header/Sider'
import Header from '../component/header/Header'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout = () => {
    const readToggle = useSelector((state: any) => state.toggle)
  return (
    <div>
      <Sider/>
      <div className='w-full flex justify-end'>
      <div className={`${readToggle ? "w-[calc(100%-200px)]" : "w-[calc(100%-120px)]"}`}>
        <Header/>
        <Outlet/>   
      </div>
      </div>
    </div>
  )
}

export default Layout
