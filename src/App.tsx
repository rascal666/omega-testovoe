import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import Cards from "./components/card/cards";
import Button from "./components/ux-ui/button";
import Modal from "./components/modal/modal";
import {isModal} from "./components/reducers/modalReducer";
import {useSelector, useDispatch} from "react-redux";



function App() {
    const dispatch = useDispatch()
    const modalHandler = useSelector((store:any) => store.modal.modalHandler)
    const modalParam = useSelector((store:any) => store.modal.param)

  return (
      <div className="app">
          <Cards/>
          <Button className='app__button' onClick={() => {isModal('card')(dispatch)} } children='создать товар'/>

          {modalHandler? <Modal params={modalParam}/>: null}
      </div>
  );
}
export default App;
