import { Container, Row, Col, Carousel } from "react-bootstrap";
import {carouselItems,
  musickHits,
} from "../data/index";
import PopularComponentFilm from "../components/PopularComponentFilm";
import UlasanPopulerComponent from "../components/UlasanPopulerComponent"; 

const CarouselComponent = ({ carouselItems }) => {
  return (
    <Col lg={12}>
      <Carousel indicators={true} controls={false}>
        {carouselItems.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <img src={item.image} alt="Carousel" height={433} />
              <Carousel.Caption className="d-flex flex-column align-items-start gap-1 justify-content-center">
                <img
                  src={item.title}
                  alt="Carousel Title"
                  className="img-fluid"
                />
                <p className="text-white">{item.description}</p>
                <a href={item.path} className="btn-seemore">
                  Lihat
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Col>
  );
};

const HomePageAfter = () => {
  return (
    <div>
      <header className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <div className="d-flex flex-column align-items-center">
            <h1 className="montserrat-font fw-bold">
              Selamat datang di FindFun!
            </h1>
            <p>
              Tempat dimana para cinephile dan audiophile saling bertemu secara
              online
            </p>
            <a href="#homepage" className="btn-explore mt-3">
              Mulai Berksplorasi
            </a>
          </div>
        </Container>
      </header>
      <div className="homepage w-100 min-vh-100" id="homepage">
        <div>
          <Container>
            <Row className="header-box d-flex align-items-center">
              <h1 className="text-start">
                <b>Populer di FindFun</b>
              </h1>
              <CarouselComponent
                carouselItems={carouselItems}
                className="rounded-4"
              />
            </Row>
            <Row className="box-hits">
              <Col lg={12}>
                <h1 className="judul-hits">
                  <b>Musik Hits hari ini</b>
                </h1>
              </Col>

              {musickHits.map((hits) => {
                return (
                  <Col key={hits.id} className="card-hits-wrapper">
                    <div className="card-hits p-3 rounded-4 position-relative">
                      <img src={hits.image} alt="" className="img-fluid" />
                      <a href={hits.path} className="link-icon">
                        <i className={hits.icon}></i>
                      </a>
                      <h2>{hits.title}</h2>
                      <p>{hits.desc}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row className="p-3 box-hits">
              <Col lg={12}>
                <h1 className="judul-hits">
                  <b>Film Terkini</b>
                </h1>
              </Col>
              <PopularComponentFilm />
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row className="box-hots-news p-3">
              <Col lg={12} className="mb-3">
                <h1>
                  <b>Ulasan Populer</b>
                </h1>
              </Col>
              <UlasanPopulerComponent />
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HomePageAfter;