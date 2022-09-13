import React from 'react'
import { ResultItemProps } from '../models/ResultItemProps'

function ResultItem(props: ResultItemProps) {
    const item = props?.item
    return (
    item ? (
        <div>
          <h2>You've chosen:</h2>
          <ul>
            <li>
              <div className="flex justify-center align-center radius-full">
                <img src={item.avatar} width={50} height={50} />
                <h4>{item.first_name} {item.last_name}</h4>
              </div>
            </li>
            <li><span>id:</span> {item.id}</li>
            <li><span>uid:</span> {item.uid}</li>
            <li><span>password:</span> {item.password}</li>
            <li><span>username:</span> {item.username}</li>
            <li><span>email:</span> {item.email}</li>
            <li><span>gender:</span> {item.gender}</li>
            <li><span>phone_number:</span> {item.phone_number}</li>
            <li><span>social_insurance_number:</span> {item.social_insurance_number}</li>
            <li><span>date_of_birth:</span> {item.date_of_birth}</li>
          </ul>
        </div>
      ) : 
        <p className="text-center text-orange">Search something...</p>
  )
}

export default ResultItem