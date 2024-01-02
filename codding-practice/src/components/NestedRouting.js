import React from 'react'
import { NavLink,Outlet} from 'react-router-dom'

function NestedRouting() {
  return (
    <div>
      <div class="ContactOption">
        <NavLink to="search" style={{paddingLeft:30}}>Search</NavLink>
        <NavLink to="contactList" style={{paddingLeft:30}}>ContactList</NavLink>
        <NavLink to="request" style={{paddingLeft:30}}>Request</NavLink>       
      </div>
      <Outlet/>
    </div>
  );
}

export default NestedRouting