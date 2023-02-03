import React from 'react'

const Signup = () => {
  return (
    <section class="vh-100" style={{backgroundColor:' #508bfc'}}>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style={{borderRadius: '1rem'}}>
            <div class="card-body p-5 text-center">
  
              <h3 class="mb-5">Sign Up</h3>
              <div class="form-outline mb-4" style={{textAlign:'left'}} >
                <input type="text" id="typeEmailX-2" name="name" class="form-control form-control-lg" onChange={handleChange} value={formValues.name} required/>
                <label class="form-label" for="typeEmailX-2">Name</label>
              </div>
  
              <div class="form-outline mb-4" style={{textAlign:'left'}} >
                <input type="email" id="typeEmailX-2" name="email" class="form-control form-control-lg" onChange={handleChange} value={formValues.email} required/>
                <label class="form-label" for="typeEmailX-2">Username</label>
              </div>
  
              <div class="form-outline mb-4" style={{textAlign:'left'}} >
                <input type="password" id="typePasswordX-2" name="password" class="form-control form-control-lg" onChange={handleChange} value={formValues.password} required/>
                <label class="form-label" for="typePasswordX-2">Password</label>
              </div>
  
             
              
              <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={authenticate}>Login</button>
  <br></br>
  <a href="/signup">Back to Login</a>
              <hr class="my-4"/>
  
              
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Signup