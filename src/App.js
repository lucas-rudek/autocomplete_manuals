import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';

const manuals = [
  { title: 'Test Manual 1'},
  { title: 'Test Manual 2'},
  { title: 'Test Manual 3'},
  { title: 'Test Manual 4'},
  ];

  function handleInputChange(event, value) {
    switch (value){
      case 'Test Manual 1': window.open('http://www.google.com.br');
        break;
      case 'Test Manual 2': window.open('http://www.fast.com');
        break;
      case 'Test Manual 3': window.open('http://www.g1.com.br');
        break;
      case 'Test Manual 4': window.open('http://www.sicredi.com.br');
        break;
    };
  };

function App() {
  return (
   <body class="bg-grey-lighter h-screen font-sans">
      <div class="container mx-auto h-full w-full flex justify-center items-center">
        <div>
          <img class="h-100 mb-10" src="./logo.png" alt=""></img> 
          <Autocomplete
            class=""
            id="combo-box"
            options={manuals}
            getOptionLabel={(option) => option.title}
            onInputChange={handleInputChange}
            renderInput={(params) => 
              <TextField 
                {...params} 
                label="Search manual here" 
                variant="outlined" 
            />}
           />
        </div>
      </div>
  </body>
  );
}

export default App;
