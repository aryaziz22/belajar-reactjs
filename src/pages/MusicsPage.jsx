import React from "react";
import { Container, Row } from "react-bootstrap"; 
import CarouselComponentMusic from "../components/CarouselComponentMusic";
import PopularComponentMusic from "../components/PopularComponentMusic";
import KonserMusicComponent from "../components/KonserMusicComponent"; 
import NewsMusicComponent from "../components/NewsMusicComponent";

const MusicsPage = () => {
  return (
    <div className="w-100 min-vh-100 homepage-musics">
      <div>
        <Container>
          <Row className="box-carousel-musics d-flex justify-content-center">
            <h1 className="mt-4">
              <b>Musik Populer di FindFun</b> 
            </h1>
            <CarouselComponentMusic className="rounded-4" />
          </Row>

          <Row className="box-konser-musics p-3 m-1 mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h1 className="text-black">Konser Mendatang</h1>
              <a href="/Konser" className="btn btn-lihat-semua btn-sm">
                Lihat Semua
              </a>
            </div>
            <KonserMusicComponent limit={4} />
          </Row>

          <Row className="box-populer-musics p-3 m-1 mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h1 className="text-black">Musik Populer</h1>
              <a href="/Populer" className="btn btn-lihat-semua btn-sm"> 
                Lihat Semua 
              </a>
            </div>
            <PopularComponentMusic limit={10} /> 
          </Row>

          <Row className="box-berita mt-5">
            <h1>
              <b>Berita hari ini</b>
            </h1>
            <NewsMusicComponent />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MusicsPage;