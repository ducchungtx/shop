import React, { useState } from 'react';

const continents = [
  { key: 1, value: 'Africa' },
  { key: 2, value: 'Europe' },
  { key: 3, value: 'Asia' },
  { key: 4, value: 'North America' },
  { key: 5, value: 'South America' },
  { key: 6, value: 'Australia' },
  { key: 7, value: 'Vietnam' }
];

function UploadProductPage() {
  const [titleValue, setTitleValue] = useState('');
  const [descritionValue, setDescriptionValue] = useState('');
  const [priceValue, setPriceValue] = useState(0);
  const [continentValue, setContinentValue] = useState(1);

  const onTitleChange = (e) => {
    setTitleValue(e.currentTarget.value);
  }

  const onDescriptionChange = e => {
    setDescriptionValue(e.currentTarget.value);
  }

  const onPriceChange = e => {
    setPriceValue(e.currentTarget.value);
  }

  const onContinentsSelectChange = (e) => {
    setContinentValue(e.currentTarget.value);
  }

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2>Upload Travel Product</h2>
      </div>
      <form>
        {/* Dropzone */}
        <br /><br />
        <label>Title</label>
        <input
          onChange={onTitleChange}
          value={titleValue}
        />
        <br /><br />
        <label>Description</label>
        <textarea
          onChange={onDescriptionChange}
          value={descritionValue}
        ></textarea>
        <br /><br />
        <label>Price($)</label>
        <input
          onChange={onPriceChange}
          value={priceValue}
          type="number"
        />
        <select onChange={onContinentsSelectChange}>
          {continents.map(item => {
            return <option value={item.value} key={item.key}>{item.value}</option>
          })}
        </select>
        <br /><br />
        <button
          onClick
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default UploadProductPage;
