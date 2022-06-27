import React from "react";
import "./index.css";
import MovieCard from "./components/MovieCard";
import { useState, useEffect } from "react";

function SearchMovie() {
  const [typing, setTyping] = useState("");
  function typingstart(e) {
    setTyping(e.target.value);
  }

  return (
    <div>
      <div className="searchBar">
        <div className="mainSearchBar">
          <h2>Film Ara</h2>
          <input
            onChange={typingstart}
            type="text"
            placeholder="Search..."
          ></input>
          <br></br>
          {typing}
        </div>
      </div>
      <div className="mainMovie">
        <div className="mainBoxs">
          <MovieCard
            image="https://iasbh.tmgrup.com.tr/4529f5/752/395/7/0/1280/668?u=https://isbh.tmgrup.com.tr/sbh/2021/06/12/harry-potter-ve-felsefe-tasi-filmi-konusu-ve-oyunculari-harry-potter-ve-felsefe-tasi-filmi-konusu-nedir-oyunculari-kimler-1623506373237.jpg"
            name="Harry Potter Felsefe Taşı"
            date="4 Kasım 2001"
            point="4.4 / 5"
          ></MovieCard>
           <MovieCard
            image="https://www.log.com.tr/wp-content/uploads/2019/08/netflix-yuzuklerin-efendisi.jpg"
            name="Yüzüklerin Efendisi"
            date="4 Kasım 2001"
            point="4.4 / 5"
          ></MovieCard>
           <MovieCard
            image="https://fisoloji.com/wp-content/uploads/2020/02/a-quiet-place-part-2.jpg"
            name="Sessiz Bir Yer"
            date="4 Kasım 2001"
            point="4.4 / 5"
          ></MovieCard>
           <MovieCard
            image="https://i4.hurimg.com/i/hurriyet/75/750x422/58d19b1a2269a23d8cda6ec0.jpg"
            name="Güzel ve Çirkin"
            date="4 Kasım 2001"
            point="4.4 / 5"
          ></MovieCard>
            <MovieCard
            image="https://image.tmdb.org/t/p/original/tQDp8j2sxcvDGEKBPW2VZeTqAo9.jpg"
            name="Karmakarışık"
            date="4 Kasım 2001"
            point="4.4 / 5"
          ></MovieCard>
           <MovieCard
            image="https://i01.sozcucdn.com/wp-content/uploads/2020/05/11/iecrop/yarin1_16_9_1589204704.jpg"
            name="Yarının Sınırında"
            date="4 Kasım 2001"
            point="4.4 / 5"
          ></MovieCard>
           <MovieCard
            image="https://www.profesorungunlugu.com/wp-content/uploads/2021/09/Gercek-Kahraman-Film-incelemesi-Free-Guy.jpg"
            name="Gerçek Kahraman"
            date="4 Kasım 2001"
            point="4.4 / 5"
          ></MovieCard>
             <MovieCard
            image="https://i4.hurimg.com/i/hurriyet/75/750x422/5b5884c20490c813b8b41a9e.jpg"
            name="Karayip Korsanları"
            date="4 Kasım 2001"
            point="4.4 / 5"
          ></MovieCard>
            <MovieCard
            image="https://i4.hurimg.com/i/hurriyet/75/750x422/5b5884c20490c813b8b41a9e.jpg"
            name="Karayip Korsanları"
            date="4 Kasım 2001"
            point="4.4 / 5"
          ></MovieCard>
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;
