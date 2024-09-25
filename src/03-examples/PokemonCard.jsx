import React from "react";

export default function Pokemoncard({ id, name, sprites = [] }) {
  return (
    <section style={{ height: 200 }}>
      <h2 className="textcapitalize">
        #{id} - {name}
      </h2>

      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>
    </section>
  );
}
