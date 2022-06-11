import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';
function App() {
const [punkListData, setPunkListData] = useState([]);
const [selectedPunk, setSelectedPunk] = useState(0);

useEffect(() => {
  const getMyNfts = async () => {
    const openseaData = await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_addresses=0xE48432fd8821b3a1Fe88Eb45D7ec1efA2acDd440&order_direction=asc'
      )
     
      setPunkListData(openseaData.data.assets);
  }
  
  return getMyNfts();
  
},[])
  return (
    <div className="app">
      <Header/>
      {
        punkListData.length > 0 && (
          <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )
      }
     
    </div>
  );
}

export default App;