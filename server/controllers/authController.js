// Controller function for registering a user
exports.register = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }
     console.log(req.body)

    // Normally, you'd save to the database here
    res.status(201).json({
        message: "User registered successfully",
        user: { username },
        
    });
};
