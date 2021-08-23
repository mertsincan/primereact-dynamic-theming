import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import './App.css';

function App() {
  const [selectedState, setSelectedState] = useState(null);
  const states = [
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', value: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' }
  ];

  const changeTheme = (theme) => {
    let themeLink = document.getElementById('app-theme');

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }

  return (
    <div className="card">
      <div className="flex align-items-center justify-content-center mb-4">
        <button onClick={() => changeTheme('saga-blue')} className="mr-3 cursor-pointer p-link">
          <img src="assets/images/themes/saga-blue.png" width="50" alt="saga-blue" />
        </button>
        <button onClick={() => changeTheme('vela-blue')} className="mr-3 cursor-pointer p-link">
          <img src="assets/images/themes/vela-blue.png" width="50" alt="vela-blue" />
        </button>
        <button onClick={() => changeTheme('arya-blue')} className="mr-3 cursor-pointer p-link">
          <img src="assets/images/themes/arya-blue.png" width="50" alt="arya-blue" />
        </button>
        <button onClick={() => changeTheme('md-light-indigo')} className="mr-3 cursor-pointer p-link">
          <img src="assets/images/themes/md-light-indigo.svg" width="50" alt="md-light-indigo" />
        </button>
        <button onClick={() => changeTheme('md-dark-indigo')} className="mr-3 cursor-pointer p-link">
          <img src="assets/images/themes/md-dark-indigo.svg" width="50" alt="md-dark-indigo" />
        </button>
        <button onClick={() => changeTheme('bootstrap4-light-purple')} className="mr-3 cursor-pointer p-link">
          <img src="assets/images/themes/bootstrap4-light-purple.svg" width="50" alt="bootstrap4-light-purple" />
        </button>
        <button onClick={() => changeTheme('bootstrap4-dark-purple')} className="mr-3 cursor-pointer p-link">
          <img src="assets/images/themes/bootstrap4-dark-purple.svg" width="50" alt="bootstrap4-dark-purple" />
        </button>
      </div>
      <div className="formgrid grid p-fluid">
        <div className="field col-12 md:col-6">
          <label htmlFor="firstname">Firstname</label>
          <InputText id="firstname" />
        </div>
        <div className="field col-12 md:col-6">
          <label htmlFor="lastname">Lastname</label>
          <InputText id="lastname" />
        </div>
        <div className="field col-12">
          <label htmlFor="address">Address</label>
          <InputTextarea id="address" rows="4" />
        </div>
        <div className="field col-12 md:col-6">
          <label htmlFor="city">City</label>
          <InputText id="city" className="inputfield w-full" />
        </div>
        <div className="field col-12 md:col-3">
          <label htmlFor="state">State</label>
          <Dropdown inputId="state" value={selectedState} options={states} onChange={(e) => setSelectedState(e.value)} optionLabel="name" placeholder="Select" />
        </div>
        <div className="field col-12 md:col-3">
          <label htmlFor="zip">Zip</label>
          <InputText id="zip" />
        </div>
      </div>
    </div>
  );
}

export default App;
