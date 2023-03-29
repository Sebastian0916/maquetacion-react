import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function CheckFilters() {

    // TODO: Make filters via checkbox

    // Filters needed: "all" , "all-less availables"
    // "all-less reserveds" , "all-less selleds"
    // "only availables" , "only reserveds"
    // "only selleds" , "empty state"
    // Empty state should display "Please select a filter" 

    // {changeFilter,filter}

    return (<>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Disponible" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Reservado" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Vendido" />
    </>)
}