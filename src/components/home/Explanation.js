export default function Explanation() {

    // switch (hasParameter) {
    //     case true:
    //         switch (isLoggedIn) {
    //             case true: 
    //                 switch (hasProfile) {
    //                     case true:
    //                         // has parameter, is logged in, has profile (recruiter/designer)
    //                     case false:
    //                         // has parameter, is logged in, no profile (recruiter)
    //                 }
    //             case false:
    //                 // has parameter, not logged in (recruiter?)
    //         }
    //     case false:
    //         switch (isLoggedIn) {
    //             case true:
    //                 switch (hasProfile) {
    //                     case true:
    //                         // no parameter, is logged in, has profile (designer)
    //                     case false:
    //                         // no parameter, is logged in, no profile (???)
    //                 }
    //             case false:
    //                 // no parameter, not logged in (???)
    //         }
    // }




  return (
    <div>
        <h1>Explanation of Collective.Supply</h1>
        <p>Log in to view the designer's profile</p>
        <p>Please keep in mind that by viewing the designer's profile. The designer who shared the link with you will be able to see your name, profile photo and the time of your visit.</p>
    </div>
  )
}
