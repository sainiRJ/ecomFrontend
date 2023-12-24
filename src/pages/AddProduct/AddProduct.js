import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
`;

const ProductForm = () => {


  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(URL.createObjectURL(selectedFile)); // Display the selected image
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Form data to be sent to the server
      const formData = new FormData();
      formData.append('image', file);
      formData.append('title', title);
      formData.append('price', price);

    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found. User is not authenticated.');
      return;
    }

      // Make an API call using Axios
      const response = await axios.post('http://localhost:5001/add-product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Product submitted successfully:', response.data);

      // Reset form fields after submission
      setImage(null);
      setTitle('');
      setPrice('');
      setFile(null);
    } catch (error) {
      console.error('Error submitting product:', error.message);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="image">Product Image:</Label>
        <Input
          type="file"
          id="image"
          accept="image/*"
          onChange={handlePhotoChange}
        />

        <Label htmlFor="title">Product Title:</Label>
        <Input
          type="text"
          id="title"
          placeholder="Enter product title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Label htmlFor="price">Product Price:</Label>
        <Input
          type="number"
          id="price"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Button type="submit">Upload Product</Button>
      </Form>
    </FormContainer>
  );
};

export default ProductForm;
