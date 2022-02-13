import { CircularProgress } from "@material-ui/core"
import React from "react"


export const Loader: React.FC = () => {
    return (
        <CircularProgress size={100}/>
    )
}