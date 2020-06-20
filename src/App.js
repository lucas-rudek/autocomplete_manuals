import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';

const manuais = [
  { title: 'Teste Manual 1'},
  { title: 'Teste Manual 2'},
  { title: 'Teste Manual 3'},
  { title: 'Teste Manual 4'},
  ];

  function handleInputChange(event, value) {
    switch (value){
      case 'Teste Manual 1': window.open('http://www.google.com.br');
        break;
      case 'Teste Manual 2': window.open('http://www.fast.com');
        break;
      case 'Teste Manual 3': window.open('http://www.g1.com.br');
        break;
      case 'Teste Manual 4': window.open('http://www.sicredi.com.br');
        break;
    };
  };

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
            options={manuais}
            getOptionLabel={(option) => option.title}
            onInputChange={handleInputChange}
            renderInput={(params) => 
              <TextField 
                {...params} 
                label="Digite aqui o nome do Manual" 
                variant="outlined" 
            />}
           />
        </div>
      </div>
  </body>
  );
}

export default App;
