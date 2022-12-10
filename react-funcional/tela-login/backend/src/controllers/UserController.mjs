import { response } from 'express';
import { v4 as uuid } from 'uuid';
import crypto from 'crypto';

import User from '../models/Users.mjs';

export default {
  async index(request, response) {
    try {
      const users = await User.find();
      return response.status(200).json({ users });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  async create(request, response) {
    const { username, lastname, email, password } = request.body;

    if (!username || !lastname || !email || !password) {
      return response.status(400).json({ error: 'Missing data' });
    }

    const passwordEncrypted = crypto.createHash('sha256').update(password).digest('hex');

    const user = new User({
      _id: uuid(),
      username,
      lastname,
      email,
      password: passwordEncrypted,
    });

    try {
      await user.save();
      return response.status(201).json({ message: 'User created' });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
