import imageCenter from "../../../assets/images/our-works/our-works-center.jpg";

const Services: React.FC = () => {
  const data = [
    {
      id: 1,
      imageSrc: imageCenter,
      title: "Service One",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nostrum voluptate, deleniti maiores consectetur asperiores qui iusto delectus reprehenderit tempora autem temporibus quaerat harum aut repellendus cupiditate. Ea, veniam molestias!",
    },
    {
      id: 2,
      imageSrc: imageCenter,
      title: "Service Two",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nostrum voluptate, deleniti maiores consectetur asperiores qui iusto delectus reprehenderit tempora autem temporibus quaerat harum aut repellendus cupiditate. Ea, veniam molestias!",
    },
    {
      id: 3,
      imageSrc: imageCenter,
      title: "Service Three",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nostrum voluptate, deleniti maiores consectetur asperiores qui iusto delectus reprehenderit tempora autem temporibus quaerat harum aut repellendus cupiditate. Ea, veniam molestias!",
    },
    {
      id: 4,
      imageSrc: imageCenter,
      title: "Service Four",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nostrum voluptate, deleniti maiores consectetur asperiores qui iusto delectus reprehenderit tempora autem temporibus quaerat harum aut repellendus cupiditate. Ea, veniam molestias!",
    },
    // Add more data objects as needed
  ];

  return (
    <>
      <div className="md:max-w-3xl xl:max-w-6xl py-4 px-6 lg:p-0 mx-auto mt-24 font-gilroyLight overflow-hidden">
        <div className="mb-8">
          <h6 className="uppercase text-orangeClient">EXPLORE OUR SERVICES</h6>
          <h1 className="text-3xl lg:text-4xl font-gilroyExtraBold">
            No Project Too Big or Too Small
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          <p
            data-aos="slide-right"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.{" "}
          </p>

          <p
            data-aos="slide-left"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.{" "}
          </p>
        </div>

        {data.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row text-white ${
              item.id % 2 === 0 ? "md:flex-row-reverse " : ""
            }`}
          >
            {/* Image Container */}
            <div
              className="md:w-1/2"
              data-aos="slide-left"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img className="h-full" src={item.imageSrc} alt="" />
            </div>
            {/* Description Container */}
            <div
              className="p-6 bg-greenClient flex flex-col justify-center md:w-1/2"
              data-aos="slide-right"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h1 className="text-2xl lg:text-4xl font-gilroyExtraBold mb-4">
                {item.title}
              </h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
