import axios from "axios"

import { useEffect, useState } from "react";

import {  Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
export default function Home() {
    const [data1,setData1]=useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/data").then(({ data }) => {
            setData1(data)
            
        })
    }, [])
    return <>
        
        {data1.map(e =><Link to="/form">
            <Card key={e.id} elevation={20} square>
                <CardActionArea>
                     <CardMedia>
                        <img src={e.img} alt="done" />
                    </CardMedia>
                    <CardContent>
                <Typography>Name: {e.name}</Typography>
                <Typography>Country: {e.country}</Typography>
                 <Typography>State: {e.state}</Typography>
                <Typography>Price: {e.Price}</Typography>
                        <Typography>Price: {e.ratine}</Typography>
                        </CardContent>
                </CardActionArea>
            </Card>
            </Link>
           
        )}
            
        </>
}