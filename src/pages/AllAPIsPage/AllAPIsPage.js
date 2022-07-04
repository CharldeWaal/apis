import React, { useState, useEffect } from "react";
import styled from 'styled-components';

//import redux selectors, dispatch
import { useDispatch, useSelector } from "react-redux";
import { fetchAll, isLoading, selectAllAPIs } from "../../features/apiSlice";

const Container = styled.section`
    display: flex;
    width: 100%;
    height: calc(100vh - 70px - 28px);
    overflow-y: scroll;
    overflow-x: auto;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Loading = styled.div`
    margin: auto;
`;

const StyledTable = styled.table`
    padding: 16px;
    border: 1px solid #48434f;
    border-collapse: collapse;
`;

const TableRow = styled.tr`
    border: 1px solid #48434f;

    &:nth-child(even) {background-color: #f2f2f2;}
`;

const TableHeader = styled.th`
    padding: 16px;
    border: 1px solid #48434f;
    text-align: left;
`; 

const TableData = styled.td`
    padding: 16px;
    border: 1px solid #48434f;
    text-align: left;
`;

const Link = styled.a`
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;

export const AllAPIsPage = () => {
    const dispatch = useDispatch();
    const allAPIs = useSelector(selectAllAPIs);
    const loading = useSelector(isLoading);

    useEffect(() => {
        dispatch(fetchAll());
    }, [])

    return (
        <Container>
            {loading ? <Loading>Loading...</Loading> : 
            <StyledTable>
                <thead>
                    <TableRow>
                        <TableHeader>API</TableHeader>
                        <TableHeader>Description</TableHeader>
                        <TableHeader>Auth</TableHeader>
                        <TableHeader>HTTPS</TableHeader>
                        <TableHeader>CORS</TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {!loading &&
                    allAPIs.map((data, index) => {
                    return (
                        <TableRow key={index}>
                            <TableData><Link href={data.Link} target='_blank'>{data.API}</Link></TableData>
                            <TableData>{data.Description}</TableData>
                            <TableData>{data.Auth ? data.Auth : 'No'}</TableData>
                            <TableData>{data.HTTPS === true ? 'Yes' : 'No'}</TableData>
                            <TableData>{data.Cors.charAt(0).toUpperCase() + data.Cors.substring(1)}</TableData>
                        </TableRow>
                        )
                    })}
                </tbody>
            </StyledTable>
            }
        </Container>
    )
}