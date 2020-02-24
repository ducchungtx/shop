import React, { useState } from 'react';
import { Typography, Button, Form, message, Input, Icon } from 'antd';

import FileUpload from '../../utils/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;

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
  const [images, setImages] = useState([]);

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

  const updateImages = newImages => {
    console.log('newImages', newImages);
    setImages(newImages);
  }

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>Upload Travel Product</Title>
      </div>
      <Form>
        {/* Dropzone */}
        <FileUpload refreshFunction={updateImages} />
        <br /><br />
        <label>Title</label>
        <Input
          onChange={onTitleChange}
          value={titleValue}
        />
        <br /><br />
        <label>Description</label>
        <TextArea
          onChange={onDescriptionChange}
          value={descritionValue}
        ></TextArea>
        <br /><br />
        <label>Price($)</label>
        <Input
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
        <Button
          onClick
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default UploadProductPage;
