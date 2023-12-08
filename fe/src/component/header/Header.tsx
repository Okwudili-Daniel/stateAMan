import userHook from "../../hook/userHook"

const Header = () => {
  const {data} = userHook()
  return (
    <div className="w-full flex justify-end">
      <div className={`transition-all duration-300`}>Welcome back {data?.userName}</div>
    </div>
  )
}

export default Header
