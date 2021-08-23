import { Button, Modal, Paper, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Not from "../CustomHook/usenotification";


export default function Form() {
    const [name, setName] = useState("")
    const [phNo, setPhNo] = useState("")
    const [dob, setDOB] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("");
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    
    const {son,start}=Not()
    

    const handleOpen = (name,ph,dob,start,end) => {
        const payload = {
            Name: name,
            Phone: ph,
            DOB: dob,
            StartDate: start,
            EndDate:end
            
        }
        axios.post(" http://localhost:3001/customerInfo",payload)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleClose1 = () => {
        setOpen1(false)
    }
    const handleClose2 = () => {
        start()
        setOpen1(true)

    }
    return <>
        <Paper style={{ width: 300, margin: "auto" }} elevation={3} >
            <Typography variant="h5">Booking Form</Typography>
            <TextField defaultValue={name} label="Name" onChange={(e) => { setName(e.target.value) }} />
            <TextField defaultValue={phNo} label="Phone Number" onChange={(e) => { setPhNo(e.target.value) }} />
            <TextField defaultValue={dob} label="DOB" onChange={(e) => { setDOB(e.target.value) }} />
            <TextField defaultValue={startDate} label="Start Date" onChange={(e) => { setStartDate(e.target.value) }} />
            <TextField defaultValue={endDate} label="End Date" onChange={(e) => { setEndDate(e.target.value) }} />
            
            <Button color="secondary" style={{ marginTop: 30, marginBottom: 10 }} variant="contained" type="button" onClick={ () => {
                handleOpen(name, phNo, dob, startDate,endDate)
            }}>
                <Typography variant="h5">Submit</Typography>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Paper style={{ width: 300, margin: "auto",height:300,textAlign:"center" }} elevation={3}>
                    <Typography variant="h2" style={{ paddingTop: 100 }}>Booking Confirmation</Typography>
                    
                        <Button color="secondary" variant="contained" onClick={handleClose2}>Confirmation</Button>
                        
                </Paper>
                
            </Modal>
        </Paper>
        <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Paper style={{ width: 300, margin: "auto",height:300,textAlign:"center" }} elevation={3}>
                <Typography variant="h2" style={{ paddingTop: 100 }}>{ son}</Typography>
                    <Link to="/">
                        <Button color="secondary" variant="contained" >Confirmation</Button>
                        </Link>
                </Paper>
                
            </Modal>
    </>
}