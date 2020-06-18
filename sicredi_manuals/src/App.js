import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';

const manuals = [
  { title: 'Teste Manual 1'},
  { title: 'Teste Manual 2'},
  { title: 'Teste Manual 3'},
  ];

function App() {
  return (
   <body class="bg-grey-lighter h-screen font-sans">
      <div class="container mx-auto h-full w-full flex justify-center items-center">
        <div>
          <img class="h-20 mb-10" src="./sicredi-logo.png" alt="Sicredi"></img> 
          <SearchIcon color="disabled"/>
          <Autocomplete
          class=""
          
          id="combo-box"
          options={manuals}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Digite aqui o nome do manual" variant="outlined" />}
          />
        </div>
      </div>
  </body>
  );
}

export default App;
