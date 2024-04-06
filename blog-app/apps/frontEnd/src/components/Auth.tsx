import { Link, useNavigate } from "react-router-dom"
import InputBox from "./InputBox"
import { useState } from "react"
import { SignupInput } from "@repo/common"
import Button from "./Button"
import axios from "axios"
import { BACKEND_URL } from "../config"

const Auth = ({ type }: { type: "signin" | "signup" }) => {
    const [userDetails, setuserDetails] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    // sends REQUESTS
    async function sendRequest() {

        try {
            const response = await axios.post(`${BACKEND_URL}${(type === "signup" ? "signup" : "signin")}`, userDetails);
            localStorage.setItem("token", "Bearer " + response.data.jwt)
            navigate("/blogs")
        } catch (error) {
            <div>Error something went wrong</div>
        }
    }
    return (
        <div className="flex flex-col justify-center h-full">
            <div className="flex justify-center">
                <div className=" max-w-lg">
                    <div className="text-5xl font-extrabold">Create an account</div>
                    <div className="mt-4 text-center text-neutral-400">{type === "signup" ? "Already have an " : "Dont have an "}
                        account <Link className="underline" to={type === "signin" ? "/signup" : "/signin"}>{type === "signup" ? "sign in" : "sign up"}</Link>
                    </div>

                    {type === "signup" ? <InputBox label="Name" type="text" placeholder="Enter Your Name" onChange={(e) => {
                        setuserDetails(c => ({
                            ...c,
                            name: e.target.value
                        }))
                    }}></InputBox> : null}
                    <InputBox label="Email" type="text" placeholder="x@example.com" onChange={(e) => {
                        setuserDetails(c => ({
                            ...c,
                            email: e.target.value
                        }))
                    }}></InputBox>
                    <InputBox label="Password" type="password" placeholder="Password32" onChange={(e) => {
                        setuserDetails(c => ({
                            ...c,
                            password: e.target.value
                        }))
                    }}></InputBox>
                    <div >
                        <Button typeofButton={type === "signup" ? "sign up" : "sign in"} onClick={sendRequest} ></Button>
                    </div>
                </div>
            </div>
            {/* <div>{userDetails.name},{userDetails.email},{userDetails.password}</div> */}
        </div>
    )

}
export default Auth
