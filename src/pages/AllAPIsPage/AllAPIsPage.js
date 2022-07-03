import React, { useState, useEffect } from "react";
import styled from 'styled-components';

//import redux selectors, dispatch
import { useDispatch, useSelector } from "react-redux";
import { fetchAll, isLoading, selectAllAPIs } from "../../features/apiSlice";

export const AllAPIsPage = () => {
    const dispatch = useDispatch();
    const allAPIs = useSelector(selectAllAPIs);
    const loading = useSelector(isLoading);

    useEffect(() => {
        dispatch(fetchAll());
    }, [])

    return (
        <div>
            <ul>
                {loading ? 'Loading...' :
                allAPIs.map((data, index) => {
                    return (
                        <li key={index}>{data.API}</li> 
                    )
                })}
            </ul>
        </div>
    )
}