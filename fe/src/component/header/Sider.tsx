import {AiOutlineClose} from "react-icons/ai"
import {FaEnvelopeOpenText} from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import { changeToggle, logOut } from "../../global/ReduxState"

const Sider = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.cart);
    const readToggle = useSelector((state: any) =>{
       return state.toggle
    })
console.log(cart)
    console.log("reading", readToggle)


  return (
    <div className={`flex flex-col fixed z-40 w-[${readToggle ? "200px" : "70px"}] border-r h-[100vh]`}>
      <div className="m-3">
      {readToggle ? (<div
      className="cursor-pointer"
      onClick={() =>{
        dispatch(changeToggle(false))
      }}
      ><FaEnvelopeOpenText size={35} />
      </div>) : (<div
        onClick={() =>{
            dispatch(changeToggle(true))
          }}
      ><AiOutlineClose size={35}/></div>)}
      </div>
      <div>
        <div className="text-[45px] font-bold w-full text-center">
            Logo
        </div>
      </div>
      <div className="flex-1">
        <div className="mb-4 px-2 border-y transition-all duration-300 py-3 hover:bg-purple-700 hover:text-white cursor-pointer"
        onClick={() =>{
          dispatch(logOut())
        }}
        >
            Log Out
        </div>
      </div>
    </div>
  )
}

export default Sider
