import { Button } from "@material-ui/core"
import React from "react"
import { useNavigate } from "react-router-dom"

export const StartBtn: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className="btn-wrapper">
            <Button onClick={() => navigate('/connect')} size='large' color='primary' variant='contained' className='initial-btn' >
                Start
            </Button>
        </div>
    )
}