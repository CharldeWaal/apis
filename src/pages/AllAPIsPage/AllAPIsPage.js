import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import { fetchAllAPIs } from "../../utils/utils";

export const AllAPIsPage = () => {
    const [apis, setApis] = useState([]);

    useEffect(() => {
        fetchAllAPIs().then(res => {
            console.log(res.entries);
            setApis(res.entries);
        })
    }, [])

    return (
        <div>
            <ul>
                {apis.length > 0 &&
                apis.map((data, index) => {
                    return (
                        <li key={index}>{data.API}</li> 
                    )
                })}
            </ul>
        </div>
    )
}