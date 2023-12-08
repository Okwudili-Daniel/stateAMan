import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { getAccountOwner } from "../api/authApi";



const userHook = () => {
    const [state, setState]:any = useState({});
    // const [userData, setUserData] = useState({})
    let token = useSelector((state: any) => state.user)

    useEffect(() =>{
        if (token) {
            let decode = jwtDecode(token);
            setState(decode)
        }

        // getAccountOwner(state.id).then((res) => {
    //   setUserData(res.data);
    // });
    }, []);

    const {data, isLoading} = useQuery({
        queryKey: ["userData", state.id],
        queryFn: () => getAccountOwner(state.id).then((res) =>{
            return res.data
        }),
        refetchInterval: 5000
    })
  return {data, isLoading}
}

export default userHook
