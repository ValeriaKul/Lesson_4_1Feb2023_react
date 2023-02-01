import React from 'react'

export default function UserItem({id, first_name, last_name, email, avatar, deleteUser}) {

  return (
    <div className='card'>
        <p className='card__name'><span>{first_name}</span> <span>{last_name}</span></p>
        <p>{email}</p>
        <div className='card__img'>  
            <img src={avatar} alt="avatar" className='image' />
        </div>
        <div className="btn">
            <button
                className='btn_delete'
                onClick={() => deleteUser(id)}
                >Delete
            </button>
        </div>
    </div>
  )
}
