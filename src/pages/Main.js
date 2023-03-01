import { useContext, useMemo, useState } from 'react'
import styles from './Main.module.css';
import useDeriv from '../hooks/useDeriv';
import { DataContext } from '../context/DataContext.js';
import DataTableComp from '../components/DataTableComp';

function Main() {
  useDeriv(35596);
  const msg = useContext(DataContext);

  const [selectedSubHeader, setSelectedSubHeader] = useState(''); 
  const [selectedSubCategories, setSelectedSubCategories] = useState([]); 

  const filterCategories = (data) => {
    let arr = Array.from(new Set(data.map(item => item.market_display_name)));
    return arr;
  }

  const filterSubCategories = (data) => {
    let arr = Array.from(new Set(data.map(item => item.submarket_display_name)));
    return arr;
  }

  const data = msg && msg.res ? msg.res : [];
  const categories = useMemo(() => filterCategories(msg.res), [msg]);
  const subCategories = useMemo(() => filterSubCategories(msg.res), [msg]);

  const clickHandler = (e) => {
    e.target.parentElement.childNodes.forEach(item => {
      item.classList.remove('activeButton');
    });
    e.target.classList.add('activeButton');
    setSelectedSubHeader(e.target.innerText);
  }

  const subClickHandler = (e) => {
    if(e.target.classList.contains('badge-secondary')) {
      e.target.classList.remove('badge-secondary');
      e.target.classList.add('badge-success');
      setSelectedSubCategories([...selectedSubCategories, e.target.innerText]);
    } else {
      e.target.classList.remove('badge-success');
      e.target.classList.add('badge-secondary');
      setSelectedSubCategories(selectedSubCategories.filter(item => item !== e.target.innerText));
    }
  }

  const listItems = categories.map((item, index) =>
    <button type="button" onClick={clickHandler} className="btn btn-light mr-5 pr-5 pl-5" key={index}>{item}</button>
  );

  const subListItems = subCategories.map((item, index) =>
    <button type="button" onClick={subClickHandler} className="badge badge-secondary m-2 p-2" key={index}>{item}</button>
  );

  return (
    <>
      <div className={styles.contained}>
        {data && data.length === 0 ? (<div className='ml-5 pl-5'> Loading... </div>) :
          (
            <>
              <div className='row'>
                <div className='col-md-6'>
                  <h6>* Only single Category to be selected at a time</h6>
                  <h6>** Multiple subcategories could work simultaneously</h6>
                </div>
              </div>
              
              <div className='row ml-1 mt-4'>{listItems}</div>
              <hr/>
              <div className='row m-1'>{subListItems}</div>
              <DataTableComp data={data} selectedSubHeader={selectedSubHeader} selectedSubCategories={selectedSubCategories}></DataTableComp>
              <hr/>
              <div className='row'>
              <div className='col-md-6'>
                  <h6 className='m-2 gag'>PS : The more money you loose, the more experience you gain. (Kidding &#128518;)</h6>
                </div>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}

export default Main