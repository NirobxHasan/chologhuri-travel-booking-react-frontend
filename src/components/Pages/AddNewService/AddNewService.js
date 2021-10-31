import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddeNewService.css';
const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axios
            .post('https://spooky-beast-33270.herokuapp.com/services', data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert('Package Successfully added');
                    reset();
                }
            });
    };
    return (
        <Container className="add-service-section mt-3">
            <form className={''} onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    placeholder="Service Title"
                    {...register('title', {
                        required: true,
                        maxLength: 100
                    })}
                />
                <input
                    className="input-field"
                    type="number"
                    placeholder="Price"
                    {...register('price', { required: true })}
                />

                <input
                    className="input-field"
                    placeholder="location"
                    {...register('location', { maxLength: 50, required: true })}
                />
                <input
                    className="input-field"
                    placeholder="days"
                    {...register('days', { maxLength: 50, required: true })}
                />
                <input
                    className="input-field"
                    placeholder="Number of Person"
                    type="number"
                    {...register('num_of_person', { required: true })}
                />
                <textarea
                    className="input-field"
                    placeholder="Description"
                    {...register('description', { required: true })}
                />
                <input
                    className="input-field"
                    placeholder="img url"
                    {...register('img', { required: true })}
                />
                <input
                    className="add-service-btn"
                    type="submit"
                    value="Add Service"
                />
            </form>
        </Container>
    );
};

export default AddNewService;
