import { useState, useRef } from 'react'
import './App.css'
import { Button, TextInput } from '@gravity-ui/uikit';

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const loginControlRef = useRef<HTMLInputElement | null>(null);
  const passwordControlRef = useRef<HTMLInputElement | null>(null);

  return isLogged ? (
    <SuccessLoginPage setIsLogged={setIsLogged} />
  ) : (
    <div className="page-wrapper">
      <h1>Test login</h1>
      <div className="description">
        <div>This is a simple login page. You can use this page to practice writing simple positive and negative login tests.</div>
        <div>
          Use next credentials to execute Login:
        </div>
      </div>
      <div>
        <div>Username:  <strong>student</strong></div>
        <div>Password: <strong>Password123</strong></div>
      </div>
      <div className="form-wrapper">
        <TextInput controlRef={loginControlRef} size="l" pin="round-round" label="Username" hasClear />
        <TextInput controlRef={passwordControlRef} size="l" pin="round-round" label="Password" hasClear />
        <Button
          view="outlined-action"
          size="l"
          className="submit-button"
          onClick={() => {
            if (loginControlRef.current?.value === "student" && passwordControlRef.current?.value === "Password123") {
              setIsLogged(true)
            }
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

interface ISuccessLoginPageProps {
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

const SuccessLoginPage = ({ setIsLogged }: ISuccessLoginPageProps) => {
  return (
    <div className="success-page-wrapper">
      <h1>Logged In Successfully</h1>
      <div>Congratulations! You successfully logged in!</div>
      <Button
        view="action"
        className="logout-button"
        size="l"
        onClick={() => setIsLogged(false)}
      >
        Log out
      </Button>
    </div>
  )
}

// test commit 
// test commit 
// test commit 

export default App
