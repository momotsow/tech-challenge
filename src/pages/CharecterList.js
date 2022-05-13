import React from 'react'
import { useQuery, gql } from '@apollo/client'

const ALL_CHARECTERS = gql `
     query{
       
            film
            people
        
    }
`
export default function CharecterList() {

const {error, loading, data} = useQuery(ALL_CHARECTERS);

    console.log({error, loading, data})

    if(loading) {
        return (
            <div>
                spinner
            </div>
        )
    }

    if(error) {
        return (
            <div>
                error
            </div>
        )
    }

    return (
        <div>
            {data.results.name}
        </div>
    )
}