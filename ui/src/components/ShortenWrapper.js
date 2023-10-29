import React, { useEffect, useState } from 'react'
import ShortenInput from './ShortenInput'
import ShortenForm from './ShortenForm'
import { v4 as uuidv4 } from 'uuid';
import { Container } from '@mui/material';
import ShortenPage from './ShortenPage';

const ShortenWrapper = () => {

    const [input, setInput] = useState([])

    useEffect(() => {
        const savedUrls = JSON.parse(localStorage.getItem('urls')) || [];
        setInput(savedUrls);
    }, []);

    const addUrl = (url) => {
        const newUrls = [
            ...input,
            { id: uuidv4(), longUrl: url.longUrl, shortUrl: url.shortUrl }];
        setInput(newUrls)
        localStorage.setItem('urls', JSON.stringify(newUrls))
    }

    const handleCopy = async (shortUrl) => {
        try {
            await navigator.clipboard.writeText(shortUrl)
            console.log("Copy success");
        } catch (error) {
            console.log("Failed to copy shortUrl:", error);
        }
    }

    const handleDelete = (id, url) => {
        const newUrls = input.filter(url => url.id !== id)
        setInput(newUrls)
        console.log(url);
        deleteUrl(url)
        localStorage.setItem('urls', JSON.stringify(newUrls))
    }


    return (
        <Container>
            <ShortenPage />
        </Container>
    )
}

export default ShortenWrapper