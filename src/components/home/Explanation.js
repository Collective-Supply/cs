import { useAuth0 } from '@auth0/auth0-react';
export default function Explanation() {
const { loginWithPopup } = useAuth0();
  
  return (
    <div style={{overflow: "hidden", position: 'absolute', height: "80%", width: "100%" }}>
      <iframe title="main" style={{ height: "30%", margin: 0, minHeight: 100, top: 0, width: "100%" }} src="https://www.collectivesupply.cc/explanation"></iframe>    
      <button onClick={() => loginWithPopup()}>
          View With LinkedIn
      </button>
    </div>
  )
}
