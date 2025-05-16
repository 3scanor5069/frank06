import React from 'react';
import '../styles/MenuPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const menu = {
  Entradas: [
    {
      title: 'Pan de ajo',
      description: 'Pan tostado con ajo y hierbas.',
      price: '$5.000',
      image: 'https://i.blogs.es/8e3bfe/pan_ajo/840_560.jpg',
    },
    {
      title: 'Bruschetta',
      description: 'Pan a la parrilla con tomate y aceite de oliva.',
      price: '$6.500',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8pmWKF42wkEgJxF0k_6866pdxfeW0rkgC5w&s',
    },
  ],
  'Platos principales': [
    {
      title: 'Pollo a la parrilla',
      description: 'Servido con verduras de temporada y arroz.',
      price: '$14.900',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjdp0jv-8INmxAi-Ka5HmH4s-kWiayqxs9Q&s',
    },
    {
      title: 'Lasaña de carne',
      description: 'Lasaña clásica con salsa casera.',
      price: '$13.700',
      image: 'https://cdn.colombia.com/gastronomia/2015/06/09/lasana-de-carne-y-queso-2977.jpg',
    },
  ],
  Postres: [
    {
      title: 'Tiramisú',
      description: 'Postre italiano con sabor a café.',
      price: '$6.900',
      image: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/7f45d6f8807ebc775928651a3398dce9.png',
    },
    {
      title: 'Pastel de lava de chocolate',
      description: 'Pastel tibio con un centro de chocolate pegajoso.',
      price: '$7.500',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeRgFZYIE3muh0TnpK__shtb3pVNP_3Ya8w&s',
    },
  ],
  Bebidas: [
    {
      title: 'Limonada fresca',
      description: 'Hecho en casa con limones reales.',
      price: '$3.200',
      image: 'https://peopleenespanol.com/thmb/em83Twz8Upw0ktCiE09nKqnu-SY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8714519b-06f8-4298-b9b0-d4137486666e-489367376f8f49f28aaf0d7e67a8f90c.jpg',
    },
    {
      title: 'Coca-cola',
      description: 'Clásico o cero.',
      price: '$3.500',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSGLohIi2OJ3j_IELY1FTmrqkhkj1b8ePow&s',
    },
  ],
};

const MenuPage = () => {
  return (
    <div className="paginamenu-wrapper">
      <Header />
      <main className="paginamenu-page">
        <h1 className="paginamenu-title">Nuestro menú completo</h1>
        {Object.entries(menu).map(([category, items]) => (
          <div key={category} className="paginamenu-category">
            <h2 className="paginamenu-category-title">{category}</h2>
            <div className="paginamenu-items">
              {items.map((item, index) => (
                <div className="paginamenu-card" key={index}>
                  <div className="paginamenu-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="paginamenu-info">
                    <h3 className="paginamenu-item-title">{item.title}</h3>
                    <p className="paginamenu-description">{item.description}</p>
                    <span className="paginamenu-price">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
