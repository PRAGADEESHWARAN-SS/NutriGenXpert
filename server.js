const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';

// Middleware
app.use(cors({ origin: 'http://localhost:57743' }));  // Adjust the origin if needed
app.use(bodyParser.json());

// Serve static files
app.use(express.static('K:/Work/sakthi/SIH'));  // Path to the folder containing HTML, CSS, JS files

// In-memory storage for users
const users = [
    {
        email: '123@123',
        password: bcrypt.hashSync('123', 10)  // Pre-hashed password
    },
    {
        email: 'user2@example.com',
        password: bcrypt.hashSync('mypassword', 10)   // Pre-hashed password
    },
    {
        email: 'user3@example.com',
        password: bcrypt.hashSync('letmein', 10)      // Pre-hashed password
    }
];

// Helper functions
const generateToken = (user) => jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

// Signup route
app.post('/api/auth/signup', async (req, res) => {
    const { email, password } = req.body;

    // Check if user already exists
    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password and save the user
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
});

app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    console.log("Received login data:", req.body);  // Log the data to check

    // Find the user
    const user = users.find(user => user.email === email);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate a token and send it to the client
    const token = generateToken(user);

    // Send a success message with the token and redirect location
    res.json({ message: 'Login successful', token, redirectTo: '/main_new.html' });
});

// Protected route example (for future use)
app.get('/api/protected', (req, res) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        res.json({ message: 'Access granted', user: verified });
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
