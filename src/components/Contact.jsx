import React from 'react'

function Contact() {
  return (
      <div className='contact'>
          
          <main>
              
              <h1> Contact Us</h1>

              <form>
                  
                  <div>
                      
                      <label>Name</label>
                      <input type="text" placeholder="abc" required />
                    

                  </div>
                  <div>
                      
                      <label>Email</label>
                      <input type="email" placeholder="@abc" required />
                    

                  </div>
                  <div>
                      
                      <label>Message</label>
                      <input type="text" placeholder="tell us about your  doubt" required />
                    

                  </div>

                  <button type='submit'>Submit Now</button>
                  


              </form>

          </main>
    </div>
  )
}

export default Contact