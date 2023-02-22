import { TextField } from '@mui/material'
import React from 'react'

export default function Register() {
  return (
    <div>
        <h2 className='register_title' >Register</h2>
        <form className='register'>
  <div class="mb-3 name">
    <TextField id="first_name" label="First Name" variant="standard" />
    <TextField id="first_name" label="Last Name" variant="standard" />
    </div>
  <div class="mb-3">
  <TextField
          id="email"
          label="E-mail"
          type="email"
          variant='standard'
        />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant='standard'
        />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
