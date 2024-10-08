import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Types from "./Types";
import App from "./App";
import NewUser from "./NewUser";
import UserLogin from "./UserLogin";
import AssetTable from "./components/AssetTable";
import EditAsset from "./EditAsset";
function Home() {


  return (
    <div >
        <Navbar />
        <Routes>
            <Route path='/register-user' element={<NewUser/>} />
            <Route path='/user-login' element={<UserLogin/>} />
            <Route path='/create-assets' element={<App/>} />
            <Route path='/create-types' element={<Types/>} />
            <Route path='/' element={<AssetTable/>} />
            <Route path='/assets' element={<AssetTable/>} />
            <Route path='/logout'element={<UserLogin/>}/>
            <Route path='/register-user' element={<NewUser/>} />
            <Route path='/edit-asset/:assetId' element={<EditAsset />} />
        </Routes>

    </div>
  );
}

export default Home;
