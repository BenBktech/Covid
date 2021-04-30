import React, { useState, useEffect } from 'react';

//Components
import FormulaireDepartement from './Components/FormulaireDepartement';
import Resultats from './Components/Resultats';
import ResultatsFrance from './Components/ResultatsFrance';

//Titles
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

//Styles
import './App.css';

function App() {

  //Datas J
  const [data, setData] = useState(null);
  //Datas J-7
  const [dataLastWeek, setDataLastWeek] = useState(null);
  //While loading the datas
  const [loadingJ, setLoadingJ] = useState(true);
  const [loadingJ7, setLoadingJ7] = useState(true);
  //Error loading the datas 
  const [errorLoading, setErrorLoading] = useState(false);
  //Departement selected by the user
  const [departement, setDepartement] = useState("");
  //Formatted results
  const [resultats, setResultats] = useState(false);

  useEffect(() => {
    async function fetchData() {
      //Datas J
      let url = "https://coronavirusapi-france.vercel.app/AllLiveData";
      try {
        const response = await fetch(url);
        const datas = await response.json();
        setData(datas);
        setLoadingJ(false);

        //Datas same day Last Week
        let lastWeekDate = getLastWeekDate();
        let url2 = "https://coronavirusapi-france.now.sh/AllDataByDate?date="+lastWeekDate;
        try {
          const response2 = await fetch(url2);
          const datas2 = await response2.json();
          setDataLastWeek(datas2);
          setLoadingJ7(false);
        }
        catch(error) {
          setErrorLoading(true);
        }
      }
      catch(error) {
        setErrorLoading(true);
      }
    }
    fetchData();    
  }, []);

  //Departement changed
  useEffect(() => {
    if(departement !== "") {
      setResultats(true);
    }
  }, [departement])

  const handleChangeDepartement = (e) => {
    setDepartement(e.target.value);
  }

  //Return J-7 date (yyyy-mm-dd format)
  const getLastWeekDate = () => {
    let lastWeekDate = new Date(Date.now() - 8 * 24 * 60 * 60 * 1000);
    var MyDateString;
    MyDateString = lastWeekDate.getFullYear() + '-' + ('0' + (lastWeekDate.getMonth()+1)).slice(-2) + '-' + ('0' + lastWeekDate.getDate()).slice(-2);
    return MyDateString;
  }

  return (
    <div className="App">
      {errorLoading ? ('Une erreur est survenue.')
      : loadingJ || loadingJ7
      ? <div className="loader__flex"><img src="loader.svg" alt="loader" /></div>
      : <div className="App__inner">
          <Typography variant="h4" component="h1" className="h1">Chiffres du Coronavirus en France</Typography>
          <Typography variant="h5" component="h2" className="h2">Chiffres en France</Typography>
          <ResultatsFrance data={data} dataLastWeek={dataLastWeek} />
          <Divider className="sep" />
          <Typography variant="h5" component="h2" className="h2">Chiffres par département</Typography>
          <FormulaireDepartement departement={departement} handleChangeDepartement={handleChangeDepartement} data={data} />
          <Resultats resultats={resultats} data={data} dataLastWeek={dataLastWeek} departement={departement} /> 
        </div>
      }
    </div>
  );
}

export default App;