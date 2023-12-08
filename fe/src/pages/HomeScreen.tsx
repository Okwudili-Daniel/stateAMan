import userHook from "../hook/userHook"
import pix from "../assets/IMG_20230330_103649.jpg"
import data from "../data.json"
import { addCart } from "../global/ReduxState"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const HomeScreen = () => {
  const dispatch = useDispatch()

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-2">
      {data.map((props: any, i: number)=>(
          <div className="w-[300px] min-h-[300px] flex flex-col py-4 rounded-md shadow-md ">
          <Link to={`detail/${props.id}`}>
          <img src={props.image} className="object-cover w-full h-[250px] rounded-md " />
          </Link>
              <div className="flex justify-between w-full   my-6 px-4">
                <div className="font-bold text-[15px]">{props.title}</div>
                <div className="flex items-center relative w-[200px]">
                  <div className="mr-2 absolute">{"🟣".repeat(5)}</div>
                  <div className="mr-2 absolute">{"⭐".repeat(props.rating.rate)}</div>
                </div>
              </div>
  
              <div className="px-4">
                {props.description}
              </div>
              <div className="flex justify-between mt-8 items-center px-4">
                <div className="font-bold text-[28px]">₦{props.price * 700}</div>
                <div className="bg-purple-500 text-white px-4 py-2 rounded-sm cursor-pointer"
                
                onClick={() =>{
                  dispatch(addCart(props))
                }}
                >Add to Cart</div>
              </div>
            </div>
      ))}
          </div>
  )
}

export default HomeScreen
