import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Clients = () => {
  let libraries = [
    { name: 'Scroll Magic', icon: "assets/libraries-icon/scroll-magic.webp" },
    { name: 'GSAP', icon: "assets/libraries-icon/gsap.webp" },
    { name: 'React Motion', icon: "assets/libraries-icon/react-motion.webp" },
    { name: 'React Router', icon: "assets/libraries-icon/react-router.webp" },
    { name: 'React Redux', icon: "assets/libraries-icon/redux.webp" },
    { name: 'React Form', icon: "assets/libraries-icon/react-hook-form.webp" },
    { name: 'React Query', icon: "assets/libraries-icon/react-query.webp" },
    { name: 'ZOD', icon: "assets/libraries-icon/zod.webp" },
    { name: 'Zustand', icon: "assets/libraries-icon/zustand.webp" },
    { name: 'Socket io', icon: "assets/libraries-icon/socket-io.webp" },
    { name: 'ANT Design', icon: "assets/libraries-icon/ant-design.webp" },
    { name: 'Ag Grid', icon: "assets/libraries-icon/ag-grid.webp" },
  ];

  // Group libraries into pairs
  const groupedLibraries = [];
  for (let i = 0; i < libraries.length; i += 2) {
    groupedLibraries.push(libraries.slice(i, i + 2));
  }
  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>Libraries Used</h3>
        <Swiper
          {...salimovSlider.clients}
          className="swiper swiper-clients fadeInUp wow"
        >
          {groupedLibraries.map((pair, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              {pair.map((lib, index) => (
                <div key={index} className="text-4xl mb-2 gap-3 justify-content-evenly px-4">
                  <img src={lib.icon} width={50} />
                  <p className="text-base font-medium mb-0">{lib.name}</p>
                </div>
              ))}           
            </SwiperSlide>
          ))}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Clients;


