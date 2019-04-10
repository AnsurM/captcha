import React, { Component } from 'react';
import logo from './logo.svg';
import { Form, Field } from 'react-final-form';
import './App.css';
const axios = require('axios');

class App extends Component {

  state = {
    selectedFile: null
  }

  fileChangedHandler = event => {
    console.log("File: \n", event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  handleUpload = (data) =>
  {

    axios.post('http://localhost:3001/image', {
      data
    })
    .then(function (response) {
      console.log('Resp ', response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  fileUploadHandler = () =>
  {
    const fd = new FormData();
    fd.append('key', "f8e311fbfa848f1d513eb518e8c97252", 'key');
    fd.append('method', 'rotatecaptcha', 'method');
    fd.append('file_1', this.state.selectedFile, 'file_1');
    // this.handleUpload(fd);

    axios.post('https://2captcha.com/in.php', {
      fd,
    })
    .then(function (response) {
      console.log('Resp ', response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.fileChangedHandler} />
        <button onClick={this.fileUploadHandler}>Upload!</button>
      </div>
    );
  }
}

export default App;



{/* <div>


{/* <form>
          Select a file: <input type="file" name="myFile" /><br /><br />
          <input type="submit" onClick={this.handleSubmit}/>
        </form>
      </div> */}




        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}





// <Form
// onSubmit={this.onSubmit}
// // validate={validate}
// render={({ handleSubmit, pristine, invalid }) => (
//   <form onSubmit={handleSubmit}>
//     <h2>Simple Default Input</h2>
//     <div>
//       <label>Image</label>
//       <input type="file" name="image" />
//       <Field name="image" component="file" placeholder="select image" />
//     </div>

//     {/* <h2>An Arbitrary Reusable Input Component</h2>
//     <div>
//       <label>Interests</label>
//       <Field name="interests" component={InterestPicker} />
//     </div>

//     <h2>Render Function</h2>
//     <Field
//       name="bio"
//       render={({ input, meta }) => (
//         <div>
//           <label>Bio</label>
//           <textarea {...input} />
//           {meta.touched && meta.error && <span>{meta.error}</span>}
//         </div>
//       )}
//     />

//     <h2>Render Function as Children</h2>
//     <Field name="phone">
//       {({ input, meta }) => (
//         <div>
//           <label>Phone</label>
//           <input type="text" {...input} placeholder="Phone" />
//           {meta.touched && meta.error && <span>{meta.error}</span>}
//         </div>
//       )}
//     </Field> */}

//     {/* <button type="submit" disabled={pristine || invalid}> */}
//     <button type="submit" disabled={invalid}>
//       Submit
//     </button>
//   </form>
// )}
// />
