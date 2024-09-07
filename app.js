const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.render('index', { title: 'Hrvy Apartments'});
});

app.get('/apartments', (req, res) => {
    const apartments = [
        {name: 'Room 101', description: 'A cozy one-bedroom apartment with a beatiful view.'},
        {name: 'Room 102', description: 'A spacious two-bedroom apartment perfect for families.'},
        {name: 'Room 103', description: 'A modern studio apartment with all amenities included.'},
        {name: 'Room 104', description: 'A stylish one-bedroom apartment with a balcony.'},
        {name: 'Room 105', description: 'A comfortable two-bedroom apartment with a garden view.'},
        {name: 'Room 106', description: 'A luxurious three-bedroom apartment with a rooftop terrace.'}
    ];
    res.render('apartments', {apartments});
})

app.get('/contact', (req, res) => {
    res.render('contact', {facebook: 'Harvey apartments', phone: '123-456-7890', email: 'harveyapartments@gmail.com'});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
