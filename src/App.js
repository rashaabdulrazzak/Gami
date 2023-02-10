import "./App.css";

import Services from "./components/Services";

import Question from "./components/Question";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import PhotoCard from "./components/PhotoCard";
import Opener from "./components/Opener";
import Menu from "./components/Menu";

function App() {
  const questions = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. ",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. ",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. ",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. ",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. ",
    },
  ];
  return (
    <>
      <Menu />
      <Opener />
      <PhotoCard />
      <Services />
      <Testimonial />
      <div className="section text-center w-full h-full">
        <h1 className="text-7xl font-semibold text-gray-800">Lorem Ipsum</h1>
        <div className="text-xl font-normal text-gray-400 pt-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
            <br />
            sapien, malesuada sollicitudin mi vel, tristique eleifend metus.
          </p>
        </div>
        <main className="flex justify-center items-center">
          <div className="container w-[90vw] grid gap-[1rem_2rem] mx-auto my-20 px-8 py-10">
            <section className="info">
              {questions.map((question) => (
                <Question key={question.id} {...question} />
              ))}
            </section>
          </div>
        </main>
      </div>
      <ContactUs />

      <Footer />
    </>
  );
}

export default App;
