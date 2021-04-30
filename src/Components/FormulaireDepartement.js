import React from 'react';

//Forms
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function FormulaireDepartement({departement, handleChangeDepartement, data}) {
    let re = new RegExp('DEP-[0-9]+');
    return (
        <FormControl className="formDepartement">
            <InputLabel id="demo-simple-select-helper-label">Département Français</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={departement}
            onChange={handleChangeDepartement}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {data.allLiveFranceData.map(element => (
                re.test(element.code) && <MenuItem value={element.code} key={element.code}>{element.nom}</MenuItem> 
            ))}
            </Select>
            <FormHelperText>Veuillez sélectionner un département Français</FormHelperText>
        </FormControl>
    );
}

export default FormulaireDepartement;
