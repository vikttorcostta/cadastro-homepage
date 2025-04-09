import userModel from '../models/userModel.js';

const registerUser = async (req, res) => {
  const { email, nome, endereco } = req.body;

  if (!email || !nome || !endereco) {
    return res.status(400).json({ error: 'Todos os campos (email, nome e endereço) são obrigatórios.' });
  }

  try {
    const newUser = await userModel.createUser({ email, nome, endereco });
    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
  }
};

const indexUser = async () => {
  try {
    const users = await userModel.indexUsers();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter usuários.');
  }
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, nome, endereco } = req.body;

  if (!email || !nome || !endereco) {
    return res.status(400).json({ error: 'Todos os campos (email, nome e endereço) são obrigatórios.' });
  }

  try {
    const updatedUser = await userModel.updateUser(id, { email, nome, endereco });
    return res.status(200).json({ message: 'Usuário atualizado com sucesso!', user: updatedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar usuário.' });
  }
}

const destroyUser = async (req, res) => {
  const { id } = req.params;

  try {
    await userModel.destroyUser(id);
    return res.status(200).json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao deletar usuário.' });
  }
}

export default { registerUser, indexUser, updateUser, destroyUser };

