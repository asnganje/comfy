import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Button } from "./ui/button"

function Header() {
  const [user, setUser] = useState<{username:string}|null>({
    username: 'demo user'
  })
  
  const navigate = useNavigate()


  const logoutHandler = () => {
    setUser(null)
    navigate('/')
  }
  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end py-2">
        {
          user? <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm: text-sm">Hello, {user.username}</p>
            <Button variant='link' size='sm' onClick={logoutHandler}>Logout</Button>
          </div>
          :
          <div className="flex gap-x-6 justify-center items-center -mr-4">
            <Button asChild variant='link' size='sm'>
              <Link to='/login'>Sign in/Guest User</Link>
            </Button>
            <Button asChild variant='link' size='sm'>
              <Link to='/register'>Register</Link>
            </Button>
          </div>
        }
      </div>
    </header>
  )
}
export default Header