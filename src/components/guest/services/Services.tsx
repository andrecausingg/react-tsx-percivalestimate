import image1 from "../../../assets/images/services/services-1.jpg";
import image2 from "../../../assets/images/services/services-2.jpg";
import image3 from "../../../assets/images/services/services-3.jpg";
import image4 from "../../../assets/images/services/services-4.jpg";

const Services: React.FC = () => {
  const data = [
    {
      id: 1,
      imageSrc: image1,
      title: "PRE-CONTRACT QUANTITY SURVEYING",
      description: (
        <>
          We can prepare your Cost Plan (SD to CD), prepare or propose Contract
          Packages, prepare bid documents and administer your construction
          contract.
          <br />
          <br />
          We also evaluate bids and lead the bidding process for you.
        </>
      ),
    },
    {
      id: 2,
      imageSrc: image2,
      title: "CONSTRUCTION TAKE-OFF",
      description: (
        <>
          We offer take-off services of all trades to cater the needs of some
          international and domestic developers and contractors who need to
          outsource their take-off requirements. <br /> <br /> We do our
          take-off based from our own set of parameters, one of those being the
          Minimum Order Quantity (MOQ) <br /> <br />{" "}
          <span className=" font-gilroyExtraBold">
            Different Suppliers = Different MOQ
          </span>
        </>
      ),
    },
    {
      id: 3,
      imageSrc: image3,
      title: "VALUE ENGINEERING",
      description: (
        <>
          With over 150 material suppliers and subcontractors' contacts, we
          offer our <span className="italic">Identify. Replace. Qualify</span>{" "}
          Technique to help you maximize your construction savings by providing
          replacement of your cost drivers without compromising your
          construction dreams and goals.
        </>
      ),
    },
    {
      id: 4,
      imageSrc: image4,
      title: "POST-CONTRACT QUANTITY SURVEYING",
      description: (
        <>
          We train our Quantity Surveyors to be attentive-to-detail and to be
          not intimidated with contractors. Through the top management's actual
          site experience of vertical projects and knowledge of how construction
          works and variations actually work, we can help you save a lot more
          during your construction stage period.
          <br /> <br />
          We can negotiate your material needs. <br /> We can evaluate your{" "}
          <br />
          contractor's and/or supplier's billings. <br /> We can evaluate your
          contractor's and/or supplier's variation for you.
        </>
      ),
    },
    // Add more data objects as needed
  ];

  return (
    <div className="md:max-w-3xl xl:max-w-6xl py-4 px-6 lg:p-0 mx-auto mt-24 font-gilroyLight overflow-hidden">
      <div>
        <h6 className="uppercase text-orangeClient">EXPLORE OUR SERVICES</h6>
        <br />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-16">
        <div
          data-aos="slide-right"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1 className="text-3xl lg:text-4xl font-gilroyExtraBold text-greenClient">
            master of measurement, protector of construction investment
          </h1>{" "}
          <br />
          <p>
            Quantity surveyors may serve both as estimators and contract
            administrators. We help you, the project proponent, to get the best
            deal, financially and legally, in crafting your vision then turning
            it into reality.
            <br />
            <br />
            <span>
              <span className="text-greenClient">percival</span>
              <span className="font-gilroyExtraBold text-greenClient">
                estimate
              </span>
            </span>{" "}
            knows what and where to look for when it comes to construction cost,
            from cost drivers up to key performance indicators (KPI). It knows
            when to identify, what can be replaced, and how it can be qualified.
            <br />
            <br />
            In <span className="text-greenClient">percival</span>
            <span className="font-gilroyExtraBold text-greenClient">
              estimate
            </span>
            , we value the beauty of architecture and we are inclined to align
            that beauty with your budget.
          </p>
        </div>

        <div
          data-aos="slide-left"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1 className="text-3xl lg:text-4xl font-gilroyExtraBold text-greenClient">
            what makes <br /> percivalestimator?
          </h1>{" "}
          <br /> <br />
          <p>
            <span className="text-orangeClient">
              <span className="text-greenClient">percival</span>
              <span className="font-gilroyExtraBold">estimate</span>
            </span>{" "}
            embodies its{" "}
            <span className="text-orangeClient font-gilroyExtraBold">
              S.A.V.E
            </span>{" "}
            Core Values.
            <br />
            <br />
            It cannot be bought. <br /> <br /> It is dedicated and committed to
            the cause of helping you save more.
            <br />
            <br />
            It knows the value of a single centavo as it knows how hard it is to
            earn.
            <br />
            <br />
            It is effective as it is trained to be one of the best quantity
            surveyors in the country.
          </p>
        </div>
      </div>

      {data.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col md:flex-row text-white ${
            item.id % 2 === 0 ? "md:flex-row-reverse" : ""
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
            <img className="h-full w-full" src={item.imageSrc} alt="" />
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
  );
};

export default Services;
