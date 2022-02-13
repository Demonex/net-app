import React from "react"
import { User } from "../interfaces/core"
import { Loader } from "./Loader"

type ConnectionProps = {
    users: User[]
    isLoading: boolean
}

export const Connection: React.FC<ConnectionProps> = ({ users, isLoading }) => {
    return isLoading ? (
        <Loader />
    ) : (
        <div>LOADED!!</div>
    )
}