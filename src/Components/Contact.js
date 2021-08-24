import React from 'react'
import axios from "axios";
export default function Contact() {
  const formsubmitHandler= (event) =>{
    event.preventDefault();
const name = event.target.name.value;
const body = event.target.body.value;
axios.post("http://jsonplaceholder.typicode.com/posts" , {
  name,
  body,
})
.then((response)=>{
  console.log(response)
  event.target.reset();
})
.catch((error)=>{
  console.log(error)
  event.target.reset();
})
  } 

  return (
    <div>
        <div className="row m-5">
        <form onSubmit={formsubmitHandler}>
          <div class="form-group">
            <label for="formGroupExampleInput">Example label</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
              name="text"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Another label</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input"
              name="body"
            />
          </div>
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </form>
      </div>
    </div>
  )
}
