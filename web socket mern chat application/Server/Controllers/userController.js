const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const createToken = (_id)=>{
    const jwtkey = process.env.JWT_SECRET_KEY
    return jwt.sign({_id},jwtkey, {expiresIn:"3d"})
}
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if a user with the same email already exists
        let user = await userModel.findOne({ email });

        if (user) {
            return res.status(400).json("User With Given Email Already Exists");
        }

        // Validate input fields
        if (!name || !email || !password) {
            return res.status(400).json("All Fields Are Required");
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json("Enter a Valid Email");
        }

        if (!validator.isStrongPassword(password)) {
            return res.status(400).json("Enter a Valid Password");
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        user = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await user.save();
        const token = createToken(user.id)

        res.status(201).json({_id :user.id,name,email,token});
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await userModel.findOne({ email });

        // Check if the user exists
        if (!user) {
            return res.status(401).json("Invalid Email or Password");
        }

        // Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json("Invalid Email or Password");
        }

        // Generate a JWT token for the authenticated user
        const token = createToken(user.id)

        res.status(201).json({_id :user.id,name: user.name,email,token});
        // Return the token or any other relevant user data as needed
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
};

const findUser = async(req, res)=>{
    const userId = req.params.userId;
    try {
        // Find the user by their ID
        const user = await userModel.findById(userId);

        // Check if the user exists
        if (!user) {
            return res.status(404).json("User not found");
        }

        // Return the user data in the response
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
}

const getUsers = async (req, res) => {
    try {
        // Find all users
        const users = await userModel.find();

        // Check if users were found
        if (users.length === 0) {
            return res.status(404).json("No users found");
        }

        // Return the user data in the response
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
};



module.exports = {
    registerUser,
    loginUser,
    findUser,
    getUsers
};
