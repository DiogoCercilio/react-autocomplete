import React, { useState, useEffect } from 'react';
import './App.css';
import AutoComplete from './component/AutoComplete';
import ResultItem from './component/ResultItem';
import { ApiResultItem } from './models/ApiResult';
import { UserService } from './service/UserService';

function App() {
  const [data, setData] = useState<ApiResultItem[]>([])
  const [choosedItem, setChoosedItem] = useState<ApiResultItem>()

  useEffect(() => {
    UserService.getAll().then(res => setData(res))
  }, [])

  const onChooseItemHandler = (item: ApiResultItem) => {
    setChoosedItem(item)
  }

  return (
    <section className="app-section">
      <AutoComplete
        data={data}
        onChooseItem={onChooseItemHandler}
        onClickHandler={()=> setChoosedItem(undefined)}
      />
      <ResultItem item={choosedItem} />
    </section>
  );
}

export default App;
