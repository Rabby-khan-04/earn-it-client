import "./Spinner.css";

const Spinner = () => {
  return (
    <section className="h-screen bg-base-100 flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-50">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Spinner;
