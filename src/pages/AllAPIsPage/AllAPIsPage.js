import React, { useEffect } from "react";
import styled from 'styled-components';

import { Error } from "../../components/Error/Error";

//import redux selectors, dispatch
import { useDispatch, useSelector } from "react-redux";
import { fetchAll, isLoading, selectAllAPIs, isError, resetError } from "../../features/apiSlice";

const Container = styled.section`
    display: flex;
    width: 100%;
    height: calc(100vh - 70px - 28px);
    overflow-y: scroll;
    overflow-x: auto;
    justify-content: flex-start;
    align-items: flex-start;

    @media (min-width: 1520px) {
        justify-content: center;
    }
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
    font-family: 'Inter';
    font-size: 16px;
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
    const error = useSelector(isError);

    useEffect(() => {
        dispatch(fetchAll());
    }, [])

    const handleClick = () => {
        dispatch(resetError());
        dispatch(fetchAll());
    };

    if(error) {
        return <Error handleClick={handleClick}/>
    };

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
                    {allAPIs.map((data, index) => {
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