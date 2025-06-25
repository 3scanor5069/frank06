const pool = require('../config/db');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address, password } = req.body;

    const nombreCompleto = `${firstName} ${lastName}`;
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🧠 1. Verificar si ya existe el correo
    const [existing] = await pool.query('SELECT * FROM cliente WHERE correo = ?', [email]);
    if (existing.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Ya existe un cliente con ese correo.'
      });
    }

    // ✅ 2. Insertar el nuevo cliente con clave incluida
    const [result] = await pool.query(
      'INSERT INTO cliente (nombre, correo, telefono, direccion, clave, fecha_registro, activo) VALUES (?, ?, ?, ?, ?, NOW(), 1)',
      [nombreCompleto, email, phone, address, hashedPassword]
    );

    // ✅ 3. Responder con éxito
    res.status(200).json({
      success: true,
      message: 'Cliente registrado exitosamente',
      data: {
        idCliente: result.insertId,
        nombre: nombreCompleto,
        correo: email
      }
    });
  } catch (error) {
    console.error('Error al registrar cliente:', error);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM cliente WHERE correo = ?', [email]);

    if (rows.length === 0) {
      return res.status(400).json({ message: 'Correo no registrado' });
    }

    const user = rows[0];

    // Compara la clave encriptada con la ingresada
    const isMatch = await bcrypt.compare(password, user.clave);
    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Login exitoso
    res.status(200).json({
      token: 'fake-jwt-token',
      user: {
        idCliente: user.idCliente,
        nombre: user.nombre,
        correo: user.correo
      }
    });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};