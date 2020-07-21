import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';

const manuals = [
  { title: 'Test Manual 1'},
  { title: 'Test Manual 2'},

  ];

  function handleInputChange(event, value) {
    switch (value){
      case 'Test Manual 1': window.open('http://www.google.com');
        break;
      case 'Test Manual 2': window.open('http://www.fast.com');
        break;
    };
  };

function App() {
  return (
   <body class="bg-grey-lighter h-screen font-sans">
      <div class="container mx-auto h-full w-full flex justify-center items-center">
        <div>
            <img class="mb-5" src="./logo.png" alt=""></img> 
            <div className="flex justify-end items-center">
              <Autocomplete disableClearable
                className="w-full"
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
              <div className="absolute pr-10" ><SearchIcon color="disabled"/></div>
            </div>
        </div>
      </div>
  </body>
  );
}

export default App;
