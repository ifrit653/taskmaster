import React from 'react';

const cardData = [
  {
    image: './logo.svg',
    name: 'FANOMEZANTSOA Assad ali',
    post: 'DEV',
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    facebook: 'https://facebook.com/johndoe'
  },
  {
    image: './logo.svg',
    name: 'Figo',
    post: 'DEV',
    twitter: 'https://twitter.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
    facebook: 'https://facebook.com/janesmith'
  },
  {
    image: './logo.svg',
    name: 'Mirindra',
    post: 'DEV',
    twitter: 'https://twitter.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
    facebook: 'https://facebook.com/janesmith'
  },
  {
    image: './logo.svg',
    name: 'Mirindra',
    post: 'DEV',
    twitter: 'https://twitter.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
    facebook: 'https://facebook.com/janesmith'
  },
  {
    image: './logo.svg',
    name: 'Mirindra',
    post: 'DEV',
    twitter: 'https://twitter.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
    facebook: 'https://facebook.com/janesmith'
  },
  // Ajoutez plus de cartes ici
];

function Card({ image, name, post, twitter, linkedin, facebook }) {
  return (
    <div className="card" style={{ width: '50%', padding: '16px', alignItems: 'center', textAlign: 'center', border: '1px solid #ddd', borderRadius: '15px' }}>
      <img src={image} alt={name} style={{ width: '80px', borderRadius: '50%' }} />
      <h1>{name}</h1>
      <p className="title">{post}</p>
      <div style={{ margin: '24px 0' }}>
        <a href={twitter} target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px' }}>
          <i className="fa fa-twitter"></i>
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px' }}>
          <i className="fa fa-linkedin"></i>
        </a>
        <a href={facebook} target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px' }}>
          <i className="fa fa-facebook"></i>
        </a>
      </div>
    </div>
  );
}

export default function CardList() {
  return (
    <div className="card-list" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          name={card.name}
          post={card.post}
          twitter={card.twitter}
          linkedin={card.linkedin}
          facebook={card.facebook}
        />
      ))}
    </div>
  );
}
